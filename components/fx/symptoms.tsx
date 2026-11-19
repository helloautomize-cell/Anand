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
const SYM=[
 {x:545,y:385,sys:'heart',q:'Chest',h:'Chest pain or pressure',p1:'Tightness, heaviness or burning in the chest, sometimes spreading to the arm, jaw or back, especially on walking or climbing stairs.',p2:'This can be a sign of narrowed heart arteries. It needs a proper check, usually with an ECG and other tests.',u:'<b>Sudden or severe chest pain, with sweating or breathlessness?</b> Call 108 or 112 now.'},
 {x:450,y:410,sys:'lungs',q:'Breathing',h:'Breathlessness',p1:'Getting out of breath with less effort than before, needing more pillows at night, or waking up gasping.',p2:'A weak pump, a leaking or tight valve, or a lung problem can all cause it. Tests help find which.',u:'<b>Breathless at rest, or lips turning blue?</b> Call 108 or 112 now.'},
 {x:612,y:505,sys:'ecg',q:'Heartbeat',h:'Racing or uneven heartbeat',p1:'A thumping, fluttering or skipping feeling in the chest, sometimes with dizziness.',p2:'Often harmless, but sometimes a rhythm problem. An ECG or a 24 hour Holter can record it.',u:'<b>Palpitations with fainting or chest pain?</b> Call 108 or 112 now.'},
 {x:510,y:150,sys:'head',q:'Head',h:'Dizziness or fainting',p1:'Feeling light-headed on standing or exertion, or passing out without warning.',p2:'A narrow valve or a rhythm problem can reduce blood flow to the brain. It should always be checked.',u:'<b>Face drooping, weak arm, slurred speech?</b> These are stroke signs. Call 108 or 112 now.'},
 {x:430,y:1150,sys:'art',q:'Legs',h:'Leg pain when walking',p1:'Cramping in the calf or thigh that comes on with walking and eases with rest. Cold feet or slow-healing wounds.',p2:'This can mean narrowed leg arteries. A Doppler scan helps.',u:'<b>Sudden cold, pale, painful leg?</b> Call 108 or 112 now.'},
 {x:626,y:1180,sys:'vein',q:'Veins',h:'Swollen or twisted leg veins',p1:'Bulging blue veins, heaviness or aching after standing, itching or darkening skin near the ankle.',p2:'These are varicose veins. Treatments range from stockings to surgery.',u:'<b>Sudden swelling and pain in one leg?</b> It can be a clot. Seek urgent care.'},
 {x:415,y:1382,sys:'ankle',q:'Ankles',h:'Swollen ankles',p1:'Puffiness around the ankles or feet that is worse by evening and leaves a dent when pressed.',p2:'It can come from the heart, kidneys, veins or medicines. A check-up finds the cause.',u:'<b>Swelling with breathlessness at night?</b> See a doctor the same day.'}];
const bmap=$('#bmap'),ns='http://www.w3.org/2000/svg',slist=$('#slist'),symc=$('#symc'),sxEl=$('#sx'),shots=$('#shots'),sfocus=$('#sfocus'),SDUR=6000;
SYM.forEach((s,i)=>{const g=document.createElementNS(ns,'g');g.setAttribute('class','hot');g.innerHTML=`<circle class="p" cx="${s.x}" cy="${s.y}" r="17"/><circle class="c" cx="${s.x}" cy="${s.y}" r="13"/><circle cx="${s.x}" cy="${s.y}" r="52" fill="transparent"/>`;g.onclick=()=>{stopAuto();pick(i)};shots.appendChild(g);s.g=g;
 const b=document.createElement('button');b.type='button';b.innerHTML=`<span>${s.h}</span><small>${s.q}</small><i></i>`;b.onclick=()=>{stopAuto();pick(i)};slist.appendChild(b);s.b=b;s.sg=bmap.querySelector('.sys-'+s.sys)});
sxEl.style.setProperty('--dur',SDUR+'ms');
let cur=-1,sAuto=null;function pick(i,first){if(i===cur)return;cur=i;const s=SYM[i];
 SYM.forEach((o,j)=>{o.g.classList.toggle('act',j===i);o.b.classList.toggle('act',j===i);o.sg.classList.toggle('on',j===i);o.sg.classList.remove('draw')});
 void s.sg.getBBox();s.sg.classList.add('draw');clearTimeout(s.sg._t);s.sg._t=setTimeout(()=>s.sg.classList.remove('draw'),1700);
 sfocus.style.transform=`translate(${s.x}px,${s.y}px)`;$('#spotc').style.transform=`translate(${s.x}px,${s.y}px)`;
 if(slist.scrollWidth>slist.clientWidth+4)slist.scrollTo({left:s.b.offsetLeft-slist.clientWidth/2+s.b.offsetWidth/2,behavior:first?'auto':'smooth'});
 const fill=()=>{$('#sq').textContent=s.q;$('#sh').innerHTML=s.h.split(' ').map((w,k)=>`<span class="w" style="--i:${k}">${w}</span>`).join(' ');$('#sp1').textContent=s.p1;$('#sp2').textContent=s.p2;$('#su').innerHTML=s.u;
  $('#swa').href=WA+encodeURIComponent('Hello, I have '+s.h.toLowerCase()+' and would like to consult Dr. Anand Yadav.');symc.classList.remove('sw')};
 if(first)fill();else{symc.classList.add('sw');setTimeout(fill,260)}}
function stopAuto(){clearInterval(sAuto);sAuto=null;sxEl.classList.remove('auto')}
pick(0,true);
if(!RM){const sio=new IntersectionObserver(es=>es.forEach(e=>{if(!sxEl.classList.contains('auto'))return;
  if(e.isIntersecting&&!sAuto){const b=SYM[cur].b;b.classList.remove('act');void b.offsetWidth;b.classList.add('act');sAuto=setInterval(()=>pick((cur+1)%SYM.length),SDUR)}
  else if(!e.isIntersecting&&sAuto){clearInterval(sAuto);sAuto=null}}),{threshold:.45});sio.observe(sxEl)}else stopAuto();
}


setTimeout(()=>$('#sy-hero').classList.add('go'),RM?0:120);
{const N=240,X=i=>i/(N-1)*600;const beat=u=>{if(u>.28&&u<.34)return -10*Math.sin((u-.28)/.06*Math.PI);if(u>=.4&&u<.42)return (u-.4)/.02*12;if(u>=.42&&u<.45)return 12-(u-.42)/.03*110;if(u>=.45&&u<.48)return -98+(u-.45)/.03*130;if(u>=.48&&u<.5)return 32-(u-.48)/.02*32;if(u>.6&&u<.72)return -16*Math.sin((u-.6)/.12*Math.PI);return 0};
 const Y=x=>100+beat(((x)%200)/200);let d='';for(let i=0;i<N;i++)d+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(X(i)).toFixed(1);$('#syecgb').setAttribute('d',d);$('#syecg2').setAttribute('d',d);
 const e=$('#syecg'),bp=$('#sybpm');let t0=performance.now(),lb=0;
 FR.push(()=>{const t=performance.now()-t0,head=(t*.32)%660;let p='';for(let i=0;i<N;i++){const x=X(i);if(x>head)break;if(head-x>220)continue;p+=(p?'L':'M')+x.toFixed(1)+' '+Y(x).toFixed(1)}e.setAttribute('d',p);
  if(t-lb>1600){lb=t;bp.textContent=70+Math.round(Math.random()*6)}});
 if(RM)e.setAttribute('d',d)}
$$('.sy-rc,.sy-t,.sy-mc').forEach(c=>{c.addEventListener('click',()=>c.classList.toggle('on'));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();c.classList.toggle('on')}})});
{const car=$('#sycar'),st=()=>car.querySelector('.sy-mc').offsetWidth+16;$('#sypv').onclick=()=>car.scrollBy({left:-st(),behavior:'smooth'});$('#synx').onclick=()=>car.scrollBy({left:st(),behavior:'smooth'})}

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

export function SymptomsFx() {
  useFx(fx);
  return null;
}
