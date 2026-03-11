import { useSSG } from 'nextra/ssg';
import { getLinkToSwaggerOperation } from '../utils/links';
import Link from 'next/link';
import { TONAPI_LANDING_PAGE_REST_SWAGGER_URL, TONAPI_LANDING_PAGE_WEBHOOKS_SWAGGER_URL } from '@/constants';

interface SchemaLoaderProps {
  tag: string;
}

export function SchemaItem({
  operationId,
  description,
  tag,
  baseUrl,
}: {
  operationId: string;
  description: string;
  tag: string;
  baseUrl: string;
}) {
  const nxCodeClass =
    'nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10';

  return (
    <li key={operationId} className="pb-3">
      <Link
        href={getLinkToSwaggerOperation(tag, operationId, baseUrl)}
        target="_blank"
        className="no-underline hover:underline">
        <code className={nxCodeClass}>{operationId}</code>
      </Link>
      &nbsp;-&nbsp;<span>{description}</span>
    </li>
  );
}

export function SchemaLoader({ tag }: SchemaLoaderProps) {
  const { restData } = useSSG();

  const operations = Object.values(restData.paths || {})
    .map((value) => Object.values(value as Object))
    .flat()
    .filter((value: any) => Array.isArray(value?.tags) && value.tags.includes(tag))
    .slice()
    .sort((a: any, b: any) => (a.tags?.length ?? 0) - (b.tags?.length ?? 0));

  return (
    <ul className="pt-4">
      {operations.map((value) => (
        <SchemaItem
          key={value.operationId}
          operationId={value.operationId}
          description={value.description}
          tag={tag}
          baseUrl={TONAPI_LANDING_PAGE_REST_SWAGGER_URL}
        />
      ))}
    </ul>
  );
}

export function WebhooksSchemaLoader() {
  const { restData } = useSSG();

  const operations = Object.values(restData.paths || {})
    .map((value) => Object.values(value as Object))
    .flat()
    .filter((value: any) => value && typeof value === 'object' && value.operationId)
    .slice()
    .sort((a: any, b: any) => (a.tags?.length ?? 0) - (b.tags?.length ?? 0));

  return (
    <ul className="pt-4">
      {operations.map((value) => (
        <SchemaItem
          key={value.operationId}
          operationId={value.operationId}
          description={value.description}
          tag={value.tags?.[0] ?? 'default'}
          baseUrl={TONAPI_LANDING_PAGE_WEBHOOKS_SWAGGER_URL}
        />
      ))}
    </ul>
  );
}

export default SchemaLoader;
