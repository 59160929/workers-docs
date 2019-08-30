// export fuisOldDoc = (docPath)=> oldDocsMap.has(docPath)
export function isOldDoc(docPath) {
  return oldDocsMap.has(docPath)
}

export function hasDefinedRedirect(docPath) {
  return oldDocsMap.get(docPath) !== ''
}
// if mapped to an empty string '', then old that old doc will map to the Overview of the Workers Docs
// (e.g. https://workers.cloudflare.com/docs)

// Redirect a page in the old docs to a new article that has replaced it
// e.g. ['/recipes', '/templates'], -> redirects requests to /recipes to /templates
export const oldDocsMap = new Map([
  ['/test-redirect', '/templates'],
  ['/about', '/'],
  ['/about/how-workers-work', ''],
  ['/api', ''],
  ['/api/config-api-for-enterprise', ''],
  ['/api/resource-bindings', ''],
  ['/api/resource-bindings/kv-namespaces', ''],
  ['/api/resource-bindings/webassembly-modules', ''],
  ['/api/route-matching', ''],
  ['/deploying-workers', ''],
  ['/deploying-workers/github-action', ''],
  ['/deploying-workers/serverless', ''],
  ['/deploying-workers/terraform', ''],
  ['/deploying-workers/travis-ci', ''],
  ['/deploying-workers/unit-testing', ''],
  ['/faq', ''],
  ['/kv', '/reference/storage'],
  ['/kv/api', '/reference/storage/api'],
  ['/kv/expiring-keys', '/reference/storage/expiring-keys'],
  ['/kv/limitations', '/reference/storage/limitations'],
  ['/kv/reading-data', '/reference/storage/reading-data'],
  ['/kv/writing-data', '/reference/storage/writing-data'],
  ['/recipes', '/templates'],
  ['/recipes/a-b-testing', ''],
  ['/recipes/aggregating-multiple-requests', ''],
  ['/recipes/altering-headers', ''],
  ['/recipes/bulk-redirects', ''],
  ['/recipes/conditional-routing', ''],
  ['/recipes/cors-preflight-requests', ''],
  ['/recipes/country-blocking', ''],
  ['/recipes/hotlink-protection', ''],
  ['/recipes/lambda@edge-conversion', ''],
  ['/recipes/lambda@edge-conversion/changing-origins', ''],
  ['/recipes/lambda@edge-conversion/generating-responses-with-static-content', ''],
  ['/recipes/lambda@edge-conversion/overriding-response-headers', ''],
  ['/recipes/lambda@edge-conversion/updating-error-statuses', ''],
  ['/recipes/lambda@edge-conversion/working-with-querystrings', ''],
  ['/recipes/mobile-redirects', ''],
  ['/recipes/post-requests', ''],
  ['/recipes/pre-shared-keys', ''],
  ['/recipes/random-content-cookies', ''],
  ['/recipes/return-403', ''],
  ['/recipes/setting-a-cookie', ''],
  ['/recipes/signed-requests', ''],
  ['/recipes/static-site', ''],
  ['/recipes/streaming-responses', ''],
  ['/recipes/tls-version-blocking', ''],
  ['/recipes/vcl-conversion', ''],
  ['/recipes/vcl-conversion/authenticating-before-returning-a-request', ''],
  ['/recipes/vcl-conversion/conditionally-changing-a-url', ''],
  ['/recipes/vcl-conversion/controlling-the-cache', ''],
  ['/recipes/vcl-conversion/delivering-custom-responses', ''],
  ['/recipes/vcl-conversion/delivering-different-content-to-different-devices', ''],
  ['/recipes/vcl-conversion/inspecting-visitor-location', ''],
  ['/reference/cache-api', ''],
  ['/reference/cloudflare-features', ''],
  ['/reference/request-attributes', ''],
  ['/webassembly', ''],
  ['/webassembly/tutorial', ''],
  ['/writing-workers', ''],
  ['/writing-workers/blog-posts', ''],
  ['/writing-workers/debugging-tips', ''],
  ['/writing-workers/handling-errors', ''],
  ['/writing-workers/resource-limits', ''],
  ['/writing-workers/storing-data', ''],
  ['/writing-workers/using-npm-modules', ''],
])
