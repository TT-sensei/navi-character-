/* NAVI Fantasy Sticker Interaction
 * タップ時だけエフェクトを再生する軽量ヘルパー。
 * 未獲得(.fantasy-sticker--locked / aria-disabled=true / data-unlocked=false)では発動しない。
 */
(function () {
  'use strict';

  const EFFECT_CLASSES = [
    'fantasy-sticker--tap-pop',
    'fantasy-sticker--tap-shine',
    'fantasy-sticker--tap-sparkle'
  ];

  function isUnlocked(sticker) {
    if (!sticker) return false;
    if (sticker.classList.contains('fantasy-sticker--locked')) return false;
    if (sticker.getAttribute('aria-disabled') === 'true') return false;
    if (sticker.dataset.unlocked === 'false') return false;
    return true;
  }

  function replayTapEffect(sticker) {
    if (!isUnlocked(sticker)) return;

    EFFECT_CLASSES.forEach(cls => sticker.classList.remove(cls));
    // 同じステッカーを連続タップしてもCSS animationを再スタートさせる。
    void sticker.offsetWidth;
    sticker.classList.add(...EFFECT_CLASSES);

    window.setTimeout(() => {
      EFFECT_CLASSES.forEach(cls => sticker.classList.remove(cls));
    }, 900);
  }

  document.addEventListener('pointerup', function (event) {
    const sticker = event.target.closest('.fantasy-sticker[data-sticker-tap]');
    if (!sticker) return;
    replayTapEffect(sticker);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const sticker = event.target.closest('.fantasy-sticker[data-sticker-tap]');
    if (!sticker) return;
    event.preventDefault();
    replayTapEffect(sticker);
  });

  // 種族総称を「ナビアン」に統一。既存データ・内部ID・画像パスは変更しない。
  const monsterLibrary = document.querySelector('#monsterLibrary');
  if (monsterLibrary) {
    const heading = monsterLibrary.querySelector('.library-head h2');
    if (heading) heading.textContent = heading.textContent.replaceAll('ドリナビス', 'ナビアン');

    const description = monsterLibrary.querySelector('.library-head > div > p:not(.section-label)');
    if (description) description.textContent = description.textContent.replaceAll('ドリナビス', 'ナビアン');

    const filters = document.querySelector('#monsterFilters');
    if (filters) filters.setAttribute('aria-label', 'ナビアン分類');
  }

  window.FantasySticker = Object.freeze({
    play: replayTapEffect,
    isUnlocked: isUnlocked
  });
})();
