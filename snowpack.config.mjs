/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: [
        "@lit/reactive-element/decorators/base.js",
        "@lit/reactive-element",
        "@lit/reactive-element/decorators/custom-element.js",
        "@lit/reactive-element/decorators/property.js",
        "@lit/reactive-element/decorators/state.js",
        "@lit/reactive-element/decorators/event-options.js",
        "@lit/reactive-element/decorators/query.js",
        "@lit/reactive-element/decorators/query-all.js",
        "@lit/reactive-element/decorators/query-async.js",
        "@lit/reactive-element/decorators/query-assigned-nodes.js"
    ]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
