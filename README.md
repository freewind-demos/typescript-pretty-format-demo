TypeScript Pretty Format Demo
===========================

'prettyFormat'可以处理比较复杂的数据

```
npm install
npm run demo
```

Output:

```
### prettyFormat Object {
  "aaa": 123,
  "bbb": undefined,
  "ccc": null,
  "hello": [Function hello],
}
### JSON.stringify {"aaa":123,"ccc":null}
---------- nested --------------
### prettyFormat Object {
  "aaa": 123,
  "bbb": undefined,
  "ccc": null,
  "hello": [Function hello],
  "nest": [Circular],
}

/Users/peng.li/workspace/typescript-pretty-format-demo/hello.ts:17
console.log("### JSON.stringify", JSON.stringify(data));
                                       ^
TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    --- property 'nest' closes the circle
    at JSON.stringify (<anonymous>)
    at Object.<anonymous> (/Users/peng.li/workspace/typescript-pretty-format-demo/hello.ts:17:40)
    at Module._compile (internal/modules/cjs/loader.js:1151:30)
    at Module.m._compile (/Users/peng.li/workspace/typescript-pretty-format-demo/node_modules/ts-node/src/index.ts:814:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1171:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/peng.li/workspace/typescript-pretty-format-demo/node_modules/ts-node/src/index.ts:817:12)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at main (/Users/peng.li/workspace/typescript-pretty-format-demo/node_modules/ts-node/src/bin.ts:226:14)
error Command failed with exit code 1.

```
