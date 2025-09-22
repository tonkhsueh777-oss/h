# h
toy
[deepseek_html_20250907_9d9d43 (2).html](https://github.com/user-attachments/files/22194340/deepseek_html_20250907_9d9d43.2.html)
<!DOCTYPE html>
<html lang="zh">
<head>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starship 組裝挑戰 - Flight #10</title>
    <style>
        body { margin: 0; padding: 0; background: #000; color: #fff; font-family: Arial, sans-serif; overflow: hidden; }
        canvas { display: block; width: 100%; height: 100vh; background: linear-gradient(to bottom, #001122, #000033); }
        #ui { position: absolute; top: 10px; left: 10px; z-index: 10; }
        #score { font-size: 18px; color: #ffd700; }
        #timer { font-size: 18px; color: #00ff00; }
        #level { font-size: 18px; color: #ff69b4; }
        #message { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; text-align: center; color: #ffd700; display: none; z-index: 20; }
        button { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); padding: 10px 20px; background: #ffd700; border: none; color: #000; font-size: 16px; border-radius: 5px; cursor: pointer; z-index: 15; }
    </style>
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <div id="ui">
        <div id="score">分數: 0</div>
        <div id="timer">時間: 60</div>
        <div id="level">關卡: 1</div>
    </div>
    <div id="message"></div>
    <button onclick="resetGame()">重新開始</button>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreEl = document.getElementById('score');
        const timerEl = document.getElementById('timer');
        const levelEl = document.getElementById('level');
        const messageEl = document.getElementById('message');

        // 適應螢幕大小
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 遊戲狀態
        let score = 0;
        let timeLeft = 60;
        let level = 1;
        let gameRunning = true;
        let parts = []; // 部件陣列
        let rocketBase = { x: canvas.width / 2, y: canvas.height - 100, width: 50, height: 300 }; // 火箭基座
        let selectedPart = null;

        // 規格數據 (基於圖片)
        const specs = {
            ship: { height: 52.1, dryMass: 135, propMass: 1500, engines: { vac: 3, sea: 3 }, thrust: 14.7, isp: 363, burn: 379, fuel: 'CH4/LOX' },
            booster: { height: 71, dryMass: 275, propMass: 3400, engines: { sea: 20 }, thrust: 74.4, isp: 327, burn: 165, fuel: 'CH4/LOX' }
        };

        // 初始化部件 (簡化為矩形，基於圖)
        function initParts() {
            parts = [
                { type: 'ship', x: 50, y: 100, width: 40, height: 200, color: '#00bfff', correctPos: { x: rocketBase.x - 25, y: rocketBase.y - 200 }, placed: false, label: 'S37 上層 (52.1m, 1500t 燃料)' },
                { type: 'booster', x: canvas.width - 100, y: 100, width: 40, height: 250, color: '#ff4500', correctPos: { x: rocketBase.x - 25, y: rocketBase.y - 50 }, placed: false, label: 'B16 助推器 (71m, 3400t 燃料)' },
                { type: 'engines', x: 100, y: canvas.height - 150, width: 30, height: 30, color: '#ffd700', correctPos: { x: rocketBase.x, y: rocketBase.y + 10 }, placed: false, label: '引擎 (Ship: 6x Raptor, Booster: 20x Raptor)' },
                { type: 'fuel', x: 200, y: 200, width: 20, height: 50, color: '#32cd32', correctPos: { x: rocketBase.x + 10, y: rocketBase.y - 100 }, placed: false, label: 'CH4/LOX 燃料' }
            ];
            if (level >= 2) parts.push({ type: 'thrust', x: 300, y: 300, width: 25, height: 25, color: '#ff0000', correctPos: { x: rocketBase.x - 10, y: rocketBase.y }, placed: false, label: '推力調整 (Ship: 14.7MN)' });
            if (level >= 3) parts.push({ type: 'payload', x: 400, y: 400, width: 35, height: 35, color: '#dda0dd', correctPos: { x: rocketBase.x + 20, y: rocketBase.y - 250 }, placed: false, label: '酬載 (8 Starlink Sims)' });
        }

        // 繪製遊戲
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 繪製基座
            ctx.fillStyle = '#808080';
            ctx.fillRect(rocketBase.x - 30, rocketBase.y, 60, 20);
            
            // 繪製已放置部件
            parts.forEach(part => {
                if (part.placed) {
                    ctx.fillStyle = part.color;
                    ctx.fillRect(part.x, part.y, part.width, part.height);
                    ctx.fillStyle = '#fff';
                    ctx.font = '12px Arial';
                    ctx.fillText(part.label, part.x, part.y - 5);
                }
            });
            
            // 繪製未放置部件
            parts.forEach(part => {
                if (!part.placed) {
                    ctx.fillStyle = part.color;
                    ctx.fillRect(part.x, part.y, part.width, part.height);
                    ctx.fillStyle = '#fff';
                    ctx.font = '10px Arial';
                    ctx.fillText(part.label.substring(0, 15) + '...', part.x, part.y - 5);
                }
            });
            
            // 檢查完成
            if (parts.every(p => p.placed) && checkCorrectPlacement()) {
                showMessage('發射成功！+100分', 'green');
                score += 100 * level;
                level++;
                timeLeft = 60;
                setTimeout(() => {
                    initParts();
                    hideMessage();
                }, 2000);
            }
        }

        // 檢查放置正確
        function checkCorrectPlacement() {
            return parts.every(part => {
                const dx = Math.abs(part.x - part.correctPos.x);
                const dy = Math.abs(part.y - part.correctPos.y);
                return dx < 20 && dy < 20;
            });
        }

        // 顯示訊息
        function showMessage(text, color) {
            messageEl.textContent = text;
            messageEl.style.color = color;
            messageEl.style.display = 'block';
        }
        function hideMessage() {
            messageEl.style.display = 'none';
        }

        // 事件處理 (支援滑鼠和觸控)
        function getPos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: (e.clientX || e.touches[0].clientX) - rect.left,
                y: (e.clientY || e.touches[0].clientY) - rect.top
            };
        }

        canvas.addEventListener('mousedown', handleStart);
        canvas.addEventListener('mousemove', handleMove);
        canvas.addEventListener('mouseup', handleEnd);
        canvas.addEventListener('touchstart', handleStart);
        canvas.addEventListener('touchmove', handleMove);
        canvas.addEventListener('touchend', handleEnd);

        function handleStart(e) {
            e.preventDefault();
            const pos = getPos(e);
            selectedPart = parts.find(part => !part.placed && pos.x > part.x && pos.x < part.x + part.width && pos.y > part.y && pos.y < part.y + part.height);
        }

        function handleMove(e) {
            e.preventDefault();
            if (selectedPart) {
                const pos = getPos(e);
                selectedPart.x = pos.x - selectedPart.width / 2;
                selectedPart.y = pos.y - selectedPart.height / 2;
                draw();
            }
        }

        function handleEnd(e) {
            e.preventDefault();
            if (selectedPart) {
                // 檢查是否靠近正確位置
                const dx = Math.abs(selectedPart.x - selectedPart.correctPos.x);
                const dy = Math.abs(selectedPart.y - selectedPart.correctPos.y);
                if (dx < 50 && dy < 50) {
                    selectedPart.x = selectedPart.correctPos.x;
                    selectedPart.y = selectedPart.correctPos.y;
                    selectedPart.placed = true;
                    score += 20;
                } else {
                    showMessage('位置不對！重試', 'red');
                    setTimeout(hideMessage, 1000);
                }
                selectedPart = null;
                draw();
            }
        }

        // 計時器
        setInterval(() => {
            if (gameRunning && timeLeft > 0) {
                timeLeft--;
                timerEl.textContent = `時間: ${timeLeft}`;
                if (timeLeft <= 0) {
                    showMessage('時間到！遊戲結束', 'red');
                    gameRunning = false;
                }
            }
        }, 1000);

        // 更新 UI
        function updateUI() {
            scoreEl.textContent = `分數: ${score}`;
            levelEl.textContent = `關卡: ${level}`;
        }

        // 重置遊戲
        function resetGame() {
            score = 0;
            timeLeft = 60;
            level = 1;
            gameRunning = true;
            initParts();
            updateUI();
            hideMessage();
            draw();
        }

        // 遊戲循環
        function gameLoop() {
            draw();
            updateUI();
            requestAnimationFrame(gameLoop);
        }

        // 啟動
        initParts();
        gameLoop();
    </script>
</body>
</html>
</body>
</html>
