# NAVI CHARACTER — AI向けガイド

## 目的

`navi-character-`は、小学校向けWeb教材で「案内・励まし・正誤・達成」を視覚的に伝えるためのキャラクター画像資産です。教材のロジック、UI、音、バッジ報酬を置き換えるものではありません。全体の入口は[EDU KIT](https://github.com/TT-sensei/edu-kit)です。

## 必ず守ること

1. 使用前に[catalog.json](catalog.json)でキャラクターID、ポーズ名、表情名、画像パスが実在することを確認する。
2. 画像のURLや存在しそうなポーズ名を推測で作らない。
3. 問題文、選択肢、答え、ボタン、判定メッセージをキャラクター画像へ埋め込まない。HTMLのテキストと操作で提供する。
4. 学習活動と問題画面を最優先にする。キャラクターは補助として使い、画面を占有しない。
5. 同じ教材では、キャラクターIDと場面別画像URLを一か所に定義する。
6. 画像には意味のある`alt`を付ける。装飾だけなら`alt=""`を使う。
7. 画像は教材側に複製せず、このリポジトリの公開済みURLを参照する。
8. Web教材・GitHub Pagesでは、原則として`assets/web/`以下のWebP版を使う。理由なく1〜2MBの原本PNGを直接参照しない。
9. 原本PNGは高解像度、印刷、制作・再編集、またはWebPでは解像度が不足する特殊な用途に限る。原本の削除・上書き・再圧縮はしない。

## キャラクター

| 名前 | ID | 向いている役割 |
| --- | --- | --- |
| りく | `riku` | 落ち着いた説明、振り返り、達成 |
| そら | `sora` | スタート、挑戦、元気な励まし |
| かい | `kai` | ヒント、考え方の整理、丁寧な案内 |
| さく | `saku` | 親しみやすい声かけ、達成 |
| つき | `tsuki` | 挑戦、再挑戦、勢いのある応援 |
| なみ | `nami` | 静かな励まし、振り返り、安心感 |

## 画像の選び方

全身ポーズは、全キャラクターに共通する次の5場面を優先します。実在するファイル名は必ず`catalog.json`で確認します。

| 教材場面 | 優先ポーズ |
| --- | --- |
| はじめ・あいさつ | waving / greeting |
| 正解・できた | correct |
| 考えるための手がかり | hint |
| まちがい後の声かけ | retry |
| 単元・チャレンジ完了 | complete |

表情アップは`expressions/01-normal-smile.png`から`10-confident.png`の共通名を使用します。顔アップが読みやすい場所だけに使い、問題画面には全身画像を優先します。

6人の集合画像は`assets/groups/`にあります。

- `group-standing.png`：トップ画面・紹介
- `group-cheering.png`：スタート・正解
- `group-studying.png`：学習ポータル・教材一覧
- `group-celebration.png`：クリア・バッジ獲得
- `group-huddle.png`：協力・仲間感

## 実装例

実際に使う前に、下のIDとポーズが`catalog.json`にあることを確認します。

```js
const NAVI_BASE = 'https://tt-sensei.github.io/navi-character-/assets/web/characters';

const navi = {
  id: 'kai',
  start: `${NAVI_BASE}/kai/fullbody/waving.webp`,
  correct: `${NAVI_BASE}/kai/fullbody/correct.webp`,
  hint: `${NAVI_BASE}/kai/fullbody/hint.webp`,
  retry: `${NAVI_BASE}/kai/fullbody/retry.webp`,
  complete: `${NAVI_BASE}/kai/fullbody/complete.webp`
};

function setNavi(scene, alt) {
  const image = document.querySelector('#navi-image');
  image.src = navi[scene];
  image.alt = alt;
}
```

## EDU KITとの組み合わせ

- `edu-components`：出題、判定、保存、進捗
- `edu-effects`：問題画面、正誤演出、レイアウト
- `sounds-recipe-`：正解・不正解・達成の効果音
- `edu-assets`：バッジ、エレメント、コレクションの報酬画像
- `navi-character-`：案内・ヒント・励まし・達成を伝えるキャラクター画像

正誤は教材側のロジックが決めます。イベントを受けて、教材側でキャラクター画像を切り替えてください。

| イベント | 使い方の例 |
| --- | --- |
| `edu:correct` | `correct`へ切り替える |
| `edu:wrong` | `retry`へ切り替え、次の行動をテキストで示す |
| ヒントを開く | `hint`へ切り替える |
| `edu:badge` / 完了画面 | `complete`または`group-celebration`を表示する |

## AIへの短い依頼文

```text
制作前に https://github.com/TT-sensei/edu-kit と https://github.com/TT-sensei/navi-character- を確認してください。
キャラクターを使う場合はcatalog.jsonでID・画像名・実在パスを確認し、推測でURLやポーズを作らないでください。
キャラクターは案内、ヒント、正解、再挑戦、達成の補助に限定し、問題文と操作を最優先にしてください。
画像に文字を埋め込まず、教材側のHTMLでテキスト・操作・アクセシビリティを提供してください。
```
