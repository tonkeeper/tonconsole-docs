export default function SwaggerLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="swagger-anchor"
      style={{
        order: 5,
        marginLeft: 'auto',
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
