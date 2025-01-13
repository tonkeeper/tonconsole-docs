#!groovy

pipeline {
    agent any

    options {
        timestamps ()
        disableConcurrentBuilds()
    }


    stages {
        stage('Build') {
            steps {
                cleanWs()
                git branch: 'master', credentialsId: 'tonkeeper-build-bot', url: 'https://github.com/tonkeeper/tonconsole-docs'
                sh  '''
                    docker run --user $(id -u):$(id -g) --rm --name=ton_console_prod_npm_install --env HOME=/local -v "$PWD":/local --workdir=/local node:20.17.0-alpine3.20 npm ci
                    docker run --user $(id -u):$(id -g) --rm --name=ton_console_prod_build       --env HOME=/local -v "$PWD":/local --workdir=/local node:20.17.0-alpine3.20 npm run build
                    '''
                archiveArtifacts artifacts: 'dist/', followSymlinks: false, onlyIfSuccessful: true
            }
        }

        stage('rsync static files') {
            steps {
                sshagent(['builder-nonroot']) {
                    sh '''
                        rsync -rl --chmod=ugo=rX --delete --stats dist/ builder@main-proxy.hetzner.tonkeeper.com:/var/www/tonconsole.com/docs/
                       '''
                }
            }
        }

    }
}
