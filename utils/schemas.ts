import { SWAGGER_SCHEMA_JSON_URL } from "../constants";

export const loadStatic = () => {
    return fetch(SWAGGER_SCHEMA_JSON_URL as string)
      .then(async (res) => {
        const asd = await res.json();
        console.log(Object.keys(asd));
        return asd;
      })
      .then((data) => ({
        props: {
          ssg: { data },
        },
        revalidate: 60 * 60,
      }));
  };