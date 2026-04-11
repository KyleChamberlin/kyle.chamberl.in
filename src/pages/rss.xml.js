import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = Object.values(
    import.meta.glob("./blog/*.md", { eager: true })
  );

  return rss({
    title: "Kyle Chamberlin's Digital Garden",
    description: "Just someone trying to be a better developer",
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.pubDate),
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}
