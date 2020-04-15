const withSass = require("@zeit/next-sass");
const path = require('path')

module.exports = phase => withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]"
  },
  env: () => {
    return {
      BLABLA: "fasdfasdf",
    }
  },
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['graph'] = path.join(__dirname, 'graph')
    config.resolve.alias['context'] = path.join(__dirname, 'context')
    config.resolve.alias['types'] = path.join(__dirname, 'types')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['i18n'] = path.join(__dirname, 'i18n')
    return config
  },
});

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

// // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
// module.exports = phase => {
//   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
//   // when `next build` or `npm run build` is used
//   const isProd =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
//   // when `next build` or `npm run build` is used
//   const isStaging =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

//   console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

//   const env = {
//     RESTURL_SPEAKERS: (() => {
//       if (isDev) return "http://localhost:4000/speakers";
//       if (isProd) {
//         return "https://www.siliconvalley-codecamp.com/rest/speakers/ps";
//       }
//       if (isStaging) return "http://localhost:11639";
//       return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
//     })(),
//     RESTURL_SESSIONS: (() => {
//       if (isDev) return "http://localhost:4000/sessions";
//       if (isProd) return "https://www.siliconvalley-codecamp.com/rest/sessions";
//       if (isStaging) return "http://localhost:11639";
//       return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)";
//     })()
//   };

//   // next.config.js object
//   return {
//     env
//   };
// };
