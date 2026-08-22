# NAVI CHARACTER

小学校向けWeb教材で共通利用する、6人のナビゲーションキャラクター素材集です。

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

各キャラクターにまだない素材は、フォルダを作らず追加待ちとしています。画像一覧と実際にあるパスは [catalog.json](catalog.json) で確認できます。
