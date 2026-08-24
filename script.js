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
  {label:'雑魚モンスター',path:'enemies',names:['happa-squirrel-leafy','hinoko-ember-newt','kinoko-apple-mushroom','komorin-little-night-bat','koro-golem-pebble-golem','mofu-wolf-frost-pup','purun-little-magic-slime','yukimaru-snow-puff']},
  {label:'雑魚・派生種',path:'enemy-variants',names:['acorn-leafy','ember-frost-pup','forest-puru','moss-pebble-golem','sakura-snow-puff','sand-ember-newt','snow-mushroom','star-bat']},
  {label:'雑魚・第2派生',path:'enemy-variants-2',names:['autumn-mushroom','berry-leafy','night-snow-puff','rainy-bat','spring-moss-pup','sunset-puru','sunstone-golem','tidal-newt']},
  {label:'中ボス',path:'midboss',names:['aqua-slime-king','bakuretsu-boar','crystal-golem','forest-horn-king','thunder-griffon','twilight-cat-mage']},
  {label:'中ボス・派生種',path:'midboss-variants',names:['autumn-horn-king','berry-boar-king','dawn-cat-mage','moon-crystal-golem','solar-griffon-king','tide-slime-king']},
  {label:'中ボス・第2派生',path:'midboss-variants-2',names:['aurora-slime-king','dream-cat-mage','moss-ruin-horn-king','prism-crystal-golem','sky-ruin-griffon','volcano-boar-king']},
  {label:'大ボス',path:'grandboss',names:['azure-sky-dragon','flare-leo','lumina-moon-phoenix']},
  {label:'大ボス・派生種',path:'grandboss-variants',names:['crimson-inferno-dragon-v2','frost-crystal-lion-v2','eclipse-shadow-phoenix']},
  {label:'ラスボス',path:'finalboss',names:['noxstella-star-eater']}
];
const groups=[
  ['group-standing','基本集合・紹介'],['group-cheering','スタート・正解'],['group-studying','教材一覧・学習ポータル'],['group-celebration','クリア・バッジ獲得'],['group-huddle','協力・仲間感'],['group-jumping','ジャンプ・一体感']
];
const grid=document.querySelector('#characterGrid'),library=document.querySelector('#libraryCard'),assetGrid=document.querySelector('#assetGrid'),groupGrid=document.querySelector('#groupGrid'),usage=document.querySelector('#usageCard'),usageImage=document.querySelector('#usageImage'),usageTitle=document.querySelector('#usageTitle'),usageCode=document.querySelector('#usageCode'),copyButton=document.querySelector('#copyButton'),copyStatus=document.querySelector('#copyStatus'),webDownload=document.querySelector('#webDownload'),originalDownload=document.querySelector('#originalDownload'),title=document.querySelector('#libraryTitle'),count=document.querySelector('#libraryCount'),modeTabs=document.querySelector('.mode-tabs'),tabs=document.querySelector('.tabs'),fantasySubtabs=document.querySelector('#fantasySubtabs'),monsterLibrary=document.querySelector('#monsterLibrary'),monsterGrid=document.querySelector('#monsterGrid'),monsterCount=document.querySelector('#monsterCount');
let mode='standard',selected=null,tab='fullbody',fantasyView='characters';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const base='assets/characters';
const webBase='assets/web/characters';
const webAssetPath=(id,type,name)=>`${webBase}/${id}/${type}/${name}.webp`;
const originalAssetPath=(id,type,name)=>`${base}/${id}/${type}/${name}.png`;
function renderCards(){const list=mode==='fantasy'?fantasyCharacters:characters;grid.innerHTML=list.map((c,i)=>{const image=mode==='fantasy'?`assets/web/fantasy/${c.standing}.webp`:webAssetPath(c.id,'fullbody','waving');const detail=mode==='fantasy'?`${c.job} / 立ち絵・ATTACK・DAMAGE・SPECIAL`:`${c.fullbody.length}ポーズ / ${c.expressions.length}表情`;return`<article class="character-card ${selected?.id===c.id?'selected':''}" data-id="${c.id}"><button class="character-button" type="button"><img class="character-image" src="${image}" alt="${c.label}"><div class="character-info"><div class="character-index">${mode==='fantasy'?'FANTASY':'CHARACTER'} ${String(i+1).padStart(2,'0')}</div><h3>${c.label}</h3><p>${detail}</p></div></button></article>`}).join('');}
function renderAssets(){if(!selected)return;const names=mode==='fantasy'?['立ち絵','ATTACK','DAMAGE','SPECIAL']:selected[tab].map(name=>name);assetGrid.innerHTML=names.map(name=>{const type=mode==='fantasy'?(name==='立ち絵'?'standing':name.toLowerCase()):tab;const fileBase=mode==='fantasy'&&type==='standing'?selected.standing:selected.base;const suffix=type==='standing'?'':`-${type}`;const webPath=mode==='fantasy'?(type==='standing'?`assets/web/fantasy/${fileBase}.webp`:`assets/web/fantasy/${type}/${fileBase}${suffix}.webp`):webAssetPath(selected.id,type,name);const originalPath=mode==='fantasy'?`assets/fantasy/${type==='standing'?'':`${type}/`}${fileBase}${suffix}.png`:originalAssetPath(selected.id,type,name);return`<button class="asset-item ${mode==='fantasy'?'fantasy-asset':''}" data-path="${webPath}" data-original="${originalPath}" data-label="${selected.label}・${name}"><img src="${webPath}" alt="${selected.label} ${name}"><span>${esc(name)}</span></button>`}).join('');count.textContent=`${names.length} files`;tabs.hidden=mode==='fantasy';}
function renderMonsterCards(){
  const cards=fantasyMonsterSets.flatMap(set=>set.names.map(name=>({set,name})));
  monsterCount.textContent=cards.length+' files';
  monsterGrid.innerHTML=cards.map((item,index)=>{
    const webPath='assets/web/fantasy/'+item.set.path+'/'+item.name+'.webp';
    const originalPath='assets/fantasy/'+item.set.path+'/'+item.name+'.png';
    const label=item.set.label+'｜'+item.name;
    return '<button class="monster-item" data-path="'+webPath+'" data-original="'+originalPath+'" data-label="'+label+'"><img src="'+webPath+'" alt="'+label+'"><span>'+item.name.replace(/-/g,' ')+'</span><small>'+item.set.label+'</small></button>';
  }).join('');
}
function showFantasyView(view){
  fantasyView=view;
  const monsters=view==='monsters';
  document.querySelectorAll('.fantasy-subtab').forEach(x=>x.classList.toggle('active',x.dataset.fantasyView===view));
  grid.hidden=monsters;
  monsterLibrary.hidden=!monsters;
  library.hidden=true;
  usage.hidden=true;
  groupGrid.closest('.group-card').hidden=true;
  if(monsters)renderMonsterCards();
}
function selectCharacter(id){const list=mode==='fantasy'?fantasyCharacters:characters;selected=list.find(c=>c.id===id);if(!selected)return;renderCards();library.hidden=false;title.textContent=mode==='fantasy'?`${selected.label}｜${selected.job}のファンタジー素材`:`${selected.label}の素材`;tab=mode==='fantasy'?'standing':'fullbody';renderAssets();library.scrollIntoView({behavior:'smooth',block:'start'});}
function setDownload(link,path){link.href=path;link.download=path.split('/').pop();}
function selectAsset(path,label,originalPath){usage.hidden=false;usageImage.src=path;usageImage.alt=label;usageTitle.textContent=label;usageCode.textContent=`<img src="${new URL(path,document.baseURI).href}" class="navi-character" alt="${label}">`;setDownload(webDownload,path);setDownload(originalDownload,originalPath);copyStatus.textContent='';usage.scrollIntoView({behavior:'smooth',block:'nearest'});}
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)selectCharacter(card.dataset.id);});
tabs.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));renderAssets();});
modeTabs.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b)return;mode=b.dataset.mode;selected=null;fantasyView='characters';document.querySelectorAll('.mode-tab').forEach(x=>x.classList.toggle('active',x===b));fantasySubtabs.hidden=mode!=='fantasy';document.querySelector('.intro-card h2').textContent=mode==='fantasy'?'ファンタジーのキャラクターとモンスターを確認できます。':'基本画像だけでなく、全ポーズ・全表情を見られます。';document.querySelector('.intro-card p:not(.section-label)').innerHTML=mode==='fantasy'?'キャラクターからモンスターまで、NAVI Fantasyの素材を一覧で確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。':'キャラクターを選び、全身ポーズ・表情アップ・集合画像を一覧から確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。AIで使うときは、まず<a href="AI-GUIDE.md">AI向けガイド</a>を確認してください。';document.querySelectorAll('.fantasy-subtab').forEach(x=>x.classList.toggle('active',x.dataset.fantasyView==='characters'));groupGrid.closest('.group-card').hidden=mode==='fantasy';monsterLibrary.hidden=true;grid.hidden=false;library.hidden=true;usage.hidden=true;renderCards();window.scrollTo({top:0,behavior:'smooth'});});
fantasySubtabs.addEventListener('click',e=>{const b=e.target.closest('[data-fantasy-view]');if(b)showFantasyView(b.dataset.fantasyView);});
assetGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
monsterGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
groups.forEach(([name,label])=>{const originalExt=name==='group-jumping'?'jpg':'png';const webPath=`assets/web/groups/${name}.webp`;const originalPath=`assets/groups/${name}.${originalExt}`;groupGrid.insertAdjacentHTML('beforeend',`<button class="group-item" data-path="${webPath}" data-original="${originalPath}" data-label="${label}"><img src="${webPath}" alt="${label}"><span>${label}<small>${name}.webp / 原本をダウンロード可</small></span></button>`);});
groupGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
copyButton.addEventListener('click',async()=>{if(!usageCode.textContent)return;try{await navigator.clipboard.writeText(usageCode.textContent);copyStatus.textContent='コードをコピーしました。';}catch{copyStatus.textContent='コピーできませんでした。コードを選択してください。';}});
renderCards();
