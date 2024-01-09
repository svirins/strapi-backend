export default {
  //
  sentry: {
    enabled: true,
    config: {
      dsn: process.env.SENTRY_DSN,
      sendMetadata: true,
    },
  },
  slugify: {
    enabled: false,
    // config: {
    //   contentTypes: {
    //     article: {
    //       field: "slug",
    //       references: "title",
    //     },
    //   },
    // },
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
