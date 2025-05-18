import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Active React Strict Mode
  reactStrictMode: true,

  // Votre configuration Webpack personnalisée
  webpack: (config, { isServer, dev }) => {
    // Désactive les sourcemaps sur le client en production
    if (!dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },
};

const sentryOptions = {
  // Suppresses logs from Sentry Webpack plugin
  silent: true,

  // Vos vars d’env pour Sentry
  org:         process.env.SENTRY_ORG,
  project:     process.env.SENTRY_PROJECT,
  authToken:   process.env.SENTRY_AUTH_TOKEN,

  // ⚠️ Important pour Next.js 15 + Sentry v8 :
  // Désactive le plugin Webpack côté server (n’injecte pas de code `require` dans l’Edge bundle)
  disableServerWebpackPlugin: true,

  // Vous pouvez éventuellement désactiver aussi le client si vous ne voulez remonter
  // que les erreurs server/edge :
  // disableClientWebpackPlugin: true,
};

export default withSentryConfig(nextConfig, sentryOptions);
