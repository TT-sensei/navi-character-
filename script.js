const characters=[
  {id:'riku',label:'りく',fullbody:['waving','correct','hint','retry','complete','arms-crossed','hands-in-pockets','leaning','over-shoulder','pointing','hand-over-heart','reaching-out','chin-rest','looking-away','brushing-bangs']},
  {id:'sora',label:'そら',fullbody:['arms-up','complete','correct','dynamic','fists','greeting','hint','jumping','laughing','reaching','retry','running','stretching','thumbs-up','waving']},
  {id:'kai',label:'かい',fullbody:['adjusting-glasses','checking-note','chin-rest','complete','correct','hands-clasped','hint','looking-over-glasses','pointing','quiet-victory','reaching-out','reading','retry','thinking','waving']},
  {id:'saku',label:'さく',fullbody:['complete','correct','curtsy','finger-heart','hand-on-cheek','hands-behind-back','hands-clasped','head-tilt','heart-hands','hint','reading','retry','soft-wave','twirling','waving']},
  {id:'tsuki',label:'つき',fullbody:['complete','correct','dynamic-pose','hands-on-hips','hands-up','hint','jumping','laughing','peace-sign','reaching-out','retry','running','stretching','tying-hair','waving']},
  {id:'nami',label:'なみ',fullbody:['brush-hair','chin-rest','complete','correct','finger-to-lips','hand-over-heart','hands-behind-back','hint','holding-umbrella','looking-away','reaching-out','reading','retry','sitting','waving']}
].map(c=>({...c,expressions:['01-normal-smile','02-happy','03-thinking','04-idea','05-surprised','06-troubled','07-encouraging','08-celebrating','09-frustrated','10-confident']}));
const fantasyCharacters=[
  {id:'kai',label:'かい',job:'魔導士',base:'kai-mage',standing:'kai-mage'},
  {id:'sora',label:'そら',job:'剣士',base:'sora-swordsman',standing:'sora-swordsman'},
  {id:'riku',label:'りく',job:'忍者',base:'riku-ninja',standing:'riku-ninja'},
  {id:'nami',label:'なみ',job:'騎士',base:'nami-knight',standing:'nami-guardian-knight'},
  {id:'saku',label:'さく',job:'僧侶',base:'saku-cleric',standing:'saku-cleric-healer'},
  {id:'tsuki',label:'つき',job:'アーチャー',base:'tsuki-archer',standing:'tsuki-archer'}
].map(c=>({...c,fullbody:'standing'}));
const fantasyMonsterSets=[
  {id:'zako',label:'ザコモンスター',path:'monsters/zako',names:["happa-squirrel-leafy","hinoko-ember-newt","kinoko-apple-mushroom","komorin-little-night-bat","koro-golem-pebble-golem","mofu-wolf-frost-pup","purun-little-magic-slime","yukimaru-snow-puff","acorn-leafy","ember-frost-pup","forest-puru","moss-pebble-golem","sakura-snow-puff","sand-ember-newt","snow-mushroom","star-bat","autumn-mushroom","berry-leafy","night-snow-puff","rainy-bat","spring-moss-pup","sunset-puru","sunstone-golem","tidal-newt","mizutama-kappa","clover-mandragora","coral-bubble-crab","lantern-firefly","thunder-spark-fox","moon-moth","cloud-rain-rabbit","honeycomb-bee","vine-chameleon","pebble-ram","ember-lantern-salamander","dusk-feather-owl","rainbow-shell-snail","puddle-mudling","shadow-crest-ferret","bubblefin-frog","peach-puff-panda","sprout-shell-turtle","ribbon-tailed-mouse","honeydrop-bear","shadow-crest-lynx","cobalt-blade-mantis","stormhorn-kid","emberwing-raven","frostfang-weasel","ironleaf-panther","prism-tail-drake","thunderclaw-ram","duskblade-fox","glacier-crest-hawk","skyfin-shark","aurora-shell-lizard","whispering-mask-imp","lantern-eye-moth","hollow-hat-scarecrow","root-tangle-goblin","pond-mirror-spirit","shadow-puppet-cat","moonlit-wisp","candy-coral-slug","cogwheel-beetle","paper-crane-spirit","mossy-porcupine","violet-reef-seahorse","gearbit-mouse","steam-sprocket-mole","rivet-bloom-beetle"]},
  {id:'zakoEvolved',label:'ザコ進化系',path:'monsters/zako-evolved',names:["happa-squirrel-leafy-evolved","hinoko-ember-newt-evolved","kinoko-apple-mushroom-evolved","komorin-little-night-bat-evolved","koro-golem-pebble-golem-evolved","mofu-wolf-frost-pup-evolved","purun-little-magic-slime-evolved","yukimaru-snow-puff-evolved","acorn-leafy-evolved","ember-frost-pup-evolved","forest-puru-evolved","moss-pebble-golem-evolved","sakura-snow-puff-evolved","sand-ember-newt-evolved","snow-mushroom-evolved","star-bat-evolved","autumn-mushroom-evolved","berry-leafy-evolved","night-snow-puff-evolved","rainy-bat-evolved","spring-moss-pup-evolved","sunset-puru-evolved","sunstone-golem-evolved","tidal-newt-evolved","mizutama-kappa-evolved","clover-mandragora-evolved","coral-bubble-crab-evolved","lantern-firefly-evolved","thunder-spark-fox-evolved","moon-moth-evolved","cloud-rain-rabbit-evolved","honeycomb-bee-evolved","vine-chameleon-evolved","pebble-ram-evolved","ember-lantern-salamander-evolved","dusk-feather-owl-evolved","rainbow-shell-snail-evolved","puddle-mudling-evolved","bubblefin-frog-evolved","candy-coral-slug-evolved","cobalt-blade-mantis-evolved","cogwheel-beetle-evolved","duskblade-fox-evolved","emberwing-raven-evolved","frostfang-weasel-evolved","glacier-crest-hawk-evolved","hollow-hat-scarecrow-evolved","honeydrop-bear-evolved","ironleaf-panther-evolved","lantern-eye-moth-evolved","mossy-porcupine-evolved","moonlit-wisp-evolved","paper-crane-spirit-evolved","peach-puff-panda-evolved","pond-mirror-spirit-evolved","prism-tail-drake-evolved","ribbon-tailed-mouse-evolved","root-tangle-goblin-evolved","shadow-crest-ferret-evolved","shadow-crest-lynx-evolved","shadow-puppet-cat-evolved","skyfin-shark-evolved","sprout-shell-turtle-evolved","stormhorn-kid-evolved","thunderclaw-ram-evolved","violet-reef-seahorse-evolved","whispering-mask-imp-evolved","aurora-shell-lizard-evolved","gearbit-mouse-evolved","steam-sprocket-mole-evolved","rivet-bloom-beetle-evolved"]},
  {id:'boss',label:'ボスモンスター',path:'monsters/boss',names:['aqua-slime-king','bakuretsu-boar','crystal-golem','forest-horn-king','thunder-griffon','twilight-cat-mage','autumn-horn-king','berry-boar-king','dawn-cat-mage','moon-crystal-golem','solar-griffon-king','tide-slime-king','aurora-slime-king','dream-cat-mage','moss-ruin-horn-king','prism-crystal-golem','sky-ruin-griffon','volcano-boar-king','azure-sky-dragon','flare-leo','lumina-moon-phoenix','crimson-inferno-dragon','frost-crystal-lion','eclipse-shadow-phoenix','noxstella-star-eater','coral-tide-serpent','stormcloud-owl-king','verdant-shell-titan','amber-dune-scarab','aurora-ice-moth','void-moon-wyvern','abyssal-mirror-leviathan','gloomthorn-forest-titan','nightveil-raven-king','obsidian-comet-wyvern','phantom-lantern-dragon','ironclock-colossus','magitech-gear-dragon']}
];
const groups=[
  {path:'group-standing',label:'基本集合・紹介',category:'集合'},
  {path:'group-cheering',label:'スタート・正解',category:'集合'},
  {path:'group-studying',label:'教材一覧・学習ポータル',category:'集合'},
  {path:'group-celebration',label:'クリア・バッジ獲得',category:'集合'},
  {path:'group-huddle',label:'協力・仲間感',category:'集合'},
  {path:'group-jumping',label:'ジャンプ・一体感',category:'集合',originalExt:'jpg'},
  {path:'daily/group-daily-arrival',label:'登校・朝の出会い',category:'日常'},
  {path:'daily/group-daily-classroom',label:'教室・授業前の準備',category:'日常'},
  {path:'daily/group-daily-study',label:'協力して学ぶ時間',category:'日常'},
  {path:'daily/group-daily-recess',label:'休み時間・遊び',category:'日常'},
  {path:'daily/group-daily-cleanup',label:'掃除・協力',category:'日常'},
  {path:'learning/group-learning-japanese-reading',label:'国語①・文章を読む',category:'学習'},
  {path:'learning/group-learning-japanese-discussion',label:'国語②・考えを伝え合う',category:'学習'},
  {path:'learning/group-learning-math-diagram',label:'算数①・図を使って考える',category:'学習'},
  {path:'learning/group-learning-math-shapes',label:'算数②・図形を調べる',category:'学習'},
  {path:'learning/group-learning-science-observation',label:'理科①・観察する',category:'学習'},
  {path:'learning/group-learning-science-experiment',label:'理科②・実験して確かめる',category:'学習'},
  {path:'learning/group-learning-social-map',label:'社会①・地図から調べる',category:'学習'},
  {path:'learning/group-learning-social-sources',label:'社会②・資料を比べて考える',category:'学習'},
  {path:'learning/group-learning-pair-consulting',label:'二人組①・机を並べて相談',category:'学習'},
  {path:'learning/group-learning-pair-exchange',label:'二人組②・立って考えを交流',category:'学習'}
];
const grid=document.querySelector('#characterGrid'),library=document.querySelector('#libraryCard'),assetGrid=document.querySelector('#assetGrid'),groupGrid=document.querySelector('#groupGrid'),usage=document.querySelector('#usageCard'),usageImage=document.querySelector('#usageImage'),usageTitle=document.querySelector('#usageTitle'),usageCode=document.querySelector('#usageCode'),copyButton=document.querySelector('#copyButton'),copyStatus=document.querySelector('#copyStatus'),webDownload=document.querySelector('#webDownload'),originalDownload=document.querySelector('#originalDownload'),title=document.querySelector('#libraryTitle'),count=document.querySelector('#libraryCount'),modeTabs=document.querySelector('.mode-tabs'),tabs=document.querySelector('.tabs'),monsterLibrary=document.querySelector('#monsterLibrary'),monsterGrid=document.querySelector('#monsterGrid'),monsterCount=document.querySelector('#monsterCount'),monsterFilters=document.querySelector('#monsterFilters'),groupLibrary=document.querySelector('#groupLibrary');
let mode='standard',selected=null,tab='fullbody',monsterFilter='all';

const fantasyPresets=[
  {id:'forest-zako',label:'森のザコ戦',background:'forest',characterMode:'random',action:'attack',monsterMode:'selected',monster:'purun-little-magic-slime'},
  {id:'cave-midboss',label:'洞窟の中ボス戦',background:'cave',characterMode:'random',action:'attack',monsterMode:'selected',monster:'crystal-golem'},
  {id:'ruins-boss',label:'遺跡のボス戦',background:'ruins',characterMode:'random',action:'attack',monsterMode:'selected',monster:'forest-horn-king'},
  {id:'volcano-grandboss',label:'火山の大ボス戦',background:'volcano',characterMode:'random',action:'special',monsterMode:'selected',monster:'crimson-inferno-dragon'},
  {id:'sky-special',label:'浮島のSPECIAL戦',background:'sky-island',characterMode:'random',action:'special',monsterMode:'selected',monster:'azure-sky-dragon'}
];
const fantasyBackgrounds=[['forest','森'],['grassland','草原'],['cave','洞窟'],['riverbank','河原'],['sea','海'],['volcano','火山'],['ruins','遺跡'],['sky-island','浮島・空'],['town','町・スタート'],['training-ground','練習広場']];
const previewStage=document.querySelector('#fantasyStage'),previewPreset=document.querySelector('#previewPreset'),previewBackground=document.querySelector('#previewBackground'),previewCharacterMode=document.querySelector('#previewCharacterMode'),previewCharacterSelect=document.querySelector('#previewCharacterSelect'),previewCharacterAction=document.querySelector('#previewCharacterAction'),previewMonsterMode=document.querySelector('#previewMonsterMode'),previewMonsterSelect=document.querySelector('#previewMonsterSelect'),previewBackgroundImage=document.querySelector('#previewBackgroundImage'),previewCharacterImage=document.querySelector('#previewCharacterImage'),previewMonsterImage=document.querySelector('#previewMonsterImage'),previewRandomize=document.querySelector('#previewRandomize');
const allFantasyMonsters=fantasyMonsterSets.flatMap(set=>set.names.map(name=>({name,set:set.label,path:set.path})));
function randomItem(list){return list[Math.floor(Math.random()*list.length)];}
function setupFantasyPreview(){if(!previewBackground.options.length){previewPreset.innerHTML='<option value="free">自由に選ぶ</option>'+fantasyPresets.map(p=>'<option value="'+p.id+'">'+p.label+'</option>').join('');previewBackground.innerHTML=fantasyBackgrounds.map(([id,label])=>'<option value="'+id+'">'+label+'</option>').join('');previewCharacterSelect.innerHTML=fantasyCharacters.map(c=>'<option value="'+c.id+'">'+c.label+'（'+c.job+'）</option>').join('');previewMonsterSelect.innerHTML=allFantasyMonsters.map(m=>'<option value="'+m.name+'">'+m.name.replace(/-/g,' ')+'（'+m.set+'）</option>').join('');previewBackground.value='forest';previewCharacterSelect.value='kai';previewMonsterSelect.value=allFantasyMonsters[0]?.name||'';}updatePreviewSelectState();renderFantasyPreview();}
function applyFantasyPreset(id){const p=fantasyPresets.find(x=>x.id===id);if(!p)return;previewBackground.value=p.background;previewCharacterMode.value=p.characterMode;previewCharacterAction.value=p.action;previewMonsterMode.value=p.monsterMode;previewMonsterSelect.value=p.monster;updatePreviewSelectState();renderFantasyPreview();}
function updatePreviewSelectState(){previewCharacterSelect.disabled=previewCharacterMode.value==='random';previewMonsterSelect.disabled=previewMonsterMode.value==='random';}
function renderFantasyPreview(){if(!previewStage||mode!=='fantasy')return;const c=previewCharacterMode.value==='random'?randomItem(fantasyCharacters):fantasyCharacters.find(x=>x.id===previewCharacterSelect.value)||fantasyCharacters[0];const m=previewMonsterMode.value==='random'?randomItem(allFantasyMonsters):allFantasyMonsters.find(x=>x.name===previewMonsterSelect.value)||allFantasyMonsters[0];const bg=previewBackground.value||'forest';const action=previewCharacterAction.value==='random'?randomItem(['standing','attack','damage','special']):previewCharacterAction.value;const characterFile=action==='standing'?c.standing:c.base+'-'+action;previewBackgroundImage.src='assets/web/fantasy/backgrounds/'+bg+'.webp';previewCharacterImage.dataset.action=action;previewCharacterImage.src=action==='standing'?'assets/web/fantasy/'+characterFile+'.webp':'assets/web/fantasy/'+action+'/'+characterFile+'.webp';previewMonsterImage.src='assets/web/fantasy/monsters/'+m.path.replace(/^monsters\//,'')+'/'+m.name+'.webp';previewCharacterImage.alt=c.label+' '+c.job;previewMonsterImage.alt=m.name;}
previewPreset?.addEventListener('change',()=>{if(previewPreset.value==='free')renderFantasyPreview();else applyFantasyPreset(previewPreset.value);});previewBackground?.addEventListener('change',()=>{previewPreset.value='free';renderFantasyPreview();});previewCharacterMode?.addEventListener('change',()=>{updatePreviewSelectState();renderFantasyPreview();});previewMonsterMode?.addEventListener('change',()=>{updatePreviewSelectState();renderFantasyPreview();});previewCharacterSelect?.addEventListener('change',renderFantasyPreview);previewMonsterSelect?.addEventListener('change',renderFantasyPreview);previewCharacterAction?.addEventListener('change',renderFantasyPreview);previewRandomize?.addEventListener('click',renderFantasyPreview);

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const base='assets/characters';
const webBase='assets/web/characters';
const webAssetPath=(id,type,name)=>`${webBase}/${id}/${type}/${name}.webp`;
const originalAssetPath=(id,type,name)=>`${base}/${id}/${type}/${name}.png`;
function renderCards(){if(mode==='monsters'){grid.innerHTML='';return;}const list=mode==='fantasy'?fantasyCharacters:characters;grid.innerHTML=list.map((c,i)=>{const image=mode==='fantasy'?`assets/web/fantasy/${c.standing}.webp`:webAssetPath(c.id,'fullbody','waving');const detail=mode==='fantasy'?`${c.job} / 立ち絵・ATTACK・DAMAGE・SPECIAL`:`${c.fullbody.length}ポーズ / ${c.expressions.length}表情`;return`<article class="character-card ${selected?.id===c.id?'selected':''}" data-id="${c.id}"><button class="character-button" type="button"><img class="character-image" src="${image}" alt="${c.label}"><div class="character-info"><div class="character-index">${mode==='fantasy'?'FANTASY':'CHARACTER'} ${String(i+1).padStart(2,'0')}</div><h3>${c.label}</h3><p>${detail}</p></div></button></article>`}).join('');}
function renderAssets(){if(!selected)return;const names=mode==='fantasy'?['立ち絵','ATTACK','DAMAGE','SPECIAL']:selected[tab].map(name=>name);assetGrid.innerHTML=names.map(name=>{const type=mode==='fantasy'?(name==='立ち絵'?'standing':name.toLowerCase()):tab;const fileBase=mode==='fantasy'&&type==='standing'?selected.standing:selected.base;const suffix=type==='standing'?'':`-${type}`;const webPath=mode==='fantasy'?(type==='standing'?`assets/web/fantasy/${fileBase}.webp`:`assets/web/fantasy/${type}/${fileBase}${suffix}.webp`):webAssetPath(selected.id,type,name);const originalPath=mode==='fantasy'?`assets/fantasy/${type==='standing'?'':`${type}/`}${fileBase}${suffix}.png`:originalAssetPath(selected.id,type,name);return`<button class="asset-item ${mode==='fantasy'?'fantasy-asset':''}" data-path="${webPath}" data-original="${originalPath}" data-label="${selected.label}・${name}"><img src="${webPath}" alt="${selected.label} ${name}"><span>${esc(name)}</span></button>`}).join('');count.textContent=`${names.length} files`;tabs.hidden=mode==='fantasy';}
function renderMonsterCards(filter=monsterFilter){
  const sets=filter==='all'?fantasyMonsterSets:fantasyMonsterSets.filter(set=>set.id===filter);
  const cards=sets.flatMap(set=>set.names.map(name=>({set,name})));
  monsterCount.textContent=cards.length+'体';
  monsterGrid.innerHTML=cards.map(item=>{
    const webPath='assets/web/fantasy/'+item.set.path+'/'+item.name+'.webp';
    const originalPath='assets/fantasy/'+item.set.path+'/'+item.name+'.png';
    const label=item.set.label+'｜'+item.name;
    return '<button class="monster-item" data-path="'+webPath+'" data-original="'+originalPath+'" data-label="'+label+'"><img src="'+webPath+'" alt="'+label+'"><span>'+item.name.replace(/-/g,' ')+'</span><small>'+item.set.label+'</small></button>';
  }).join('');
  document.querySelectorAll('[data-monster-filter]').forEach(button=>{
    const active=button.dataset.monsterFilter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });
}
function selectCharacter(id){const list=mode==='fantasy'?fantasyCharacters:characters;selected=list.find(c=>c.id===id);if(!selected)return;renderCards();library.hidden=false;title.textContent=mode==='fantasy'?`${selected.label}｜${selected.job}のファンタジー素材`:`${selected.label}の素材`;tab=mode==='fantasy'?'standing':'fullbody';renderAssets();library.scrollIntoView({behavior:'smooth',block:'start'});}
function setDownload(link,path){link.href=path;link.download=path.split('/').pop();}
function selectAsset(path,label,originalPath){usage.hidden=false;usageImage.src=path;usageImage.alt=label;usageTitle.textContent=label;usageCode.textContent=`<img src="${new URL(path,document.baseURI).href}" class="navi-character" alt="${label}">`;setDownload(webDownload,path);setDownload(originalDownload,originalPath);copyStatus.textContent='';usage.scrollIntoView({behavior:'smooth',block:'nearest'});}
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)selectCharacter(card.dataset.id);});
tabs.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));renderAssets();});
modeTabs.addEventListener('click',e=>{
  const b=e.target.closest('[data-mode]');
  if(!b)return;
  mode=b.dataset.mode;
  selected=null;
  const isFantasy=mode==='fantasy';
  const isMonsters=mode==='monsters';
  document.querySelectorAll('.mode-tab').forEach(x=>x.classList.toggle('active',x===b));
  previewStage.hidden=!isFantasy;
  grid.hidden=isMonsters;
  library.hidden=true;
  usage.hidden=true;
  groupLibrary.hidden=mode!=='standard';
  monsterLibrary.hidden=!isMonsters;
  if(isMonsters){
    monsterFilter='all';
    renderMonsterCards();
  }
  if(isFantasy)setupFantasyPreview();
  const introHeading=document.querySelector('.intro-card h2');
  const introText=document.querySelector('.intro-card p:not(.section-label)');
  if(isMonsters){
    introHeading.textContent='モンスターだけを見られる図鑑です。';
    introText.textContent='ザコ・ザコ進化系・ボスを分類ごとに確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。';
  }else if(isFantasy){
    introHeading.textContent='ファンタジーキャラとバトル素材を確認できます。';
    introText.textContent='ファンタジーキャラクターの立ち絵と、背景・モンスターを組み合わせるプレビューを確認できます。';
  }else{
    introHeading.textContent='基本画像だけでなく、全ポーズ・全表情を見られます。';
    introText.innerHTML='キャラクターを選び、全身ポーズ・表情アップ・集合画像を一覧から確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。AIで使うときは、まず<a href="AI-GUIDE.md">AI向けガイド</a>を確認してください。';
  }
  renderCards();
  window.scrollTo({top:0,behavior:'smooth'});
});
monsterFilters.addEventListener('click',e=>{
  const b=e.target.closest('[data-monster-filter]');
  if(!b)return;
  monsterFilter=b.dataset.monsterFilter;
  renderMonsterCards();
});
assetGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
monsterGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
groups.forEach(group=>{const webPath='assets/web/groups/'+group.path+'.webp';const originalPath='assets/groups/'+group.path+'.'+(group.originalExt||'png');groupGrid.insertAdjacentHTML('beforeend','<button class="group-item" data-path="'+webPath+'" data-original="'+originalPath+'" data-label="'+group.label+'"><img src="'+webPath+'" alt="'+group.label+'"><span>'+group.label+'<small>'+group.category+' / '+group.path+'.webp / 原本をダウンロード可</small></span></button>');});
groupGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
copyButton.addEventListener('click',async()=>{if(!usageCode.textContent)return;try{await navigator.clipboard.writeText(usageCode.textContent);copyStatus.textContent='コードをコピーしました。';}catch{copyStatus.textContent='コピーできませんでした。コードを選択してください。';}});
renderCards();
