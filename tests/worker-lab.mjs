import {Miniflare,convertV4MiniflareOptions} from 'miniflare';
import {readdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
export function workerLab() {
 const root=fileURLToPath(new URL('../dist/server/',import.meta.url));
 const files=readdirSync(root,{recursive:true}).filter(p=>p.endsWith('.js'));
 files.sort((a,b)=>(a==='index.js'?-1:b==='index.js'?1:0));
 return new Miniflare(convertV4MiniflareOptions({
  modules:files.map(p=>({type:'ESModule',path:join(root,p)})),
  modulesRoot:root,
  compatibilityDate:'2026-10-12',compatibilityFlags:['nodejs_compat'],
  serviceBindings:{ASSETS:async()=>new Response('Not found',{status:404})},
  outboundService:async()=>{throw new Error('External network disabled in regression lab');},
 }));
}

