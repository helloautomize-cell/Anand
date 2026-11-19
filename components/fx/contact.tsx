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


setTimeout(()=>$('#ct-hero').classList.add('go'),RM?0:120);
const st=$('#ctstat');st.classList.toggle('on',isOpen);st.querySelector('span').textContent=openText;
const DN=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
$('#ctweek').innerHTML=[1,2,3,4,5,6,0].map(d=>`<div class="${d===0?'off':''} ${d===dow?'now':''}"><b>${DN[d]}</b><span>${d===0?'Closed':'10 to 7:30'}</span></div>`).join('');
{const p=dow===0?0:clamp((mins-600)/570);const di=$('#ctdi'),db=$('#ctdb');di.style.width='0%';db.style.left='0%';
 const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){di.style.width=p*100+'%';db.style.left=p*100+'%';io.disconnect()}});io.observe($('.ct-hrs'));
 const h=ist.getHours(),m=ist.getMinutes();$('#ctnow').textContent=dow===0?'Closed today':(p>0&&p<1?`Now ${((h+11)%12)+1}:${String(m).padStart(2,'0')} ${h<12?'am':'pm'}`:(mins<600?'Opens at 10':'Closed for today'))}
$$('.ct-cp').forEach(b=>b.onclick=()=>{const t=b.textContent;try{navigator.clipboard.writeText(b.dataset.copy)}catch(e){}b.textContent='Copied';setTimeout(()=>b.textContent=t,1600)});
// carousel
const car=$('#ctcar'),bar=$('#ctbar'),step=()=>car.querySelector('.ct-wc').offsetWidth+16;
$('#ctpv').onclick=()=>car.scrollBy({left:-step(),behavior:'smooth'});$('#ctnx').onclick=()=>car.scrollBy({left:step(),behavior:'smooth'});
car.addEventListener('scroll',()=>{const m=car.scrollWidth-car.clientWidth;bar.style.transform=`scaleX(${.2+.8*(m>0?car.scrollLeft/m:1)})`},{passive:true});
// form
const days=[];{let d=new Date(ist);for(let i=0;days.length<7&&i<14;i++){if(d.getDay()!==0)days.push(i===0?'Today':(i===1?'Tomorrow':d.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'})));d.setDate(d.getDate()+1)}}
if(!isOpen&&mins>=1170)days.shift();
$('#cfd').innerHTML=days.map(x=>`<option>${x}</option>`).join('');
let reason='First consultation';
$$('#cfr button').forEach(b=>b.onclick=()=>{$$('#cfr button').forEach(x=>x.classList.remove('on'));b.classList.add('on');reason=b.textContent;msg()});
const val=id=>$(id).value.trim();
function txt(){const n=val('#cfn'),p=val('#cfp'),m=val('#cfm');return `Hello, I would like to book a visit with Dr. Anand Yadav.\nName: ${n||'...'}\nPhone: ${p||'...'}\nAbout: ${reason}\nPreferred: ${$('#cfd').value}, ${$('#cft').value.toLowerCase()}`+(m?`\nNote: ${m}`:'')}
function msg(){const d=new Date();$('#ctbub').innerHTML='';$('#ctbub').append(txt());const s=document.createElement('small');s.textContent=d.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'});$('#ctbub').append(s)}
['#cfn','#cfp','#cfm','#cfd','#cft'].forEach(id=>$(id).addEventListener('input',msg));msg();
$('#ctform').addEventListener('submit',e=>{e.preventDefault();if(!val('#cfn')){$('#cfn').focus();return}const ph=val('#cfp').replace(/[^0-9]/g,'');if(!/^[6-9][0-9]{9}$/.test(ph)){$('#cfp').focus();$('#cfp').classList.add('bad');return}$('#cfp').classList.remove('bad');open(WA+encodeURIComponent(txt()),'_blank','noopener')});

// map: loads on its own when scrolled near, tap to interact (so page scrolling never gets trapped)
{const mw=$('#ctmw'),fr=mw.querySelector('iframe');const load=()=>{if(fr.src)return;fr.src=fr.dataset.src;fr.addEventListener('load',()=>mw.classList.add('ld'),{once:true})};
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){load();io.disconnect()}},{rootMargin:'300px 0px'});io.observe(mw)}else load();
 $('#cttap').onclick=()=>{load();mw.classList.add('live');fr.tabIndex=0};
 mw.addEventListener('mouseleave',()=>mw.classList.remove('live'))}

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

export function ContactFx() {
  useFx(fx);
  return null;
}
