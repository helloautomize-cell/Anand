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


setTimeout(()=>$('#lg-hero').classList.add('go'),RM?0:100);
{const secs=$$('#lgart section'),links=$$('#lgtoc a'),art=$('#lgart'),bar=$('#lgbar');
 const f=()=>{let k=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<H*.35)k=i});links.forEach((l,i)=>l.classList.toggle('on',i===k));const r=art.getBoundingClientRect();bar.style.transform=`scaleX(${clamp((H*.35-r.top)/r.height)})`};
 addEventListener('scroll',f,{passive:true});f()}

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

export function LegalFx() {
  useFx(fx);
  return null;
}
