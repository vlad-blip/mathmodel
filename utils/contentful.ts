import { createClient } from "contentful";

export const client = createClient({
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN as string,
  space: process.env.CF_SPACE_ID as string,
});
