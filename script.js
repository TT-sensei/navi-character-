const characters=[
  {id:'riku',label:'りく'},
  {id:'sora',label:'そら'},
  {id:'kai',label:'かい'},
  {id:'saku',label:'さく'},
  {id:'tsuki',label:'つき'},
  {id:'nami',label:'なみ'}
].map(character=>({...character,image:`assets/characters/${character.id}/reference.jpeg`}));

const grid=document.querySelector('#characterGrid');
const usageCard=document.querySelector('#usageCard');
const usageImage=document.querySelector('#usageImage');
const usageTitle=document.querySelector('#usageTitle');
const usageCode=document.querySelector('#usageCode');
const copyButton=document.querySelector('#copyButton');
const copyStatus=document.querySelector('#copyStatus');
let selectedId='';

function renderCards(){
  grid.innerHTML=characters.map((character,index)=>`<article class="character-card" data-id="${character.id}"><button class="character-button" type="button" aria-label="${character.label}を選ぶ"><img class="character-image" src="${character.image}" alt="${character.label}"><div class="character-info"><div class="character-index">CHARACTER ${String(index+1).padStart(2,'0')}</div><h3>${character.label}</h3></div></button></article>`).join('');
  grid.addEventListener('click',event=>{
    const card=event.target.closest('.character-card');
    if(card) selectCharacter(card.dataset.id);
  });
}

function selectCharacter(id){
  const character=characters.find(item=>item.id===id);
  if(!character) return;
  selectedId=id;
  document.querySelectorAll('.character-card').forEach(card=>card.classList.toggle('selected',card.dataset.id===id));
  usageCard.hidden=false;
  usageImage.src=character.image;
  usageImage.alt=character.label;
  usageTitle.textContent=`${character.label}を教材で使う`;
  const path=new URL(character.image,document.baseURI).href;
  usageCode.textContent=`<img src="${path}" class="navi-character" alt="">`;
  copyStatus.textContent='';
  usageCard.scrollIntoView({behavior:'smooth',block:'nearest'});
}

copyButton.addEventListener('click',async()=>{
  if(!selectedId) return;
  await navigator.clipboard.writeText(usageCode.textContent);
  copyStatus.textContent='コードをコピーしました。';
});

renderCards();
