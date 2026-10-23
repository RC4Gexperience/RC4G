import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const root=new URL('../',import.meta.url);
const read=path=>readFile(new URL(path,root),'utf8');
test('RC4G keeps its real page, French metadata and existing social links',async()=>{
 const [page,layout]=await Promise.all([read('app/page.tsx'),read('app/layout.tsx')]);
 const compiled=ts.transpileModule(page,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS}}).outputText;
 const exports={};vm.runInNewContext(compiled,{React,exports});
 const html=renderToStaticMarkup(React.createElement(exports.default));
 assert.match(html,/RC4G/);assert.match(html,/facebook\.com/);assert.match(html,/tiktok\.com/);
 for(const id of ['accueil','projet','technologie','journal','vision','contact'])assert.match(html,new RegExp(`id="${id}"`));
 assert.match(layout,/lang="fr"/);assert.match(layout,/https:\/\/rc4g\.fr/);
 assert.doesNotMatch(html,/Your site is taking shape/);
});
test('Worker retains local asset image processing and application router',async()=>{
 const worker=await read('worker/index.ts');
 assert.match(worker,/handleImageOptimization/);assert.match(worker,/env\.ASSETS\.fetch/);
 assert.match(worker,/env\.IMAGES\.input/);assert.match(worker,/return handler\.fetch\(request, env, ctx\)/);
});
test('targeted React and Next versions are aligned and installed',async()=>{
 const pkg=JSON.parse(await read('package.json'));
 for(const name of ['react','react-dom'])assert.equal(pkg.dependencies[name],'19.3.1');
 assert.equal(pkg.devDependencies['react-server-dom-webpack'],'19.3.1');
 assert.equal(pkg.dependencies.next,'16.4.1');assert.equal(pkg.devDependencies['eslint-config-next'],'16.4.1');
 const lock=JSON.parse(await read('package-lock.json'));
 for(const name of ['react','react-dom','react-server-dom-webpack','next']){
  const installed=JSON.parse(await read(`node_modules/${name}/package.json`));
  assert.equal(installed.version,lock.packages[`node_modules/${name}`].version);
 }
 for(const group of ['dependencies','devDependencies'])assert.deepEqual(lock.packages[''][group],pkg[group]);
});
