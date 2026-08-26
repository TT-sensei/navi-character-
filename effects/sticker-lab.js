/* Monster Sticker Lab */
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
    {id:'puku',label:'ぷくぷく',classes:['fantasy-sticker--puku']},
    {id:'sparkle',label:'キラキラ',classes:['fantasy-sticker--holo-stars']},
    {id:'holo',label:'ホログラム',classes:['fantasy-sticker--holo']},
    {id:'rainbow',label:'レインボーホロ',classes:['fantasy-sticker--holo-rainbow']},
    {id:'bubble',label:'ぷっくり透明シール',classes:['fantasy-sticker--bubble']},
    {id:'aura',label:'ふわっとオーラ',classes:['fantasy-sticker--aura','fantasy-sticker--float']},
    {id:'mix',label:'キラぷくホロ',classes:['fantasy-sticker--puku','fantasy-sticker--holo-stars','fantasy-sticker--holo']}
  ];
  const removable=[
    ...edgeOptions.map(x=>x[0]),
    'fantasy-sticker--puku','fantasy-sticker--float','fantasy-sticker--idle',
    'fantasy-sticker--holo','fantasy-sticker--holo-rainbow','fantasy-sticker--holo-stars',
    'fantasy-sticker--bubble','fantasy-sticker--aura','fantasy-sticker--rare','fantasy-sticker--sr','fantasy-sticker--secret'
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
    effectSelect.value='puku';
    applyCurrent(false);
  }

  function selectedMonster(){
    return allMonsters().find(m=>m.name===monsterSelect.value)||allMonsters()[0];
  }
  function setMonster(monster){
    if(!monster)return;
    image.src=monsterPath(monster);
    image.alt=monster.name.replace(/-/g,' ');
    monsterSelect.value=monster.name;
  }
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
    result.textContent=(monster?monster.name.replace(/-/g,' ')+' ｜ ':'')+edgeOptions.find(x=>x[0]===edge)?.[1]+'ふち ＋ '+effect.label;
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
