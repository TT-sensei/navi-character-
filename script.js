const characters=[
  {id:'riku',label:'りく',fullbody:['waving','correct','hint','retry','complete','arms-crossed','hands-in-pockets','leaning','over-shoulder','pointing','hand-over-heart','reaching-out','chin-rest','looking-away','brushing-bangs']},
  {id:'sora',label:'そら',fullbody:['arms-up','complete','correct','dynamic','fists','greeting','hint','jumping','laughing','reaching','retry','running','stretching','thumbs-up','waving']},
  {id:'kai',label:'かい',fullbody:['adjusting-glasses','checking-note','chin-rest','complete','correct','hands-clasped','hint','looking-over-glasses','pointing','quiet-victory','reaching-out','reading','retry','thinking','waving']},
  {id:'saku',label:'さく',fullbody:['complete','correct','curtsy','finger-heart','hand-on-cheek','hands-behind-back','hands-clasped','head-tilt','heart-hands','hint','reading','retry','soft-wave','twirling','waving']},
  {id:'tsuki',label:'つき',fullbody:['complete','correct','dynamic-pose','hands-on-hips','hands-up','hint','jumping','laughing','peace-sign','reaching-out','retry','running','stretching','tying-hair','waving']},
  {id:'nami',label:'なみ',fullbody:['brush-hair','chin-rest','complete','correct','finger-to-lips','hand-over-heart','hands-behind-back','hint','holding-umbrella','looking-away','reaching-out','reading','retry','sitting','waving']},
  {id:'shin',label:'しん',fullbody:['standing'],expressions:[]},
  {id:'rin',label:'りん',fullbody:['standing'],expressions:[]}
].map(c=>({expressions:['01-normal-smile','02-happy','03-thinking','04-idea','05-surprised','06-troubled','07-encouraging','08-celebrating','09-frustrated','10-confident'],...c}));
const fantasyCharacters=[
  {id:'kai',label:'かい',job:'魔導士',base:'kai-mage',standing:'kai-mage'},
  {id:'sora',label:'そら',job:'剣士',base:'sora-swordsman',standing:'sora-swordsman'},
  {id:'riku',label:'りく',job:'忍者',base:'riku-ninja',standing:'riku-ninja'},
  {id:'nami',label:'なみ',job:'騎士',base:'nami-knight',standing:'nami-guardian-knight'},
  {id:'saku',label:'さく',job:'僧侶',base:'saku-cleric',standing:'saku-cleric-healer'},
  {id:'tsuki',label:'つき',job:'アーチャー',base:'tsuki-archer',standing:'tsuki-archer'}
].map(c=>({...c,fullbody:'standing'}));
const fantasyMonsterSets=[
  {id:'zako',label:'ナビアン',path:'monsters/zako',names:["happa-squirrel-leafy","hinoko-ember-newt","kinoko-apple-mushroom","komorin-little-night-bat","koro-golem-pebble-golem","mofu-wolf-frost-pup","purun-little-magic-slime","yukimaru-snow-puff","acorn-leafy","ember-frost-pup","forest-puru","moss-pebble-golem","sakura-snow-puff","sand-ember-newt","snow-mushroom","star-bat","autumn-mushroom","berry-leafy","night-snow-puff","rainy-bat","spring-moss-pup","sunset-puru","sunstone-golem","tidal-newt","mizutama-kappa","clover-mandragora","coral-bubble-crab","lantern-firefly","thunder-spark-fox","moon-moth","cloud-rain-rabbit","honeycomb-bee","vine-chameleon","pebble-ram","ember-lantern-salamander","dusk-feather-owl","rainbow-shell-snail","puddle-mudling","shadow-crest-ferret","bubblefin-frog","peach-puff-panda","sprout-shell-turtle","ribbon-tailed-mouse","honeydrop-bear","shadow-crest-lynx","cobalt-blade-mantis","stormhorn-kid","emberwing-raven","frostfang-weasel","ironleaf-panther","prism-tail-drake","thunderclaw-ram","duskblade-fox","glacier-crest-hawk","skyfin-shark","aurora-shell-lizard","whispering-mask-imp","lantern-eye-moth","hollow-hat-scarecrow","root-tangle-goblin","pond-mirror-spirit","shadow-puppet-cat","moonlit-wisp","candy-coral-slug","cogwheel-beetle","paper-crane-spirit","mossy-porcupine","violet-reef-seahorse","gearbit-mouse","steam-sprocket-mole","rivet-bloom-beetle","hoshizora-penguin","sango-octopus","yume-kurage","kumo-whale","matcha-tanuki","haru-swallow","biribiri-eel","yoru-glider","nanahoshi-ladybug","kuwagata-stag-beetle","marshmallow-alpaca","nami-seagull","tanpopo-fluff-fairy","hikari-butterfly","yousei-shrimp","kaze-cheetah","sumi-squid","yume-koala","kamonohashi-platypus","tane-hamster","yuyake-flamingo","taiyo-meerkat","onsen-capybara","korogari-armadillo"]},
  {id:'zakoEvolved',label:'エボナビ',path:'monsters/zako-evolved',names:["happa-squirrel-leafy-evolved","hinoko-ember-newt-evolved","kinoko-apple-mushroom-evolved","komorin-little-night-bat-evolved","koro-golem-pebble-golem-evolved","mofu-wolf-frost-pup-evolved","purun-little-magic-slime-evolved","yukimaru-snow-puff-evolved","acorn-leafy-evolved","ember-frost-pup-evolved","forest-puru-evolved","moss-pebble-golem-evolved","sakura-snow-puff-evolved","sand-ember-newt-evolved","snow-mushroom-evolved","star-bat-evolved","autumn-mushroom-evolved","berry-leafy-evolved","night-snow-puff-evolved","rainy-bat-evolved","spring-moss-pup-evolved","sunset-puru-evolved","sunstone-golem-evolved","tidal-newt-evolved","mizutama-kappa-evolved","clover-mandragora-evolved","coral-bubble-crab-evolved","lantern-firefly-evolved","thunder-spark-fox-evolved","moon-moth-evolved","cloud-rain-rabbit-evolved","honeycomb-bee-evolved","vine-chameleon-evolved","pebble-ram-evolved","ember-lantern-salamander-evolved","dusk-feather-owl-evolved","rainbow-shell-snail-evolved","puddle-mudling-evolved","bubblefin-frog-evolved","candy-coral-slug-evolved","cobalt-blade-mantis-evolved","cogwheel-beetle-evolved","duskblade-fox-evolved","emberwing-raven-evolved","frostfang-weasel-evolved","glacier-crest-hawk-evolved","hollow-hat-scarecrow-evolved","honeydrop-bear-evolved","ironleaf-panther-evolved","lantern-eye-moth-evolved","mossy-porcupine-evolved","moonlit-wisp-evolved","paper-crane-spirit-evolved","peach-puff-panda-evolved","pond-mirror-spirit-evolved","prism-tail-drake-evolved","ribbon-tailed-mouse-evolved","root-tangle-goblin-evolved","shadow-crest-ferret-evolved","shadow-crest-lynx-evolved","shadow-puppet-cat-evolved","skyfin-shark-evolved","sprout-shell-turtle-evolved","stormhorn-kid-evolved","thunderclaw-ram-evolved","violet-reef-seahorse-evolved","whispering-mask-imp-evolved","aurora-shell-lizard-evolved","gearbit-mouse-evolved","steam-sprocket-mole-evolved","rivet-bloom-beetle-evolved","hoshizora-penguin-evolved","sango-octopus-evolved","yume-kurage-evolved","kumo-whale-evolved","matcha-tanuki-evolved","haru-swallow-evolved","biribiri-eel-evolved","yoru-glider-evolved","nanahoshi-ladybug-evolved","kuwagata-stag-beetle-evolved","marshmallow-alpaca-evolved","nami-seagull-evolved","tanpopo-fluff-fairy-evolved","hikari-butterfly-evolved","yousei-shrimp-evolved","kaze-cheetah-evolved","sumi-squid-evolved","yume-koala-evolved","kamonohashi-platypus-evolved","tane-hamster-evolved","yuyake-flamingo-evolved","taiyo-meerkat-evolved","onsen-capybara-evolved","korogari-armadillo-evolved"]},
  {id:'boss',label:'ボスナビ',path:'monsters/boss',names:['aqua-slime-king','bakuretsu-boar','crystal-golem','forest-horn-king','thunder-griffon','twilight-cat-mage','autumn-horn-king','berry-boar-king','dawn-cat-mage','moon-crystal-golem','solar-griffon-king','tide-slime-king','aurora-slime-king','dream-cat-mage','moss-ruin-horn-king','prism-crystal-golem','sky-ruin-griffon','volcano-boar-king','azure-sky-dragon','flare-leo','lumina-moon-phoenix','crimson-inferno-dragon','frost-crystal-lion','eclipse-shadow-phoenix','noxstella-star-eater','coral-tide-serpent','stormcloud-owl-king','verdant-shell-titan','amber-dune-scarab','aurora-ice-moth','void-moon-wyvern','abyssal-mirror-leviathan','gloomthorn-forest-titan','nightveil-raven-king','obsidian-comet-wyvern','phantom-lantern-dragon','ironclock-colossus','magitech-gear-dragon','moon-rabbit-queen','volcano-turtle-king','aurora-sky-whale','desert-sphinx','ancient-treant','storm-unicorn','frost-swan-queen','golden-kabuto-emperor','abyss-kraken','clockwork-peacock','glacier-fox-queen','tempest-albatross-king','magma-cerberus']}
];
const groups=[
  {path:'group-standing',label:'基本集合・紹介',category:'集合'},
  {path:'group-cheering',label:'スタート・正解',category:'集合'},
  {path:'group-studying',label:'教材一覧・学習ポータル',category:'集合'},
  {path:'group-celebration',label:'クリア・バッジ獲得',category:'集合'},
  {path:'group-huddle',label:'協力・仲間感',category:'集合'},
  {path:'group-jumping',label:'ジャンプ・一体感',category:'集合',originalExt:'jpg'},
  {path:'group-presenting',label:'中央を案内・タイトル表示',category:'集合'},
  {path:'group-start-dash',label:'スタート・挑戦開始',category:'集合'},
  {path:'group-thinking',label:'考える・ヒント',category:'集合'},
  {path:'group-peeking',label:'端からのぞく・カード装飾',category:'集合'},
  {path:'group-moving-forward',label:'次へ進む・単元終了',category:'集合'},
  {path:'daily/group-daily-arrival',label:'登校・朝の出会い',category:'日常'},
  {path:'daily/group-daily-classroom',label:'教室・授業前の準備',category:'日常'},
  {path:'daily/group-daily-study',label:'協力して学ぶ時間',category:'日常'},
  {path:'daily/group-daily-recess',label:'休み時間・遊び',category:'日常'},
  {path:'daily/group-daily-cleanup',label:'掃除・協力',category:'日常'},
  {path:'learning/group-learning-japanese-reading',label:'国語①・文章を読む',category:'学習'},
  {path:'learning/group-learning-japanese-discussion',label:'国語②・考えを伝え合う',category:'学習'},
  {path:'learning/group-learning-math-diagram',label:'算数①・図を使って考える',category:'学習'},
  {path:'learning/group-learning-math-shapes',label:'算数②・図形を調べる',category:'学習'},
  {path:'learning/group-learning-science-observation',label:'理科①・観察する',category:'学習'},
  {path:'learning/group-learning-science-experiment',label:'理科②・実験して確かめる',category:'学習'},
  {path:'learning/group-learning-social-map',label:'社会①・地図から調べる',category:'学習'},
  {path:'learning/group-learning-social-sources',label:'社会②・資料を比べて考える',category:'学習'},
  {path:'learning/group-learning-pair-consulting',label:'二人組①・机を並べて相談',category:'学習'},
  {path:'learning/group-learning-pair-exchange',label:'二人組②・立って考えを交流',category:'学習'},
  {path:'learning/group-learning-pair-diagram',label:'二人組③・図で考え方を説明',category:'学習'},
  {path:'learning/group-learning-pair-reading',label:'二人組④・音読を聞き合う',category:'学習'},
  {path:'learning/group-learning-pair-observation',label:'二人組⑤・観察して記録する',category:'学習'},
  {path:'learning/group-learning-pair-map',label:'二人組⑥・地図と資料を調べる',category:'学習'},
  {path:'learning/group-learning-pair-tablet',label:'二人組⑦・タブレットで相談',category:'学習'},
  {path:'learning/group-learning-pair-blackboard',label:'二人組⑧・黒板の前で説明',category:'学習'},
  {path:'learning/group-learning-pair-measure-length',label:'二人組⑨・長さを測る',category:'学習'},
  {path:'learning/group-learning-pair-carry-tools',label:'二人組⑩・学習道具を運ぶ',category:'学習'},
  {path:'learning/group-learning-pair-balance',label:'二人組⑪・はかりで重さを測る',category:'学習'},
  {path:'learning/group-learning-pair-measure-shadow',label:'二人組⑫・影の長さを測る',category:'学習'}
];
const dailyBackgrounds=[
  {id:'daily-classroom',label:'教室・授業'},
  {id:'daily-gymnasium',label:'体育館・運動'},
  {id:'daily-library',label:'図書室・読書'},
  {id:'daily-cafe',label:'カフェ・ひと休み'},
  {id:'daily-shopping-street',label:'まち・商店街'},
  {id:'daily-bedroom',label:'自分の部屋・勉強'},
  {id:'daily-park',label:'公園・遊び'},
  {id:'daily-schoolyard',label:'校庭・放課後'},
  {id:'daily-living-room',label:'リビング・団らん'},
  {id:'daily-riverside',label:'川沿い・散歩'}
];
const fantasyGroups=[
  {id:'group-fantasy-town',label:'ファンタジーの町・出発'},
  {id:'group-fantasy-adventure',label:'森の探索・冒険'},
  {id:'group-fantasy-battle',label:'遺跡・戦闘準備'},
  {id:'group-fantasy-celebration',label:'クエスト成功・お祝い'},
  {id:'group-fantasy-training',label:'練習場・作戦会議'},
  {id:'initial/group-fantasy-town',label:'初期案｜ファンタジーの町・出発'},
  {id:'initial/group-fantasy-adventure',label:'初期案｜森の探索・冒険'},
  {id:'initial/group-fantasy-battle',label:'初期案｜遺跡・戦闘準備'},
  {id:'initial/group-fantasy-celebration',label:'初期案｜クエスト成功・お祝い'},
  {id:'initial/group-fantasy-training',label:'初期案｜練習場・作戦会議'}
];
const grid=document.querySelector('#characterGrid'),library=document.querySelector('#libraryCard'),assetGrid=document.querySelector('#assetGrid'),groupGrid=document.querySelector('#groupGrid'),backgroundLibrary=document.querySelector('#backgroundLibrary'),backgroundGrid=document.querySelector('#backgroundGrid'),backgroundCount=document.querySelector('#backgroundCount'),usage=document.querySelector('#usageModal'),usageImage=document.querySelector('#usageImage'),usageTitle=document.querySelector('#usageTitle'),usageCode=document.querySelector('#usageCode'),copyButton=document.querySelector('#copyButton'),copyStatus=document.querySelector('#copyStatus'),webDownload=document.querySelector('#webDownload'),originalDownload=document.querySelector('#originalDownload'),title=document.querySelector('#libraryTitle'),count=document.querySelector('#libraryCount'),modeTabs=document.querySelector('.mode-tabs'),tabs=document.querySelector('.tabs'),monsterLibrary=document.querySelector('#monsterLibrary'),monsterGrid=document.querySelector('#monsterGrid'),monsterCount=document.querySelector('#monsterCount'),monsterFilters=document.querySelector('#monsterFilters'),monsterGroups=document.querySelector('#monsterGroups'),groupLibrary=document.querySelector('#groupLibrary');
const fantasyGroupLibrary=document.querySelector('#fantasyGroupLibrary'),fantasyGroupGrid=document.querySelector('#fantasyGroupGrid'),fantasyGroupCount=document.querySelector('#fantasyGroupCount');
const itemsLibrary=document.querySelector('#itemsLibrary'),itemsGrid=document.querySelector('#itemsGrid'),itemsCount=document.querySelector('#itemsCount');
const wordsLibrary=document.querySelector('#wordsLibrary'),wordsGrid=document.querySelector('#wordsGrid'),wordsCount=document.querySelector('#wordsCount');
let mode='standard',selected=null,tab='fullbody',monsterFilter='all',monsterGroup='all';

const schoolItems=[
  {id:'randoseru',label:'ランドセル'},
  {id:'uwabaki',label:'上履き'},
  {id:'kouhaku-boshi',label:'紅白帽子'},
  {id:'enpitsu',label:'鉛筆'},
  {id:'keshigomu',label:'消しゴム'},
  {id:'jougi',label:'定規'},
  {id:'hasami',label:'はさみ'},
  {id:'nori',label:'のり'},
  {id:'note',label:'ノート'},
  {id:'kyoukasho',label:'教科書'},
  {id:'tablet',label:'タブレット'},
  {id:'fudebako',label:'筆箱'},
  {id:'kokuban-keshi',label:'黒板消し'},
  {id:'chalk',label:'チョーク'},
  {id:'tokei',label:'時計'},
  {id:'chikyugi',label:'地球儀'},
  {id:'mushimegane',label:'虫めがね'},
  {id:'suitou',label:'水筒'},
  {id:'kasa',label:'傘'},
  {id:'bousai-zukin',label:'防災頭巾'},
  {id:'gyunyu-bin',label:'牛乳瓶'},
  {id:'recorder',label:'リコーダー'},
  {id:'nawatobi',label:'なわとび'},
  {id:'houki',label:'ほうき'},
  {id:'oudan-ki',label:'横断旗'},
  {id:'kyukyu-bako',label:'救急箱'},
  {id:'helmet',label:'ヘルメット'},
  {id:'mask',label:'マスク'},
  {id:'taionkei',label:'体温計'},
  {id:'haburashi',label:'歯ブラシ'},
  {id:'hand-soap',label:'ハンドソープ'},
  {id:'whistle',label:'ホイッスル'},
  {id:'megaphone',label:'メガホン'},
  {id:'bucket',label:'バケツ'},
  {id:'chiritori',label:'ちりとり'},
  {id:'mop',label:'モップ'},
  {id:'koinobori',label:'こいのぼり'},
  {id:'kagami-mochi',label:'鏡餅'},
  {id:'kadomatsu',label:'門松'},
  {id:'tanabata',label:'七夕の笹飾り'},
  {id:'furin',label:'風鈴'},
  {id:'suika',label:'スイカ'},
  {id:'asagao',label:'朝顔'},
  {id:'sakura',label:'桜'},
  {id:'momiji',label:'紅葉'},
  {id:'pumpkin',label:'ハロウィンかぼちゃ'},
  {id:'christmas-tree',label:'クリスマスツリー'},
  {id:'yukidaruma',label:'雪だるま'},
  {id:'shikenkan',label:'試験管'},
  {id:'beaker',label:'ビーカー'},
  {id:'alcohol-lamp',label:'アルコールランプ'},
  {id:'tenbin',label:'上皿てんびん'},
  {id:'soroban',label:'そろばん'},
  {id:'bundoki',label:'分度器'},
  {id:'compass',label:'コンパス'},
  {id:'sankaku-jougi',label:'三角定規'},
  {id:'pianica',label:'ピアニカ'},
  {id:'tambourine',label:'タンバリン'},
  {id:'mokkin',label:'木琴'},
  {id:'enogu',label:'絵の具'}
];
const fantasyPresets=[
  {id:'forest-zako',label:'森のザコ戦',background:'forest',characterMode:'random',action:'attack',monsterMode:'selected',monster:'purun-little-magic-slime'},
  {id:'cave-midboss',label:'洞窟の中ボス戦',background:'cave',characterMode:'random',action:'attack',monsterMode:'selected',monster:'crystal-golem'},
  {id:'ruins-boss',label:'遺跡のボス戦',background:'ruins',characterMode:'random',action:'attack',monsterMode:'selected',monster:'forest-horn-king'},
  {id:'volcano-grandboss',label:'火山の大ボス戦',background:'volcano',characterMode:'random',action:'special',monsterMode:'selected',monster:'crimson-inferno-dragon'},
  {id:'sky-special',label:'浮島のSPECIAL戦',background:'sky-island',characterMode:'random',action:'special',monsterMode:'selected',monster:'azure-sky-dragon'}
];
const fantasyBackgrounds=[['forest','森'],['grassland','草原'],['cave','洞窟'],['riverbank','河原'],['sea','海'],['volcano','火山'],['ruins','遺跡'],['sky-island','浮島・空'],['town','町・スタート'],['training-ground','練習広場']];
const previewStage=document.querySelector('#fantasyStage'),previewPreset=document.querySelector('#previewPreset'),previewBackground=document.querySelector('#previewBackground'),previewCharacterMode=document.querySelector('#previewCharacterMode'),previewCharacterSelect=document.querySelector('#previewCharacterSelect'),previewCharacterAction=document.querySelector('#previewCharacterAction'),previewMonsterMode=document.querySelector('#previewMonsterMode'),previewMonsterSelect=document.querySelector('#previewMonsterSelect'),previewBackgroundImage=document.querySelector('#previewBackgroundImage'),previewCharacterImage=document.querySelector('#previewCharacterImage'),previewMonsterImage=document.querySelector('#previewMonsterImage'),previewRandomize=document.querySelector('#previewRandomize');
const monsterNamesJa={"happa-squirrel-leafy":"はっぱリス","hinoko-ember-newt":"ひのこイモリ","kinoko-apple-mushroom":"りんごキノコ","komorin-little-night-bat":"こもりんナイトバット","koro-golem-pebble-golem":"ころゴーレム","mofu-wolf-frost-pup":"もふウルフ","purun-little-magic-slime":"ぷるんスライム","yukimaru-snow-puff":"ゆきまるスノーパフ","acorn-leafy":"どんぐりリーフ","ember-frost-pup":"エンバーフロストパップ","forest-puru":"森ぷる","moss-pebble-golem":"モスこいしゴーレム","sakura-snow-puff":"さくらスノーパフ","sand-ember-newt":"サンドエンバーイモリ","snow-mushroom":"スノーキノコ","star-bat":"スターバット","autumn-mushroom":"オータムキノコ","berry-leafy":"ベリーリーフ","night-snow-puff":"ナイトスノーパフ","rainy-bat":"雨ふりバット","spring-moss-pup":"スプリングモスパップ","sunset-puru":"サンセットぷる","sunstone-golem":"サンストーンゴーレム","tidal-newt":"タイダルイモリ","mizutama-kappa":"みずたまカッパ","clover-mandragora":"クローバーマンドラゴラ","coral-bubble-crab":"コーラルバブルクラブ","lantern-firefly":"ランタンホタル","thunder-spark-fox":"サンダースパークフォックス","moon-moth":"月夜のモス","cloud-rain-rabbit":"くもあめウサギ","honeycomb-bee":"ハニカムビー","vine-chameleon":"ヴァインカメレオン","pebble-ram":"こいしラム","ember-lantern-salamander":"エンバーランタン・サラマンダー","dusk-feather-owl":"たそがれフクロウ","rainbow-shell-snail":"レインボーシェル・スネイル","puddle-mudling":"みずたまりマドリン","shadow-crest-ferret":"シャドウクレストフェレット","bubblefin-frog":"バブルフィンカエル","peach-puff-panda":"ピーチパフパンダ","sprout-shell-turtle":"スプラウトシェルカメ","ribbon-tailed-mouse":"リボンテイルねずみ","honeydrop-bear":"ハニードロップベア","shadow-crest-lynx":"シャドウクレストリンクス","cobalt-blade-mantis":"コバルトブレードカマキリ","stormhorn-kid":"ストームホーンキッド","emberwing-raven":"エンバーウィングレイヴン","frostfang-weasel":"フロストファングイタチ","ironleaf-panther":"アイアンリーフパンサー","prism-tail-drake":"プリズムテイルドレイク","thunderclaw-ram":"サンダークローラム","duskblade-fox":"ダスクブレードフォックス","glacier-crest-hawk":"グレイシャークレストホーク","skyfin-shark":"スカイフィンシャーク","aurora-shell-lizard":"オーロラシェルリザード","whispering-mask-imp":"ささやきマスクインプ","lantern-eye-moth":"ランタンアイモス","hollow-hat-scarecrow":"ホロウハットかかし","root-tangle-goblin":"ルートタングルゴブリン","pond-mirror-spirit":"みずうみミラー精霊","shadow-puppet-cat":"シャドウあやつりネコ","moonlit-wisp":"月あかりウィスプ","candy-coral-slug":"キャンディコーラルナメクジ","cogwheel-beetle":"コグホイール甲虫","paper-crane-spirit":"ペーパーつる精霊","mossy-porcupine":"モッシーヤマアラシ","violet-reef-seahorse":"ヴァイオレットリーフタツノオトシゴ","gearbit-mouse":"ギアビットねずみ","steam-sprocket-mole":"スチームスプロケット・モグラ","rivet-bloom-beetle":"リベットブルーム甲虫","happa-squirrel-leafy-evolved":"はっぱリス・エボル","hinoko-ember-newt-evolved":"ひのこイモリ・エボル","kinoko-apple-mushroom-evolved":"りんごキノコ・エボル","komorin-little-night-bat-evolved":"こもりんナイトバット・エボル","koro-golem-pebble-golem-evolved":"ころゴーレム・エボル","mofu-wolf-frost-pup-evolved":"もふウルフ・エボル","purun-little-magic-slime-evolved":"ぷるんスライム・エボル","yukimaru-snow-puff-evolved":"ゆきまるスノーパフ・エボル","acorn-leafy-evolved":"どんぐりリーフ・エボル","ember-frost-pup-evolved":"エンバーフロストパップ・エボル","forest-puru-evolved":"森ぷる・エボル","moss-pebble-golem-evolved":"モスこいしゴーレム・エボル","sakura-snow-puff-evolved":"さくらスノーパフ・エボル","sand-ember-newt-evolved":"サンドエンバーイモリ・エボル","snow-mushroom-evolved":"スノーキノコ・エボル","star-bat-evolved":"スターバット・エボル","autumn-mushroom-evolved":"オータムキノコ・エボル","berry-leafy-evolved":"ベリーリーフ・エボル","night-snow-puff-evolved":"ナイトスノーパフ・エボル","rainy-bat-evolved":"雨ふりバット・エボル","spring-moss-pup-evolved":"スプリングモスパップ・エボル","sunset-puru-evolved":"サンセットぷる・エボル","sunstone-golem-evolved":"サンストーンゴーレム・エボル","tidal-newt-evolved":"タイダルイモリ・エボル","mizutama-kappa-evolved":"みずたまカッパ・エボル","clover-mandragora-evolved":"クローバーマンドラゴラ・エボル","coral-bubble-crab-evolved":"コーラルバブルクラブ・エボル","lantern-firefly-evolved":"ランタンホタル・エボル","thunder-spark-fox-evolved":"サンダースパークフォックス・エボル","moon-moth-evolved":"月夜のモス・エボル","cloud-rain-rabbit-evolved":"くもあめウサギ・エボル","honeycomb-bee-evolved":"ハニカムビー・エボル","vine-chameleon-evolved":"ヴァインカメレオン・エボル","pebble-ram-evolved":"こいしラム・エボル","ember-lantern-salamander-evolved":"エンバーランタン・サラマンダー・エボル","dusk-feather-owl-evolved":"たそがれフクロウ・エボル","rainbow-shell-snail-evolved":"レインボーシェル・スネイル・エボル","puddle-mudling-evolved":"みずたまりマドリン・エボル","bubblefin-frog-evolved":"バブルフィンカエル・エボル","candy-coral-slug-evolved":"キャンディコーラルナメクジ・エボル","cobalt-blade-mantis-evolved":"コバルトブレードカマキリ・エボル","cogwheel-beetle-evolved":"コグホイール甲虫・エボル","duskblade-fox-evolved":"ダスクブレードフォックス・エボル","emberwing-raven-evolved":"エンバーウィングレイヴン・エボル","frostfang-weasel-evolved":"フロストファングイタチ・エボル","glacier-crest-hawk-evolved":"グレイシャークレストホーク・エボル","hollow-hat-scarecrow-evolved":"ホロウハットかかし・エボル","honeydrop-bear-evolved":"ハニードロップベア・エボル","ironleaf-panther-evolved":"アイアンリーフパンサー・エボル","lantern-eye-moth-evolved":"ランタンアイモス・エボル","mossy-porcupine-evolved":"モッシーヤマアラシ・エボル","moonlit-wisp-evolved":"月あかりウィスプ・エボル","paper-crane-spirit-evolved":"ペーパーつる精霊・エボル","peach-puff-panda-evolved":"ピーチパフパンダ・エボル","pond-mirror-spirit-evolved":"みずうみミラー精霊・エボル","prism-tail-drake-evolved":"プリズムテイルドレイク・エボル","ribbon-tailed-mouse-evolved":"リボンテイルねずみ・エボル","root-tangle-goblin-evolved":"ルートタングルゴブリン・エボル","shadow-crest-ferret-evolved":"シャドウクレストフェレット・エボル","shadow-crest-lynx-evolved":"シャドウクレストリンクス・エボル","shadow-puppet-cat-evolved":"シャドウあやつりネコ・エボル","skyfin-shark-evolved":"スカイフィンシャーク・エボル","sprout-shell-turtle-evolved":"スプラウトシェルカメ・エボル","stormhorn-kid-evolved":"ストームホーンキッド・エボル","thunderclaw-ram-evolved":"サンダークローラム・エボル","violet-reef-seahorse-evolved":"ヴァイオレットリーフタツノオトシゴ・エボル","whispering-mask-imp-evolved":"ささやきマスクインプ・エボル","aurora-shell-lizard-evolved":"オーロラシェルリザード・エボル","gearbit-mouse-evolved":"ギアビットねずみ・エボル","steam-sprocket-mole-evolved":"スチームスプロケット・モグラ・エボル","rivet-bloom-beetle-evolved":"リベットブルーム甲虫・エボル","aqua-slime-king":"アクアスライム王（ボス）","bakuretsu-boar":"ばくれつイノシシ（ボス）","crystal-golem":"クリスタルゴーレム（ボス）","forest-horn-king":"森のホーンキング（ボス）","thunder-griffon":"サンダーグリフォン（ボス）","twilight-cat-mage":"黄昏ネコ魔導士（ボス）","autumn-horn-king":"オータムホーンキング（ボス）","berry-boar-king":"ベリーイノシシキング（ボス）","dawn-cat-mage":"あかつきネコメイジ","moon-crystal-golem":"ムーンクリスタルゴーレム（ボス）","solar-griffon-king":"太陽グリフォンキング（ボス）","tide-slime-king":"タイドスライムキング（ボス）","aurora-slime-king":"オーロラスライムキング（ボス）","dream-cat-mage":"夢見ネコメイジ","moss-ruin-horn-king":"モス遺跡ホーンキング（ボス）","prism-crystal-golem":"プリズムクリスタルゴーレム（ボス）","sky-ruin-griffon":"スカイ遺跡グリフォン（ボス）","volcano-boar-king":"ボルケーノイノシシキング（ボス）","azure-sky-dragon":"蒼天ドラゴン（ボス）","flare-leo":"フレアレオ（ボス）","lumina-moon-phoenix":"月夜のフェニックス（ボス）","crimson-inferno-dragon":"深紅の魔獣王（ボス）","frost-crystal-lion":"フロストクリスタルライオン","eclipse-shadow-phoenix":"エクリプスシャドウフェニックス（ボス）","noxstella-star-eater":"星喰いのノクステラ（ボス）","coral-tide-serpent":"コーラルタイドサーペント（ボス）","stormcloud-owl-king":"ストームクラウドフクロウキング（ボス）","verdant-shell-titan":"翠緑シェルタイタン（ボス）","amber-dune-scarab":"アンバー砂丘スカラベ（ボス）","aurora-ice-moth":"オーロラアイスモス","void-moon-wyvern":"ヴォイドムーンワイバーン（ボス）","abyssal-mirror-leviathan":"深海ミラーリヴァイアサン（ボス）","gloomthorn-forest-titan":"グルームソーンフォレストタイタン（ボス）","nightveil-raven-king":"ナイトヴェールレイヴンキング（ボス）","obsidian-comet-wyvern":"黒曜コメットワイバーン（ボス）","phantom-lantern-dragon":"ファントムランタンドラゴン（ボス）","ironclock-colossus":"アイアンクロック・コロッサス（ボス）","magitech-gear-dragon":"マギテック・ギアドラゴン（ボス）","hoshizora-penguin":"ほしぞらペンギン","sango-octopus":"サンゴタコ","yume-kurage":"ゆめクラゲ","kumo-whale":"くもクジラ","matcha-tanuki":"まっちゃタヌキ","haru-swallow":"はるツバメ","biribiri-eel":"ビリビリウナギ","yoru-glider":"よるモモンガ","nanahoshi-ladybug":"ほしぼしテントウ","kuwagata-stag-beetle":"クワガタマン","marshmallow-alpaca":"マシュマロアルパカ","nami-seagull":"なみウミネコ","tanpopo-fluff-fairy":"たんぽぽワタゲ","hikari-butterfly":"ひかりチョウ","yousei-shrimp":"ようせいエビ","kaze-cheetah":"かぜチーター","sumi-squid":"すみイカ","yume-koala":"ゆめコアラ","kamonohashi-platypus":"カモノハシ","tane-hamster":"たねハムスター","yuyake-flamingo":"ゆうやけフラミンゴ","taiyo-meerkat":"たいようミーアキャット","onsen-capybara":"おんせんカピバラ","korogari-armadillo":"ころがりアルマジロ","hoshizora-penguin-evolved":"ほしぞらペンギン・エボル","sango-octopus-evolved":"サンゴタコ・エボル","yume-kurage-evolved":"ゆめクラゲ・エボル","kumo-whale-evolved":"くもクジラ・エボル","matcha-tanuki-evolved":"まっちゃタヌキ・エボル","haru-swallow-evolved":"はるツバメ・エボル","biribiri-eel-evolved":"ビリビリウナギ・エボル","yoru-glider-evolved":"よるモモンガ・エボル","nanahoshi-ladybug-evolved":"ほしぼしテントウ・エボル","kuwagata-stag-beetle-evolved":"クワガタマン・エボル","marshmallow-alpaca-evolved":"マシュマロアルパカ・エボル","nami-seagull-evolved":"なみウミネコ・エボル","tanpopo-fluff-fairy-evolved":"たんぽぽワタゲ・エボル","hikari-butterfly-evolved":"ひかりチョウ・エボル","yousei-shrimp-evolved":"ようせいエビ・エボル","kaze-cheetah-evolved":"かぜチーター・エボル","sumi-squid-evolved":"すみイカ・エボル","yume-koala-evolved":"ゆめコアラ・エボル","kamonohashi-platypus-evolved":"カモノハシ・エボル","tane-hamster-evolved":"たねハムスター・エボル","yuyake-flamingo-evolved":"ゆうやけフラミンゴ・エボル","taiyo-meerkat-evolved":"たいようミーアキャット・エボル","onsen-capybara-evolved":"おんせんカピバラ・エボル","korogari-armadillo-evolved":"ころがりアルマジロ・エボル","moon-rabbit-queen":"つきうさぎ女王（ボス）","volcano-turtle-king":"ようがんガメ王（ボス）","aurora-sky-whale":"オーロラクジラ（ボス）","desert-sphinx":"さばくスフィンクス（ボス）","ancient-treant":"こだいトレント（ボス）","storm-unicorn":"あらしユニコーン（ボス）","frost-swan-queen":"こおりハクチョウ女王（ボス）","golden-kabuto-emperor":"おうごんカブト皇帝（ボス）","abyss-kraken":"しんかいクラーケン（ボス）","clockwork-peacock":"ぜんまいクジャク（ボス）","glacier-fox-queen":"ひょうがキツネ女王（ボス）","tempest-albatross-king":"あらしアホウドリ王（ボス）","magma-cerberus":"ようがんケルベロス（ボス）"};
const monsterGroupAssignments={"happa-squirrel-leafy":1,"hinoko-ember-newt":2,"kinoko-apple-mushroom":3,"komorin-little-night-bat":1,"koro-golem-pebble-golem":2,"mofu-wolf-frost-pup":3,"purun-little-magic-slime":1,"yukimaru-snow-puff":2,"acorn-leafy":3,"ember-frost-pup":1,"forest-puru":2,"moss-pebble-golem":3,"sakura-snow-puff":1,"sand-ember-newt":2,"snow-mushroom":3,"star-bat":1,"autumn-mushroom":2,"berry-leafy":3,"night-snow-puff":1,"rainy-bat":2,"spring-moss-pup":3,"sunset-puru":1,"sunstone-golem":2,"tidal-newt":3,"mizutama-kappa":1,"clover-mandragora":2,"coral-bubble-crab":3,"lantern-firefly":1,"thunder-spark-fox":2,"moon-moth":3,"cloud-rain-rabbit":1,"honeycomb-bee":2,"vine-chameleon":3,"pebble-ram":1,"ember-lantern-salamander":2,"dusk-feather-owl":3,"rainbow-shell-snail":1,"puddle-mudling":2,"shadow-crest-ferret":3,"bubblefin-frog":1,"peach-puff-panda":2,"sprout-shell-turtle":3,"ribbon-tailed-mouse":1,"honeydrop-bear":2,"shadow-crest-lynx":3,"cobalt-blade-mantis":1,"stormhorn-kid":2,"emberwing-raven":3,"frostfang-weasel":1,"ironleaf-panther":2,"prism-tail-drake":3,"thunderclaw-ram":1,"duskblade-fox":2,"glacier-crest-hawk":3,"skyfin-shark":1,"aurora-shell-lizard":2,"whispering-mask-imp":3,"lantern-eye-moth":1,"hollow-hat-scarecrow":2,"root-tangle-goblin":3,"pond-mirror-spirit":1,"shadow-puppet-cat":2,"moonlit-wisp":3,"candy-coral-slug":1,"cogwheel-beetle":2,"paper-crane-spirit":3,"mossy-porcupine":1,"violet-reef-seahorse":2,"gearbit-mouse":3,"steam-sprocket-mole":1,"rivet-bloom-beetle":2,"happa-squirrel-leafy-evolved":1,"hinoko-ember-newt-evolved":2,"kinoko-apple-mushroom-evolved":3,"komorin-little-night-bat-evolved":1,"koro-golem-pebble-golem-evolved":2,"mofu-wolf-frost-pup-evolved":3,"purun-little-magic-slime-evolved":1,"yukimaru-snow-puff-evolved":2,"acorn-leafy-evolved":3,"ember-frost-pup-evolved":1,"forest-puru-evolved":2,"moss-pebble-golem-evolved":3,"sakura-snow-puff-evolved":1,"sand-ember-newt-evolved":2,"snow-mushroom-evolved":3,"star-bat-evolved":1,"autumn-mushroom-evolved":2,"berry-leafy-evolved":3,"night-snow-puff-evolved":1,"rainy-bat-evolved":2,"spring-moss-pup-evolved":3,"sunset-puru-evolved":1,"sunstone-golem-evolved":2,"tidal-newt-evolved":3,"mizutama-kappa-evolved":1,"clover-mandragora-evolved":2,"coral-bubble-crab-evolved":3,"lantern-firefly-evolved":1,"thunder-spark-fox-evolved":2,"moon-moth-evolved":3,"cloud-rain-rabbit-evolved":1,"honeycomb-bee-evolved":2,"vine-chameleon-evolved":3,"pebble-ram-evolved":1,"ember-lantern-salamander-evolved":2,"dusk-feather-owl-evolved":3,"rainbow-shell-snail-evolved":1,"puddle-mudling-evolved":2,"bubblefin-frog-evolved":1,"candy-coral-slug-evolved":1,"cobalt-blade-mantis-evolved":1,"cogwheel-beetle-evolved":2,"duskblade-fox-evolved":2,"emberwing-raven-evolved":3,"frostfang-weasel-evolved":1,"glacier-crest-hawk-evolved":3,"hollow-hat-scarecrow-evolved":2,"honeydrop-bear-evolved":2,"ironleaf-panther-evolved":2,"lantern-eye-moth-evolved":1,"mossy-porcupine-evolved":1,"moonlit-wisp-evolved":3,"paper-crane-spirit-evolved":3,"peach-puff-panda-evolved":2,"pond-mirror-spirit-evolved":1,"prism-tail-drake-evolved":3,"ribbon-tailed-mouse-evolved":1,"root-tangle-goblin-evolved":3,"shadow-crest-ferret-evolved":3,"shadow-crest-lynx-evolved":3,"shadow-puppet-cat-evolved":2,"skyfin-shark-evolved":1,"sprout-shell-turtle-evolved":3,"stormhorn-kid-evolved":2,"thunderclaw-ram-evolved":1,"violet-reef-seahorse-evolved":2,"whispering-mask-imp-evolved":3,"aurora-shell-lizard-evolved":2,"gearbit-mouse-evolved":3,"steam-sprocket-mole-evolved":1,"rivet-bloom-beetle-evolved":2,"aqua-slime-king":1,"bakuretsu-boar":2,"crystal-golem":3,"forest-horn-king":1,"thunder-griffon":2,"twilight-cat-mage":3,"autumn-horn-king":1,"berry-boar-king":2,"dawn-cat-mage":3,"moon-crystal-golem":1,"solar-griffon-king":2,"tide-slime-king":3,"aurora-slime-king":1,"dream-cat-mage":2,"moss-ruin-horn-king":3,"prism-crystal-golem":1,"sky-ruin-griffon":2,"volcano-boar-king":3,"azure-sky-dragon":1,"flare-leo":2,"lumina-moon-phoenix":3,"crimson-inferno-dragon":1,"frost-crystal-lion":2,"eclipse-shadow-phoenix":3,"noxstella-star-eater":1,"coral-tide-serpent":2,"stormcloud-owl-king":3,"verdant-shell-titan":1,"amber-dune-scarab":2,"aurora-ice-moth":3,"void-moon-wyvern":1,"abyssal-mirror-leviathan":2,"gloomthorn-forest-titan":3,"nightveil-raven-king":1,"obsidian-comet-wyvern":2,"phantom-lantern-dragon":3,"ironclock-colossus":1,"magitech-gear-dragon":2,"hoshizora-penguin":4,"sango-octopus":4,"yume-kurage":4,"kumo-whale":4,"matcha-tanuki":4,"haru-swallow":4,"biribiri-eel":4,"yoru-glider":4,"nanahoshi-ladybug":4,"kuwagata-stag-beetle":4,"marshmallow-alpaca":4,"nami-seagull":4,"tanpopo-fluff-fairy":4,"hikari-butterfly":4,"yousei-shrimp":4,"kaze-cheetah":4,"sumi-squid":4,"yume-koala":4,"kamonohashi-platypus":4,"tane-hamster":4,"yuyake-flamingo":4,"taiyo-meerkat":4,"onsen-capybara":4,"korogari-armadillo":4,"hoshizora-penguin-evolved":4,"sango-octopus-evolved":4,"yume-kurage-evolved":4,"kumo-whale-evolved":4,"matcha-tanuki-evolved":4,"haru-swallow-evolved":4,"biribiri-eel-evolved":4,"yoru-glider-evolved":4,"nanahoshi-ladybug-evolved":4,"kuwagata-stag-beetle-evolved":4,"marshmallow-alpaca-evolved":4,"nami-seagull-evolved":4,"tanpopo-fluff-fairy-evolved":4,"hikari-butterfly-evolved":4,"yousei-shrimp-evolved":4,"kaze-cheetah-evolved":4,"sumi-squid-evolved":4,"yume-koala-evolved":4,"kamonohashi-platypus-evolved":4,"tane-hamster-evolved":4,"yuyake-flamingo-evolved":4,"taiyo-meerkat-evolved":4,"onsen-capybara-evolved":4,"korogari-armadillo-evolved":4,"moon-rabbit-queen":4,"volcano-turtle-king":4,"aurora-sky-whale":4,"desert-sphinx":4,"ancient-treant":4,"storm-unicorn":4,"frost-swan-queen":4,"golden-kabuto-emperor":4,"abyss-kraken":4,"clockwork-peacock":4,"glacier-fox-queen":4,"tempest-albatross-king":4,"magma-cerberus":4};
const monsterLabel=name=>monsterNamesJa[name]||name.replace(/-/g,' ');
const allFantasyMonsters=fantasyMonsterSets.flatMap(set=>set.names.map(name=>({name,set:set.label,path:set.path,label:monsterLabel(name),group:monsterGroupAssignments[name]||1})));
function randomItem(list){return list[Math.floor(Math.random()*list.length)];}
function setupFantasyPreview(){if(!previewBackground.options.length){previewPreset.innerHTML='<option value="free">自由に選ぶ</option>'+fantasyPresets.map(p=>'<option value="'+p.id+'">'+p.label+'</option>').join('');previewBackground.innerHTML=fantasyBackgrounds.map(([id,label])=>'<option value="'+id+'">'+label+'</option>').join('');previewCharacterSelect.innerHTML=fantasyCharacters.map(c=>'<option value="'+c.id+'">'+c.label+'（'+c.job+'）</option>').join('');previewMonsterSelect.innerHTML=allFantasyMonsters.map(m=>'<option value="'+m.name+'">'+m.label+'（'+m.set+'／グループ'+m.group+'）</option>').join('');previewBackground.value='forest';previewCharacterSelect.value='kai';previewMonsterSelect.value=allFantasyMonsters[0]?.name||'';}updatePreviewSelectState();renderFantasyPreview();}
function applyFantasyPreset(id){const p=fantasyPresets.find(x=>x.id===id);if(!p)return;previewBackground.value=p.background;previewCharacterMode.value=p.characterMode;previewCharacterAction.value=p.action;previewMonsterMode.value=p.monsterMode;previewMonsterSelect.value=p.monster;updatePreviewSelectState();renderFantasyPreview();}
function updatePreviewSelectState(){previewCharacterSelect.disabled=previewCharacterMode.value==='random';previewMonsterSelect.disabled=previewMonsterMode.value==='random';}
function renderFantasyPreview(){if(!previewStage||mode!=='fantasy')return;const c=previewCharacterMode.value==='random'?randomItem(fantasyCharacters):fantasyCharacters.find(x=>x.id===previewCharacterSelect.value)||fantasyCharacters[0];const m=previewMonsterMode.value==='random'?randomItem(allFantasyMonsters):allFantasyMonsters.find(x=>x.name===previewMonsterSelect.value)||allFantasyMonsters[0];const bg=previewBackground.value||'forest';const action=previewCharacterAction.value==='random'?randomItem(['standing','attack','damage','special']):previewCharacterAction.value;const characterFile=action==='standing'?c.standing:c.base+'-'+action;previewBackgroundImage.src='assets/web/fantasy/backgrounds/'+bg+'.webp';previewCharacterImage.dataset.action=action;previewCharacterImage.src=action==='standing'?'assets/web/fantasy/'+characterFile+'.webp':'assets/web/fantasy/'+action+'/'+characterFile+'.webp';previewMonsterImage.src='assets/web/fantasy/monsters/'+m.path.replace(/^monsters\//,'')+'/'+m.name+'.webp';previewCharacterImage.alt=c.label+' '+c.job;previewMonsterImage.alt=m.label;}
previewPreset?.addEventListener('change',()=>{if(previewPreset.value==='free')renderFantasyPreview();else applyFantasyPreset(previewPreset.value);});previewBackground?.addEventListener('change',()=>{previewPreset.value='free';renderFantasyPreview();});previewCharacterMode?.addEventListener('change',()=>{updatePreviewSelectState();renderFantasyPreview();});previewMonsterMode?.addEventListener('change',()=>{updatePreviewSelectState();renderFantasyPreview();});previewCharacterSelect?.addEventListener('change',renderFantasyPreview);previewMonsterSelect?.addEventListener('change',renderFantasyPreview);previewCharacterAction?.addEventListener('change',renderFantasyPreview);previewRandomize?.addEventListener('click',renderFantasyPreview);

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const base='assets/characters';
const webBase='assets/web/characters';
const webAssetPath=(id,type,name)=>`${webBase}/${id}/${type}/${name}.webp`;
const originalAssetPath=(id,type,name)=>`${base}/${id}/${type}/${name}.png`;
function renderCards(){if(mode==='monsters'||mode==='backgrounds'||mode==='items'||mode==='words'){grid.innerHTML='';return;}const list=mode==='fantasy'?fantasyCharacters:characters;grid.innerHTML=list.map((c,i)=>{const image=mode==='fantasy'?`assets/web/fantasy/${c.standing}.webp`:webAssetPath(c.id,'fullbody',c.fullbody.includes('waving')?'waving':c.fullbody[0]);const detail=mode==='fantasy'?`${c.job} / 立ち絵・ATTACK・DAMAGE・SPECIAL`:`${c.fullbody.length}ポーズ / ${c.expressions.length}表情`;return`<article class="character-card ${selected?.id===c.id?'selected':''}" data-id="${c.id}"><button class="character-button" type="button"><img class="character-image" src="${image}" alt="${c.label}"><div class="character-info"><div class="character-index">${mode==='fantasy'?'FANTASY':'CHARACTER'} ${String(i+1).padStart(2,'0')}</div><h3>${c.label}</h3><p>${detail}</p></div></button></article>`}).join('');}
function renderAssets(){if(!selected)return;const names=mode==='fantasy'?['立ち絵','ATTACK','DAMAGE','SPECIAL']:selected[tab].map(name=>name);assetGrid.innerHTML=names.map(name=>{const type=mode==='fantasy'?(name==='立ち絵'?'standing':name.toLowerCase()):tab;const fileBase=mode==='fantasy'&&type==='standing'?selected.standing:selected.base;const suffix=type==='standing'?'':`-${type}`;const webPath=mode==='fantasy'?(type==='standing'?`assets/web/fantasy/${fileBase}.webp`:`assets/web/fantasy/${type}/${fileBase}${suffix}.webp`):webAssetPath(selected.id,type,name);const originalPath=mode==='fantasy'?`assets/fantasy/${type==='standing'?'':`${type}/`}${fileBase}${suffix}.png`:originalAssetPath(selected.id,type,name);return`<button class="asset-item ${mode==='fantasy'?'fantasy-asset':''}" data-path="${webPath}" data-original="${originalPath}" data-label="${selected.label}・${name}"><img src="${webPath}" alt="${selected.label} ${name}"><span>${esc(name)}</span></button>`}).join('');count.textContent=`${names.length} files`;tabs.hidden=mode==='fantasy';}
function renderItems(){if(!itemsGrid)return;itemsCount.textContent=`${schoolItems.length} files`;itemsGrid.innerHTML=schoolItems.map(item=>{const webPath=`assets/web/items/${item.id}.webp`;const originalPath=`assets/items/${item.id}.png`;return`<button class="item-card" data-path="${webPath}" data-original="${originalPath}" data-label="${item.label}"><img src="${webPath}" alt="${item.label}" loading="lazy"><span>${item.label}</span><small>学用品 / WebP・PNG</small></button>`}).join('');}
const wordItems=[
  {id:'ame',label:'あめ'},
  {id:'inu',label:'いぬ'},
  {id:'uma',label:'うま'},
  {id:'ehon',label:'えほん'},
  {id:'ousama',label:'おうさま'},
  {id:'kaeru',label:'かえる'},
  {id:'kinoko',label:'きのこ'},
  {id:'kuma',label:'くま'},
  {id:'keito',label:'けいと'},
  {id:'koara',label:'こあら'},
  {id:'sakana',label:'さかな'},
  {id:'shika',label:'しか'},
  {id:'semi',label:'せみ'},
  {id:'sora',label:'そら'},
  {id:'tamago',label:'たまご'},
  {id:'chou',label:'ちょう'},
  {id:'tsuki',label:'つき'},
  {id:'tebukuro',label:'てぶくろ'},
  {id:'tora',label:'とら'},
  {id:'nashi',label:'なし'},
  {id:'niji',label:'にじ'},
  {id:'nuigurumi',label:'ぬいぐるみ'},
  {id:'neko',label:'ねこ'},
  {id:'norimono',label:'のりもの'},
  {id:'hana',label:'はな'},
  {id:'himawari',label:'ひまわり'},
  {id:'fune',label:'ふね'},
  {id:'hebi',label:'へび'},
  {id:'hoshi',label:'ほし'},
  {id:'mame',label:'まめ'},
  {id:'mimi',label:'みみ'},
  {id:'mushi',label:'むし'},
  {id:'megane',label:'めがね'},
  {id:'momo',label:'もも'},
  {id:'yama',label:'やま'},
  {id:'yuki',label:'ゆき'},
  {id:'yoru',label:'よる'},
  {id:'lion',label:'らいおん'},
  {id:'ribbon',label:'りぼん'},
  {id:'saru',label:'さる'},
  {id:'reizouko',label:'れいぞうこ'},
  {id:'rousoku',label:'ろうそく'},
  {id:'waffle',label:'わっふる'},
  {id:'ringo',label:'りんご'},
  {id:'ice',label:'アイス'},
  {id:'iruka',label:'イルカ'},
  {id:'wiener',label:'ウインナー'},
  {id:'apron',label:'エプロン'},
  {id:'oumu',label:'オウム'},
  {id:'camera',label:'カメラ'},
  {id:'kiwi',label:'キウイ'},
  {id:'cookie',label:'クッキー'},
  {id:'cake',label:'ケーキ'},
  {id:'cup',label:'コップ'},
  {id:'salad',label:'サラダ'},
  {id:'shimauma',label:'シマウマ'},
  {id:'surippa',label:'スリッパ'},
  {id:'sweater',label:'セーター'},
  {id:'socks',label:'ソックス'},
  {id:'taxi',label:'タクシー'},
  {id:'choco',label:'チョコ'},
  {id:'terebi',label:'テレビ'},
  {id:'tomato',label:'トマト'},
  {id:'nattsu',label:'ナッツ'},
  {id:'nyuusu',label:'ニュース'},
  {id:'canoe',label:'カヌー'},
  {id:'nekutai',label:'ネクタイ'},
  {id:'hamburger',label:'ハンバーガー'},
  {id:'hero',label:'ヒーロー'},
  {id:'fork',label:'フォーク'},
  {id:'helicopter',label:'ヘリコプター'},
  {id:'hotel',label:'ホテル'},
  {id:'mic',label:'マイク'},
  {id:'milk',label:'ミルク'},
  {id:'melon',label:'メロン'},
  {id:'monster',label:'モンスター'},
  {id:'yashi',label:'ヤシ'},
  {id:'unicorn',label:'ユニコーン'},
  {id:'yacht',label:'ヨット'},
  {id:'ruby',label:'ルビー'},
  {id:'lemon',label:'レモン'},
  {id:'robot',label:'ロボット'},
  {id:'pan',label:'パン'}
];
function renderWords(){if(!wordsGrid)return;wordsCount.textContent=`${wordItems.length} files`;wordsGrid.innerHTML=wordItems.map(item=>{const webPath=`assets/web/words/${item.id}.webp`;const originalPath=`assets/words/${item.id}.png`;return`<button class="item-card" data-path="${webPath}" data-original="${originalPath}" data-label="${item.label}"><img src="${webPath}" alt="${item.label}" loading="lazy"><span>${item.label}</span><small>ことば / WebP・PNG</small></button>`}).join('');}
function renderBackgrounds(){if(!backgroundGrid)return;backgroundCount.textContent=`${dailyBackgrounds.length} files`;backgroundGrid.innerHTML=dailyBackgrounds.map(item=>{const webPath=`assets/web/backgrounds/daily/${item.id}.webp`;const originalPath=`assets/backgrounds/daily/${item.id}.png`;return`<button class="background-item" data-path="${webPath}" data-original="${originalPath}" data-label="${item.label}"><img src="${webPath}" alt="${item.label}"><span>${item.label}</span><small>日常背景 / 16:9 / WebP・PNG</small></button>`}).join('');const fantasyBgGrid=document.querySelector('#fantasyBackgroundGrid');if(fantasyBgGrid){fantasyBgGrid.innerHTML=fantasyBackgrounds.map(([id,label])=>{const webPath=`assets/web/fantasy/backgrounds/${id}.webp`;const originalPath=`assets/fantasy/backgrounds/${id}.png`;return`<button class="background-item" data-path="${webPath}" data-original="${originalPath}" data-label="${label}"><img src="${webPath}" alt="${label}"><span>${label}</span><small>ファンタジー背景 / 16:9 / WebP・PNG</small></button>`}).join('');}backgroundCount.textContent=`${dailyBackgrounds.length+fantasyBackgrounds.length} files`;}
let fantasySceneItems=[];
function renderFantasyGroups(){if(!fantasyGroupGrid)return;const catItems=fantasySceneItems.map(it=>({web:it.web,original:it.original,label:it.label}));const initialItems=fantasyGroups.filter(g=>g.id.startsWith('initial/')).map(item=>({web:`assets/web/fantasy/groups/${item.id}.webp`,original:`assets/fantasy/groups/${item.id}.png`,label:item.label}));const items=catItems.length?[...catItems,...initialItems]:fantasyGroups.map(item=>({web:`assets/web/fantasy/groups/${item.id}.webp`,original:`assets/fantasy/groups/${item.id}.png`,label:item.label}));fantasyGroupCount.textContent=`${items.length} files`;fantasyGroupGrid.innerHTML=items.map(it=>`<button class="group-item fantasy-group-item" data-path="${it.web}" data-original="${it.original}" data-label="${esc(it.label)}"><img src="${it.web}" alt="${esc(it.label)}" loading="lazy"><span>${esc(it.label)}<small>ファンタジー集合 / WebP・PNG</small></span></button>`).join('');}
function renderMonsterCards(filter=monsterFilter,group=monsterGroup){
  const sets=filter==='all'?fantasyMonsterSets:fantasyMonsterSets.filter(set=>set.id===filter);
  const cards=sets.flatMap(set=>set.names.map(name=>({set,name,label:monsterLabel(name),group:monsterGroupAssignments[name]||1}))).filter(item=>group==='all'||item.group===Number(group));
  monsterCount.textContent=cards.length+'体';
  monsterGrid.innerHTML=cards.map(item=>{
    const webPath='assets/web/fantasy/'+item.set.path+'/'+item.name+'.webp';
    const originalPath='assets/fantasy/'+item.set.path+'/'+item.name+'.png';
    const label=item.set.label+'｜'+item.label;
    return '<button class="monster-item" data-path="'+webPath+'" data-original="'+originalPath+'" data-label="'+label+'"><img src="'+webPath+'" alt="'+label+'"><span>'+item.label+'</span><small>'+item.set.label+'／グループ'+item.group+'</small></button>';
  }).join('');
  document.querySelectorAll('[data-monster-filter]').forEach(button=>{
    const active=button.dataset.monsterFilter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });
  document.querySelectorAll('[data-monster-group]').forEach(button=>{
    const active=button.dataset.monsterGroup===String(group);
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });
}
function selectCharacter(id){const list=mode==='fantasy'?fantasyCharacters:characters;selected=list.find(c=>c.id===id);if(!selected)return;renderCards();library.hidden=false;title.textContent=mode==='fantasy'?`${selected.label}｜${selected.job}のファンタジー素材`:`${selected.label}の素材`;tab=mode==='fantasy'?'standing':'fullbody';renderAssets();library.scrollIntoView({behavior:'smooth',block:'start'});}
function setDownload(link,path){link.href=path;link.download=path.split('/').pop();}
function selectAsset(path,label,originalPath){usage.hidden=false;usageImage.src=path;usageImage.alt=label;usageTitle.textContent=label;usageCode.textContent=`<img src="${new URL(path,document.baseURI).href}" class="navi-character" alt="${label}">`;setDownload(webDownload,path);setDownload(originalDownload,originalPath);copyStatus.textContent='';document.body.style.overflow='hidden';}
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)selectCharacter(card.dataset.id);});
tabs.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b)return;tab=b.dataset.tab;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));renderAssets();});
modeTabs.addEventListener('click',e=>{
  const b=e.target.closest('[data-mode]');
  if(!b)return;
  mode=b.dataset.mode;
  selected=null;
  const isFantasy=mode==='fantasy';
  const isMonsters=mode==='monsters';
  const isBackgrounds=mode==='backgrounds';
  const isItems=mode==='items';
  const isWords=mode==='words';
  document.querySelectorAll('.mode-tab').forEach(x=>x.classList.toggle('active',x===b));
  previewStage.hidden=!isFantasy;
  grid.hidden=isMonsters||isBackgrounds||isItems||isWords;
  library.hidden=true;
  usage.hidden=true;
  groupLibrary.hidden=mode!=='standard';
  monsterLibrary.hidden=!isMonsters;
  backgroundLibrary.hidden=!isBackgrounds;
  itemsLibrary.hidden=!isItems;
  wordsLibrary.hidden=!isWords;
  fantasyGroupLibrary.hidden=!isFantasy;
  if(isMonsters){
    monsterFilter='all';
    monsterGroup='all';
    renderMonsterCards();
  }
  if(isFantasy)setupFantasyPreview();
  if(isFantasy)renderFantasyGroups();
  if(isBackgrounds)renderBackgrounds();
  if(isItems)renderItems();
  if(isWords)renderWords();
  const introHeading=document.querySelector('.intro-card h2');
  const introText=document.querySelector('.intro-card p:not(.section-label)');
  if(isMonsters){
    introHeading.textContent='ナビアンだけを見られる図鑑です。';
    introText.textContent='ナビアン・エボナビ・ボスナビを分類ごとに確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。';
  }else if(isFantasy){
    introHeading.textContent='ファンタジーキャラとバトル素材を確認できます。';
    introText.textContent='ファンタジーキャラクターの立ち絵・動作・集合絵と、背景・ナビアンを組み合わせるプレビューを確認できます。';
  }else if(isItems){
    introHeading.textContent='学用品の単体イラストです。';
    introText.textContent='ランドセルや文房具など、学校で使う道具の単体イラストを確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。';
  }else if(isBackgrounds){
    introHeading.textContent='ナビキャラを重ねて使える背景です。';
    introText.textContent='教室・体育館・カフェ・街・部屋などの日常背景と、森・洞窟・火山・浮島などのファンタジー背景を確認できます。画像を選ぶとWeb用コードをコピーできます。';
  }else{
    introHeading.textContent='基本画像だけでなく、全ポーズ・全表情を見られます。';
    introText.innerHTML='キャラクターを選び、全身ポーズ・表情アップ・集合画像を一覧から確認できます。画像を選ぶと、教材に貼り付けるコードをコピーできます。AIで使うときは、まず<a href="AI-GUIDE.md">AI向けガイド</a>を確認してください。';
  }
  renderCards();
  window.scrollTo({top:0,behavior:'smooth'});
});
monsterGroups.addEventListener('click',e=>{
  const b=e.target.closest('[data-monster-group]');
  if(!b)return;
  monsterGroup=b.dataset.monsterGroup;
  renderMonsterCards();
});
monsterFilters.addEventListener('click',e=>{
  const b=e.target.closest('[data-monster-filter]');
  if(!b)return;
  monsterFilter=b.dataset.monsterFilter;
  monsterGroup='all';
  renderMonsterCards();
});
assetGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
monsterGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
const sceneState={cat:'all',char:'all',subject:'all',q:''};
let sceneItems=[];
const sceneCharIds=['riku','sora','kai','saku','tsuki','nami'];
const sceneCharsOf=stem=>sceneCharIds.filter(id=>stem.split('-').includes(id));
function catalogSceneItems(cat){
  const g=cat.groups;const items=[];
  const add=(section,category,target=items)=>{
    (section.files||[]).forEach(f=>{
      const stem=f.replace(/\.[^.]+$/,'');
      const noWebpFiles=['group-daily-gymnasium.jpeg','group-daily-recess-play.jpeg','group-daily-outdoor-pe.png'];const labelOverrides={'group-daily-gymnasium':'体育館での体育','group-daily-recess-play':'休み時間・外遊び','group-daily-outdoor-pe':'校庭での体育'};target.push({web:noWebpFiles.includes(f)?`${section.basePath}/${f}`:`${section.webBasePath||'assets/web/groups'}/${stem}.webp`,original:`${section.basePath}/${f}`,label:(section.usage&&(section.usage[stem]||section.usage[stem.replace(/^group-/,'')]))||labelOverrides[stem]||stem,category,chars:(category==='集合'||(category!=='学習'&&stem.startsWith('group-')))?sceneCharIds.slice():sceneCharsOf(stem),subject:(section.subjects&&section.subjects[stem])||''});
    });
  };
  add({files:g.files,usage:g.usage,basePath:g.basePath,webBasePath:g.webBasePath},'集合');
  add(g.daily,'日常');
  add(g.learning,'学習');
  if(cat.fantasy&&cat.fantasy.groups)add(cat.fantasy.groups,'ファンタジー',fantasySceneItems);
  return items;
}
function fallbackSceneItems(){
  return groups.map(g=>({web:'assets/web/groups/'+g.path+'.webp',original:'assets/groups/'+g.path+'.'+(g.originalExt||'png'),label:g.label,category:g.category,chars:g.category==='集合'?sceneCharIds.slice():sceneCharsOf(g.path)}));
}
function renderScenes(){
  if(!groupGrid)return;
  const q=sceneState.q.trim();
  const list=sceneItems.filter(it=>(sceneState.cat==='all'||it.category===sceneState.cat)&&(sceneState.char==='all'||it.chars.includes(sceneState.char))&&(sceneState.subject==='all'||it.subject===sceneState.subject)&&(!q||it.label.includes(q)));
  const countEl=document.querySelector('#groupCount');if(countEl)countEl.textContent=sceneItems.length+' files';
  const status=document.querySelector('#sceneStatus');if(status)status.textContent=list.length+'件の場面を表示中';
  groupGrid.innerHTML=list.length?list.map(it=>`<button class="group-item scene-item" data-path="${it.web}" data-original="${it.original}" data-label="${esc(it.label)}"><img src="${it.web}" alt="${esc(it.label)}" loading="lazy"><span>${esc(it.label)}<small>${it.category}${it.subject?'・'+it.subject:''}シーン</small></span></button>`).join(''):'<p class="scene-empty">見つかりませんでした。検索のことばを変えてみてください。</p>';
}
async function initScenes(){
  try{const res=await fetch('catalog.json');if(!res.ok)throw new Error('catalog');sceneItems=catalogSceneItems(await res.json());}catch(e){sceneItems=fallbackSceneItems();}
  renderScenes();
  renderFantasyGroups();
}
document.querySelectorAll('[data-scene-cat]').forEach(b=>b.addEventListener('click',()=>{sceneState.cat=b.dataset.sceneCat;document.querySelectorAll('[data-scene-cat]').forEach(x=>x.classList.toggle('active',x===b));renderScenes();}));
document.querySelectorAll('[data-scene-char]').forEach(b=>b.addEventListener('click',()=>{sceneState.char=b.dataset.sceneChar;document.querySelectorAll('[data-scene-char]').forEach(x=>x.classList.toggle('active',x===b));renderScenes();}));
document.querySelectorAll('[data-scene-subject]').forEach(b=>b.addEventListener('click',()=>{sceneState.subject=b.dataset.sceneSubject;document.querySelectorAll('[data-scene-subject]').forEach(x=>x.classList.toggle('active',x===b));renderScenes();}));
document.querySelector('#sceneSearch')?.addEventListener('input',e=>{sceneState.q=e.target.value;renderScenes();});
initScenes();
groupGrid.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
backgroundGrid?.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});document.querySelector('#fantasyBackgroundGrid')?.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
itemsGrid?.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});wordsGrid?.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});fantasyGroupGrid?.addEventListener('click',e=>{const b=e.target.closest('[data-path]');if(b)selectAsset(b.dataset.path,b.dataset.label,b.dataset.original);});
const closeUsage=()=>{usage.hidden=true;document.body.style.overflow='';};document.querySelector('#usageClose')?.addEventListener('click',closeUsage);document.querySelector('#usageBackdrop')?.addEventListener('click',closeUsage);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!usage.hidden)closeUsage();});
copyButton.addEventListener('click',async()=>{if(!usageCode.textContent)return;try{await navigator.clipboard.writeText(usageCode.textContent);copyStatus.textContent='コードをコピーしました。';}catch{copyStatus.textContent='コピーできませんでした。コードを選択してください。';}});
renderCards();
