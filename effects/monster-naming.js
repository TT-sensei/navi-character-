(() => {
  const names = {
    zako: 'ナビアン',
    zakoEvolved: 'エボナビ',
    boss: 'ボスナビ'
  };

  let monsterNamesJa = {};
  let catalogLoaded = false;
  let refreshTimer = 0;

  const setText = (el, text) => {
    if (el && el.textContent !== text) el.textContent = text;
  };

  const collectMonsterNames = (node) => {
    if (!node || typeof node !== 'object') return;
    if (node.displayNamesJa && typeof node.displayNamesJa === 'object') {
      monsterNamesJa = { ...monsterNamesJa, ...node.displayNamesJa };
    }
    Object.values(node).forEach(value => {
      if (value && typeof value === 'object') collectMonsterNames(value);
    });
  };

  const getMonsterId = (item) => {
    const path = item?.dataset.original || item?.dataset.path || '';
    const file = path.split('/').pop() || '';
    return file.replace(/\.png$|\.webp$/i, '');
  };

  const refreshMonsterNames = () => {
    if (!catalogLoaded) return;

    document.querySelectorAll('#monsterGrid .monster-item').forEach(item => {
      const id = getMonsterId(item);
      const label = monsterNamesJa[id];
      if (!label) return;

      const category = item.querySelector('small')?.textContent || '';
      const fullLabel = category ? `${category.split('／')[0]}｜${label}` : label;
      item.dataset.label = fullLabel;
      setText(item.querySelector('span'), label);
      item.querySelector('img')?.setAttribute('alt', fullLabel);
    });

    document.querySelectorAll('#previewMonsterSelect option').forEach(option => {
      const id = option.value;
      const label = monsterNamesJa[id];
      if (!label) return;
      const suffix = option.textContent.includes('（') ? option.textContent.slice(option.textContent.indexOf('（')) : '';
      setText(option, `${label}${suffix}`);
    });

    document.querySelectorAll('#stickerMonster option').forEach(option => {
      const id = option.value;
      const label = monsterNamesJa[id];
      if (label) setText(option, label);
    });
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
    refreshMonsterNames();
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const scheduleRefresh = () => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(replaceText, 0);
  };

  const observer = new MutationObserver(scheduleRefresh);
  observer.observe(document.body, { childList: true, subtree: true });

  fetch('catalog.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error(`catalog.json: ${response.status}`);
      return response.json();
    })
    .then(catalog => {
      collectMonsterNames(catalog);
      catalogLoaded = true;
      replaceText();
    })
    .catch(error => {
      console.warn('MONSTER LIBRARY: catalog.json の日本語名を読み込めませんでした。', error);
      replaceText();
    });

  replaceText();
})();
