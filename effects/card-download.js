(function(){
  'use strict';
  const card=document.querySelector('#holoCard');
  const button=document.querySelector('#cardDownload');
  const name=document.querySelector('#holoCardName');
  const status=document.querySelector('#cardLabStatus');
  if(!card||!button)return;

  async function saveCard(){
    if(typeof html2canvas!=='function'){
      status.textContent='PNG保存機能を読み込めませんでした。ページを再読み込みしてください。';
      return;
    }
    const flipped=card.classList.contains('is-flipped');
    const transform=card.style.transform;
    button.disabled=true;
    button.textContent='⏳ PNGを作成中…';
    status.textContent='カード画像を作成しています…';
    try{
      card.classList.remove('is-flipped');
      card.style.transform='none';
      if(document.fonts&&document.fonts.ready)await document.fonts.ready;
      const canvas=await html2canvas(card,{backgroundColor:null,scale:2,useCORS:true,allowTaint:false,logging:false,imageTimeout:15000});
      const out=document.createElement('canvas');
      out.width=2172;
      out.height=2772;
      out.getContext('2d').drawImage(canvas,0,0,out.width,out.height);
      const link=document.createElement('a');
      const safe=(name.textContent||'card').replace(/[\\/:*?"<>|]/g,'_').trim()||'card';
      link.download=safe+'-card.png';
      link.href=out.toDataURL('image/png');
      link.click();
      status.textContent='PNGを保存しました。';
    }catch(error){
      console.error(error);
      status.textContent='PNG保存に失敗しました。画像の読み込みを確認してください。';
    }finally{
      card.style.transform=transform;
      if(flipped)card.classList.add('is-flipped');
      button.disabled=false;
      button.textContent='⬇ カードをPNG保存';
    }
  }
  button.addEventListener('click',saveCard);
})();
