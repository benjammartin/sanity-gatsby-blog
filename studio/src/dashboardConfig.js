export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6059ed3cd2d7f1573db39e42",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-a5kiychp",
                  apiId: "1f24db83-8c7e-47fd-8ee9-7a4fabb9efd4",
                },
                {
                  buildHookId: "6059ed3c94aa7d29821b0b68",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-esw5fyu2",
                  apiId: "011f46d5-8d76-47cb-8bad-bbb1fb3d64f3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/benjammartin/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-esw5fyu2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
