/* Monster Sticker Lab — silhouette-following finishes only */
(function(){
  'use strict';

  const lab=document.querySelector('#stickerLab');
  if(!lab)return;

  const monsterSelect=lab.querySelector('#stickerMonster');
  const edgeSelect=lab.querySelector('#stickerEdge');
  const effectSelect=lab.querySelector('#stickerEffect');
  const makeButton=lab.querySelector('#stickerMake');
  const randomButton=lab.querySelector('#stickerRandom');
  const sticker=lab.querySelector('#stickerPreview');
  const image=lab.querySelector('#stickerPreviewImage');
  const result=lab.querySelector('#stickerResult');

  const edgeOptions=[
    ['fantasy-sticker--edge-white','白'],
    ['fantasy-sticker--edge-sky','水色'],
    ['fantasy-sticker--edge-mint','ミント'],
    ['fantasy-sticker--edge-pink','ピンク'],
    ['fantasy-sticker--edge-purple','むらさき'],
    ['fantasy-sticker--edge-red','赤'],
    ['fantasy-sticker--edge-gold','金'],
    ['fantasy-sticker--edge-silver','銀']
  ];

  const effectOptions=[
    {id:'resin',label:'ぷっくり樹脂',classes:['fantasy-sticker--resin']},
    {id:'gloss',label:'つやキラ',classes:['fantasy-sticker--gloss']},
    {id:'holo',label:'輪郭ホログラム',classes:['fantasy-sticker--holo']},
    {id:'pearl',label:'偏光パール',classes:['fantasy-sticker--pearl']},
    {id:'resin-gloss',label:'ぷっくり＋つや',classes:['fantasy-sticker--resin','fantasy-sticker--gloss']},
    {id:'resin-holo',label:'ぷっくり＋ホロ',classes:['fantasy-sticker--resin','fantasy-sticker--holo']},
    {id:'resin-pearl',label:'ぷっくり＋パール',classes:['fantasy-sticker--resin','fantasy-sticker--pearl']},
    {id:'plain',label:'ふちだけ',classes:[]}
  ];

  const removable=[
    ...edgeOptions.map(x=>x[0]),
    'fantasy-sticker--resin','fantasy-sticker--gloss','fantasy-sticker--holo','fantasy-sticker--pearl',
    'fantasy-sticker--tap-pop','fantasy-sticker--tap-shine','fantasy-sticker--tap-sparkle'
  ];

  function allMonsters(){
    if(typeof fantasyMonsterSets==='undefined')return [];
    return fantasyMonsterSets.flatMap(set=>set.names.map(name=>({name,path:set.path,label:set.label})));
  }
  function randomItem(list){return list[Math.floor(Math.random()*list.length)];}
  function monsterPath(monster){return 'assets/web/fantasy/'+monster.path+'/'+monster.name+'.webp';}

  function setup(){
    const monsters=allMonsters();
    monsterSelect.innerHTML=monsters.map(m=>'<option value="'+m.name+'">'+m.name.replace(/-/g,' ')+'（'+m.label+'）</option>').join('');
    edgeSelect.innerHTML=edgeOptions.map(([value,label])=>'<option value="'+value+'">'+label+'</option>').join('');
    effectSelect.innerHTML=effectOptions.map(e=>'<option value="'+e.id+'">'+e.label+'</option>').join('');
    const initial=monsters.find(m=>m.name==='purun-little-magic-slime')||monsters[0];
    if(initial){monsterSelect.value=initial.name;setMonster(initial);}
    edgeSelect.value='fantasy-sticker--edge-white';
    effectSelect.value='resin-gloss';
    applyCurrent(false);
  }

  function selectedMonster(){return allMonsters().find(m=>m.name===monsterSelect.value)||allMonsters()[0];}

  function refreshMask(){
    if(window.FantasyStickerMask)window.FantasyStickerMask.apply(sticker);
  }

  function setMonster(monster){
    if(!monster)return;
    image.src=monsterPath(monster);
    image.alt=monster.name.replace(/-/g,' ');
    monsterSelect.value=monster.name;
    if(image.complete)refreshMask();
  }

  image.addEventListener('load',refreshMask);

  function clearEffects(){removable.forEach(cls=>sticker.classList.remove(cls));}

  function applyCurrent(play=true){
    const monster=selectedMonster();
    if(monster)setMonster(monster);
    clearEffects();
    const edge=edgeSelect.value;
    const effect=effectOptions.find(e=>e.id===effectSelect.value)||effectOptions[0];
    if(edge)sticker.classList.add(edge);
    sticker.classList.add(...effect.classes);
    sticker.dataset.unlocked='true';
    refreshMask();
    const edgeLabel=edgeOptions.find(x=>x[0]===edge)?.[1]||'';
    result.textContent=(monster?monster.name.replace(/-/g,' ')+' ｜ ':'')+edgeLabel+'ふち ＋ '+effect.label+'（輪郭追従）';
    if(play&&window.FantasySticker)window.FantasySticker.play(sticker);
  }

  function randomize(){
    const monster=randomItem(allMonsters());
    const edge=randomItem(edgeOptions);
    const effect=randomItem(effectOptions);
    setMonster(monster);
    edgeSelect.value=edge[0];
    effectSelect.value=effect.id;
    applyCurrent(true);
  }

  makeButton.addEventListener('click',()=>applyCurrent(true));
  randomButton.addEventListener('click',randomize);
  monsterSelect.addEventListener('change',()=>applyCurrent(false));
  edgeSelect.addEventListener('change',()=>applyCurrent(false));
  effectSelect.addEventListener('change',()=>applyCurrent(false));

  document.querySelector('.mode-tabs')?.addEventListener('click',event=>{
    const button=event.target.closest('[data-mode="monsters"]');
    if(button&&!monsterSelect.options.length)setup();
  });

  setup();
})();
