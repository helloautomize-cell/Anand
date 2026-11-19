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
const TR=[
 {k:'cabg',cat:'Heart surgery',n:'Bypass surgery',e:'(CABG)',nm:'Bypass <em>surgery</em>',f:'For blocked heart arteries, when a stent is not the best option.',d:'A healthy blood vessel is used to build a new route around the blocked part, so blood reaches the heart muscle again.',tags:['Blocked arteries','Chest pain on effort','Multiple blockages'],j:['Angiography and tests, then the plan explained to you and your family','Surgery, followed by close monitoring in the ICU','Walking, breathing exercises and reviews until you are back to routine']},
 {k:'angio',cat:'Arteries',n:'Angiography and angioplasty',e:'',nm:'Angioplasty and <em>stents</em>',f:'To see inside the heart arteries, and open a narrowing from the inside.',d:'A thin tube shows exactly where an artery is narrowed. If needed, a balloon opens it and a stent keeps it open.',tags:['Blocked arteries','Chest pain','Abnormal TMT'],j:['ECG, echo and a clear reason for the test','A thin tube through the wrist or groin, usually without general anaesthesia','Medicines, a short stay and lifestyle changes']},
 {k:'valve',cat:'Heart surgery',n:'Valve repair and replacement',e:'',nm:'Valve <em>repair</em> and replacement',f:'For a valve that leaks or has become tight.',d:'Your own valve is repaired whenever possible. If not, it is replaced with a tissue or mechanical valve, chosen with you.',tags:['Leaking valve','Narrow valve','Rheumatic heart disease','Breathlessness'],j:['Echo to see how the valve works, and the choices explained','Repair or replacement surgery','Recovery plan and, if needed, blood thinner follow-up']},
 {k:'child',cat:'Children',n:"Children's heart surgery",e:'',nm:'Small <em>hearts</em>',f:'For heart defects children are born with, and those that develop later.',d:'Holes in the heart and other defects can often be corrected. Parents are walked through every step, in plain words.',tags:['Hole in the heart','Born with a heart defect','Poor growth or breathlessness'],j:['A gentle consultation with the child and parents','Surgery planned around the child','Growth and heart checks as they grow up']},
 {k:'mini',cat:'Heart surgery',n:'Minimally invasive and complex surgery',e:'',nm:'Smaller cuts, <em>complex</em> cases',f:'For selected patients who may benefit from smaller cuts, and for more complex heart conditions.',d:'Where it suits the patient, surgery through smaller cuts can mean less pain and a faster return home. Complex and repeat surgeries are planned in detail.',tags:['Selected valve and bypass cases','Repeat surgery','Complex conditions'],j:['Detailed scans and a plan made for you','Surgery by the approach that suits you best','A recovery plan matched to the operation']},
 {k:'vasc',cat:'Vessels',n:'Vascular surgery and varicose veins',e:'',nm:'Every road the <em>blood</em> travels',f:'For blocked leg arteries, aneurysms and varicose veins.',d:'From swollen, aching veins to arteries that cause leg pain when you walk, treatment ranges from stockings and medicines to surgery.',tags:['Varicose veins','Leg pain when walking','Aneurysm','Dialysis access'],j:['Doppler scan of the legs','The right treatment for the vessel, from simple to surgical','Walking plan and follow-up scans']},
 {k:'lung',cat:'Chest',n:'Lung and chest surgery',e:'',nm:'Lungs and <em>chest</em>',f:'For conditions of the lungs, chest wall and the space around the lungs.',d:'As a cardiothoracic surgeon, Dr. Yadav also operates on the lungs and chest, often working with chest physicians.',tags:['Lung lesions','Fluid or air around the lung','Chest injuries'],j:['CT scan and breathing tests','Thoracic surgery','Breathing exercises and reviews']},
 {k:'check',cat:'Tests and prevention',n:'Heart check-ups and second opinions',e:'',nm:'Start with a <em>check-up</em>',f:'For symptoms, risk factors like diabetes and BP, or a second opinion before surgery.',d:'A full consultation, the tests you actually need, and honest advice on whether you need treatment at all.',tags:['Chest pain','Diabetes or BP','Family history','Second opinion'],j:['Your story, your reports, your worries','Examination, ECG and other tests if needed','A clear plan, or reassurance']},
 {k:'care',cat:'Before and after',n:'Emergency care, ICU and recovery',e:'',nm:'Recovery, <em>step by step</em>',f:'Urgent heart care, monitoring after surgery and rehabilitation.',d:'Close monitoring after surgery, then a step-by-step plan to get you home and active again. In an emergency, call 108 or 112 first.',tags:['After heart surgery','Cardiac rehabilitation','Urgent heart care'],j:['A clear plan before you go home','Reviews in the first weeks','Back to work, walking and daily life']}
];
const TL={"cabg": "/treatments/bypass-surgery/", "angio": "/treatments/angioplasty/", "valve": "/treatments/valve-surgery/", "child": "/treatments/childrens-heart-surgery/", "mini": "/treatments/minimally-invasive-surgery/", "vasc": "/treatments/vascular-surgery/", "lung": "/treatments/lung-and-chest-surgery/", "check": "/treatments/check-ups-second-opinion/", "care": "/treatments/follow-up-care/"};
const TOLD=[['I have blocked heart arteries',['cabg','angio'],'Heart'],['I have a leaking or narrow valve',['valve'],'Heart'],["my child has a hole in the heart",['child'],'Children'],['I have chest pain and want to know why',['check','angio'],'Not sure'],['I have swollen, twisted leg veins',['vasc'],'Legs'],['my legs hurt when I walk',['vasc'],'Legs'],['I have a lung or chest problem',['lung'],'Chest'],['I have been advised surgery and want a second opinion',['check','cabg'],'Opinion']];
const tlist=$('#tlist'),tpanel=$('#tpanel'),arts=$$('#tpArt .art'),told=$('#told'),pop=$('#pop'),pickT=$('#pickT');

tlist.innerHTML=TR.map((t,i)=>`<div class="tr" data-i="${i}"><button class="th" aria-expanded="false"><span class="tn">${t.n} ${t.e?`<em>${t.e}</em>`:''}</span><span class="tg"><i class="m"></i>${t.cat}</span><i class="pl"></i></button><div class="tb"><div class="tbi"><div><div><p>${t.d}</p><div class="tags">${t.tags.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="side2"><small>Often for</small><b>${t.f}</b><a class="btn b-red b-sm" data-cur target="_blank" rel="noopener" href="${WA+encodeURIComponent('Hello, I would like to ask Dr. Anand Yadav about '+t.n.toLowerCase()+'.')}">Ask about this<span class="ar"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span></a><a href="${TL[t.k]}" style="display:inline-block;margin-top:14px;font-size:.88rem;font-weight:500;text-decoration:underline;text-underline-offset:4px">Read the full guide</a></div></div></div></div></div>`).join('');
const trs=$$('#tlist .tr');let shown=-1;
function showT(i){if(i===shown)return;shown=i;const t=TR[i];tpanel.classList.add('sw');tpanel.classList.remove('go');
  setTimeout(()=>{$('#tpCat').textContent=t.cat;$('#tpName').innerHTML=t.nm;$('#tpFor').textContent=t.f;$('#j1').textContent=t.j[0];$('#j2').textContent=t.j[1];$('#j3').textContent=t.j[2];
   arts.forEach(a=>a.classList.toggle('on',a.dataset.k===t.k));tpanel.classList.remove('sw');void tpanel.offsetWidth;tpanel.classList.add('go')},260)}
function openT(i,scroll){trs.forEach((r,j)=>{const o=j===i&&!(r.classList.contains('open')&&!scroll);r.classList.toggle('open',o);r.querySelector('.th').setAttribute('aria-expanded',o)});showT(i)}
trs.forEach((r,i)=>{r.querySelector('.th').onclick=()=>openT(i);r.addEventListener('pointerenter',()=>{if(fine)showT(i)})});
tlist.addEventListener('pointerleave',()=>{const o=trs.findIndex(r=>r.classList.contains('open'));if(o>=0)showT(o)});
pop.innerHTML=TOLD.map((o,i)=>`<button role="option" data-i="${i}">${o[0]}<small>${o[2]}</small></button>`).join('');
function choose(i,first){const o=TOLD[i];pickT.textContent=o[0];$$('#pop button').forEach((b,j)=>b.classList.toggle('on',j===i));
  trs.forEach((r,j)=>r.classList.toggle('match',o[1].includes(TR[j].k)));tlist.classList.add('filt');const k=TR.findIndex(t=>t.k===o[1][0]);openT(k,true);told.classList.remove('open');
  if(!first&&W<=980){setTimeout(()=>trs[k].scrollIntoView({behavior:'smooth',block:'center'}),300)}}
$('#pick').onclick=e=>{e.stopPropagation();told.classList.toggle('open')};
$$('#pop button').forEach(b=>b.onclick=e=>{e.stopPropagation();choose(+b.dataset.i)});
document.addEventListener('click',e=>{if(!told.contains(e.target))told.classList.remove('open')});
tpanel.addEventListener('pointermove',e=>{const r=tpanel.getBoundingClientRect();tpanel.style.setProperty('--mx',e.clientX-r.left+'px');tpanel.style.setProperty('--my',e.clientY-r.top+'px')});
choose(0,true);
}


// hero
setTimeout(()=>$('#tp-hero').classList.add('go'),RM?0:120);
const tart=$('#tpart'),hotEls=$$('#tpart [data-k]');
const setHot=k=>{tart.classList.toggle('dim',!!k);hotEls.forEach(g=>g.classList.toggle('hot',g.dataset.k===k));$$('#tpart .tp-co,#tpchips a').forEach(a=>a.classList.toggle('hot',a.dataset.k===k))};
$$('#tpart .tp-co,#tpchips a').forEach(a=>{a.addEventListener('pointerenter',()=>setHot(a.dataset.k));a.addEventListener('pointerleave',()=>setHot(null));
  a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'center'});t.classList.remove('flash');void t.offsetWidth;t.classList.add('flash')}})});
// carousel
const car=$('#tpcar'),bar=$('#tpbar'),prev=$('#tpprev'),next=$('#tpnext');
const upd=()=>{const max=car.scrollWidth-car.clientWidth;const p=max>0?car.scrollLeft/max:1;bar.style.transform=`scaleX(${.12+.88*p})`;prev.disabled=car.scrollLeft<4;next.disabled=car.scrollLeft>max-4};
car.addEventListener('scroll',upd,{passive:true});upd();
const step=()=>{const c=car.querySelector('.tp-card');return c.offsetWidth+18};
prev.onclick=()=>car.scrollBy({left:-step(),behavior:'smooth'});next.onclick=()=>car.scrollBy({left:step(),behavior:'smooth'});
let dx=0,sl=0,down=false,moved=false;
car.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;dx=e.clientX;sl=car.scrollLeft;car.classList.add('drag')});
addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-dx;if(Math.abs(d)>4)moved=true;car.scrollLeft=sl-d});
addEventListener('pointerup',()=>{if(!down)return;down=false;car.classList.remove('drag');const s=step();car.scrollTo({left:Math.round(car.scrollLeft/s)*s,behavior:'smooth'})});
// options
const OP=[
 {h:'Medicines and <em>lifestyle</em>',a:'Tablets to control blood pressure, cholesterol, sugar and heart rhythm, with changes in food, activity and smoking.',b:'Often the first step, and sometimes all that is needed, especially when a problem is found early.',c:'No hospital stay. Regular reviews to see how you are doing.'},
 {h:'A procedure through a <em>tube</em>',a:'A thin tube is passed through a blood vessel in the wrist or groin, for example to open a narrowed artery with a balloon and stent.',b:'For some narrowings and blockages where a stent is suitable and likely to help.',c:'Usually a short hospital stay, with most people walking the same or next day.'},
 {h:'<em>Surgery</em>',a:'An operation such as bypass or valve repair, done by the surgical team at the hospital.',b:'When there are several blockages, a valve problem, or when a stent is not the right option.',c:'A hospital stay and a few weeks of gradual recovery at home, with follow-up at the clinic.'}];
const seg=$$('#tpseg button'),ind=$('#tpind'),ovis=$$('#tpovis>g'),oc=$('#tpocard');let oK=-1;
function setO(i,first){if(i===oK)return;oK=i;seg.forEach((b,j)=>b.classList.toggle('on',j===i));const b=seg[i];
 if(W>900){ind.style.width=b.offsetWidth+'px';ind.style.transform=`translateX(${b.offsetLeft-6}px)`;ind.style.height=''}else{ind.style.height=b.offsetHeight+'px';ind.style.transform=`translateY(${b.offsetTop-6}px)`}
 ovis.forEach((g,j)=>g.classList.toggle('on',j===i));const o=OP[i];
 const f=()=>{$('#tpoh').innerHTML=o.h;$('#tpo1').textContent=o.a;$('#tpo2').textContent=o.b;$('#tpo3').textContent=o.c;oc.classList.remove('sw')};if(first)f();else{oc.classList.add('sw');setTimeout(f,260)}}
seg.forEach((b,i)=>b.onclick=()=>setO(i));setO(0,true);
addEventListener('resize',()=>{const k=oK;oK=-1;setO(k,true)});
if(document.fonts)document.fonts.ready.then(()=>{const k=oK;oK=-1;setO(k,true)});

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

export function TreatmentsFx() {
  useFx(fx);
  return null;
}
