import { createWorker } from '@cloudflare/next-on-cloudflare-workers';

// "nextConfigDir" doit pointer vers la racine de votre application Next.js (où se trouve next.config.js/ts)
const worker = createWorker({
  nextConfigDir: "./",
});

export default {
  async fetch(request, env, ctx) {
    return worker.fetch(request);
  },
};