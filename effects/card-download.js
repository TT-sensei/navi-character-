(function(){
  'use strict';
  const card=document.querySelector('#holoCard');
  const button=document.querySelector('#cardDownload');
  const name=document.querySelector('#holoCardName');
  const status=document.querySelector('#cardLabStatus');
  if(!card||!button)return;

  function safeName(){
    return (name?.textContent||'card').replace(/[\\/:*?"<>|]/g,'_').trim()||'card';
  }

  async function saveCard(){
    if(typeof html2canvas!=='function'){
      status.textContent='PNG保存機能を読み込めませんでした。ページを再読み込みしてください。';
      return;
    }

    const wasFlipped=card.classList.contains('is-flipped');
    const oldTransform=card.style.transform;
    button.disabled=true;
    button.textContent='⏳ PNGを作成中…';
    status.textContent='カード画像を作成しています…';

    try{
      card.classList.remove('is-flipped');
      card.style.transform='none';
      await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
      if(document.fonts?.ready)await document.fonts.ready;

      const canvas=await html2canvas(card,{
        backgroundColor:null,
        scale:2,
        useCORS:true,
        allowTaint:false,
        imageTimeout:20000,
        logging:false,
        removeContainer:true
      });

      const blob=await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('PNG変換に失敗しました')), 'image/png'));
      const fileName=safeName()+'-card.png';

      // iPhone / iPad: Web Share API が使える場合は共有シートから「画像を保存」を選べる。
      if(navigator.share && typeof File!=='undefined' && navigator.canShare){
        const file=new File([blob],fileName,{type:'image/png'});
        if(navigator.canShare({files:[file]})){
          await navigator.share({files:[file],title:fileName});
          status.textContent='カード画像を共有・保存しました。';
          return;
        }
      }

      // PCなど：Blob URLで通常ダウンロード。
      const url=URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=url;
      link.download=fileName;
      link.rel='noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),10000);
      status.textContent='PNGを保存しました。';
    }catch(error){
      console.error('CARD LAB PNG export:',error);
      if(error?.name==='AbortError'){
        status.textContent='保存をキャンセルしました。';
      }else{
        status.textContent='PNG保存に失敗しました。もう一度お試しください。';
      }
    }finally{
      card.style.transform=oldTransform;
      if(wasFlipped)card.classList.add('is-flipped');
      button.disabled=false;
      button.textContent='⬇ カードをPNG保存';
    }
  }

  button.addEventListener('click',saveCard);
})();
