import yaml from 'js-yaml';
import { SWAGGER_REST_SCHEMA_YAML_URL, SWAGGER_WEBHOOKS_SCHEMA_YAML_URL } from '../constants';

export const loadRestStatic = () => {
  return fetch(SWAGGER_REST_SCHEMA_YAML_URL as string, {
    headers: {
      Accept: 'application/yaml, text/yaml, */*',
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
      }
      const text = await res.text();
      const data = yaml.load(text, { schema: yaml.JSON_SCHEMA });
      return data;
    })
    .then((data) => ({
      props: {
        ssg: { restData: data },
      },
      revalidate: 60 * 60,
    }));
};

export const loadWebhooksStatic = () => {
  return fetch(SWAGGER_WEBHOOKS_SCHEMA_YAML_URL as string, {
    headers: {
      Accept: 'application/yaml, text/yaml, */*',
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
      }
      const text = await res.text();
      const data = yaml.load(text, { schema: yaml.JSON_SCHEMA });
      return data;
    })
    .then((data) => ({
      props: {
        ssg: { restData: data },
      },
      revalidate: 60 * 60,
    }));
};
