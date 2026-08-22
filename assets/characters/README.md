# Character Assets

6人のナビキャラクター素材を、全教材から同じルールで利用するためのディレクトリです。

## Characters

- `riku`
- `sora`
- `kai`
- `saku`
- `tsuki`
- `nami`

## Standard structure

各キャラクターは次の構成に統一します。

- `base/` — キャラクターの基準画像・identity reference
- `fullbody/` — 全身ポーズ素材
- `expressions/` — 胸から上のナビ用表情素材

## Expression filenames

6人すべて同じファイル名を使用します。

1. `normal.png`
2. `happy.png`
3. `thinking.png`
4. `idea.png`
5. `surprised.png`
6. `troubled.png`
7. `encouraging.png`
8. `celebrating.png`
9. `frustrated.png`
10. `confident.png`

教材側では、たとえば次のようにキャラクター名だけ差し替えて利用できます。

`assets/characters/riku/expressions/happy.png`

## Recommended learning-state mapping

画像を `correct.png` や `hint.png` のように用途ごとに複製せず、教材側で状態と表情を対応させます。

- `default` → `normal`
- `correct` → `happy`
- `hint` → `thinking` または `idea`
- `retry` → `encouraging`
- `complete` → `celebrating`
- `challenge` → `confident`
- `mistake` → `troubled` または `frustrated`

## Naming rules

- 英小文字のみ
- 空白なし
- 表情名は6人で共通
- 基本形式は PNG 推奨
- 画像内に文字を焼き込まない
- キャラクター固有の髪型・服装・色・顔立ちは変更しない

## Purpose

`fullbody` はスタート・達成・大型演出向け、`expressions` は問題中の案内・ヒント・正誤フィードバック・会話UI向けとして使い分けます。
