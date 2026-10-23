import test from 'node:test';
import assert from 'node:assert/strict';
import {workerLab} from './worker-lab.mjs';
test('compiled Worker returns the real RC4G page without a database or external request',async()=>{
 const lab=workerLab();
 try {
 const response=await lab.dispatchFetch('http://localhost/',{headers:{accept:'text/html'}});
 assert.equal(response.status,200);
 assert.match(response.headers.get('content-type')??'',/text\/html/);
 const html=await response.text();
 assert.match(html,/RC4G/);assert.match(html,/id="projet"/);assert.match(html,/rc4g\.fr/);
 assert.doesNotMatch(html,/Your site is taking shape/);
 } finally { await lab.dispose(); }
});
