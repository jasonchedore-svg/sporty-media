import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteTitle, siteDescription, siteUrl, basePath } from "../config";
import { withBase } from "../lib/paths";

export async function GET() {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: `${siteUrl}${basePath}/`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/posts/${post.id}/`),
    })),
  });
}
