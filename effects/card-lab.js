/* NAVI CHARACTER — Holo Card Lab
 * Inspired by LerSent001/holo-card's layered parallax approach.
 * Independent vanilla implementation for GitHub Pages: no external runtime dependency.
 */
(function(){
  'use strict';
  const lab=document.querySelector('#cardLab');
  if(!lab)return;

  // On the main NAVI CHARACTER page, CARD LAB is now a standalone page.
  // Open it in a separate browser tab and keep the embedded legacy section inactive.
  const mainTabs=document.querySelector('.mode-tabs');
  if(mainTabs){
    mainTabs.addEventListener('click',event=>{
      const cardButton=event.target.closest('[data-mode="cards"]');
      if(!cardButton)return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.open('card-lab.html','_blank','noopener');
    },true);
  }

  const type=lab.querySelector('#cardAssetType');
  const asset=lab.querySelector('#cardAsset');
  const style=lab.querySelector('#cardStyle');
  const bg=lab.querySelector('#cardBackground');
  const holo=lab.querySelector('#cardHologram');
  const card=lab.querySelector('#holoCard');
  const image=lab.querySelector('#holoCardImage');
  const name=lab.querySelector('#holoCardName');
  const kind=lab.querySelector('#holoCardType');
  const status=lab.querySelector('#cardLabStatus');
  const flip=lab.querySelector('#cardFlip');
  const random=lab.querySelector('#cardRandom');
  const root='https://tt-sensei.github.io/navi-character-/assets/web/';
  const cardRoot='https://tt-sensei.github.io/navi-character-/assets/fantasy/cards/';
  const cardBackgrounds={
    sunset:`${cardRoot}backgrounds/sunset.jpeg`,
    'starry-sky':`${cardRoot}backgrounds/starry-sky.jpeg`,
    waterfall:`${cardRoot}backgrounds/waterfall.jpeg`,
    grassland:`${cardRoot}backgrounds/grassland.jpeg`,
    hill:`${cardRoot}backgrounds/hill.jpeg`,
    volcano:`${cardRoot}backgrounds/volcano.jpeg`,
    forest:`${cardRoot}backgrounds/forest.jpeg`,
    palace:`${cardRoot}backgrounds/palace.jpeg`
  };
  const frames={
    normal:`${cardRoot}frame/16D0EC23-AE97-4C21-9750-765CCED5B0DE_L0_001%20-%20%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF.png`,
    rare:`${cardRoot}frame/95c63908-e79e-4ec7-8c3a-1608dc052dc0.png`,
    'super-rare':`${cardRoot}frame/super-rare.png`
  };
  const assets={
    character:(typeof characters!=='undefined'?characters:[]).flatMap(c=>c.fullbody.slice(0,5).map(p=>({value:`character:${c.id}:${p}`,label:`${c.label}｜${p}`,url:`${root}characters/${c.id}/fullbody/${p}.webp`,name:c.label,type:'NAVI CHARACTER'}))),
    fantasy:(typeof fantasyCharacters!=='undefined'?fantasyCharacters:[]).map(c=>({value:`fantasy:${c.id}`,label:`${c.label}｜${c.job}`,url:`${root}fantasy/${c.standing}.webp`,name:`${c.label}｜${c.job}`,type:'FANTASY NAVI'})),
    monster:(typeof fantasyMonsterSets!=='undefined'?fantasyMonsterSets:[]).flatMap(set=>set.names.map(n=>({value:`monster:${set.id}:${n}`,label:`${n.replace(/-/g,' ')}｜${set.label}`,url:`${root}fantasy/${set.path}/${n}.webp`,name:n.replace(/-/g,' '),type:set.label})))
  };
  const styleLabels={normal:'NORMAL',holo:'RARE',rainbow:'SUPER RARE'};
  const bgLabels={sunset:'夕焼け','starry-sky':'星空',waterfall:'滝',grassland:'草原',hill:'丘',volcano:'火山',forest:'森',palace:'宮殿'};
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  let orientationBound=false;
  function escapeHtml(s){return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));}
  function current(){return (assets[type.value]||[]).find(x=>x.value===asset.value)||(assets[type.value]||[])[0];}
  function prepareSelects(){
    if(style)style.innerHTML=Object.entries(styleLabels).map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
    if(bg)bg.innerHTML=Object.entries(bgLabels).map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
  }
  function fillAssets(){
    const list=assets[type.value]||[];
    asset.innerHTML=list.map(x=>`<option value="${escapeHtml(x.value)}">${escapeHtml(x.label)}</option>`).join('');
    setCard(list[0]);
  }
  function setCard(item,reset=true){
    if(!item)return;
    image.src=item.url;
    image.alt=item.name;
    name.textContent=item.name;
    kind.textContent=styleLabels[style.value]||item.type;
    card.dataset.bg=bg.value;
    card.dataset.holo=holo.value;
    card.dataset.rarity=style.value;
    card.style.setProperty('--card-bg-image',`url("${cardBackgrounds[bg.value]||cardBackgrounds.sunset}")`);
    card.style.setProperty('--card-frame-image',`url("${frames[style.value]||frames.normal}")`);
    card.classList.remove('card-style-normal','card-style-holo','card-style-rainbow','is-flipped');
    card.classList.add(`card-style-${style.value}`);
    if(reset)resetTilt();
    image.onerror=()=>status.textContent='画像を読み込めませんでした。catalog.jsonのWebPを確認してください。';
    image.onload=()=>status.textContent=`${styleLabels[style.value]}｜${bgLabels[bg.value]}。指・マウス・端末の傾きでホログラムが動きます。`;
    if(!orientationBound&&!reduced)bindOrientation();
  }
  function resetTilt(){
    card.style.setProperty('--mx',0);card.style.setProperty('--my',0);card.style.setProperty('--depth',0);
    card.style.transform=card.classList.contains('is-flipped')?'rotateY(180deg)':'rotateX(0deg) rotateY(0deg)';
  }
  function applyTilt(x,y){
    if(reduced)return;
    const nx=Math.max(-1,Math.min(1,x)),ny=Math.max(-1,Math.min(1,y));
    card.style.setProperty('--mx',(nx*100).toFixed(2));
    card.style.setProperty('--my',(ny*100).toFixed(2));
    card.style.setProperty('--depth',Math.min(1,Math.sqrt(nx*nx+ny*ny)).toFixed(3));
    const rx=(-ny*14).toFixed(2),ry=(nx*18+(card.classList.contains('is-flipped')?180:0)).toFixed(2);
    card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function pointerTilt(e){const r=card.getBoundingClientRect();applyTilt((e.clientX-r.left)/r.width-.5,(e.clientY-r.top)/r.height-.5);}
  function flipCard(){
    card.classList.toggle('is-flipped');resetTilt();
    status.textContent=card.classList.contains('is-flipped')?'カード裏面。もう一度押すと表面に戻ります。':'カード表面。';
  }
  function randomize(){
    const keys=['character','fantasy','monster'];
    type.value=keys[Math.floor(Math.random()*keys.length)];fillAssets();
    const list=assets[type.value]||[];
    if(list.length)asset.value=list[Math.floor(Math.random()*list.length)].value;
    style.value=['normal','holo','rainbow'][Math.floor(Math.random()*3)];
    const backgrounds=Object.keys(cardBackgrounds);bg.value=backgrounds[Math.floor(Math.random()*backgrounds.length)];
    holo.value=['soft','strong','none'][Math.floor(Math.random()*3)];setCard(current());
  }
  async function requestMotionPermission(){
    try{
      if(typeof DeviceOrientationEvent==='undefined')return;
      if(typeof DeviceOrientationEvent.requestPermission==='function'){
        const result=await DeviceOrientationEvent.requestPermission();
        if(result!=='granted')return;
      }
      bindOrientation(true);
    }catch(err){}
  }
  function bindOrientation(force=false){
    if(orientationBound&&!force)return;
    if(typeof DeviceOrientationEvent==='undefined')return;
    window.addEventListener('deviceorientation',e=>{
      const gamma=Math.max(-45,Math.min(45,e.gamma||0))/45;
      const beta=Math.max(-45,Math.min(45,(e.beta||0)-35))/45;
      applyTilt(gamma,beta);
    },{passive:true});
    orientationBound=true;
  }
  type.addEventListener('change',fillAssets);
  asset.addEventListener('change',()=>setCard(current()));
  [style,bg,holo].forEach(el=>el.addEventListener('change',()=>setCard(current(),false)));
  flip.addEventListener('click',flipCard);random.addEventListener('click',randomize);
  card.addEventListener('pointermove',pointerTilt,{passive:true});
  card.addEventListener('pointerleave',resetTilt);card.addEventListener('pointercancel',resetTilt);
  card.addEventListener('dblclick',flipCard);card.addEventListener('pointerdown',requestMotionPermission,{once:true});
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipCard();}});
  prepareSelects();type.value='monster';fillAssets();
  if((assets.monster||[]).length){
    const preferred=assets.monster.find(x=>x.value.includes('komorin-little-night-bat'))||assets.monster[0];
    asset.value=preferred.value;style.value='rainbow';bg.value='starry-sky';holo.value='strong';setCard(preferred);
  }
})();
