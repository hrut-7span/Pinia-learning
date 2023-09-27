// https://nuxt.com/docs/api/configuration/nuxt-config

const directusUrl = "http://localhost:8055";
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      directusUrl,
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  directus: {
    url: directusUrl,
  },
  modules: [
    "nuxt-directus",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxt/content",
  ],

  generate: {
    routes: async () => {
      const blogs = await fetchDataFromDatabase(); // Fetch all blogs from your database
      return blogs.map((blog) => {
        return {
          route: `/items/blogs/${blog.slug}`, // Generate routes based on the slug
        };
      });
    },
  },
  devtools: { enabled: true },
});
