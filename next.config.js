// module.exports = {
//   reactStrictMode: true,
// }
var webpack = require('webpack');

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  // '@custom/shared',
  // '@custom/basic-call',
  // '@custom/text-chat',
  // '@custom/live-streaming',
  // '@custom/recording',
]);

const packageJson = require('./package.json');

module.exports = withPlugins([withTM], {
  env: {
    PROJECT_TITLE: packageJson.description,
    DAILY_API_KEY: process.env.DAILY_API_KEY,
    DAILY_DOMAIN: process.env.DAILY_DOMAIN,
    DAILY_REST_DOMAIN: process.env.DAILY_REST_DOMAIN,
    MANUAL_TRACK_SUBS: process.env.MANUAL_TRACK_SUBS,
    NAARDIC_TIMER_DOMAIN: process.env.NAARDIC_TIMER_DOMAIN,
    AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE: process.env.AMPLIFY_NEXTJS_EXPERIMENTAL_TRACE,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 1000,
  // externals : {
  //   outputFileTracingExcludes: {
  //     '*': [
  //       'node_modules/canvas/build',
  //     ],
  //   },
  // },
  // outputFileTracingExcludes: {
  //   '*': [
  //     'node_modules/canvas/build',
  //   ],
  // },
  // plugins: [
  //   new webpack.IgnorePlugin(/canvas/, /jsdom$/)
  // ],
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.node$/,
  //     use: [
  //       {
  //         loader: "node-loader"
  //       },
  //     ],
  //   })
  //   return config;
  // },
});
