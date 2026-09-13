(() => {
  const names = {
    zako: 'ナビアン',
    zakoEvolved: 'エボナビ',
    boss: 'ボスナビ'
  };

  const setText = (el, text) => {
    if (el && el.textContent !== text) el.textContent = text;
  };

  const replaceText = () => {
    observer.disconnect();
    document.querySelectorAll('[data-monster-filter="zako"]').forEach(el => setText(el, names.zako));
    document.querySelectorAll('[data-monster-filter="zakoEvolved"]').forEach(el => setText(el, names.zakoEvolved));
    document.querySelectorAll('[data-monster-filter="boss"]').forEach(el => setText(el, names.boss));
    setText(document.querySelector('#monsterLibrary .library-head h2'), 'ナビアン図鑑');
    setText(document.querySelector('#monsterLibrary .library-head p:not(.section-label)'), 'ナビアン・エボナビ・ボスナビを分類ごとに確認できます。');
    document.querySelector('#monsterFilters')?.setAttribute('aria-label', 'ナビアン分類');
    document.querySelectorAll('#monsterGrid .monster-item small').forEach(el => {
      const replaced = el.textContent.replace('ザコ進化系', names.zakoEvolved).replace('ザコモンスター', names.zako).replace('ボスモンスター', names.boss);
      setText(el, replaced);
    });
    document.querySelectorAll('#previewMonsterSelect option').forEach(option => {
      const replaced = option.textContent.replace('ザコ進化系', names.zakoEvolved).replace('ザコモンスター', names.zako).replace('ボスモンスター', names.boss);
      setText(option, replaced);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const observer = new MutationObserver(replaceText);
  observer.observe(document.body, { childList: true, subtree: true });
  replaceText();
})();
