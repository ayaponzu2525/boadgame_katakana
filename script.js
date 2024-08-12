const prompts = [
    // 食べ物
    {"prompt": "サンドイッチ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "チーズバーガー", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "フライドチキン", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "スープ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "クレープ", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "ミートパイ", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "チョコレート", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "フレンチトースト", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "パフェ", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "クリームパスタ", "category": "食べ物", "difficulty": "難しい"},
    {"prompt": "ケーキ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "パスタ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "オムライス", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "スイーツ", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "フルーツ", "category": "食べ物", "difficulty": "簡単"},
        
    // 乗り物
    {"prompt": "ロケット", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "バイク", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "ゴンドラ", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "モノレール", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "フェリー", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "スケートボード", "category": "乗り物", "difficulty": "簡単"},
    {"prompt": "エレベーター", "category": "乗り物", "difficulty": "簡単"},
    {"prompt": "バス", "category": "乗り物", "difficulty": "簡単"},
    {"prompt": "タクシー", "category": "乗り物", "difficulty": "簡単"},
    {"prompt": "バイク", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "リムジン", "category": "乗り物", "difficulty": "難しい"},


    // スポーツ
    {"prompt": "バスケットボール", "category": "スポーツ", "difficulty": "簡単"},
    {"prompt": "スノーボード", "category": "スポーツ", "difficulty": "普通"},
    {"prompt": "アーチェリー", "category": "スポーツ", "difficulty": "難しい"},
    {"prompt": "フィットネス", "category": "スポーツ", "difficulty": "普通"},
    {"prompt": "カヌー", "category": "スポーツ", "difficulty": "難しい"},
    {"prompt": "ボルダリング", "category": "スポーツ", "difficulty": "難しい"},
    {"prompt": "テニス", "category": "スポーツ", "difficulty": "難しい"},
    {"prompt": "サーカス", "category": "スポーツ", "difficulty": "難しい"},
    {"prompt": "キャンプ", "category": "スポーツ", "difficulty": "普通"},
    {"prompt": "ガーデニング", "category": "スポーツ", "difficulty": "普通"},
    {"prompt": "フィットネス", "category": "スポーツ", "difficulty": "普通"},
    {"prompt": "ヨガ", "category": "スポーツ", "difficulty": "簡単"},
    {"prompt": "サーフィン", "category": "スポーツ", "difficulty": "普通"},


    // 自然
    {"prompt": "サバンナ", "category": "自然", "difficulty": "普通"},

    // 物
    {"prompt": "カメラ", "category": "物", "difficulty": "普通"},
    {"prompt": "VR", "category": "物", "difficulty": "難しい"},
    {"prompt": "3Dプリンター", "category": "物", "difficulty": "難しい"},
    {"prompt": "コンピュータ", "category": "物", "difficulty": "簡単"},
    {"prompt": "クッション", "category": "物", "difficulty": "簡単"},
    {"prompt": "ソファ", "category": "物", "difficulty": "普通"},
    {"prompt": "チェア", "category": "物", "difficulty": "簡単"},
    {"prompt": "クローゼット", "category": "物", "difficulty": "普通"},
    {"prompt": "ランプ", "category": "物", "difficulty": "簡単"},
    {"prompt": "カーペット", "category": "物", "difficulty": "普通"},
    {"prompt": "冷蔵庫", "category": "物", "difficulty": "簡単"},
    {"prompt": "洗濯機", "category": "物", "difficulty": "簡単"},
    {"prompt": "電子レンジ", "category": "物", "difficulty": "簡単"},
    {"prompt": "エアコン", "category": "物", "difficulty": "普通"},
    {"prompt": "掃除機", "category": "物", "difficulty": "簡単"},
    {"prompt": "トースター", "category": "物", "difficulty": "簡単"},
    {"prompt": "アイロン", "category": "物", "difficulty": "簡単"},
    {"prompt": "コーヒーメーカー", "category": "物", "difficulty": "普通"},
    {"prompt": "テレビ", "category": "物", "difficulty": "簡単"},
    {"prompt": "エスプレッソマシン", "category": "物", "difficulty": "難しい"},
    {"prompt": "スタンガン", "category": "物", "difficulty": "難しい"},
    {"prompt": "ペン", "category": "物", "difficulty": "簡単"},
    {"prompt": "ノート", "category": "物", "difficulty": "簡単"},
    {"prompt": "消しゴム", "category": "物", "difficulty": "簡単"},
    {"prompt": "クリアファイル", "category": "物", "difficulty": "簡単"},
    {"prompt": "ホチキス", "category": "物", "difficulty": "簡単"},
    {"prompt": "ファイル", "category": "物", "difficulty": "簡単"},
    {"prompt": "マーカー", "category": "物", "difficulty": "普通"},
    {"prompt": "コップ", "category": "物", "difficulty": "簡単"},
    {"prompt": "フォーク", "category": "物", "difficulty": "簡単"},
    {"prompt": "スプーン", "category": "物", "difficulty": "簡単"},
    {"prompt": "ナイフ", "category": "物", "difficulty": "簡単"},
    {"prompt": "マグカップ", "category": "物", "difficulty": "簡単"},
    {"prompt": "ボウル", "category": "物", "difficulty": "簡単"},
    {"prompt": "グラス", "category": "物", "difficulty": "簡単"},
    {"prompt": "トレー", "category": "物", "difficulty": "普通"},
    {"prompt": "ティーカップ", "category": "物", "difficulty": "普通"},
    {"prompt": "トランク", "category": "物", "difficulty": "普通"},
    {"prompt": "カゴ", "category": "物", "difficulty": "簡単"},
    {"prompt": "ハンガー", "category": "物", "difficulty": "簡単"},
    {"prompt": "タオル", "category": "物", "difficulty": "簡単"},
    {"prompt": "歯ブラシ", "category": "物", "difficulty": "簡単"},
    {"prompt": "シャンプー", "category": "物", "difficulty": "簡単"},
    {"prompt": "トイレットペーパー", "category": "物", "difficulty": "簡単"},
    {"prompt": "ハンドソープ", "category": "物", "difficulty": "簡単"},
    {"prompt": "ティッシュ", "category": "物", "difficulty": "簡単"},
    {"prompt": "ドライヤー", "category": "物", "difficulty": "普通"},
    {"prompt": "バスマット", "category": "物", "difficulty": "普通"},
    {"prompt": "クリーナー", "category": "物", "difficulty": "普通"},
    {"prompt": "アイスパック", "category": "物", "difficulty": "普通"},
    {"prompt": "デニムジャケット", "category": "物", "difficulty": "普通"},
    {"prompt": "パスポート", "category": "物", "difficulty": "普通"},
    {"prompt": "シートベルト", "category": "物", "difficulty": "普通"},
    {"prompt": "カメラ", "category": "物", "difficulty": "簡単"},
    {"prompt": "ギター", "category": "物", "difficulty": "簡単"},
    {"prompt": "パズル", "category": "物", "difficulty": "普通"},
    {"prompt": "アート", "category": "物", "difficulty": "普通"},
    {"prompt": "プラモデル", "category": "物", "difficulty": "普通"},
    {"prompt": "キャンプ", "category": "物", "difficulty": "難しい"},
    {"prompt": "ロボット", "category": "物", "difficulty": "普通"},
    {"prompt": "スマートフォン", "category": "物", "difficulty": "簡単"},
    {"prompt": "ドローン", "category": "物", "difficulty": "難しい"},


    // 概念・抽象的なもの
    {"prompt": "エネルギー", "category": "概念", "difficulty": "普通"},
    {"prompt": "チャンス", "category": "概念", "difficulty": "簡単"},
    {"prompt": "バリア", "category": "概念", "difficulty": "普通"},
    {"prompt": "インスピレーション", "category": "概念", "difficulty": "難しい"},
    {"prompt": "コネクション", "category": "概念", "difficulty": "普通"},
    {"prompt": "メンタル", "category": "概念", "difficulty": "普通"},
    {"prompt": "インタラクション", "category": "概念", "difficulty": "難しい"},
    {"prompt": "アプローチ", "category": "概念", "difficulty": "普通"},
    {"prompt": "イノベーション", "category": "概念", "difficulty": "難しい"},
    {"prompt": "ポテンシャル", "category": "概念", "difficulty": "普通"},
    {"prompt": "リーダーシップ", "category": "概念", "difficulty": "普通"},
    {"prompt": "モチベーション", "category": "概念", "difficulty": "普通"},
    {"prompt": "アイデンティティ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "コミュニケーション", "category": "概念", "difficulty": "普通"},
    {"prompt": "コンセプト", "category": "概念", "difficulty": "普通"},
    {"prompt": "シナジー", "category": "概念", "difficulty": "難しい"},
    {"prompt": "クオリティ", "category": "概念", "difficulty": "普通"},
    {"prompt": "スキル", "category": "概念", "difficulty": "簡単"},
    {"prompt": "パワー", "category": "概念", "difficulty": "簡単"},
    {"prompt": "タイミング", "category": "概念", "difficulty": "普通"},
    {"prompt": "バランス", "category": "概念", "difficulty": "簡単"},
    {"prompt": "サポート", "category": "概念", "difficulty": "簡単"},
    {"prompt": "スタミナ", "category": "概念", "difficulty": "簡単"},
    {"prompt": "リスク", "category": "概念", "difficulty": "普通"},
    {"prompt": "チャレンジ", "category": "概念", "difficulty": "簡単"},
    {"prompt": "プロセス", "category": "概念", "difficulty": "普通"},
    {"prompt": "ビジョン", "category": "概念", "difficulty": "普通"},
    {"prompt": "トラウマ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "ディスカッション", "category": "概念", "difficulty": "普通"},
    {"prompt": "フィードバック", "category": "概念", "difficulty": "普通"},
    {"prompt": "ソリューション", "category": "概念", "difficulty": "普通"},
    {"prompt": "インパクト", "category": "概念", "difficulty": "普通"},
    {"prompt": "サクセス", "category": "概念", "difficulty": "簡単"},
    {"prompt": "プラン", "category": "概念", "difficulty": "簡単"},
    {"prompt": "トレンド", "category": "概念", "difficulty": "普通"},
    {"prompt": "パフォーマンス", "category": "概念", "difficulty": "普通"},
    {"prompt": "インテグリティ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "カルチャー", "category": "概念", "difficulty": "普通"},
    {"prompt": "ネットワーク", "category": "概念", "difficulty": "普通"},
    {"prompt": "インフラ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "アプリケーション", "category": "概念", "difficulty": "難しい"},
    {"prompt": "プレゼンテーション", "category": "概念", "difficulty": "普通"},
    
    {"prompt": "ストレス", "category": "概念", "difficulty": "普通"},
    {"prompt": "アイデア", "category": "概念", "difficulty": "簡単"},
    {"prompt": "テクニック", "category": "概念", "difficulty": "普通"},
    {"prompt": "ユーモア", "category": "概念", "difficulty": "普通"},
    {"prompt": "カリスマ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "センス", "category": "概念", "difficulty": "簡単"},
    {"prompt": "ジレンマ", "category": "概念", "difficulty": "難しい"},
    {"prompt": "ルール", "category": "概念", "difficulty": "簡単"},
    {"prompt": "マナー", "category": "概念", "difficulty": "簡単"},
    {"prompt": "メリット", "category": "概念", "difficulty": "普通"},
    {"prompt": "デメリット", "category": "概念", "difficulty": "普通"},
    {"prompt": "レベル", "category": "概念", "difficulty": "簡単"},
    {"prompt": "スケジュール", "category": "概念", "difficulty": "普通"},
    {"prompt": "モラル", "category": "概念", "difficulty": "難しい"},
    {"prompt": "エチケット", "category": "概念", "difficulty": "難しい"},

    {"prompt": "レベルアップ", "category": "ゲーム", "difficulty": "普通"},
    {"prompt": "スキル", "category": "ゲーム", "difficulty": "簡単"},
    {"prompt": "アイテム", "category": "ゲーム", "difficulty": "簡単"},
    {"prompt": "ダメージ", "category": "ゲーム", "difficulty": "簡単"},
    {"prompt": "クエスト", "category": "ゲーム", "difficulty": "普通"},
    {"prompt": "ログイン", "category": "技術", "difficulty": "簡単"},
    {"prompt": "アップデート", "category": "技術", "difficulty": "普通"},
    {"prompt": "ダウンロード", "category": "技術", "difficulty": "簡単"},
    {"prompt": "セーブ", "category": "技術", "difficulty": "簡単"},
    {"prompt": "バグ", "category": "技術", "difficulty": "普通"},
    {"prompt": "メニュー", "category": "一般", "difficulty": "簡単"},
    {"prompt": "チャージ", "category": "一般", "difficulty": "普通"},
    {"prompt": "リセット", "category": "一般", "difficulty": "普通"},
    {"prompt": "スタート", "category": "一般", "difficulty": "簡単"},
    {"prompt": "ゴール", "category": "一般", "difficulty": "簡単"},
    {"prompt": "スコア", "category": "ゲーム", "difficulty": "簡単"},
    {"prompt": "ミッション", "category": "ゲーム", "difficulty": "普通"},
    {"prompt": "コンボ", "category": "ゲーム", "difficulty": "難しい"},
    {"prompt": "アバター", "category": "ゲーム", "difficulty": "難しい"},
    {"prompt": "アカウント", "category": "技術", "difficulty": "普通"},
    
    

];



const specialRules = [
    "が、は、など助詞は使用禁止！単語で！",
    "ジェスチャーのみ！",
    "漢字のみ！",
    "一文のみで説明せい！",
    "色を使って表現したらダメ",
];

let usedPrompts = [];
let isHidden = false;

let roundCounter = 1;
let players = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', nextRound); // ここでは nextRound のみを呼び出す
document.getElementById('endBtn').addEventListener('click', endGame);
document.getElementById('toggleHideBtn').addEventListener('click', toggleHide);
document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);


/* ゲームを開始し、最初のお題と図形を表示します。
スタートボタンを非表示にし、次のお題や終了、表示切替のボタンを表示します。
現在のラウンド数を更新します。 */
function startGame() {
    showNextPrompt();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    document.getElementById('toggleHideBtn').style.display = 'inline-block';
    updateRoundCounter();
}

// 現在のラウンド数を画面に表示します。
function updateRoundCounter() {
    document.getElementById('roundCounter').textContent = `${roundCounter} 回目`;
}

function nextRound() {
    roundCounter++; // ラウンド数を増やす
    updateRoundCounter(); // ラウンドカウンターを更新
    showNextPrompt(); // 次のお題を表示
    showSpecialRule(); // 特殊ルールを表示する関数を呼び出す
}


// 使用可能なお題の中からランダムに1つを選択して表示し、選択したお題を usedPrompts に移動します。
// 全てのお題が表示された場合、警告を表示します。
function showNextPrompt() {
    if (prompts.length === 0) {
        alert('すべてのお題が表示されました。');
        return;
    }

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const selectedPrompt = prompts.splice(randomIndex, 1)[0];
    usedPrompts.push(selectedPrompt);

    document.getElementById('prompt').textContent = selectedPrompt.prompt;
    document.getElementById('category').textContent = `カテゴリ: ${selectedPrompt.category}`;
    document.getElementById('difficulty').textContent = `難易度: ${selectedPrompt.difficulty}`;

    updateVisibility();
}

// ゲームを終了し、すべての状態をリセット
function endGame() {
    if (confirm('ゲームを終了しますか？')) {
        document.getElementById('prompt').textContent = '';
        document.getElementById('category').textContent = '';
        document.getElementById('difficulty').textContent = '';
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('endBtn').style.display = 'none';
        document.getElementById('toggleHideBtn').style.display = 'none';
        prompts.push(...usedPrompts);
        usedPrompts = [];
        isHidden = false;

        updateVisibility();

        // お題の表示スタイルをリセット
        const promptContainer = document.getElementById('promptContainer');
        promptContainer.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
            p.style.textAlign = 'center';
        });

        roundCounter = 1;
        updateRoundCounter();
        players = [];
        updateScoreboard();
    }
}

// お題の表示/非表示を切り替え
function toggleHide() {
    isHidden = !isHidden;
    const promptContainer = document.getElementById('promptContainer');
    const hiddenImage = document.getElementById('hiddenImage');
    
    if (isHidden) {
        promptContainer.querySelectorAll('p').forEach(p => p.style.display = 'none');
        hiddenImage.style.display = 'block';
        document.getElementById('toggleHideBtn').textContent = '表示する';
    } else {
        promptContainer.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
        });
        hiddenImage.style.display = 'none';
        document.getElementById('toggleHideBtn').textContent = '隠す';
    }
}

// お題、カテゴリ、難易度の表示状態を更新
function updateVisibility() {
    const elements = ['prompt', 'category', 'difficulty'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.style.visibility = isHidden ? 'hidden' : 'visible';
    });
    document.getElementById('toggleHideBtn').textContent = isHidden ? '表示する' : '隠す';
}

//特殊ルール
function showSpecialRule() {
    const specialRuleElement = document.getElementById('specialRule');
    if (Math.random() < 0.2) { // 30%の確率で特殊ルールを発生させる
      const randomRule = specialRules[Math.floor(Math.random() * specialRules.length)];
      specialRuleElement.textContent = `特殊ルール: ${randomRule}`;
      specialRuleElement.style.display = 'block';
    } else {
      specialRuleElement.style.display = 'none';
    }
  }

// 新しいプレイヤーを追加し、スコアボードを更新
function addPlayer() {
    const playerName = prompt("プレイヤー名を入力してください:");
    if (playerName) {
        players.push({ name: playerName, score: 0 });
        updateScoreboard();
    }
}

// スコアボードを最新の状態に更新
function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'scoreboard-item'; // ここでクラスを追加
        playerDiv.innerHTML = `
            <span>${player.name}　:　</span>
            <span id="score-${index}">${player.score}</span>
            <button onclick="addPoint(${index})">+1</button>
            <button onclick="subtractPoint(${index})">-1</button>
            <button onclick="removePlayer(${index})">削除</button>
        `;
        scoreboard.appendChild(playerDiv);
    });
}


// プレイヤー削除
function removePlayer(playerIndex) {
    if (confirm(`${players[playerIndex].name} を削除しますか？`)) {
        players.splice(playerIndex, 1);  // プレイヤーをリストから削除
        updateScoreboard();  // スコアボードを更新
    }
}


// 指定されたプレイヤーのスコアを1ポイント増やす
function addPoint(playerIndex) {
    players[playerIndex].score++;
    updateScoreboard();
}

// 指定されたプレイヤーのスコアを1ポイント減らしますが、スコアが0未満にならないようにする
function subtractPoint(playerIndex) {
    players[playerIndex].score = Math.max(0, players[playerIndex].score - 1);
    updateScoreboard();
}