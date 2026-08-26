# NAVI Effects

既存のNAVI画像を加工せず、教材側からCSSだけで演出を追加するための共通エフェクトです。

## Fantasy Sticker

`fantasy-sticker.css` は、Fantasyモンスターなどの透過画像をステッカー風に表示します。

### 読み込み

```html
<link rel="stylesheet" href="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker.css">
```

### 基本

```html
<span class="fantasy-sticker fantasy-sticker--idle">
  <img class="fantasy-sticker__image" src="MONSTER_WEBP_URL" alt="モンスター名">
</span>
```

Web教材では `assets/web/fantasy/monsters/` 以下に実在する軽量WebPを確認して使用してください。URLやファイル名を推測しないでください。

### レア度・演出

- `fantasy-sticker--rare` : 明るい銀白系のステッカー
- `fantasy-sticker--sr` : やや金色の縁・影
- `fantasy-sticker--secret` : 特別な光を追加
- `fantasy-sticker--holo` : 虹色のホログラム反射
- `fantasy-sticker--idle` : ごく小さな上下・傾きの待機モーション
- `fantasy-sticker--reveal` : 獲得時の一度だけのポップ演出
- `fantasy-sticker--locked` : 図鑑の未獲得シルエット
- `fantasy-sticker--static` : 一覧表示などでアニメーション停止

組み合わせ例:

```html
<span class="fantasy-sticker fantasy-sticker--sr fantasy-sticker--holo fantasy-sticker--idle">
  <img class="fantasy-sticker__image" src="MONSTER_WEBP_URL" alt="モンスター名">
</span>
```

## 運用方針

- 元画像は編集・複製しない。
- 教材では軽量WebPを優先する。
- ホログラムを常時すべての画像へ付けない。レア報酬や獲得演出など、意味のある場面に限定する。
- モンスター図鑑の大量一覧では `--static` を基本にし、選択中の1体だけ動かすと軽い。
- `prefers-reduced-motion` では自動的にアニメーションを停止する。
- ステッカーは装飾。問題文・正誤・操作など学習上必要な情報を画像だけに持たせない。
