/* NAVI CHARACTER — Card Lab / vanilla layered holo-card effect */
(function(){
  'use strict';
  const lab=document.querySelector('#cardLab');
  if(!lab)return;
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
  const assets={
    character:(typeof characters!=='undefined'?characters:[]).flatMap(c=>c.fullbody.slice(0,5).map(p=>({value:`character:${c.id}:${p}`,label:`${c.label}｜${p}`,url:`${root}characters/${c.id}/fullbody/${p}.webp`,name:c.label,type:'NAVI CHARACTER'}))),
    fantasy:(typeof fantasyCharacters!=='undefined'?fantasyCharacters:[]).map(c=>({value:`fantasy:${c.id}`,label:`${c.label}｜${c.job}`,url:`${root}fantasy/${c.standing}.webp`,name:`${c.label}｜${c.job}`,type:'FANTASY NAVI'})),
    monster:(typeof fantasyMonsterSets!=='undefined'?fantasyMonsterSets:[]).flatMap(set=>set.names.map(n=>({value:`monster:${set.id}:${n}`,label:`${n.replace(/-/g,' ')}｜${set.label}`,url:`${root}fantasy/${set.path}/${n}.webp`,name:n.replace(/-/g,' '),type:set.label})))
  };

  function fillAssets(){
    const list=assets[type.value]||[];
    asset.innerHTML=list.map(x=>`<option value="${escapeHtml(x.value)}">${escapeHtml(x.label)}</option>`).join('');
    setCard(list[0]);
  }
  function escapeHtml(s){return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\':'&#92;'}[c]));}
  function current(){return (assets[type.value]||[]).find(x=>x.value===asset.value)||assets[type.value]?.[0];}
  function setCard(item,reset=true){
    if(!item)return;
    image.src=item.url;
    image.alt=item.name;
    name.textContent=item.name;
    kind.textContent=item.type;
    card.dataset.bg=bg.value;
    card.dataset.holo=holo.value;
    card.classList.remove('card-style-normal','card-style-holo','card-style-rainbow');
    card.classList.add(`card-style-${style.value}`);
    if(reset){card.classList.remove('is-flipped');resetTilt();}
    image.onerror=()=>status.textContent='画像を読み込めませんでした。catalog.jsonの対応WebPを確認してください。';
    image.onload=()=>status.textContent='指やマウスでカードを動かして、レイヤーとホログラムを確認できます。';
  }
  function resetTilt(){card.style.setProperty('--mx',0);card.style.setProperty('--my',0);card.style.transform=card.classList.contains('is-flipped')?'rotateY(180deg)':'rotateY(0deg)';}
  function tilt(e){
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    const mx=Math.max(-1,Math.min(1,x))*100;
    const my=Math.max(-1,Math.min(1,y))*100;
    card.style.setProperty('--mx',mx);
    card.style.setProperty('--my',my);
    const rx=(-y*12).toFixed(2),ry=(x*14).toFixed(2);
    card.style.transform=`rotateX(${rx}deg) rotateY(${ry + (card.classList.contains('is-flipped')?180:0)}deg)`;
  }
  function flipCard(){
    card.classList.toggle('is-flipped');
    resetTilt();
    status.textContent=card.classList.contains('is-flipped')?'裏面です。もう一度「裏返す」を押すと表に戻ります。':'表面です。';
  }
  function randomize(){
    const keys=['character','fantasy','monster'];
    type.value=keys[Math.floor(Math.random()*keys.length)];
    fillAssets();
    const list=assets[type.value]||[];
    if(list.length){asset.value=list[Math.floor(Math.random()*list.length)].value;setCard(current());}
    style.value=['normal','holo','rainbow'][Math.floor(Math.random()*3)];
    bg.value=['blue','forest','night','sunset'][Math.floor(Math.random()*4)];
    holo.value=['soft','strong','none'][Math.floor(Math.random()*3)];
    setCard(current());
  }
  type.addEventListener('change',fillAssets);
  asset.addEventListener('change',()=>setCard(current()));
  [style,bg,holo].forEach(el=>el.addEventListener('change',()=>setCard(current(),false)));
  flip.addEventListener('click',flipCard);
  random.addEventListener('click',randomize);
  card.addEventListener('pointermove',tilt);
  card.addEventListener('pointerleave',resetTilt);
  card.addEventListener('pointercancel',resetTilt);
  card.addEventListener('dblclick',flipCard);
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipCard()}});

  document.querySelector('.mode-tabs')?.addEventListener('click',event=>{
    const cardButton=event.target.closest('[data-mode="cards"]');
    if(cardButton){
      event.preventDefault();
      event.stopImmediatePropagation();
      lab.hidden=false;
      ['.intro-card','#characterGrid','#libraryCard','#groupLibrary','#backgroundLibrary','.usage-card','#fantasyStage','#fantasyGroupLibrary','#monsterLibrary'].forEach(sel=>{const el=document.querySelector(sel);if(el)el.hidden=true;});
    }else{
      lab.hidden=true;
    }
  },true);

  type.value='monster';
  fillAssets();
  if((assets.monster||[]).length){
    const preferred=assets.monster.find(x=>x.value.includes('komorin-little-night-bat'))||assets.monster[0];
    asset.value=preferred.value;
    setCard(preferred);
  }
})();
