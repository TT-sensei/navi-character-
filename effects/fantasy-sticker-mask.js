/* NAVI Fantasy Sticker Mask Helper
 * Uses the same transparent monster image as a CSS mask so gloss/hologram layers
 * follow the visible silhouette instead of the image rectangle.
 */
(function(){
  'use strict';

  function applyMask(sticker){
    const image=sticker.querySelector('.fantasy-sticker__image');
    if(!image) return;
    const src=image.currentSrc||image.src;
    if(!src) return;
    sticker.style.setProperty('--sticker-mask',`url("${src.replace(/"/g,'\\"')}")`);
  }

  function init(root=document){
    root.querySelectorAll('.fantasy-sticker[data-outline-mask]').forEach(applyMask);
  }

  document.addEventListener('load',function(event){
    const image=event.target;
    if(!(image instanceof HTMLImageElement)) return;
    const sticker=image.closest('.fantasy-sticker[data-outline-mask]');
    if(sticker) applyMask(sticker);
  },true);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>init());
  }else{
    init();
  }

  window.FantasyStickerMask=Object.freeze({init,apply:applyMask});
})();
