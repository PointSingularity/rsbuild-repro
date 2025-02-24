# Alias Not Working

I tried to make the two configs pretty much the same, but still no luck.

Rspack works:

`npm run build:rspack`

Rsbuild does not:

`npm run build:rsbuild`

Error:

```
❯ npm run build:rsbuild

> repro-rsbuild@1.0.0 build:rsbuild
> rsbuild build

  Rsbuild v1.2.11

error   Compile error:
Failed to compile, check the errors for troubleshooting.
File: repro-rsbuild/src/index.ts:1:1
  × ESModulesLinkingError: export 'constant' (imported as 'constant') was not found in './module' (module has no exports)
   ╭─[2:12]
 1 │ import { constant } from './module';
 2 │ console.log(constant);
   ·             ────────
   ╰────

File: repro-rsbuild/src/module/index.ts:1:1
  × Cannot find module './example' for matched aliased key './example'
  help: Found module './example.ts'. However, it's not possible to request this module without the extension
        if its extension was not listed in the `resolve.extensions`. Here're some possible solutions:

        1. add the extension `".ts"` to `resolve.extensions` in your rspack configuration
        2. use './example.ts' instead of './example'

 @ ./src/index.ts

error   Failed to build.
error   Rspack build failed!
    at file://repro-rsbuild/node_modules/@rsbuild/core/dist/index.js:5638:87
    at finalCallback (repro-rsbuild/node_modules/@rsbuild/core/node_modules/@rspack/core/dist/index.js:14780:9)
    at repro-rsbuild/node_modules/@rsbuild/core/node_modules/@rspack/core/dist/index.js:14812:16
    at done (repro-rsbuild/node_modules/@rspack/lite-tapable/dist/index.js:473:13)
    at promise.then.index (repro-rsbuild/node_modules/@rspack/lite-tapable/dist/index.js:493:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)

```
