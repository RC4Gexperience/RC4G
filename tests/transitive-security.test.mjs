import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import {readFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import vm from 'node:vm';
const require=createRequire(import.meta.url);
test('Drizzle legacy TS loader still transforms typed configuration after scoped esbuild update',async()=>{
 const core=require('@esbuild-kit/core-utils');
 const mod={exports:{}};
 const result=core.transformSync('export const answer: number = 42;','fixture-config.cts');
 vm.runInNewContext(result.code,{module:mod,exports:mod.exports});
 assert.equal(mod.exports.answer,42);
 const esm=await core.transform('export const answer: number = 42;','fixture-config.mts');
 const loaded=await import('data:text/javascript;base64,'+Buffer.from(esm.code).toString('base64'));
 assert.equal(loaded.answer,42);
 const coreRequire=createRequire(require.resolve('@esbuild-kit/core-utils'));
 assert.equal(coreRequire('esbuild/package.json').version,'0.25.12');
});
test('compiled image route rejects metadata-service URLs in workerd without outbound access',async()=>{
 const {workerLab}=await import('./worker-lab.mjs');
 const lab=workerLab();
 try {
  const response=await lab.dispatchFetch('http://localhost/_vinext/image?url=http%3A%2F%2F169.254.169.254%2Flatest%2Fmeta-data%2F&w=640&q=75');
  assert.equal(response.status,400);
 } finally { await lab.dispose(); }
});

test('font and OG ZIP readers use patched fflate with compatible round trip',()=>{
 for(const parent of ['satori','@shuding/opentype.js']) {
  const fromParent=createRequire(require.resolve(parent));
  assert.equal(JSON.parse(readFileSync(join(dirname(fromParent.resolve('fflate')),'../package.json'),'utf8')).version,'0.7.5');
  const {zipSync,unzipSync}=fromParent('fflate');
  const bytes=new TextEncoder().encode('RC4G regression fixture');
  assert.deepEqual(unzipSync(zipSync({'fixture.txt':bytes}))['fixture.txt'],bytes);
 }
});
