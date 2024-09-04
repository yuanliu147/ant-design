// This is a alias proxy, which will use global `@ant-design/cssinjs` first.
// Use local if global not found.
let cssinjs;

if (typeof window !== 'undefined' && window.antdCssinjs) {
  // Use window UMD version
  cssinjs = window.antdCssinjs;
} else if (typeof global !== 'undefined' && globalThis.antdCssinjs) {
  // Use global UMD version
  cssinjs = globalThis.antdCssinjs;
} else {
  // Use local version.
  // Use relative path since webpack will also replace module here.
  cssinjs = require('../node_modules/@ant-design/cssinjs');
}

module.exports = cssinjs;
