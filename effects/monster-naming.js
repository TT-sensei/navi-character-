(() => {
  const names = {
    zako: 'ナビアン',
    zakoEvolved: 'エボナビ',
    boss: 'ボスナビ'
  };

  const replaceText = () => {
    document.querySelectorAll('[data-monster-filter="zako"]').forEach(el => { el.textContent = names.zako; });
    document.querySelectorAll('[data-monster-filter="zakoEvolved"]').forEach(el => { el.textContent = names.zakoEvolved; });
    document.querySelectorAll('[data-monster-filter="boss"]').forEach(el => { el.textContent = names.boss; });

    const heading = document.querySelector('#monsterLibrary .library-head h2');
    if (heading) heading.textContent = 'ナビアン図鑑';

    const intro = document.querySelector('#monsterLibrary .library-head p:not(.section-label)');
    if (intro) intro.textContent = 'ナビアン・エボナビ・ボスナビを分類ごとに確認できます。';

    document.querySelector('#monsterFilters')?.setAttribute('aria-label', 'ナビアン分類');

    document.querySelectorAll('#monsterGrid .monster-item small').forEach(el => {
      el.textContent = el.textContent
        .replace('ザコ進化系', names.zakoEvolved)
        .replace('ザコモンスター', names.zako)
        .replace('ボスモンスター', names.boss);
    });

    document.querySelectorAll('#previewMonsterSelect option').forEach(option => {
      option.textContent = option.textContent
        .replace('ザコ進化系', names.zakoEvolved)
        .replace('ザコモンスター', names.zako)
        .replace('ボスモンスター', names.boss);
    });
  };

  const observer = new MutationObserver(replaceText);
  observer.observe(document.body, { childList: true, subtree: true });
  replaceText();
})();
