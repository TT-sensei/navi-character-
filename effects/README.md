# NAVI Effects

既存のNAVI画像を加工せず、教材側からCSSだけで演出を追加するための共通エフェクトです。

## Fantasy Sticker

Fantasyモンスターの透過PNG/WebPを、その輪郭に沿ってステッカー化します。

### 基本方針

- 白・色付き縁取りは `drop-shadow()` で透過輪郭に追従。
- ぷっくり樹脂、ツヤ、ホログラム、パールは同じ画像をCSS `mask-image` として使い、**モンスターの見えている部分だけ**に乗せる。
- 四角・丸・楕円の疑似レイヤーで「ぷっくり」に見せる方式は使わない。
- キラキラだけはステッカーの周囲に飛ばす演出なので輪郭外に出してよい。
- 未獲得 (`fantasy-sticker--locked`) では装飾エフェクトを発動しない。

### 読み込み

```html
<link rel="stylesheet" href="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker.css">
<script src="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker-mask.js" defer></script>
<script src="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker.js" defer></script>
```

### 基本HTML

```html
<span class="fantasy-sticker fantasy-sticker--resin fantasy-sticker--gloss" data-outline-mask data-sticker-tap data-unlocked="true" tabindex="0" role="button">
  <img class="fantasy-sticker__image" src="MONSTER_WEBP_URL" alt="モンスター名">
  <span class="fantasy-sticker__sparkles" aria-hidden="true"></span>
</span>
```

Web教材では `assets/web/fantasy/monsters/` 以下に実在する軽量WebPを確認して使用してください。

### エフェクト

- `fantasy-sticker--resin` : 輪郭追従のぷっくり樹脂
- `fantasy-sticker--gloss` : 輪郭内を光が走るツヤ
- `fantasy-sticker--holo` : 輪郭内だけのレインボーホログラム
- `fantasy-sticker--pearl` : 淡い偏光パール
- `fantasy-sticker--edge-*` : 白・水色・ミント・ピンク・紫・赤・金・銀の輪郭色

タップすると `fantasy-sticker.js` が、獲得済みだけに短いポップ・光・キラキラを再生します。

### 未獲得

```html
<span class="fantasy-sticker fantasy-sticker--locked" data-outline-mask data-sticker-tap data-unlocked="false" aria-disabled="true">
  <img class="fantasy-sticker__image" src="MONSTER_WEBP_URL" alt="未発見モンスター">
  <span class="fantasy-sticker__sparkles" aria-hidden="true"></span>
</span>
```

## 運用

- 元画像は編集・複製しない。
- 教材では軽量WebPを優先する。
- 図鑑一覧は基本静止。選択・タップ時に短く反応させる。
- `prefers-reduced-motion` ではアニメーションを止める。
