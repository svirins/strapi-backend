export default {
  //
  sentry: {
    enabled: true,
    config: {
      dsn: process.env.STRAPI_ADMIN_SENTRY_DSN,
      sendMetadata: true,
    },
  },
  slugify: {
    enabled: false,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.STRAPI_ADMIN_CLOUDINARY_NAME,
        api_key: process.env.STRAPI_ADMIN_CLOUDINARY_KEY,
        api_secret: process.env.STRAPI_ADMIN_CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
};
