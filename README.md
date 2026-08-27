# NAVI CHARACTER

小学校向けWeb教材で共通して使用する、6人のナビゲーションキャラクターとファンタジー素材の総合素材集です。

通常の学習画面で使うナビキャラ、日常・学習場面の集合画像、ファンタジー教材用の冒険キャラクター・背景・モンスター、モンスター図鑑用のステッカー演出を、同じ世界観で管理しています。

公開カタログ・画像プレビュー：
https://tt-sensei.github.io/navi-character-/

AIや教材制作で使用するときは、AI-GUIDE.md、画像の実在確認には catalog.json、教材画面での運用には NAVI-USAGE.md を確認してください。

## この素材集の考え方

ナビキャラは、教材の主役ではなく、学習を支える案内役です。

- 問題文、図、答え、操作ボタンを最優先する
- キャラクターは開始、ヒント、正解、再挑戦、達成などの意味を補助する
- 画像に文字や吹き出しを埋め込まず、教材側のHTMLで表示する
- 同じ場面では、誰を表示しても意味が大きく変わらないようにする
- ファンタジー素材は、通常の学習案内ではなく、バトル・冒険型教材に限定して使う

## 収録している素材

### 通常版ナビキャラ

6人のキャラクターについて、次の素材を収録しています。

- 基準全身画像 reference.jpeg
- 共通の全身ポーズ
- 共通の表情10種
- 6人の集合画像
- 日常生活の集合画像5種
- 教科別の学習シーン8種
- 二人組の相談・交流シーン2種

キャラクターIDは次のとおりです。

| 名前 | ID | 基本的な個性 |
| --- | --- | --- |
| りく | riku | 冷静で思慮深い。難しい課題にも落ち着いて向き合う |
| そら | sora | 元気で冒険的。開始や挑戦を明るく後押しする |
| かい | kai | 知的で穏やか。ヒントや考え方の整理を担当する |
| さく | saku | 社交的であたたかい。案内や達成の声かけに向く |
| つき | tsuki | 活発で反応が大きい。正解や挑戦成功を盛り上げる |
| なみ | nami | 穏やかで安心感がある。再挑戦や振り返りを支える |

顔、髪型、髪色、服装、体格、眼鏡などの識別要素は、全身ポーズや表情差分でも変更しません。特に、かいの丸い黒ぶち眼鏡は必須の特徴です。

### 通常版のディレクトリ

~~~text
assets/characters/{character-id}/
├── reference.jpeg
├── fullbody/
└── expressions/

assets/web/characters/{character-id}/
├── fullbody/
└── expressions/
~~~

全身ポーズと表情は、可能な限り6人で同じファイル名を使います。開始の waving、正解の correct、ヒントの hint、再挑戦の retry、完了の complete などは、character-idだけを差し替えて利用できます。

表情は次の共通10種です。

~~~text
01-normal-smile
02-happy
03-thinking
04-idea
05-surprised
06-troubled
07-encouraging
08-celebrating
09-frustrated
10-confident
~~~

個別ポーズはキャラクターの個性を表すための追加素材です。共通ポーズと同じ意味で無理に置き換えず、catalog.jsonで実在を確認して使用してください。

## 集合画像・日常・学習シーン

### 基本集合画像

基本の6人集合画像は assets/groups/ にあります。

| ファイル | 用途 |
| --- | --- |
| group-standing.png | 紹介、トップ画面、基本の立ち姿 |
| group-cheering.png | スタート、応援、挑戦開始 |
| group-studying.png | 学習ポータル、教材一覧、学習中 |
| group-celebration.png | クリア、達成、バッジ獲得 |
| group-huddle.png | 協力、仲間感、作戦を考える場面 |
| group-jumping.png | 大きな達成、記録更新、躍動感のある場面 |
| group-presenting.png | 中央のタイトルやボタンを6人で案内する場面 |
| group-start-dash.png | 挑戦開始、ゲーム開始、学習スタート |
| group-thinking.png | ヒント、解説、いっしょに考える場面 |
| group-peeking.png | 結果カードやポップアップの周囲を飾る場面 |
| group-moving-forward.png | 次の単元、次のステージ、学習終了後の案内 |

集合画像は、タイトルや学習開始ボタンより大きく目立たせません。教材のトップ画面では6人集合を第一候補にしますが、学習中は必要に応じて個人画像や学習シーン画像を使います。

### 日常シーン

学校生活の雰囲気を伝える追加素材です。

~~~text
assets/groups/daily/
├── group-daily-arrival.png
├── group-daily-classroom.png
├── group-daily-study.png
├── group-daily-recess.png
└── group-daily-cleanup.png
~~~

- arrival：登校・朝の出会い
- classroom：教室で授業前の準備
- study：協力して学ぶ時間
- recess：休み時間・遊び
- cleanup：掃除・協力

### 学習シーン

キャラクターが教科の記号を持つだけでなく、実際に学習活動をしていることが伝わるようにした素材です。教科専用の衣装には変更せず、通常版の6人であることを優先しています。

~~~text
assets/groups/learning/
├── group-learning-japanese-reading.png
├── group-learning-japanese-discussion.png
├── group-learning-math-diagram.png
├── group-learning-math-shapes.png
├── group-learning-science-observation.png
├── group-learning-science-experiment.png
├── group-learning-social-map.png
├── group-learning-social-sources.png
├── group-learning-pair-consulting.png
└── group-learning-pair-exchange.png
~~~

- 国語：文章を読む、自分の考えを伝え合う
- 算数：図を使って考える、図形を調べる
- 理科：観察する、実験して確かめる
- 社会：地図から調べる、資料を比べて考える
- 二人組：机を並べて相談する、立って考えを交流する

集合画像は、必ずしも6人全員である必要はありません。自然な人数、視線、手の動き、学習活動の分かりやすさを優先します。

## ファンタジー素材

ファンタジー部門は、通常版ナビキャラとは用途を分けた、冒険・バトル型の学習教材用素材シリーズです。

算数の計算バトル、九九ファンタジー、割り算バトル、モンスター図鑑などで、問題演習の流れを「挑戦する → 攻撃する → ダメージを受ける → 必殺技を出す → クリアする」という視覚的な体験にできます。

通常の国語・算数・理科・社会の案内やヒントでは、まず通常版ナビキャラを使います。ファンタジー衣装のキャラクターやモンスターを、通常教材の飾りとして無制限に混ぜないでください。

### ファンタジーのIDENTITY LOCK

ファンタジー版は、通常版の6人が衣装と役割を変えた姿です。別人、新キャラクター、種族変更として扱いません。

- 顔、髪型、髪色、体格、表情の印象を維持する
- 2.5〜3頭身、太めで柔らかな輪郭線、明るいソフトセル塗りを維持する
- キャラクターが隠れるほど武器やエフェクトを大きくしない
- 役割、武器、色、衣装を勝手に入れ替えない
- 人間キャラクターをエルフ、魔王、獣人などに変更しない
- ファンタジー版にも文字、吹き出し、ロゴを入れない

### 6人のファンタジー役割

| 通常版 | ファンタジー役 | 固定する特徴 |
| --- | --- | --- |
| かい kai | 魔導士 Mage | 水色と紺のローブ、杖、青い結晶、魔導書。帽子はかぶせない。丸い黒ぶち眼鏡を必ず残す |
| そら sora | 剣士 Swordsman | 青いジャケット、軽装、片手剣 |
| りく riku | 忍者 Ninja | 濃紺の衣装、クナイ2本、顔を隠さない |
| つき tsuki | アーチャー Archer | 橙色の衣装、青いショーツ、弓、矢筒。エルフ化しない |
| なみ nami | 守護騎士 Guardian Knight | 軽い銀色の防具、青い布、丸盾 |
| さく saku | 僧侶 Cleric | 白〜クリーム色、金色の縁取り、癒しの杖。宗教記号は入れない |

### ファンタジーのキャラクター画像

通常立ち姿は次の場所にあります。

~~~text
assets/fantasy/
├── kai-mage.png
├── sora-swordsman.png
├── riku-ninja.png
├── tsuki-archer.png
├── nami-guardian-knight.png
└── saku-cleric-healer.png
~~~

バトルの動作差分は、6人それぞれについて次の3種類があります。

~~~text
assets/fantasy/attack/
assets/fantasy/damage/
assets/fantasy/special/
~~~

動作の意味は次のとおりです。

| 動作 | 意味 | 使う場面 |
| --- | --- | --- |
| STAND | 待機・通常状態 | 問題に取り組んでいる間 |
| ATTACK | 通常攻撃 | 連続正解など、通常の攻撃演出 |
| DAMAGE | ダメージを受けた瞬間 | 誤答や敵からの攻撃 |
| SPECIAL | 必殺技 | 大きな連続正解、重要な達成 |

バトル教材の基本対応は、STANDを通常表示、5コンボでATTACK、10・15・20…コンボでSPECIAL、被弾時にDAMAGEです。10コンボ以上ではATTACKよりSPECIALを優先します。

DAMAGEは通常サイズを基準にし、ATTACKとSPECIALだけを少し大きく見せる設計を想定しています。

### ファンタジー背景

横長のバトル画面やスタート画面に使う背景です。

~~~text
assets/fantasy/backgrounds/
├── forest.png
├── grassland.png
├── cave.png
├── riverbank.png
├── sea.png
├── volcano.png
├── ruins.png
├── sky-island.png
├── town.png
└── training-ground.png
~~~

- forest：森のザコ戦、探索
- grassland：序盤の冒険、明るい練習
- cave：洞窟、中ボス戦
- riverbank：川辺、水に関する場面
- sea：海辺、水上の冒険
- volcano：大ボス戦、強い敵
- ruins：遺跡、ボス戦、戦闘準備
- sky-island：SPECIAL、大きな冒険
- town：スタート、出発、冒険の入口
- training-ground：練習、特訓、作戦確認

### ファンタジー集合画像

~~~text
assets/fantasy/groups/
├── group-fantasy-town.png
├── group-fantasy-adventure.png
├── group-fantasy-battle.png
├── group-fantasy-celebration.png
└── group-fantasy-training.png
~~~

- town：ファンタジーの町、出発
- adventure：森の探索、冒険
- battle：遺跡などでの戦闘準備
- celebration：クエスト成功、お祝い
- training：練習場、作戦会議

作り直し前の初期案も、比較・記録用として保存しています。

~~~text
assets/fantasy/groups/initial/
~~~

初期案は新しい集合画像の代わりに使うものではありません。教材で使用する場合は、通常の assets/fantasy/groups/ 以下を優先します。

### モンスター

モンスターは、通常版ナビキャラから独立した素材です。サイトのモンスター図鑑やバトル教材で使用します。

~~~text
assets/fantasy/monsters/
├── zako/          # ザコモンスター 71体
├── zako-evolved/ # ザコの進化系 71体
└── boss/         # 中ボス・大ボス・ラスボス 38体
~~~

合計180体です。

- zako：通常のザコ敵
- zako-evolved：既存ザコに対応する進化系
- boss：中ボス、大ボス、ラスボス

進化系は、ファイル名の末尾に -evolved を付け、元のザコと1対1で対応しています。進化系はボスではありません。分類はフォルダ名と catalog.json を基準にし、見た目だけで分類を推測しないでください。

代表的なボスには、aqua-slime-king、crystal-golem、forest-horn-king、thunder-griffon、azure-sky-dragon、crimson-inferno-dragon、lumina-moon-phoenix、noxstella-star-eater、abyssal-mirror-leviathan、gloomthorn-forest-titan、nightveil-raven-king、obsidian-comet-wyvern、phantom-lantern-dragon などがあります。

モンスターの画風は、通常版ナビキャラと同じ世界の素材として並べられることを優先します。

- 2.5〜3頭身程度
- 太めの輪郭線
- 明るいソフトセル塗り
- かわいい、かっこいい、少し不気味な方向を許容
- 黒一色のシルエットや、他のモンスターと区別できない形は避ける
- 透過背景
- モンスター本体へ文字や名前を入れない

### モンスター図鑑のステッカー演出

effects/ には、モンスター画像を教材側のCSSとJavaScriptでステッカー風に見せる共通素材があります。

~~~text
effects/
├── README.md
├── STICKER-SPEC.md
├── fantasy-sticker.css
├── fantasy-sticker-mask.js
├── fantasy-sticker.js
├── sticker-lab.css
└── sticker-lab.js
~~~

この演出は元画像を加工・再生成するものではありません。透過画像の輪郭を利用して、教材画面上でステッカーの見た目を重ねます。

採用している演出：

- 透過輪郭に沿った白・色付きの縁取り
- 輪郭内だけに乗るぷっくり樹脂風の陰影
- 輪郭内を走るグロス
- 輪郭内だけのホログラム
- 輪郭内だけの淡いパール
- タップ時の短いポップ、光、キラキラ

四角形や楕円の半透明レイヤーを置いて「ぷっくり」に見せる方法は使いません。未獲得モンスターには装飾エフェクトを発動させず、図鑑一覧は基本静止にします。

## 原本とWeb用軽量版

原本とWeb用派生版を分けて管理しています。

~~~text
原本：
assets/characters/
assets/groups/
assets/fantasy/
effects/

Web用：
assets/web/characters/
assets/web/groups/
assets/web/fantasy/
~~~

Web教材やGitHub Pagesでは、対応する assets/web/ 以下のWebPを優先します。

例：

~~~text
原本：
assets/fantasy/monsters/boss/crimson-inferno-dragon.png

Web用：
assets/web/fantasy/monsters/boss/crimson-inferno-dragon.webp
~~~

WebP版は原本と分類・ファイル名が対応しています。長辺最大512pxを基本とし、透過状態、縦横比、ポーズ、構図を維持しています。

原本PNG・JPEGは削除、上書き、再圧縮、勝手な加工をしません。高解像度表示、印刷、制作・再編集、WebPでは解像度が足りない特殊な用途に限って使います。

WebPが存在しない場合は、catalog.jsonと実際の公開パスを確認してから原本へフォールバックします。推測でURLを作りません。

## カタログと公開サイト

catalog.json は、キャラクターID、ポーズ名、表情名、集合画像、ファンタジー素材、モンスター分類、進化対応、背景、プリセットを確認するための正本です。

公開サイトでは、素材のプレビュー、Web用URL、高画質原本のダウンロード、モンスター図鑑、ファンタジー素材の配置確認を行えます。

コードから利用するときは、次の順番で確認します。

1. catalog.jsonで素材が実在するか確認する
2. 同じ分類の assets/web/ 以下にWebPがあるか確認する
3. Web教材ではWebP URLを使う
4. alt、表示サイズ、表示目的を教材側で設定する
5. 必要がなければ原本を教材リポジトリへコピーしない

## 関連ドキュメント

- AI-GUIDE.md：AIが素材を選び、実装するときの詳細ルール
- NAVI-USAGE.md：教材画面でのキャラクター運用設計
- catalog.json：実在する素材のカタログ
- navi-character.json：機械的に参照するための基本情報
- effects/README.md：モンスター図鑑ステッカー演出
- effects/STICKER-SPEC.md：採用・不採用エフェクトの仕様
- edu-kit：教材共通設計、UI、保存、演出の基盤
