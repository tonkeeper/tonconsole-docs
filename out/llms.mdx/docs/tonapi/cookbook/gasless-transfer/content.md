# Gasless Transfer (/tonapi/cookbook/gasless-transfer)

Originating from the [Gasless](/tonapi/rest-api/gasless) section of the REST API documentation, this recipe provides implementation examples for gasless transactions in TypeScript, Go and Python. Developers can use these examples to integrate gasless transactions into their applications.

<Callout type="warning">
  Gasless transactions are currently not supported through TonConnect.
</Callout>

Swagger documentation for Gasless operations can be found <a target="_blank" rel="noopener noreferrer" href={getLinkToSwaggerTag(SWAGGER_TAGS.GASLESS)}>here</a>.

<Tabs items={["TypeScript", "JS (with fetch)", "Go", "Python"]}>

  <Tab>
    
```typescript
import { WalletContractV5R1 } from '@ton/ton';
import {
    Address,
    beginCell,
    internal,
    toNano,
    SendMode,
    external,
    storeMessage,
    storeMessageRelaxed
} from '@ton/core';
import { mnemonicToPrivateKey } from '@ton/crypto';

import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

// if you need to send lots of requests in parallel,
// make sure you use a tonapi token.
const ta = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    // apiKey: 'YOUR_API_KEY',
});

const provider = new ContractAdapter(ta);

const OP_CODES = {
    TK_RELAYER_FEE: 0x878da6e3,
    JETTON_TRANSFER: 0xf8a7ea5
};

// Amount for jetton transfer. Usually 0.05 GRAM is enough for most jetton transfers without forwardBody
const BASE_JETTON_SEND_AMOUNT = toNano(0.05);

const main = async () => {
    
    // this is a simple example of how to send a gasless transfer.
    // you only need to specify your seed and a destination address.

    // the seed is not sent to the network, it is used to sign messages locally.

    const seed = '..!!! REPLACE THIS WITH YOUR SEED !!! ..'; // wallet seed `word1 word2 word3 ... word24`
    const destination = Address.parse('..!!! REPLACE THIS WITH A CORRECT DESTINATION !!!..'); // replace with a correct recipient address
    const usdtMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master.

    const jettonAmount = 1_000_000n; // amount in the smallest jetton units. This is 1 USDt.

    const keyPair = await mnemonicToPrivateKey(seed.split(' '));
    const workchain = 0;
    const wallet = WalletContractV5R1.create({
        workchain,
        publicKey: keyPair.publicKey
    });
    const contract = provider.open(wallet);

    console.log('Wallet address:', wallet.address.toString());

    const jettonWalletAddressResult = await ta.blockchain.execGetMethodForBlockchainAccount(
        usdtMaster,
        'get_wallet_address',
        {
            args: [wallet.address.toRawString()]
        }
    );
    const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jettonWalletAddress);

    // we use USDt in this example,
    // so we just print all supported gas jettons and get the relay address.
    // we have to send excess to the relay address in order to make a transfer cheaper.
    const relayerAddress = await printConfigAndReturnRelayAddress();

    // Create payload for jetton transfer
    const tetherTransferPayload = beginCell()
        .storeUint(OP_CODES.JETTON_TRANSFER, 32)
        .storeUint(0, 64)
        .storeCoins(jettonAmount) // 1 USDT
        .storeAddress(destination) // address for receiver
        .storeAddress(relayerAddress) // address for excesses
        .storeBit(false) // null custom_payload
        .storeCoins(1n) // count of forward transfers in nanoGRAM
        .storeMaybeRef(undefined)
        .endCell();

    const messageToEstimate = beginCell()
        .storeWritable(
            storeMessageRelaxed(
                internal({
                    to: jettonWallet,
                    bounce: true,
                    value: BASE_JETTON_SEND_AMOUNT,
                    body: tetherTransferPayload
                })
            )
        )
        .endCell();

    // we send a single message containing a transfer from our wallet to a desired destination.
    // as a result of estimation, TonAPI returns a list of messages that we need to sign.
    // the first message is a fee transfer to the relay address, the second message is our original transfer.
    const params = await ta.gasless.gaslessEstimate(usdtMaster, {
        walletAddress: wallet.address,
        walletPublicKey: keyPair.publicKey.toString('hex'),
        messages: [{ boc: messageToEstimate }]
    }); //.catch(error => console.error(error));

    console.log('Estimated transfer:', params);

    const seqno = await contract.getSeqno();

    // params is the same structure as params in tonconnect
    const tetherTransferForSend = wallet.createTransfer({
        seqno,
        authType: 'internal',
        timeout: Math.ceil(Date.now() / 1000) + 5 * 60,
        secretKey: keyPair.secretKey,
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
        messages: params.messages.map(message =>
            internal({
                to: message.address,
                value: BigInt(message.amount),
                body: message.payload
            })
        )
    });

    const extMessage = beginCell()
        .storeWritable(
            storeMessage(
                external({
                    to: contract.address,
                    init: seqno === 0 ? contract.init : undefined,
                    body: tetherTransferForSend
                })
            )
        )
        .endCell();

    // Send a gasless transfer
    ta.gasless
        .gaslessSend({
            walletPublicKey: keyPair.publicKey.toString('hex'),
            boc: extMessage
        })
        .then(() => console.log('A gasless transfer sent!'))
        .catch(error => console.error(error.message));
};

async function printConfigAndReturnRelayAddress(): Promise<Address> {
    const cfg = await ta.gasless.gaslessConfig();

    console.log('Available jettons for gasless transfer');
    console.log(cfg.gasJettons.map(gasJetton => gasJetton.masterId));

    console.log(`Relay address to send fees to: ${cfg.relayAddress}`);
    return cfg.relayAddress;
}

main().catch(console.error);

```

  </Tab>

  <Tab>
    
```javascript
import { storeMessageRelaxed, WalletContractV5R1, TonClient } from '@ton/ton';
import { Address, beginCell, internal, toNano, SendMode, external, storeMessage, Cell } from '@ton/core';
import { mnemonicToPrivateKey } from '@ton/crypto';

// if you need to send lots of requests in parallel,
// make sure you use a tonapi token.
const tonApiBaseUrl = 'https://tonapi.io/v2';
// const apiKey = 'your_token_here';

const tc = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC',
});

const JETTON_TRANSFER_OP_CODE = 0xf8a7ea5;

// Amount for jetton transfer. Usually 0.05 GRAM is enough for most jetton transfers without forwardBody
const BASE_JETTON_SEND_AMOUNT = toNano(0.05);

const main = async () => {

    // this is a simple example of how to send a gasless transfer.
    // you only need to specify your seed and a destination address.
 
    // the seed is not sent to the network, it is used to sign messages locally.

    const seed =
        '..!!! REPLACE THIS WITH YOUR SEED !!! ..'; // wallet seed `word1 word2 word3 ... word24`
    const destination = Address.parse('..!!! REPLACE THIS WITH A CORRECT DESTINATION !!!..'); // replace with a correct recipient address
    const usdtMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master.

    const jettonAmount = 1_000_000n; // amount in the smallest jetton units. This is 1 USDt.

    const keyPair = await mnemonicToPrivateKey(seed.split(' '));
    const workChain = 0;
    const wallet = WalletContractV5R1.create({ workChain, publicKey: keyPair.publicKey });
    const contract = tc.open(wallet);

    console.log('Wallet address:', wallet.address.toString());

    const jettonWalletAddressResult = await fetch(
        `${tonApiBaseUrl}/blockchain/accounts/${usdtMaster}/methods/${'get_wallet_address'}?args=${wallet.address.toRawString()}`
    ).then(res => res.json());

    const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jetton_wallet_address);

    // we use USDt in this example,
    // so we just print all supported gas jettons and get the relay address.
    // we have to send excess to the relay address in order to make a transfer cheaper.
    const relayerAddress = await printConfigAndReturnRelayAddress();

    // Create payload for jetton transfer
    const tetherTransferPayload = beginCell()
        .storeUint(JETTON_TRANSFER_OP_CODE, 32)
        .storeUint(0, 64)
        .storeCoins(jettonAmount) // 1 USDT
        .storeAddress(destination) // address for receiver
        .storeAddress(relayerAddress) // address for excesses
        .storeBit(false) // null custom_payload
        .storeCoins(1n) // count of forward transfers in nanoGRAM
        .storeMaybeRef(undefined)
        .endCell();

    const messageToEstimate = beginCell()
        .storeWritable(
            storeMessageRelaxed(
                internal({
                    to: jettonWallet,
                    bounce: true,
                    value: BASE_JETTON_SEND_AMOUNT,
                    body: tetherTransferPayload
                })
            )
        )
        .endCell();

    // we send a single message containing a transfer from our wallet to a desired destination.
    // as a result of estimation, TonAPI returns a list of messages that we need to sign.
    // the first message is a fee transfer to the relay address, the second message is our original transfer.
    const params = await fetch(`${tonApiBaseUrl}/gasless/estimate/${usdtMaster}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            wallet_address: wallet.address.toString(),
            wallet_public_key: keyPair.publicKey.toString('hex'),
            messages: [
                {
                    boc: messageToEstimate.toBoc().toString('hex')
                }
            ]
        })
    })
        .then(res => res.json())
        .then(res => ({
            ...res,
            messages: res.messages.map(message => ({
                to: Address.parse(message.address),
                value: BigInt(message.amount),
                body: Cell.fromBase64(Buffer.from(message.payload, 'hex').toString('base64'))
            })
        )}));

    console.log('Estimated transfer:', params);

    const seqno = await contract.getSeqno();

    // params is the same structure as params in tonconnect
    const tetherTransferForSend = wallet.createTransfer({
        seqno,
        authType: 'internal',
        timeout: Math.ceil(Date.now() / 1000) + 5 * 60,
        secretKey: keyPair.secretKey,
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
        messages: params.messages.map(message => internal(message))
    });

    const extMessage = beginCell()
        .storeWritable(
            storeMessage(
                external({
                    to: contract.address,
                    init: seqno === 0 ? contract.init : undefined,
                    body: tetherTransferForSend
                })
            )
        )
        .endCell();

    // Send a gasless transfer
    fetch(`${tonApiBaseUrl}/gasless/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${apiKey}` // uncomment this line if you have a token
        },
        body: JSON.stringify({
            wallet_public_key: keyPair.publicKey.toString('hex'),
            boc: extMessage.toBoc().toString('hex')
        })
    })
        .then(() => console.log('A gasless transfer sent!'))
        .catch(res => res.json().then(console.error))
};

async function printConfigAndReturnRelayAddress() {
    const cfg = await fetch(`${tonApiBaseUrl}/gasless/config`).then(res => res.json());

    console.log('Available jettons for gasless transfer');
    console.log(cfg.gas_jettons.map(gasJetton => gasJetton.master_id));

    console.log(`Relay address to send fees to: ${cfg.relay_address}`);
    return Address.parse(cfg.relay_address);
}

main().catch(console.error);
```

  </Tab>

  <Tab>
    
```go
package main

import (
	"context"
	"crypto/ed25519"
	"encoding/hex"
	"fmt"
	"math/big"
	"time"

	"github.com/shopspring/decimal"
	"github.com/tonkeeper/tonapi-go"
	"github.com/tonkeeper/tongo"
	"github.com/tonkeeper/tongo/boc"
	"github.com/tonkeeper/tongo/contract/jetton"
	"github.com/tonkeeper/tongo/liteapi"
	"github.com/tonkeeper/tongo/tlb"
	"github.com/tonkeeper/tongo/ton"
	tongoWallet "github.com/tonkeeper/tongo/wallet"
)

func printConfigAndReturnRelayAddress(tonapiCli *tonapi.Client) (ton.AccountID, error) {
	cfg, err := tonapiCli.GaslessConfig(context.Background())
	if err != nil {
		return ton.AccountID{}, fmt.Errorf("failed to get gasless config: %w", err)
	}
	fmt.Printf("Available gas jettons:\n")
	for _, gasJetton := range cfg.GasJettons {
		fmt.Printf("Gas jetton master: %s\n", gasJetton.MasterID)
	}
	fmt.Printf("Relay address to send fees to: %v\n", cfg.RelayAddress)
	relayer := ton.MustParseAccountID(cfg.RelayAddress)
	return relayer, nil
}

func main() {

	// this is a simple example of how to send a gasless transfer.
	// you only need to specify your seed and a destination address.

	// the seed is not sent to the network, it is used to sign messages locally.

	seed := "..!!! REPLACE THIS WITH YOUR SEED !!! .."
	destination := ton.MustParseAccountID("... !!! REPLACE THIS WITH A CORRECT DESTINATION !!! ....")

	// we send 1 USDt to the destination.
	usdtMaster := ton.MustParseAccountID("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs") // USDt jetton master.
	jettonAmount := int64(1_000_000)                                                         // amount in the smallest jetton units. This is 1 USDt.

	// if you need to send lots of requests in parallel,
	// make sure you use a tonapi token.
	tonapiCli, err := tonapi.New()
	if err != nil {
		panic(err)
	}
	cli, err := liteapi.NewClient(liteapi.Mainnet())
	if err != nil {
		panic(err)
	}
	// we use USDt in this example,
	// so we just print all supported gas jettons and get the relay address.
	// we have to send excess to the relay address in order to make a transfer cheaper.
	relay, err := printConfigAndReturnRelayAddress(tonapiCli)
	if err != nil {
		panic(err)
	}
	params := tonapi.GaslessEstimateParams{
		MasterID: usdtMaster.ToRaw(),
	}
	j := jetton.New(usdtMaster, cli)
	walletPrivateKey, err := tongoWallet.SeedToPrivateKey(seed)
	if err != nil {
		panic(err)
	}
	networkID, err := cli.GetNetworkGlobalID(context.Background())
	if err != nil {
		panic(err)
	}
	opts := tongoWallet.Options{
		NetworkGlobalID: &networkID,
	}
	w5 := tongoWallet.NewWalletV5R1(walletPrivateKey.Public().(ed25519.PublicKey), opts)

	msgCh := make(chan tlb.Message, 1)

	// this is a trick with proxy. we don't want to send the original transaction to the network.
	// we pass the proxy to Wallet's New function and intercepts the outgoing message.
	proxy := &proxy{
		msgCh: msgCh,
		cli:   cli,
	}
	wallet, err := tongoWallet.New(walletPrivateKey, tongoWallet.V5R1, proxy, tongoWallet.WithNetworkGlobalID(networkID))
	if err != nil {
		panic(err)
	}
	fmt.Printf("Wallet address: %v\n", wallet.GetAddress())

	walletAddress := wallet.GetAddress()
	msg := jetton.TransferMessage{
		Jetton:              j,
		Sender:              walletAddress,
		JettonAmount:        big.NewInt(jettonAmount),
		Destination:         destination,
		ResponseDestination: &relay, // excess, because some GRAM will be sent back to the relay address, commission will be lowered.
		AttachedTon:         50_000_000,
		ForwardTonAmount:    1,
	}
	err = wallet.Send(context.Background(), msg)
	if err != nil {
		panic(err)
	}
	m := <-msgCh

	cell := boc.NewCell()
	if err := tlb.Marshal(cell, m); err != nil {
		panic(err)
	}
	rawMessages, err := tongoWallet.ExtractRawMessages(tongoWallet.V5R1, cell)
	if err != nil {
		panic(err)
	}
	if len(rawMessages) != 1 {
		panic("invalid rawMessages")
	}
	msgBoc, err := rawMessages[0].Message.ToBocString()
	if err != nil {
		panic(err)
	}

	// msgBoc is our transfer message.

	publicKey := walletPrivateKey.Public().(ed25519.PublicKey)
	estimateReq := tonapi.GaslessEstimateReq{
		WalletAddress:   walletAddress.ToRaw(),
		WalletPublicKey: hex.EncodeToString(publicKey),
		Messages: []tonapi.GaslessEstimateReqMessagesItem{
			{Boc: msgBoc},
		},
	}
	// we send a single message containing a transfer from our wallet to a desired destination.
	// as a result of estimation, TonAPI returns a list of messages that we need to sign.
	// the first message is a fee transfer to the relay address, the second message is our original transfer.
	signRawParams, err := tonapiCli.GaslessEstimate(context.Background(), &estimateReq, params)
	if err != nil {
		panic(err)
	}

	// signRawParams is the same structure as signRawParams in tonconnect.
	var msgs []tongoWallet.Sendable
	for _, msg := range signRawParams.Messages {
		cells, err := boc.DeserializeBocHex(msg.Payload.Value)
		if err != nil {
			panic(err)
		}
		if len(cells) != 1 {
			panic("invalid cells")
		}
		dest := tongo.MustParseAccountID(msg.Address)
		amount := decimal.RequireFromString(msg.Amount)
		rawMessage := RawMessage{
			Dest:    dest,
			Amount:  amount.BigInt().Int64(),
			Payload: cells[0],
		}
		msgs = append(msgs, rawMessage)
	}

	// OK, at this point, we have everything we need to send a gasless transfer.
	state, err := cli.GetAccountState(context.Background(), wallet.GetAddress())
	if err != nil {
		panic(err)
	}
	nextMsgParams, err := w5.NextMessageParams(state)
	if err != nil {
		panic(err)
	}
	// the message has to be V5MsgTypeSignedInternal.
	conf := tongoWallet.MessageConfig{
		Seqno:      nextMsgParams.Seqno,
		ValidUntil: time.Now().UTC().Add(tongoWallet.DefaultMessageLifetime),
		V5MsgType:  tongoWallet.V5MsgTypeSignedInternal,
	}
	body, err := wallet.CreateMessageBody(conf, msgs...)
	if err != nil {
		panic(err)
	}
	m, err = ton.CreateExternalMessage(wallet.GetAddress(), body, nextMsgParams.Init, tlb.VarUInteger16{})
	if err != nil {
		panic(err)
	}

	cell = boc.NewCell()
	if err := tlb.Marshal(cell, m); err != nil {
		panic(err)
	}
	msgBoc, err = cell.ToBocBase64()
	if err != nil {
		panic(err)
	}
	sendReq := tonapi.GaslessSendReq{
		WalletPublicKey: hex.EncodeToString(publicKey),
		Boc:             msgBoc,
	}
	if err := tonapiCli.GaslessSend(context.Background(), &sendReq); err != nil {
		panic(err)
	}
	fmt.Printf("A gasless transfer sent\n")
}

type RawMessage struct {
	Dest    ton.AccountID
	Amount  int64
	Payload *boc.Cell
}

func (m RawMessage) ToInternal() (message tlb.Message, mode uint8, err error) {
	info := tlb.CommonMsgInfo{
		SumType: "IntMsgInfo",
	}

	info.IntMsgInfo = &struct {
		IhrDisabled bool
		Bounce      bool
		Bounced     bool
		Src         tlb.MsgAddress
		Dest        tlb.MsgAddress
		Value       tlb.CurrencyCollection
		IhrFee      tlb.Grams
		FwdFee      tlb.Grams
		CreatedLt   uint64
		CreatedAt   uint32
	}{
		IhrDisabled: true,
		Bounce:      false,
		Src:         (*ton.AccountID)(nil).ToMsgAddress(),
		Dest:        m.Dest.ToMsgAddress(),
	}
	info.IntMsgInfo.Value.Grams = tlb.Grams(m.Amount)

	intMsg := tlb.Message{
		Info: info,
	}

	intMsg.Body.IsRight = true //todo: check length and
	intMsg.Body.Value = tlb.Any(*m.Payload)
	return intMsg, tongoWallet.DefaultMessageMode, nil
}

type proxy struct {
	msgCh chan tlb.Message
	cli   *liteapi.Client
}

func (p *proxy) GetSeqno(ctx context.Context, account tongo.AccountID) (uint32, error) {
	return p.cli.GetSeqno(ctx, account)
}

func (p *proxy) SendMessage(ctx context.Context, payload []byte) (uint32, error) {
	cells, err := boc.DeserializeBoc(payload)
	if err != nil {
		panic(err)
	}
	var msg tlb.Message
	if err := tlb.Unmarshal(cells[0], &msg); err != nil {
		panic(err)
	}
	p.msgCh <- msg
	return 0, nil
}

func (p *proxy) GetAccountState(ctx context.Context, accountID tongo.AccountID) (tlb.ShardAccount, error) {
	return p.cli.GetAccountState(ctx, accountID)
}
```

  </Tab>

  <Tab>
    
```python
from pytoniq_core import Address, Cell
from tonutils.client import TonapiClient
from tonutils.jetton import JettonMaster, JettonWallet
from tonutils.utils import to_nano
from tonutils.wallet import WalletV5R1

from pytonapi import AsyncTonapi

# API key to access Tonapi (obtained from https://tonconsole.com).
API_KEY = "AE332...2BD5I"

# Mnemonic phrase used to connect the wallet.
MNEMONIC = "a b c ..."

# Jetton master address.
# For this example, USDt.
JETTON_MASTER_ADDRESS = Address("EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs")

# Destination address.
# Replace with a correct recipient address.
DESTINATION_ADDRESS = Address("UQC-3ilVr-W0Uc3pLrGJElwSaFxvhXXfkiQA3EwdVBHNNbbp")

# The number of decimal places.
# For USDt, it is 6.
JETTON_DECIMALS = 6

# Jetton amount for send.
# For this example, 1 USDt.
JETTON_AMOUNT = 1

# Amount for jetton transfer.
# Usually 0.05 GRAM is enough for most jetton transfers without forward_payload.
BASE_JETTON_SEND_AMOUNT = 0.05


async def main() -> None:
    tonapi, client = AsyncTonapi(API_KEY), TonapiClient(API_KEY)

    # We use USDt in this example,
    # so we just print all supported gas jettons and get the relay address.
    # We have to send excess to the relay address in order to make a transfer cheaper.
    relayer_address = await print_config_and_return_relay_address(tonapi)

    wallet, public_key, private_key, _ = WalletV5R1.from_mnemonic(client, MNEMONIC)
    print(f"Wallet address: {wallet.address.to_str()}")

    jetton_wallet_address = await JettonMaster.get_wallet_address(
        client=client,
        owner_address=wallet.address,
        jetton_master_address=JETTON_MASTER_ADDRESS,
    )
    tether_transfer_body = JettonWallet.build_transfer_body(
        jetton_amount=to_nano(JETTON_AMOUNT, JETTON_DECIMALS),
        recipient_address=DESTINATION_ADDRESS,
        response_address=relayer_address,
        # Excess, because some GRAM will be sent back to the relay address, commission will be lowered.
    )
    message_to_estimate = wallet.create_internal_msg(
        dest=jetton_wallet_address,
        value=to_nano(BASE_JETTON_SEND_AMOUNT),
        body=tether_transfer_body,
    )

    # We send a single message containing a transfer from our wallet to a desired destination.
    # As a result of estimation, TonAPI returns a list of messages that we need to sign.
    # The first message is a fee transfer to the relay address, the second message is our original transfer.
    sign_raw_params = await tonapi.gasless.estimate_gas_price(
        master_id=JETTON_MASTER_ADDRESS.to_str(),
        body={
            "wallet_address": wallet.address.to_str(),
            "wallet_public_key": public_key.hex(),
            "messages": [
                {
                    "boc": message_to_estimate.serialize().to_boc().hex(),
                }
            ]
        }
    )

    # Signs Raw Params is the same structure as signRawParams in to connect.
    # OK, at this point, we have everything we need to send a gasless transfer.
    # The message has to be signed internal.
    seqno = await WalletV5R1.get_seqno(client, wallet.address)
    tether_transfer_for_send = wallet.create_signed_internal_msg(
        messages=[
            wallet.create_wallet_internal_message(
                destination=Address(message.address),
                value=int(message.amount),
                body=Cell.one_from_boc(message.payload),
            ) for message in sign_raw_params.messages
        ],
        seqno=seqno,
        valid_until=sign_raw_params.valid_until,
    )
    ext_message = wallet.create_external_msg(
        dest=wallet.address,
        body=tether_transfer_for_send,
    )

    # Send a gasless transfer.
    await tonapi.gasless.send(
        body={
            "wallet_public_key": public_key.hex(),
            "boc": ext_message.serialize().to_boc().hex(),
        }
    )
    print(f"A gasless transfer sent!")


async def print_config_and_return_relay_address(tonapi: AsyncTonapi) -> Address:
    """Fetch the gasless configuration and return the relay address."""
    gasless_config = await tonapi.gasless.get_config()

    print("Available gas jettons:")
    for jetton in gasless_config.gas_jettons:
        print(f"Gas jetton master: {Address(jetton.master_id).to_str()}")

    print(f"Relay address to send fees to: {Address(gasless_config.relay_address).to_str()}")
    return Address(gasless_config.relay_address)


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
```

  </Tab>

</Tabs>
