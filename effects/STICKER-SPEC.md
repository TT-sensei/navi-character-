# Fantasy Monster Sticker Spec

モンスター図鑑のステッカー演出は、透過画像のアルファ輪郭を基準にする。

## 採用

- `drop-shadow()` による輪郭追従の色ふち
- 同じWebPを `mask-image` に使う輪郭追従エフェクト
- ぷっくり樹脂（輪郭内のハイライト＋陰影）
- グロス（輪郭内だけを走る白いツヤ）
- ホログラム（輪郭内だけの虹反射）
- パール（輪郭内だけの淡い偏光）
- タップ時の短いポップ＋輪郭内フラッシュ
- キラキラのみ、ステッカーの周囲へ少し飛ばしてよい

## 不採用

- 四角い半透明レイヤー
- 楕円・円形の擬似ぷっくり背景
- モンスターの透明余白まで光るホログラム
- 未獲得モンスターへのエフェクト

## 実装

`fantasy-sticker.css` を基礎にし、`fantasy-sticker-silhouette.css` を後から読み込む。`fantasy-sticker-mask.js` が画像URLをCSS変数 `--sticker-mask` に設定する。

未獲得は `fantasy-sticker--locked` または `data-unlocked="false"` で演出を禁止する。
