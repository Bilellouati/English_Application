// Cloudflare Worker: English Boost optional OpenAI-powered coach.
// Set environment secrets OPENAI_API_KEY and COACH_PASSCODE using Cloudflare dashboard.
// Set ALLOWED_ORIGIN to the precise GitHub Pages origin, e.g. https://bilellouati.github.io
// Never publish API keys in GitHub or the PWA.
export default {
 async fetch(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = env.ALLOWED_ORIGIN || 'https://bilellouati.github.io';
  const cors = {'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Headers':'Content-Type, X-Coach-Passcode','Access-Control-Allow-Methods':'POST, OPTIONS','Vary':'Origin','Content-Type':'application/json'};
  const respond=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:cors});
  if(origin!==allowed) return new Response('Forbidden',{status:403});
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(request.method!=='POST')return respond({error:'POST only'},405);
  if(!env.OPENAI_API_KEY || !env.COACH_PASSCODE)return respond({error:'Backend secrets not configured'},503);
  if(request.headers.get('X-Coach-Passcode')!==env.COACH_PASSCODE)return respond({error:'Incorrect passcode'},401);
  const size=Number(request.headers.get('Content-Length')||0);if(size>20000)return respond({error:'Request too large'},413);
  let incoming;
  try{incoming=await request.json()}catch{return respond({error:'Invalid JSON'},400)}
  if(!Array.isArray(incoming.messages))return respond({error:'Invalid message list'},400);
  const history=incoming.messages.slice(-10).filter(x=>['user','assistant'].includes(x.role)&&typeof x.content==='string').map(x=>({role:x.role,content:x.content.slice(0,1800)}));
  if(!history.length)return respond({error:'Empty chat'},400);
  const instructions='You are English Boost, an encouraging yet concise English tutor. Help an intermediate learner improve everyday conversation, vocabulary, speaking confidence, and clear expression. Correct actual errors without changing the intended meaning. Give a natural improved sentence, a short explanation, and one follow-up question. If answering non-English questions, keep answers practical and accurate. Never claim to have listened to audio you have not received.';
  try {
   const reply=await fetch('https://api.openai.com/v1/responses',{
    method:'POST',headers:{'Authorization':'Bearer '+env.OPENAI_API_KEY,'Content-Type':'application/json'},
    body:JSON.stringify({model:'gpt-4.1-mini',instructions,input:history,max_output_tokens:400})
   });
   const obj=await reply.json();if(!reply.ok)return respond({error:'AI provider failed ('+reply.status+')'},502);
   const answer=(obj.output||[]).flatMap(x=>x.content||[]).filter(x=>x.type==='output_text').map(x=>x.text).join('\n').trim();
   if(!answer)return respond({error:'AI returned no text'},502);
   return respond({reply:answer});
  } catch(e){return respond({error:'AI service unreachable'},502)}
 }
};
