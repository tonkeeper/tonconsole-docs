"use client";
import { useEffect, useState } from 'react';
import { getLinkToSwaggerOperation } from '../utils/links';
import { SWAGGER_SCHEMA_JSON_URL } from '../constants/LINKS';
import Link from 'next/link';

interface SchemaLoaderProps {
  tag: string;
}

export function SchemaLoader({ tag }: SchemaLoaderProps) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch(SWAGGER_SCHEMA_JSON_URL)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);
  const nxCodeClass =
    'nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10';

  const operations = data
    ? Object.values(data.paths)
        .map((value) => Object.values(value as Object))
        .flat()
        .filter((value) => value.tags.includes(tag))
        .slice()
        .sort((a, b) => a.tags.length - b.tags.length)
    : [];

  return (
    <ul className="pt-4">
      {operations.map((value) => (
        <li key={value.operationId} className="pb-3">
          <Link
            href={getLinkToSwaggerOperation(tag, value.operationId)}
            target="_blank"
            className="no-underline hover:underline">
            <code className={nxCodeClass}>{value.operationId}</code>
          </Link>
          &nbsp;-&nbsp;<span>{value.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default SchemaLoader;
