const characters=[
  {id:'riku',label:'りく',fullbody:['waving','correct','hint','retry','complete','arms-crossed','hands-in-pockets','leaning','over-shoulder','pointing','hand-over-heart','reaching-out','chin-rest','looking-away','brushing-bangs']},
  {id:'sora',label:'そら',fullbody:['arms-up','complete','correct','dynamic','fists','greeting','hint','jumping','laughing','reaching','retry','running','stretching','thumbs-up','waving']},
  {id:'kai',label:'かい',fullbody:['adjusting-glasses','checking-note','chin-rest','complete','correct','hands-clasped','hint','looking-over-glasses','pointing','quiet-victory','reaching-out','reading','retry','thinking','waving']},
  {id:'saku',label:'さく',fullbody:['complete','correct','curtsy','finger-heart','hand-on-cheek','hands-behind-back','hands-clasped','head-tilt','heart-hands','hint','reading','retry','soft-wave','twirling','waving']},
  {id:'tsuki',label:'つき',fullbody:['complete','correct','dynamic-pose','hands-on-hips','hands-up','hint','jumping','laughing','peace-sign','reaching-out','retry','running','stretching','tying-hair','waving']},
  {id:'nami',label:'なみ',fullbody:['brush-hair','chin-rest','complete','correct','finger-to-lips','hand-over-heart','hands-behind-back','hint','holding-umbrella','looking-away','reaching-out','reading','retry','sitting','waving']}
].map(c=>({...c,expressions:['01-normal-smile','02-happy','03-thinking','04-idea','05-surprised','06-troubled','07-encouraging','08-celebrating','09-frustrated','10-confident']}));
const groups=[
  ['group-standing','基本集合・紹介'],['group-cheering','スタート・正解'],['group-studying','教材一覧・学習ポータル'],['group-celebration','クリア・バッジ獲得'],['group-huddle','協力・仲間感']
];
const grid=document.querySelector('#characterGrid'),library=document.querySelector('#libraryCard'),assetGrid=document.querySelector('#assetGrid'),groupGrid=document.querySelector('#groupGrid'),usage=document.querySelector('#usageCard'),usageImage=document.querySelector('#usageImage'),usageTitle=document.querySelector('#usageTitle'),usageCode=document.querySelector('#usageCode'),copyButton=document.querySelector('#copyButton'),copyStatus=document.querySelector('#copyStatus'),title=document.querySelector('#libraryTitle'),count=document.querySelector('#libraryCount');
let selected=null,tab='fullbody';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const base='assets/characters';
const assetPath=(id,type,name)=>`${base}/${id}/${type}/${name}.png`;
function renderCards(){grid.innerHTML=characters.map((c,i)=>`<article class="character-card ${selected?.id===c.id?'selected':''}" data-id="${c.id}"><button class="character-button" type="button"><img class="character-image" src="${base}/${c.id}/reference.jpeg" alt="${c.label}"><div class="character-info"><div class="character-index">CHARACTER ${String(i+1).padStart(2,'0')}</div><h3>${c.label}</h3><p>${c.fullbody.length}ポーズ / ${c.expressions.length}表情</p></div></button></article>`).join('');}
function renderAssets(){if(!selected)return;const names=selected[tab];assetGrid.innerHTML=names.map(name=>{const path=assetPath(selected.id,tab,name);return`<button class="asset-item" data-path="${path}" data-label="${selected.label}・${name}"><img src="${path}" alt="${selected.label} ${name}"><span>${esc(name)}</span></button>`}).join('');count.textContent=`${names.length} files`;}
function selectCharacter(id){selected=characters.find(c=>c.id===id);if(!selected)return;renderCards();library.hidden=false;title.textContent=`${selected.label}の素材`;renderAssets();library.scrollIntoView({behavior:'smooth',block:'start'});}
function selectAsset(path,label){usage.hidden=false;usageImage.src=path;usageImage.alt=label;usageTitle.textContent=label;usageCode.textContent=`<img src="${new URL(path,document.baseURI).href}" class="navi-character" alt="${label}">`;copyStatus.textContent='';usage.scrollIntoView({behavior:'smooth',block:'nearest'});}
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)selectCharacter(card.dataset.id);});
document.querySelector('.tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));renderAssets();});
assetGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label);});
groups.forEach(([name,label])=>{const path=`assets/groups/${name}.png`;groupGrid.insertAdjacentHTML('beforeend',`<button class="group-item" data-path="${path}" data-label="${label}"><img src="${path}" alt="${label}"><span>${label}<small>${name}.png</small></span></button>`);});
groupGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label);});
copyButton.addEventListener('click',async()=>{if(!usageCode.textContent)return;try{await navigator.clipboard.writeText(usageCode.textContent);copyStatus.textContent='コードをコピーしました。';}catch{copyStatus.textContent='コピーできませんでした。コードを選択してください。';}});
renderCards();