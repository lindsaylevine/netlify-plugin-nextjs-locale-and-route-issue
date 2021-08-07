module.exports = {
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false
  },
  webpack: (config, { dev } ) => {
    if (! dev) {
      config.externals = {
        canvas: 'canvas',
        critters: 'critters'
      };
    }

    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
}
