import { TONAPI_LANDING_PAGE_REST_SWAGGER_URL } from '../constants';

export const getLinkToSwaggerTag = (tag: string) => {
  return `${TONAPI_LANDING_PAGE_REST_SWAGGER_URL}#operations-tag-${tag}`;
};

export const getLinkToSwaggerOperation = (tag: string, operationId: string, baseUrl: string) => {
  return `${baseUrl}#operations-${tag}-${operationId}`;
};
