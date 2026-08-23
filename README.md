# NAVI CHARACTER

小学校向けWeb教材で共通利用する、6人のナビゲーションキャラクター素材集です。

## AIで教材に使う

AIには、最初に[EDU KIT](https://github.com/TT-sensei/edu-kit)と[AI-GUIDE.md](AI-GUIDE.md)を確認させてください。

- キャラクターID・ポーズ名・表情名・画像パスは、必ず[catalog.json](catalog.json)で実在を確認します。
- 教材の開始は`waving`、正解は`correct`、ヒントは`hint`、再挑戦は`retry`、完了は`complete`を優先します。
- キャラクターは案内・励ましの補助です。問題文・答え・操作ボタンより目立たせません。
- 画像へ文字を直接入れず、教材側のHTMLで文字・操作・アクセシビリティを担保します。
- 教材側では画像URLをまとめて定義し、同じ場面でIDだけ変えられるようにします。

## 画像の使い方

すべてのキャラクターを同じ構造で管理しています。

```
assets/characters/{character-id}/
├── reference.jpeg          # 基準となる全身イラスト
├── fullbody/               # 全身ポーズ
└── expressions/            # 顔アップ・表情
```

- 全員共通のポーズは、同じ画像名です（例：`fullbody/waving.png`）。
- 全員共通の表情は、同じ画像名です（例：`expressions/01-normal-smile.png`）。
- 画像パスの `{character-id}` だけを入れ替えると、別キャラクターに差し替えられます。
- 追加時も、既存のファイル名を優先してそろえてください。
- 個別にしかないポーズは、内容が分かる英小文字・ハイフン区切りの名前です。

## Web教材向けWebP

Web教材・GitHub Pagesから表示するときは、原則として`assets/web/`以下のWebP版を使用します。
原本PNGと同じ相対パス・ファイル名で、拡張子だけが`.webp`になっています。

例：

```text
原本: assets/characters/kai/fullbody/checking-note.png
Web用: assets/web/characters/kai/fullbody/checking-note.webp
```

WebP版は長辺最大512pxで、縦横比と透過状態を維持した配信用派生ファイルです。52px程度の正誤表示から、200〜400px程度の教材・トップ画面表示までを想定しています。安定したキャッシュを利用できるよう、ファイル名とURLは場当たり的に変更しません。

原本PNGは削除・上書きせず、高解像度表示、印刷、制作・再編集、WebPでは解像度が不足する特殊な用途に限定して使用します。

## キャラクターID

| 名前 | ID |
|---|---|
| りく | `riku` |
| そら | `sora` |
| かい | `kai` |
| さく | `saku` |
| つき | `tsuki` |
| なみ | `nami` |

## 表情ファイル名

`01-normal-smile` / `02-happy` / `03-thinking` / `04-idea` / `05-surprised` / `06-troubled` / `07-encouraging` / `08-celebrating` / `09-frustrated` / `10-confident`

画像一覧と実際にあるパスは [catalog.json](catalog.json) で確認できます。

## 6人セット画像

集合画像は `assets/groups/` にあります。

- `group-standing.png`：基本集合写真
- `group-cheering.png`：全員で応援
- `group-studying.png`：一緒に学習
- `group-celebration.png`：達成・お祝い

集合画像のWeb利用時も、対応する`assets/web/groups/*.webp`を優先します。
