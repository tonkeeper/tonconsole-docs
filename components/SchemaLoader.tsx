import { useSSG } from 'nextra/ssg';
import { getLinkToSwaggerOperation } from "../utils/links";

const nxCodeClass =
  "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10";

interface SchemaLoaderProps {
  tag: string;
  data: any[];
}

export function SchemaLoader({ tag }: SchemaLoaderProps) {
  const { data } = useSSG()
  
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


// export const getStaticProps = async () => {
//   const res = await fetch('https://api.github.com/repos/shuding/nextra');
//   const repo = await res.json();

//   return {
//     props: {
//       // Добавляем `ssg` поле в пропсы страницы, которое затем будет использовано в `useSSG` хуке.
//       ssg: {
//         stars: repo.stargazers_count,
//       },
//     },
//     // Страница будет считаться устаревшей и будет пересоздаваться каждые 60 секунд.
//     revalidate: 60,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const tag = context.params?.tag as string;
//   const schemaLink = SWAGGER_SCHEMA_JSON_URL as string;

//   const response = await fetch(schemaLink);
//   const code = await response.json();

//   const data = Object.values(code.paths)
//     .map((value) => Object.values(value as any))
//     .flat()
//     .filter((value: any) => value.tags.includes(tag));

//   console.log(data);

//   return {
//     props: {
//       tag,
//       data,
//     },
//   };
// };

// export default SchemaLoader;
