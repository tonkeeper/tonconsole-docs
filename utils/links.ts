import { TONAPI_LANDING_PAGE_URL } from "../constants";

export const getLinkToSwaggerTag = (tag: string) => {
  return `${TONAPI_LANDING_PAGE_URL}/api-v2#operations-tag-${tag}`;
};

export const getLinkToSwaggerOperation = (tag: string, operationId: string) => {
  return `${TONAPI_LANDING_PAGE_URL}/api-v2#operations-${tag}-${operationId}`;
};
