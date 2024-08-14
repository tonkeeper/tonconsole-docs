import { getLinkToSwaggerTag } from "../utils/links";

export function SwaggerLink({ tag }: { tag: string }) {
  return (
    <a
      href={getLinkToSwaggerTag(tag)}
      target="_blank"
      rel="noopener noreferrer"
      className="swagger-anchor"
      style={{
        order: 5,
        marginLeft: "auto",
      }}
    >
      <style>
        {`
            .swagger-anchor::after {
                content: url(/assets/swagger-icon.svg);
                height: 1em;
                width: 1em;
                display: inline-block;
            }
        `}
      </style>
    </a>
  );
}
