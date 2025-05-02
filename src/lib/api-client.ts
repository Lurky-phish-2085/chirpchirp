import { strapi } from "@strapi/client";
import { removeTrailingSlash } from "./utils";

const API_BASE_URL = removeTrailingSlash(
  process.env.CMS_BASE_URL ?? "http://localhost:1337/api"
);

function createApiClient(baseURL: string) {
  return strapi({
    baseURL,
  });
}

export const strapiClient = createApiClient(API_BASE_URL || "");
