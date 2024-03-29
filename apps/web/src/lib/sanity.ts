import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityClient } from "next-sanity";

export const client: SanityClient = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "14v3wyhi",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
