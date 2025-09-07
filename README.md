# h
toy
[deepseek_html_20250907_9d9d43 (2).html](https://github.com/user-attachments/files/22194340/deepseek_html_20250907_9d9d43.2.html)
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>即夢AI提示詞工具</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%);
            color: #333;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 30px 0;
            margin-bottom: 30px;
            color: white;
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
        }
        
        .main-content {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .input-section {
            flex: 1;
            min-width: 300px;
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .output-section {
            flex: 1;
            min-width: 300px;
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
        }
        
        .control-group {
            margin-bottom: 25px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
        }
        
        .control-group h3 {
            margin-bottom: 15px;
            color: #1a2a6c;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .control-group h3 i {
            color: #b21f1f;
        }
        
        textarea {
            width: 100%;
            height: 120px;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #ddd;
            resize: vertical;
            font-size: 1rem;
        }
        
        select {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 1px solid #ddd;
            background: white;
            font-size: 1rem;
            margin-bottom: 10px;
        }
        
        .checkbox-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        
        .checkbox-item {
            display: flex;
            align-items: center;
            background: #e9ecef;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .checkbox-item:hover {
            background: #dee2e6;
        }
        
        .checkbox-item input {
            margin-right: 5px;
        }
        
        .slider-container {
            margin: 15px 0;
        }
        
        .slider-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        
        input[type="range"] {
            width: 100%;
            height: 8px;
            -webkit-appearance: none;
            background: #e9ecef;
            border-radius: 5px;
            outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #1a2a6c;
            cursor: pointer;
        }
        
        .btn {
            display: inline-block;
            padding: 14px 25px;
            background: #1a2a6c;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s;
            margin-top: 10px;
            width: 100%;
        }
        
        .btn:hover {
            background: #fdbb2d;
            color: #333;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .btn-copy {
            background: #b21f1f;
            margin-top: auto;
        }
        
        .btn-copy:hover {
            background: #ff7e5f;
        }
        
        .output-prompt {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            min-height: 200px;
            margin-top: 20px;
            flex-grow: 1;
            white-space: pre-wrap;
            overflow-y: auto;
            border: 1px solid #e9ecef;
            font-family: 'Courier New', monospace;
            line-height: 1.6;
        }
        
        .character-count {
            text-align: right;
            color: #6c757d;
            font-size: 0.9rem;
            margin-top: 5px;
        }
        
        .examples {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            margin-bottom: 40px;
        }
        
        .examples h2 {
            color: #1a2a6c;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .example-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        
        .example-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            width: 300px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .example-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .example-card h3 {
            color: #1a2a6c;
            margin-bottom: 10px;
        }
        
        footer {
            text-align: center;
            padding: 20px;
            color: white;
            font-size: 0.9rem;
        }
        
        @media (max-width: 900px) {
            .main-content {
                flex-direction: column;
            }
            
            .input-section, .output-section {
                min-width: 100%;
            }
        }
        
        .tooltip {
            position: relative;
            display: inline-block;
            margin-left: 5px;
            color: #1a2a6c;
        }
        
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 0.9rem;
        }
        
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        
        .lens-composition-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .advanced-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            padding: 10px;
            background: #e9ecef;
            border-radius: 10px;
            margin-top: 10px;
        }
        
        .advanced-settings {
            display: none;
            margin-top: 15px;
            padding: 15px;
            background: #e9ecef;
            border-radius: 10px;
        }
        
        .tag {
            display: inline-block;
            background: #1a2a6c;
            color: white;
            padding: 4px 8px;
            border-radius: 5px;
            font-size: 0.8rem;
            margin-right: 5px;
            margin-bottom: 5px;
        }
        
        .creativity-indicator {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
        
        .creativity-level {
            text-align: center;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.9rem;
            background: #e9ecef;
        }
        
        .creativity-level.active {
            background: #1a2a6c;
            color: white;
        }
        
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 30px;
        }
        
        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 30px;
        }
        
        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 22px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        input:checked + .toggle-slider {
            background-color: #1a2a6c;
        }
        
        input:checked + .toggle-slider:before {
            transform: translateX(30px);
        }
        
        .toggle-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        .toggle-label {
            font-weight: bold;
            color: #1a2a6c;
        }
        
        .loading {
            display: none;
            text-align: center;
            padding: 10px;
            color: #1a2a6c;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><i class="fas fa-robot"></i> 即夢AI提示詞工具</h1>
            <p class="subtitle">專注於文本提示詞生成，創造高質量AI圖像</p>
        </header>
        
        <div class="main-content">
            <div class="input-section">
                <div class="toggle-container">
                    <span class="toggle-label">根據這個圖生成提示詞</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="basedOnImage">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="control-group">
                    <h3><i class="fas fa-pencil-alt"></i> 基本提示</h3>
                    <textarea id="basicPrompt" placeholder="例如：一位年輕女子站在城市天台，望著遠方"></textarea>
                    <div class="character-count">字數: <span id="basicCount">0</span></div>
                </div>
                
                <div class="control-group">
                    <h3><i class="fas fa-palette"></i> 風格選擇</h3>
                    <select id="styleSelect">
                        <option value="">-- 選擇風格 --</option>
                        <option value="寫實風格">寫實風格</option>
                        <option value="電影風格">電影風格</option>
                        <option value="卡通風格">卡通風格</option>
                        <option value="油畫風格">油畫風格</option>
                        <option value="水彩風格">水彩風格</option>
                        <option value="賽博朋克">賽博朋克風格</option>
                        <option value="復古風格">復古風格</option>
                        <option value="極簡主義">極簡主義</option>
                        <option value="未來主義">未來主義</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <h3><i class="fas fa-camera"></i> 鏡頭與構圖</h3>
                    <div class="lens-composition-grid">
                        <div>
                            <h4>鏡頭類型</h4>
                            <select id="lensType">
                                <option value="">-- 選擇鏡頭 --</option>
                                <option value="超廣角鏡頭">超廣角鏡頭</option>
                                <option value="廣角鏡頭">廣角鏡頭</option>
                                <option value="標準鏡頭">標準鏡頭</option>
                                <option value="長焦鏡頭">長焦鏡頭</option>
                                <option value="超長焦鏡頭">超長焦鏡頭</option>
                                <option value="微距鏡頭">微距鏡頭</option>
                                <option value="魚眼鏡頭">魚眼鏡頭</option>
                            </select>
                        </div>
                        <div>
                            <h4>構圖技巧</h4>
                            <select id="compositionType">
                                <option value="">-- 選擇構圖 --</option>
                                <option value="對稱構圖">對稱構圖</option>
                                <option value="三分法構圖">三分法構圖</option>
                                <option value="黃金分割構圖">黃金分割構圖</option>
                                <option value="引導線構圖">引導線構圖</option>
                                <option value="框架構圖">框架構圖</option>
                                <option value="填充式構圖">填充式構圖</option>
                                <option value="留白構圖">留白構圖</option>
                                <option value="對角線構圖">對角線構圖</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="lens-composition-grid" style="margin-top: 15px;">
                        <div>
                            <h4>拍攝角度</h4>
                            <select id="shotAngle">
                                <option value="">-- 選擇角度 --</option>
                                <option value="眼平視角">眼平視角</option>
                                <option value="低角度拍攝">低角度拍攝</option>
                                <option value="高角度拍攝">高角度拍攝</option>
                                <option value="鳥瞰角度">鳥瞰角度</option>
                                <option value="傾斜角度">傾斜角度</option>
                                <option value="俯視角度">俯視角度</option>
                                <option value="仰視角度">仰視角度</option>
                            </select>
                        </div>
                        <div>
                            <h4>景深控制</h4>
                            <select id="depthOfField">
                                <option value="">-- 選擇景深 --</option>
                                <option value="淺景深">淺景深</option>
                                <option value="大景深">大景深</option>
                                <option value="前景模糊">前景模糊</option>
                                <option value="背景模糊">背景模糊</option>
                                <option value="移軸效果">移軸效果</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3><i class="fas fa-tags"></i> 添加細節</h3>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" value="精細紋理"> 精細紋理
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="光影效果"> 光影效果
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="環境細節"> 環境細節
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="情感表達"> 情感表達
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="動態感"> 動態感
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="高對比度"> 高對比度
                        </label>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3>
                        <i class="fas fa-magic"></i> 創造力級別
                        <div class="tooltip">
                            <i class="fas fa-question-circle"></i>
                            <span class="tooltiptext">控制AI對提示詞的解釋和創造性發揮程度</span>
                        </div>
                    </h3>
                    <div class="slider-container">
                        <div class="slider-label">
                            <span>精準還原</span>
                            <span>創意發揮</span>
                        </div>
                        <input type="range" id="creativity" min="0" max="100" value="50">
                    </div>
                    <div class="creativity-indicator">
                        <div class="creativity-level" id="level1">保守</div>
                        <div class="creativity-level" id="level2">適度</div>
                        <div class="creativity-level active" id="level3">平衡</div>
                        <div class="creativity-level" id="level4">創意</div>
                        <div class="creativity-level" id="level5">大膽</div>
                    </div>
                </div>
                
                <div class="advanced-toggle" id="advancedToggle">
                    <span>進階設置</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                
                <div class="advanced-settings" id="advancedSettings">
                    <h3><i class="fas fa-cogs"></i> 進階設置</h3>
                    
                    <div class="slider-container">
                        <div class="slider-label">
                            <span>對比度</span>
                            <span id="contrastValue">50%</span>
                        </div>
                        <input type="range" id="contrast" min="0" max="100" value="50">
                    </div>
                    
                    <div class="slider-container">
                        <div class="slider-label">
                            <span>飽和度</span>
                            <span id="saturationValue">50%</span>
                        </div>
                        <input type="range" id="saturation" min="0" max="100" value="50">
                    </div>
                    
                    <div class="slider-container">
                        <div class="slider-label">
                            <span>亮度</span>
                            <span id="brightnessValue">50%</span>
                        </div>
                        <input type="range" id="brightness" min="0" max="100" value="50">
                    </div>
                    
                    <h4 style="margin-top: 15px;">特殊效果</h4>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" value="鏡頭光暈"> 鏡頭光暈
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="電影顆粒"> 電影顆粒
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="運動模糊"> 運動模糊
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" value="體積光"> 體積光
                        </label>
                    </div>
                </div>
                
                <div class="loading" id="loadingIndicator">
                    <i class="fas fa-spinner fa-spin"></i> 生成中...
                </div>
                
                <button id="generateBtn" class="btn">生成提示詞</button>
            </div>
            
            <div class="output-section">
                <h3><i class="fas fa-scroll"></i> 生成的提示詞</h3>
                <div class="output-prompt" id="outputPrompt">
                    生成的提示詞將顯示在這裡...
                </div>
                <div class="character-count">字數: <span id="outputCount">0</span></div>
                <button id="copyBtn" class="btn btn-copy">複製提示詞</button>
            </div>
        </div>
        
        <div class="examples">
            <h2>提示詞示例</h2>
            <div class="example-cards">
                <div class="example-card" onclick="loadExample(1)">
                    <h3>電影角色肖像</h3>
                    <p>使用長焦鏡頭，三分法構圖，淺景深效果，創造專業電影感角色肖像</p>
                    <div>
                        <span class="tag">長焦鏡頭</span>
                        <span class="tag">三分法構圖</span>
                        <span class="tag">淺景深</span>
                    </div>
                </div>
                <div class="example-card" onclick="loadExample(2)">
                    <h3>城市風景</h3>
                    <p>使用廣角鏡頭，引導線構圖，低角度拍攝，展現現代城市的宏偉感</p>
                    <div>
                        <span class="tag">廣角鏡頭</span>
                        <span class="tag">引導線構圖</span>
                        <span class="tag">低角度</span>
                    </div>
                </div>
                <div class="example-card" onclick="loadExample(3)">
                    <h3>產品攝影</h3>
                    <p>使用標準鏡頭，對稱構圖，微距效果，突出產品細節和質感</p>
                    <div>
                        <span class="tag">標準鏡頭</span>
                        <span class="tag">對稱構圖</span>
                        <span class="tag">微距</span>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <p>© 2023 即夢AI提示詞工具 | 專注於文本提示詞生成，創造高質量AI圖像</p>
        </footer>
    </div>

    <script>
        // 示例數據
        const examples = {
            1: {
                basic: "一位中年男子站在雨中街道上，穿著風衣，表情嚴肅",
                style: "電影風格",
                lensType: "長焦鏡頭",
                compositionType: "三分法構圖",
                shotAngle: "眼平視角",
                depthOfField: "淺景深",
                details: ["光影效果", "環境細節", "精細紋理"],
                creativity: 40,
                basedOnImage: true
            },
            2: {
                basic: "未來城市天際線，霓虹燈光照亮夜空",
                style: "賽博朋克",
                lensType: "廣角鏡頭",
                compositionType: "引導線構圖",
                shotAngle: "低角度拍攝",
                depthOfField: "大景深",
                details: ["光影效果", "高對比度", "動態感"],
                creativity: 70,
                basedOnImage: false
            },
            3: {
                basic: "一個精緻的機械手錶，展示內部複雜結構",
                style: "寫實風格",
                lensType: "標準鏡頭",
                compositionType: "對稱構圖",
                shotAngle: "眼平視角",
                depthOfField: "淺景深",
                details: ["精細紋理", "光影效果", "高對比度"],
                creativity: 30,
                basedOnImage: true
            }
        };
        
        // DOM元素
        const basicPrompt = document.getElementById('basicPrompt');
        const styleSelect = document.getElementById('styleSelect');
        const lensType = document.getElementById('lensType');
        const compositionType = document.getElementById('compositionType');
        const shotAngle = document.getElementById('shotAngle');
        const depthOfField = document.getElementById('depthOfField');
        const creativitySlider = document.getElementById('creativity');
        const generateBtn = document.getElementById('generateBtn');
        const outputPrompt = document.getElementById('outputPrompt');
        const copyBtn = document.getElementById('copyBtn');
        const basicCount = document.getElementById('basicCount');
        const outputCount = document.getElementById('outputCount');
        const advancedToggle = document.getElementById('advancedToggle');
        const advancedSettings = document.getElementById('advancedSettings');
        const creativityLevels = [
            document.getElementById('level1'),
            document.getElementById('level2'),
            document.getElementById('level3'),
            document.getElementById('level4'),
            document.getElementById('level5')
        ];
        const basedOnImage = document.getElementById('basedOnImage');
        const loadingIndicator = document.getElementById('loadingIndicator');
        
        // 更新字數統計
        basicPrompt.addEventListener('input', () => {
            basicCount.textContent = basicPrompt.value.length;
        });
        
        // 進階設置切換
        advancedToggle.addEventListener('click', () => {
            if (advancedSettings.style.display === 'block') {
                advancedSettings.style.display = 'none';
                advancedToggle.querySelector('i').className = 'fas fa-chevron-down';
            } else {
                advancedSettings.style.display = 'block';
                advancedToggle.querySelector('i').className = 'fas fa-chevron-up';
            }
        });
        
        // 進階設置滑塊
        document.getElementById('contrast').addEventListener('input', (e) => {
            document.getElementById('contrastValue').textContent = e.target.value + '%';
        });
        
        document.getElementById('saturation').addEventListener('input', (e) => {
            document.getElementById('saturationValue').textContent = e.target.value + '%';
        });
        
        document.getElementById('brightness').addEventListener('input', (e) => {
            document.getElementById('brightnessValue').textContent = e.target.value + '%';
        });
        
        // 创造力级别滑块
        creativitySlider.addEventListener('input', (e) => {
            updateCreativityIndicator(e.target.value);
        });
        
        function updateCreativityIndicator(value) {
            // 清除所有活动状态
            creativityLevels.forEach(level => {
                level.classList.remove('active');
            });
            
            // 根据值设置活动状态
            if (value < 20) {
                creativityLevels[0].classList.add('active');
            } else if (value < 40) {
                creativityLevels[1].classList.add('active');
            } else if (value < 60) {
                creativityLevels[2].classList.add('active');
            } else if (value < 80) {
                creativityLevels[3].classList.add('active');
            } else {
                creativityLevels[4].classList.add('active');
            }
        }
        
        // 加載示例
        function loadExample(id) {
            const example = examples[id];
            basicPrompt.value = example.basic;
            basicCount.textContent = example.basic.length;
            
            styleSelect.value = example.style;
            lensType.value = example.lensType;
            compositionType.value = example.compositionType;
            shotAngle.value = example.shotAngle;
            depthOfField.value = example.depthOfField;
            creativitySlider.value = example.creativity;
            basedOnImage.checked = example.basedOnImage;
            updateCreativityIndicator(example.creativity);
            
            // 清除所有複選框
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                if (checkbox.id !== 'basedOnImage') {
                    checkbox.checked = false;
                }
            });
            
            // 選中示例中的細節
            example.details.forEach(detail => {
                document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    if (checkbox.value === detail && checkbox.id !== 'basedOnImage') {
                        checkbox.checked = true;
                    }
                });
            });
            
            // 生成提示詞
            generatePrompt();
        }
        
        // 生成提示詞
        function generatePrompt() {
            // 显示加载指示器
            loadingIndicator.style.display = 'block';
            
            // 使用setTimeout模拟生成过程
            setTimeout(() => {
                let prompt = "";
                
                // 检查是否选择了"根据这个图"
                if (basedOnImage.checked) {
                    prompt += "根據這個圖，";
                }
                
                prompt += basicPrompt.value;
                
                // 添加風格
                if (styleSelect.value) {
                    prompt += `, ${styleSelect.value}`;
                }
                
                // 添加鏡頭類型
                if (lensType.value) {
                    prompt += `, ${lensType.value}`;
                }
                
                // 添加構圖技巧
                if (compositionType.value) {
                    prompt += `, ${compositionType.value}`;
                }
                
                // 添加拍攝角度
                if (shotAngle.value) {
                    prompt += `, ${shotAngle.value}`;
                }
                
                // 添加景深控制
                if (depthOfField.value) {
                    prompt += `, ${depthOfField.value}`;
                }
                
                // 添加細節
                document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    if (checkbox.id !== 'basedOnImage') {
                        prompt += `, ${checkbox.value}`;
                    }
                });
                
                // 根據創造力級別添加提示詞
                const creativity = creativitySlider.value;
                if (creativity > 80) {
                    prompt += ", 高度創意, 獨特視角, 藝術性表現";
                } else if (creativity > 60) {
                    prompt += ", 創意發揮, 獨特構圖";
                } else if (creativity > 40) {
                    prompt += ", 適度創意, 平衡表現";
                } else if (creativity > 20) {
                    prompt += ", 輕微創意, 基本還原";
                } else {
                    prompt += ", 精準還原, 嚴格遵循提示";
                }
                
                // 添加質量提示詞
                prompt += ", 高質量, 高細節, 8K分辨率";
                
                outputPrompt.textContent = prompt;
                outputCount.textContent = prompt.length;
                
                // 隐藏加载指示器
                loadingIndicator.style.display = 'none';
            }, 500);
        }
        
        // 複製提示詞
        function copyToClipboard() {
            const text = outputPrompt.textContent;
            
            // 使用现代剪贴板API
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => {
                    // 改變按鈕文本提示已複製
                    copyBtn.textContent = "已複製!";
                    setTimeout(() => {
                        copyBtn.textContent = "複製提示詞";
                    }, 2000);
                }).catch(err => {
                    console.error('複製失敗: ', err);
                    fallbackCopyText(text);
                });
            } else {
                // 使用传统的execCommand方法作为备选
                fallbackCopyText(text);
            }
        }
        
        // 传统复制方法
        function fallbackCopyText(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            
            // 避免屏幕闪烁
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                // 改變按鈕文本提示已複製
                copyBtn.textContent = "已複製!";
                setTimeout(() => {
                    copyBtn.textContent = "複製提示詞";
                }, 2000);
            } catch (err) {
                console.error('複製失敗: ', err);
                alert('複製失敗，請手動複製文本');
            }
            
            document.body.removeChild(textArea);
        }
        
        // 事件監聽
        generateBtn.addEventListener('click', generatePrompt);
        copyBtn.addEventListener('click', copyToClipboard);
        
        // 初始化
        updateCreativityIndicator(creativitySlider.value);
        
        // 初始化进阶设置滑块值
        document.getElementById('contrastValue').textContent = '50%';
        document.getElementById('saturationValue').textContent = '50%';
        document.getElementById('brightnessValue').textContent = '50%';
        
        // 初始生成提示词
        generatePrompt();
    </script>
</body>
</html>
