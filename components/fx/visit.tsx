// @ts-nocheck
"use client";
import { useFx } from "@/lib/fx";
import { WA_PREFIX } from "@/lib/whatsapp";

const fx = () => {
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),sm=x=>{x=clamp(x);return x*x*(3-2*x)};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;let W=innerWidth,H=innerHeight;const FR=[];
const setTs=b=>{document.documentElement.classList.toggle('big',b);$('#tsA').classList.toggle('on',!b);$('#tsB').classList.toggle('on',b);try{localStorage.setItem('ahc-ts',b?'1':'0')}catch(e){}};
try{if(localStorage.getItem('ahc-ts')==='1')setTs(true)}catch(e){}
$('#tsA').onclick=()=>setTs(false);$('#tsB').onclick=()=>setTs(true);
const ist=new Date(Date.now()+(330+new Date().getTimezoneOffset())*60000),dow=ist.getDay(),mins=ist.getHours()*60+ist.getMinutes(),isOpen=dow>=1&&dow<=6&&mins>=600&&mins<1170;
const openText=isOpen?'Open now, until 7:30 pm':(dow===0?'Closed today, opens Monday 10 am':(mins<600?'Opens today at 10 am':'Closed now, opens 10 am'));
const fine=matchMedia('(pointer:fine)').matches,curEl=$('.cur'),ring=$('.cur .ring');let mxp=-100,myp=-100,rx=-100,ry=-100;
const WA=WA_PREFIX;
{
const prg=el=>{const r=el.getBoundingClientRect();return clamp(-r.top/(r.height-H))};
const mSec=$('#minutes'),msvg=$('#msvg'),mline=$('#mline'),mdot=$('#mdot'),mlab=$('#mlab');
const A1=$('#a1'),A2=$('#a2'),A3=$('#a3'),ats=$$('.at'),actBtns=$$('#acts3 button'),actBars=$$('#acts3 u');
const ncs=[0,1,2,3,4].map(i=>$('#nc'+i+' rect')),nsq=$('#nsq'),chips=$$('#chips>g');
const chipStart=[[130,90],[112,170],[150,250],[132,330]];
const steth=$('#steth'),tube=$('#tube'),rip=$('#ripples'),lub=$('#lub'),cks=$$('#checks .ck');const SPOTS=[[262,170],[338,212],[292,292]];
const brU=$('#brU'),brD=$('#brD'),opts=$$('#opts>g'),decide=$('#decide');
const NP=420,LX0=20,LX1=780,BY=470,LX=[...Array(NP)].map((_,i)=>LX0+(LX1-LX0)*i/(NP-1));
function yVoice(x,t){const tap=Math.min(1,(x-LX0)/70,(LX1-x)/70);const env=Math.pow(Math.abs(Math.sin(x*.0105+.5)),1.4)*(.55+.45*Math.sin(x*.031+t*.0007));return BY-tap*env*44*Math.sin(x*.21+t*.007)}
function yEcg(x){const u=((x-LX0)%190)/190;let y=0;
  if(u>.28&&u<.36)y=-9*Math.sin((u-.28)/.08*Math.PI);else if(u>=.42&&u<.44)y=(u-.42)/.02*10;else if(u>=.44&&u<.47)y=10-(u-.44)/.03*96;else if(u>=.47&&u<.505)y=-86+(u-.47)/.035*110;else if(u>=.505&&u<.53)y=24-(u-.505)/.025*24;else if(u>.62&&u<.74)y=-15*Math.sin((u-.62)/.12*Math.PI);
  const tap=Math.min(1,(x-LX0)/30,(LX1-x)/30);return BY+y*tap}
function yRoad(x){if(x<300)return BY;if(x>560)return 400;return BY+(400-BY)*sm((x-300)/260)}
const RD=LX.map(yRoad),EC=LX.map(yEcg);
function lerpCol(a,b,t){const h=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16));const A=h(a),B=h(b);return`rgb(${A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')})`}
let lastAct=-1;
function drawMinutes(t){
  const p=RM?.15:prg(mSec);
  const l1=clamp(p/.31),l2=clamp((p-.36)/.27),l3=clamp((p-.69)/.26);
  const wAB=sm((p-.30)/.08),wBC=sm((p-.62)/.08);
  /* line */
  let d='';for(let i=0;i<NP;i++){const x=LX[i];let y=yVoice(x,t)*(1-wAB)+EC[i]*wAB;y=y*(1-wBC)+RD[i]*wBC;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
  mline.setAttribute('d',d);
  mline.setAttribute('stroke',wBC>0?lerpCol('#D23133','#0B2A31',wBC):lerpCol('#0E5F6B','#D23133',wAB));
  const act=p<.33?0:p<.66?1:2;
  if(act!==lastAct){lastAct=act;ats.forEach((a,i)=>a.classList.toggle('on',i===act));actBtns.forEach((b,i)=>b.classList.toggle('on',i<=act));mlab.textContent=['Your voice','Your heartbeat','Your path'][act]}
  actBars[0].style.transform=`scaleX(${l1})`;actBars[1].style.transform=`scaleX(${l2})`;actBars[2].style.transform=`scaleX(${l3})`;
  /* act fades */
  A1.setAttribute('opacity',1-sm((p-.31)/.05));A2.setAttribute('opacity',sm((p-.33)/.05)*(1-sm((p-.64)/.05)));A3.setAttribute('opacity',sm((p-.66)/.05));
  /* act 1: words fly into notes */
  chips.forEach((c,i)=>{const k=sm((l1-.08-i*.18)/.2);const [sx,sy]=chipStart[i];const tx=+c.dataset.tx,ty=+c.dataset.ty;
    const x=sx+(tx-sx)*k,y=sy+(ty-sy)*k-Math.sin(k*Math.PI)*40;c.setAttribute('transform',`translate(${x.toFixed(1)} ${(y+Math.sin(t*.002+i)*4*(1-k)).toFixed(1)}) scale(${1-k*.35})`);c.setAttribute('opacity',(1-sm((k-.75)/.25)).toFixed(3))});
  ncs.forEach((r,i)=>r.setAttribute('width',(300*sm((l1-.2-i*.17)/.18)).toFixed(1)));
  nsq.style.strokeDashoffset=170*(1-sm((l1-.92)/.08));
  /* act 2: stethoscope over heart */
  {const u=Math.min(2.999,l2*3),k=Math.floor(u),fr=u-k,mv=sm(fr/.45),from=SPOTS[Math.max(0,k-1)],to=SPOTS[k];
   const st=k===0?[from[0]+120*(1-mv),from[1]-140*(1-mv)]:[from[0]+(to[0]-from[0])*mv,from[1]+(to[1]-from[1])*mv];
   const lift=Math.sin(mv*Math.PI)*14,cx=st[0],cy=st[1]-lift,hold=fr>.48&&l2>0&&l2<1;
   steth.setAttribute('transform',`translate(${cx.toFixed(1)} ${cy.toFixed(1)}) scale(${(1+lift*.004).toFixed(3)})`);
   tube.setAttribute('d',`M${cx+30} ${cy-44}C${cx+70} ${cy-150} ${cx+180} ${cy-60} 540 -40`);
   rip.setAttribute('transform',`translate(${cx} ${cy})`);rip.classList.toggle('on',hold);
   lub.setAttribute('x',cx-30);lub.setAttribute('y',cy+62);lub.setAttribute('opacity',hold?1:0)}
  cks.forEach((c,i)=>c.style.strokeDashoffset=20*(1-sm((l2-.1-i*.2)/.14)));
  const ecgOn=wAB*(1-wBC);mdot.setAttribute('opacity',ecgOn>.6?1:0);
  if(ecgOn>.6){const xx=LX0+((t*.22)%(LX1-LX0));const i=Math.round((xx-LX0)/(LX1-LX0)*(NP-1));mdot.setAttribute('cx',xx);mdot.setAttribute('cy',EC[i])}
  /* act 3: branches and options */
  brU.style.strokeDashoffset=340*(1-sm((l3-.05)/.25));brD.style.strokeDashoffset=300*(1-sm((l3-.1)/.25));
  opts.forEach((o,i)=>{const k=sm((l3-.2-i*.15)/.18);o.setAttribute('opacity',k);o.setAttribute('transform',o.getAttribute('transform').replace(/translate\([^)]*\)/,`translate(${572+(1-k)*30} ${[250,400,560][i]})`))});
  decide.setAttribute('opacity',sm((l3-.75)/.15));
}
actBtns.forEach((b,i)=>b.onclick=()=>{const top=mSec.offsetTop,h=mSec.offsetHeight-H;scrollTo({top:top+h*[.12,.48,.85][i],behavior:'smooth'})});
FR.push(()=>drawMinutes(performance.now()));if(RM)drawMinutes(0);
}


setTimeout(()=>$('#fv-hero').classList.add('go'),RM?0:120);
{const lio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');lio.unobserve(e.target)}}),{threshold:.2});$$('[data-line]').forEach(el=>lio.observe(el))}
{const DF=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];const ht=$('#htab');if(ht)ht.innerHTML=[1,2,3,4,5,6,0].map(d=>`<tr class="${d===dow?'today':''}"><td>${DF[d]}${d===dow?' · today':''}</td><td>${d===0?'Closed':'10 am to 7:30 pm'}</td></tr>`).join('')}
// checklist
{const G=[["Reports", [["All earlier test reports", "ECG, echo, TMT and blood tests"], ["Angiography CD or report", "If you have had one"], ["Discharge summaries", "From any hospital stay"], ["Letters from other doctors", ""]]], ["Medicines", [["Your current medicines", "The strips or a written list"], ["Any allergies", "Written down, if you have them"]]], ["For the day", [["A photo ID", ""], ["Your questions", "Write them down so nothing is forgotten"], ["A family member", "If you would like support"]]]];let saved=[];try{saved=JSON.parse(localStorage.getItem('ahc-bring')||'[]')}catch(e){}
 let n=0;$('#fvlist').innerHTML=G.map(([k,items])=>`<div class="fv-grp"><span class="k">${k}</span><div class="fv-list">${items.map(([t,s])=>{const i=n++;return`<label data-rv><input type="checkbox" value="${i}" ${saved.includes(i)?'checked':''}><span class="bx"><svg viewBox="0 0 14 14"><path d="M2 7.5 5.5 11 12 3.5"/></svg></span><span><span class="t">${t}</span>${s?`<small>${s}</small>`:''}</span></label>`}).join('')}</div></div>`).join('');
 const tot=n,names=G.flatMap(g=>g[1].map(x=>x[0]));$('#fvof').textContent=`of ${tot} packed`;
 const wa=$('#fvwa');
 function upd(){const on=$$('#fvlist input:checked').map(i=>+i.value);try{localStorage.setItem('ahc-bring',JSON.stringify(on))}catch(e){}
  const c=on.length;$('#fvn').textContent=c;$('#fvfg').style.strokeDashoffset=1-c/tot;
  const [h,p]=c===0?["Let's get<br><em>you ready.</em>",'Tick each item as you put it in your bag.']:c<tot?['Nearly<br><em>there.</em>',`${tot-c} more to go. Missing reports? Bring what you have.`]:['All<br><em>packed.</em>','You are ready for your visit. See you at the clinic.'];
  $('#fvh').innerHTML=h;$('#fvp').textContent=p;
  wa.href=WA+encodeURIComponent('Hello, I would like to book my first visit with Dr. Anand Yadav.')}
 $('#fvlist').addEventListener('change',upd);$('#fvrs').onclick=()=>{$$('#fvlist input').forEach(i=>i.checked=false);upd()};upd()}

const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('[data-rv],h2,[data-io]').forEach(el=>rio.observe(el));
if(fine&&!RM){addEventListener('pointermove',e=>{mxp=e.clientX;myp=e.clientY});$$('[data-cur]').forEach(el=>{el.addEventListener('pointerenter',()=>curEl.classList.add('big'));el.addEventListener('pointerleave',()=>curEl.classList.remove('big'))})}
const hdr=$('#hdr'),prog=$('#prog'),mbar=$('#mbar'),hdrSecs=$$('[data-hdr]');let lastHdrY=0;
function frame(){const y=scrollY,docH=document.documentElement.scrollHeight-H;prog.style.transform=`scaleX(${clamp(y/docH)})`;
  let mode='l';for(const s of hdrSecs){const r=s.getBoundingClientRect();if(r.top<=50&&r.bottom>50){mode=s.dataset.hdr;break}}
  hdr.classList.toggle('float',y>30);hdr.classList.toggle('dk',mode==='d'&&y>30);
  if(Math.abs(y-lastHdrY)>10){hdr.classList.toggle('hide',y>lastHdrY&&y>700);lastHdrY=y}
  mbar.classList.toggle('on',y>H*.7);
  if(!RM)FR.forEach(f=>f(y));
  if(fine&&!RM){rx+=(mxp-rx)*.2;ry+=(myp-ry)*.2;ring.style.transform=`translate(${rx}px,${ry}px)`}
  requestAnimationFrame(frame)}
addEventListener('resize',()=>{W=innerWidth;H=innerHeight});
requestAnimationFrame(frame);

})();
};

export function VisitFx() {
  useFx(fx);
  return null;
}
