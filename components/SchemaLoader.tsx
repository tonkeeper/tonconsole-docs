import { useEffect, useState } from "react";
import { SWAGGER_SCHEMA_JSON_URL } from "../constants";
import { getLinkToSwaggerOperation } from "../utils/links";

const nxCodeClass =
  "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10";

interface SchemaLoaderProps {
  tag: string;
}

export function SchemaLoader({ tag }: SchemaLoaderProps) {
  const [code, setCode] = useState<any>(null);

  useEffect(() => {
    SWAGGER_SCHEMA_JSON_URL &&
      fetch(SWAGGER_SCHEMA_JSON_URL)
        .then((response) => response.json())
        .then((data) => setCode(data));
  }, [SWAGGER_SCHEMA_JSON_URL]);

  const data = code
    ? Object.values(code.paths)
        .map((value) => Object.values(value as any))
        .flat()
        .filter((value: any) => value.tags.includes(tag))
    : [];

  return (
    <ul className="pt-4">
      {data.map((value: any) => (
        <li key={value.operationId} className="pb-3">
          <a
            href={getLinkToSwaggerOperation(tag, value.operationId)}
            target="_blank"
            className="no-underline hover:underline"
          >
            <code className={nxCodeClass}>{value.operationId}</code>
          </a>
          &nbsp;-&nbsp;<span>{value.description}</span>
        </li>
      ))}
    </ul>
  );
}
