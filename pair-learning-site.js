(() => {
  const extras = [
    {
      path: 'assets/groups/learning/group-learning-pair-explain-note.svg',
      label: '二人組③・ノートを指して説明'
    },
    {
      path: 'assets/groups/learning/group-learning-pair-check-answer.svg',
      label: '二人組④・答えを一緒に確認'
    },
    {
      path: 'assets/groups/learning/group-learning-pair-presentation-prep.svg',
      label: '二人組⑤・発表前に相談'
    },
    {
      path: 'assets/groups/learning/group-learning-pair-compare-ideas.svg',
      label: '二人組⑥・考えを比べる'
    },
    {
      path: 'assets/groups/learning/group-learning-pair-teach-together.svg',
      label: '二人組⑦・教え合う'
    }
  ];

  const grid = document.querySelector('#groupGrid');
  const count = document.querySelector('#groupLibrary .library-head > span');
  if (!grid) return;

  extras.forEach(item => {
    if (grid.querySelector(`[data-path="${item.path}"]`)) return;
    const button = document.createElement('button');
    button.className = 'group-item';
    button.dataset.path = item.path;
    button.dataset.original = item.path;
    button.dataset.label = item.label;
    button.innerHTML = `<img src="${item.path}" alt="${item.label}"><span>${item.label}<small>学習 / ${item.path.split('/').pop()} / SVG原本</small></span>`;
    grid.appendChild(button);
  });

  if (count) count.textContent = `${grid.querySelectorAll('.group-item').length} files`;
})();
