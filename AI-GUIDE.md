# NAVI CHARACTER — AI GUIDE

この文書は、AIが TT-sensei/navi-character- の素材を小学校向けWeb教材へ組み込むときの実装ガイドです。

このリポジトリは、教材の問題データや学習ロジックではありません。案内、励まし、正誤、達成、冒険、バトル、モンスター図鑑を視覚的に支える画像資産です。

教材を作成・修正する前に、次の3つを確認してください。

1. edu-kit：教材全体の共通設計
2. catalog.json：画像の実在、分類、対応関係
3. NAVI-USAGE.md：通常版ナビキャラの画面運用

## 最重要ルール

- ID、ファイル名、画像パスを推測しない。必ず catalog.json で確認する
- Web教材・GitHub Pagesでは、対応する assets/web/ 以下のWebPを最優先する
- 原本PNG・JPEGを削除、上書き、再圧縮、勝手に加工しない
- 画像に問題文、選択肢、答え、操作説明、吹き出しを埋め込まない
- 文字、ボタン、判定、アクセシビリティは教材側のHTMLで用意する
- キャラクターで問題領域や操作領域を狭くしない
- 同じ教材内で画像URLを複数箇所に直接書かず、設定として一か所にまとめる
- 装飾用画像の alt は空にし、意味を持つ画像には短く具体的な alt を付ける
- ファンタジー素材は、バトル・冒険型教材やモンスター図鑑に限定して使う
- モンスターの未獲得状態ではステッカー演出を発動しない

## 1. 使用前の確認手順

~~~text
catalog.json
  ↓
素材の分類と実在ファイルを確認
  ↓
assets/web/ 以下の対応WebPを確認
  ↓
教材の画面の意味に合う画像を選ぶ
  ↓
alt、サイズ、配置、読み込み方法を決める
~~~

実装前に、少なくとも次を確認します。

- キャラクターIDが riku / sora / kai / saku / tsuki / nami のいずれか
- ポーズ名、表情名、分類がカタログに存在する
- WebPが同じ相対パスで存在する
- 通常版とファンタジー版を取り違えていない
- 日常背景・集合画像のファイル名がカタログに存在する
- モンスターが zako / zako-evolved / boss のどこに属するか
- モンスターの日本語表示名とグループ番号1〜3をカタログから取得できる
- 進化系と元モンスターの対応が必要か
- その画像が学習を助けるか、単なる飾りになっていないか

## 2. 公開URL

通常版のWeb用画像：

~~~js
const NAVI_WEB = 'https://tt-sensei.github.io/navi-character-/assets/web/characters';

const characterUrl = (id, folder, file) =>
  NAVI_WEB + '/' + id + '/' + folder + '/' + file + '.webp';
~~~

例：

~~~js
const navi = {
  start: characterUrl('sora', 'fullbody', 'waving'),
  correct: characterUrl('tsuki', 'fullbody', 'correct'),
  hint: characterUrl('kai', 'fullbody', 'hint'),
  retry: characterUrl('nami', 'fullbody', 'retry'),
  complete: characterUrl('saku', 'fullbody', 'complete')
};
~~~

ファンタジーWeb用画像：

~~~js
const FANTASY_WEB = 'https://tt-sensei.github.io/navi-character-/assets/web/fantasy';

const fantasyUrl = (folder, file) =>
  FANTASY_WEB + '/' + folder + '/' + file + '.webp';

const monsterUrl = (category, file) =>
  FANTASY_WEB + '/monsters/' + category + '/' + file + '.webp';
~~~

URLを組み立てるだけで終わらせず、catalog.jsonで実際のファイルが公開されていることを確認してください。

## 3. 通常版ナビキャラ

| ID | 名前 | 役割 |
| --- | --- | --- |
| riku | りく | 高難度、テスト、落ち着いた説明、じっくり考える場面 |
| sora | そら | スタート、冒険開始、挑戦、元気な励まし |
| kai | かい | ヒント、解説、考え方の整理、丁寧な案内 |
| saku | さく | 案内、学習のコツ、達成をほめる場面 |
| tsuki | つき | 正解、記録更新、チャレンジ成功、勢いのある応援 |
| nami | なみ | 不正解後の再挑戦、振り返り、安心感のある励まし |

通常版の基本シーン：

| 学習イベント | 優先ポーズ | キャラクターの例 |
| --- | --- | --- |
| 開始・あいさつ | waving または greeting | そら |
| 正解・できた | correct | つき |
| ヒント・考え方 | hint | かい |
| 不正解後・再挑戦 | retry | なみ |
| 単元完了・達成 | complete | さく |
| 高難度・集中 | thinking、checking-note など | りく |

共通ポーズがある場合は、個別ポーズよりも共通ポーズを優先すると、教材間で意味を統一できます。

通常の正誤表示では、キャラクター画像は52px前後を基準にします。大きく表示する場合も、問題文や入力欄を押し下げないことを優先します。

## 4. 通常版の集合画像・日常背景・学習シーン

### 基本・用途別の集合画像

~~~text
assets/web/groups/
  group-standing.webp
  group-cheering.webp
  group-studying.webp
  group-celebration.webp
  group-huddle.webp
  group-jumping.webp
  group-presenting.webp
  group-start-dash.webp
  group-thinking.webp
  group-peeking.webp
  group-moving-forward.webp
~~~

| 素材 | 使う場面 | 配置のポイント |
| --- | --- | --- |
| group-presenting | トップ、タイトル、開始ボタン | 中央の余白にHTMLのタイトルやボタンを重ねる |
| group-start-dash | 挑戦開始、ゲーム開始 | 問題開始前だけに使い、問題画面では小さくする |
| group-thinking | ヒント、解説 | 考え方の文章と併用する |
| group-peeking | 結果カード、ポップアップ | 中央の余白をカード用に残す |
| group-moving-forward | 次の単元、次のステージ | 6人全員が右へ進む構図を保つ |

集合画像は意味のある場面で1枚だけ使い、問題文・入力欄・開始ボタンより大きくしません。文字や吹き出しは画像に追加せず、必ずHTMLで重ねます。

### 日常背景

通常版ナビキャラや集合画像を重ねて使う、16:9の背景です。

~~~text
assets/web/backgrounds/daily/
  daily-classroom.webp
  daily-gymnasium.webp
  daily-library.webp
  daily-cafe.webp
  daily-shopping-street.webp
  daily-bedroom.webp
  daily-park.webp
  daily-schoolyard.webp
  daily-living-room.webp
  daily-riverside.webp
~~~

~~~js
const DAILY_BACKGROUND_WEB =
  'https://tt-sensei.github.io/navi-character-/assets/web/backgrounds/daily';

const dailyBackgroundUrl = (id) =>
  DAILY_BACKGROUND_WEB + '/' + id + '.webp';
~~~

- 背景は場面を示すために使い、人物・文字・操作UIは教材側で重ねる
- キャラクターの足元を床・道・芝生の位置に合わせる
- 問題文や入力欄の下には十分な不透明度のパネルを置き、背景の上でも読めるようにする
- 日常背景にファンタジー衣装のキャラクターやモンスターを混ぜない

### 日常・学習シーン

日常シーン：

~~~text
assets/web/groups/daily/
  group-daily-arrival.webp
  group-daily-classroom.webp
  group-daily-study.webp
  group-daily-recess.webp
  group-daily-cleanup.webp
~~~

教科別学習シーン：

~~~text
assets/web/groups/learning/
  group-learning-japanese-reading.webp
  group-learning-japanese-discussion.webp
  group-learning-math-diagram.webp
  group-learning-math-shapes.webp
  group-learning-science-observation.webp
  group-learning-science-experiment.webp
  group-learning-social-map.webp
  group-learning-social-sources.webp
  group-learning-pair-consulting.webp
  group-learning-pair-exchange.webp
~~~

画像だけで学習内容を判断させず、見出しやHTMLの説明文を必ず併用します。画像内の文字を読み取らせる設計にはしません。

## 5. ファンタジー素材の扱い

ファンタジーは「通常版の別衣装」であり、6人の役割は固定です。

| 通常ID | 役割 | Web用の立ち姿 |
| --- | --- | --- |
| kai | 魔導士 | fantasy/kai-mage.webp |
| sora | 剣士 | fantasy/sora-swordsman.webp |
| riku | 忍者 | fantasy/riku-ninja.webp |
| tsuki | アーチャー | fantasy/tsuki-archer.webp |
| nami | 守護騎士 | fantasy/nami-guardian-knight.webp |
| saku | 僧侶 | fantasy/saku-cleric-healer.webp |

キャラクター設定を変更しないでください。

- かいは水色と紺のローブ、杖、青い結晶、魔導書。帽子なし、丸い黒ぶち眼鏡あり
- そらは青いジャケット、軽装、片手剣
- りくは濃紺の忍者衣装、クナイ2本、顔を隠さない
- つきは橙色のアーチャー衣装、青いショーツ、弓、矢筒。エルフ化しない
- なみは軽い銀色の防具、青い布、丸盾
- さくは白〜クリーム色、金色の縁取り、癒しの杖。宗教記号なし

ファンタジー版に対して、別の武器、別の職業、帽子、角、翼、エルフ耳、過度な鎧、キャラクターを隠すほど大きな魔法エフェクトを勝手に追加しないでください。

### 動作差分

~~~text
assets/web/fantasy/attack/
assets/web/fantasy/damage/
assets/web/fantasy/special/
~~~

基本の意味：

- stand：問題に取り組んでいる通常状態
- attack：通常攻撃
- damage：誤答などでダメージを受けた瞬間
- special：重要な連続正解や大きな達成

九九・計算バトルでは、基本的に通常状態をSTAND、5コンボをATTACK、10・15・20…コンボをSPECIAL、被弾をDAMAGEへ対応させます。10コンボ以上ではATTACKよりSPECIALを優先します。

ATTACKとSPECIALは、動きが伝わる大きさにしてよいですが、問題、入力欄、敵、キャラクターの顔を隠さないでください。DAMAGEは通常サイズを基本にします。

## 6. ファンタジー背景と集合画像

背景WebP：

~~~text
assets/web/fantasy/backgrounds/
  forest.webp
  grassland.webp
  cave.webp
  riverbank.webp
  sea.webp
  volcano.webp
  ruins.webp
  sky-island.webp
  town.webp
  training-ground.webp
~~~

用途の目安：

- town：スタート、冒険の出発
- training-ground：特訓、練習、作戦確認
- forest：ザコ戦、探索
- cave：中ボス、洞窟
- ruins：ボス、戦闘準備
- volcano：大ボス
- sky-island：SPECIAL、大きな達成
- grassland、riverbank、sea：通常の冒険や環境に合わせた場面

ファンタジー集合画像：

~~~text
assets/web/fantasy/groups/
  group-fantasy-town.webp
  group-fantasy-adventure.webp
  group-fantasy-battle.webp
  group-fantasy-celebration.webp
  group-fantasy-training.webp
~~~

初期案は assets/web/fantasy/groups/initial/ にあります。現在の教材では通常の groups/ を優先し、initial は比較・記録目的に限定します。

カタログには、次の配置プリセットもあります。

- forest-zako：森のザコ戦
- cave-midboss：洞窟の中ボス戦
- ruins-boss：遺跡のボス戦
- volcano-grandboss：火山の大ボス戦
- sky-special：浮島のSPECIAL戦

## 7. モンスターと進化系

モンスターの分類は次のとおりです。

| フォルダ | 体数 | 役割 |
| --- | ---: | --- |
| zako | 71 | 通常のザコ |
| zako-evolved | 71 | ザコの進化系 |
| boss | 38 | 中ボス、大ボス、ラスボス |

catalog.jsonで管理されている合計は180体です。

Web用URLの形式：

~~~text
assets/web/fantasy/monsters/{category}/{monster-id}.webp
~~~

進化系の対応は catalog.json の evolutionMap を使います。名前だけから親モンスターを推測せず、登録された対応を使用してください。

~~~js
const evolutionMap = catalog.fantasy.monsters.evolutionMap;
const parentId = evolutionMap['purun-little-magic-slime-evolved'];
~~~

### 日本語名とグループ1〜3

モンスターの英語IDは、画像URL・データキー・localStorageの保存キーとして固定です。画面に見せる日本語名とカテゴリ内のグループ番号は、必ずカタログから取得します。

~~~js
const monsters = catalog.fantasy.monsters;
const category = 'zako'; // zako / zakoEvolved / boss
const monsterId = 'purun-little-magic-slime';

const displayName = monsters.displayNamesJa[monsterId];
const group = monsters.groupAssignments[category][monsterId]; // 1 / 2 / 3
~~~

- 画面の見出し、カード名、`alt` には `displayNamesJa[id]` を使う
- URL・ファイル名・保存キーには英語IDを使い、日本語名へ置き換えない
- `zakoEvolved` はカタログ上のキー名で、画像フォルダ名は `zako-evolved`
- ザコ進化系のグループ番号は、対応する元ザコと同じ。対応元は `evolutionMap` で確認する
- 図鑑やステージ選択では、カテゴリを選んだ後にグループ1〜3で絞り込む
- グループ番号を名前・色・見た目から推測したり、教材側で振り直したりしない

モンスター図鑑を作るときの基本：

- zako、zako-evolved、bossを別カテゴリとして表示する
- 未発見・未獲得と獲得済みを区別する
- 撃破回数や初回獲得日は教材側のlocalStorageで管理する
- モンスター画像に名前や説明文を直接埋め込まない
- 表示名は displayNamesJa、グループは groupAssignments を参照する
- Web表示には assets/web/fantasy/monsters/ 以下のWebPを使う
- 図鑑の画像一覧は基本静止にし、タップ時だけ短い反応を加える

## 8. モンスターのステッカー演出

effects/ は、元のモンスター画像を加工せず、教材側でステッカー風の見た目を追加するための共通CSS・JavaScriptです。

読み込み：

~~~html
<link rel="stylesheet" href="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker.css">
<script src="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker-mask.js" defer></script>
<script src="https://tt-sensei.github.io/navi-character-/effects/fantasy-sticker.js" defer></script>
~~~

基本HTML：

~~~html
<span class="fantasy-sticker fantasy-sticker--resin fantasy-sticker--gloss"
      data-outline-mask
      data-sticker-tap
      data-unlocked="true"
      tabindex="0"
      role="button">
  <img class="fantasy-sticker__image"
       src="MONSTER_WEBP_URL"
       alt="モンスター名">
  <span class="fantasy-sticker__sparkles" aria-hidden="true"></span>
</span>
~~~

使用できる主なクラス：

- fantasy-sticker--resin：輪郭追従のぷっくり樹脂
- fantasy-sticker--gloss：輪郭内を走るツヤ
- fantasy-sticker--holo：輪郭内のレインボーホログラム
- fantasy-sticker--pearl：輪郭内の淡い偏光パール
- fantasy-sticker--edge-white、edge-sky、edge-mint、edge-pink、edge-purple、edge-red、edge-gold、edge-silver：縁取り色

重要な仕様：

- 画像の透過アルファを輪郭の基準にする
- ぷっくり、グロス、ホログラム、パールはモンスターの見えている部分だけに表示する
- 四角、丸、楕円の疑似背景でぷっくり表現を作らない
- キラキラだけはステッカー周囲へ少し出してよい
- data-unlocked="false" または fantasy-sticker--locked では演出を発動しない
- prefers-reduced-motion ではアニメーションを止める
- 図鑑一覧で常時動かし続けず、タップ時に短く反応させる

## 9. edu-kitとの役割分担

| 役割 | 担当 |
| --- | --- |
| 問題、判定、保存、進捗 | edu-components、教材側ロジック |
| レイアウト、タイマー、正誤演出 | edu-effects、教材側CSS |
| 効果音 | sounds-recipe- |
| バッジ、エレメント、コレクション | edu-assets |
| 案内、ヒント、励まし、達成の画像 | navi-character- |
| ファンタジー背景、冒険キャラ、敵、図鑑演出 | navi-character- fantasy / effects |

正解か不正解かをキャラクター画像から判断させません。教材の判定ロジックがイベントを発生させ、そのイベントに応じて画像を切り替えます。

## 10. アクセシビリティと表示

- 意味のあるキャラクター画像には、場面が分かる alt を付ける
- 装飾目的の集合画像には alt="" を使える
- 画像だけで正解・不正解を伝えず、HTMLテキストでも伝える
- タップ可能なステッカーにはキーボード操作でも到達できるようにする
- tabindex="0" を付ける場合は、EnterやSpaceでも反応できるようにする
- prefers-reduced-motion を尊重する
- 色の違いだけで状態を判別させない
- スマートフォンやタブレットの横画面で、問題や入力欄を圧迫しない

## 11. 素材を追加・変更するとき

新しい素材を追加する場合：

1. 通常版かファンタジー版か、分類を決める
2. 既存の画風、透過、サイズ、縦横比を確認する
3. 原本PNG・JPEGを保存する
4. Web配信用のWebPを対応する assets/web/ 以下へ用意する
5. 原本とWeb用で分類・ファイル名を一致させる
6. catalog.jsonへ追加する
7. 公開サイトで表示とURLを確認する
8. README.md、AI-GUIDE.md、必要ならNAVI-USAGE.mdを更新する

ファンタジー素材を追加する場合の分類：

- 通常キャラクター：assets/fantasy/ の役割固定ファイル
- 動作差分：attack / damage / special
- 背景：backgrounds
- 集合画像：groups
- ザコ：monsters/zako
- 進化系：monsters/zako-evolved
- ボス：monsters/boss

モンスターを追加する場合、似た色、形、名前、シルエットが続かないようにします。進化系を追加する場合は、元モンスターとの1対1対応を evolutionMap に登録し、`displayNamesJa` とカテゴリ内の `groupAssignments` も追加します。進化系は元ザコと同じグループ番号にします。

## 12. やってはいけないこと

- catalog.jsonにない画像URLを作る
- 大容量の原本PNGを通常のWeb表示へ直接使う
- 原本をWeb用に上書きする
- 画像へ日本語や説明を描き込む
- 通常版の6人の顔・髪・服・体格を変える
- かいから眼鏡を外す
- ファンタジーの職業や武器を入れ替える
- つきをエルフ化する
- さくへ宗教記号を追加する
- モンスターの進化系をボスに分類する
- モンスターの日本語名やグループ番号を推測・再採番する
- 未獲得モンスターへステッカー演出を発動する
- キャラクターを問題文や操作ボタンより目立たせる
- アニメーションを常時動かし続ける
- キャラクター画像だけで学習内容や判定を伝える

迷った場合は、catalog.jsonに戻り、既存の命名、分類、WebP対応、NAVI-USAGE.mdの運用方針を確認してください。
