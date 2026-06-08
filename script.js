const testData = {
    uz: {
        easy: [
            { id: "uz_e_1", q: "HTML-da sayt sarlavhasi (eng katta matn) qaysi teg bilan yoziladi?", a: ["<h6>", "<p>", "<h1>", "<span>"], correct: 2 },
            { id: "uz_e_2", q: "CSS-da matn rangini o'zgartirish uchun qaysi xossadan foydalaniladi?", a: ["background-color", "color", "font-size", "text-align"], correct: 1 },
            { id: "uz_e_3", q: "Havola (link) yaratish tegi qaysi?", a: ["<img>", "<a>", "<link>", "<href>"], correct: 1 },
            { id: "uz_e_4", q: "Element burchagini yumaloq qilish xossasi?", a: ["border-radius", "margin", "padding", "shadow"], correct: 0 },
            { id: "uz_e_5", q: "HTML fayl kengaytmasi qanday?", a: [".css", ".js", ".py", ".html"], correct: 3 },
            { id: "uz_e_6", q: "Matnni qalin qilish uchun qaysi teg ishlatiladi?", a: ["<i>", "<b>", "<u>", "<p>"], correct: 1 },
            { id: "uz_e_7", q: "HTML qisqartmasi nima?", a: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Tool Markup Link", "Home Text Main Language"], correct: 0 },
            { id: "uz_e_8", q: "CSS qisqartmasi nima?", a: ["Computer Style Sheet", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
            { id: "uz_e_9", q: "Ro'yxat yaratish uchun qaysi teg ishlatiladi?", a: ["<list>", "<ul>", "<dl>", "<items>"], correct: 1 },
            { id: "uz_e_10", q: "Rasm qo'shish tegi qaysi?", a: ["<picture>", "<source>", "<img>", "<src>"], correct: 2 },
            { id: "uz_e_11", q: "HTML-da jadval yaratish uchun qaysi teg ishlatiladi?", a: ["<table>", "<tab>", "<grid>", "<tr>"], correct: 0 },
            { id: "uz_e_12", q: "Saytning 'miyasi' hisoblangan qism qayerda yoziladi?", a: ["<body>", "<main>", "<head>", "<footer>"], correct: 2 },
            { id: "uz_e_13", q: "CSS-da tashqi bo'shliq qaysi?", a: ["padding", "border", "margin", "gap"], correct: 2 },
            { id: "uz_e_14", q: "CSS-da ichki bo'shliq qaysi?", a: ["padding", "margin", "spacing", "inside"], correct: 0 },
            { id: "uz_e_15", q: "Matnni o'rtaga joylashtirish kodi?", a: ["align: center", "text-center", "text-align: center", "justify-content: center"], correct: 2 },
            { id: "uz_e_16", q: "Yangi qatorga o'tish tegi?", a: ["<n>", "<next>", "<br>", "<lb>"], correct: 2 },
            { id: "uz_e_17", q: "Eng kichik sarlavha tegi?", a: ["<h1>", "<h3>", "<h6>", "<h9>"], correct: 2 },
            { id: "uz_e_18", q: "HTML hujjatning asosi qaysi?", a: ["<html>", "<!DOCTYPE html>", "<body>", "<head>"], correct: 1 },
            { id: "uz_e_19", q: "CSS-da matn o'lchamini o'zgartirish?", a: ["font-style", "text-size", "font-size", "size"], correct: 2 },
            { id: "uz_e_20", q: "Fonda rasm qo'shish kodi?", a: ["bg-image", "background-image", "image-bg", "source-bg"], correct: 1 }
        ],
        hard: [
            { id: "uz_h_1", q: "Python-da ekranga chiqarish funksiyasi?", a: ["input()", "print()", "echo()", "Log()"], correct: 1 },
            { id: "uz_h_2", q: "Python-da ro'yxat (list) yaratish belgisi?", a: ["( )", "{ }", "[ ]", "< >"], correct: 2 },
            { id: "uz_h_3", q: "Python-da qatorni butun songa o'tkazish?", a: ["int()", "str()", "float()", "convert()"], correct: 0 },
            { id: "uz_h_4", q: "Python kutubxonalarni qanday chaqiradi?", a: ["include", "import", "using", "require"], correct: 1 },
            { id: "uz_h_5", q: "Python-da izoh qoldirish belgisi?", a: ["//", "/* */", "#", "--"], correct: 2 },
            { id: "uz_h_6", q: "Python-da o'zgaruvchi turini aniqlash?", a: ["typeof()", "type()", "kind()", "is()"], correct: 1 },
            { id: "uz_h_7", q: "Python massivining birinchi elementi indeksi?", a: ["1", "-1", "0", "A"], correct: 2 },
            { id: "uz_h_8", q: "Python-da 'if' dan keyin nima qo'yiladi?", a: [";", ":", ",", "{}"], correct: 1 },
            { id: "uz_h_9", q: "Python fayl kengaytmasi?", a: [".py", ".pyt", ".python", ".txt"], correct: 0 },
            { id: "uz_h_10", q: "Python-da bo'sh funksiya yaratish?", a: ["void", "null", "pass", "empty"], correct: 2 }
        ],
        expert: [
            { id: "uz_ex_1", q: "JS-da o'zgarmas (const) e'loni?", a: ["var", "let", "const", "def"], correct: 2 },
            { id: "uz_ex_2", q: "DOM nima?", a: ["Document Object Model", "Data Object Main", "Display Option Mode", "Direct Object Map"], correct: 0 },
            { id: "uz_ex_3", q: "JS-da 'strict mode' ni yoqish?", a: ["'strict'", "'use strict'", "strict: true", "mode: strict"], correct: 1 },
            { id: "uz_ex_4", q: "Array-ga oxiridan element qo'shish?", a: ["push()", "pop()", "shift()", "add()"], correct: 0 },
            { id: "uz_ex_5", q: "JS qaysi yili yaratilgan?", a: ["1991", "1995", "2000", "2005"], correct: 1 },
            { id: "uz_ex_6", q: "JSON qisqartmasi nima?", a: ["JavaScript Object Notation", "Java System Object Network", "JavaScript Output Node", "Java Standard Object Name"], correct: 0 },
            { id: "uz_ex_7", q: "JS-da tenglikni tekshirish (qiymat va tur)?", a: ["=", "==", "===", "!="], correct: 2 },
            { id: "uz_ex_8", q: "Callback nima?", a: ["Xato xabari", "Boshqa funksiyaga argument bo'lgan funksiya", "Massiv turi", "O'zgaruvchi"], correct: 1 },
            { id: "uz_ex_9", q: "JS asosan qayerda ishlaydi?", a: ["Server", "Brauzer", "Chip", "Ramka"], correct: 1 },
            { id: "uz_ex_10", q: "Window obyekti nima?", a: ["Global obyekt", "Local storage", "CSS xossasi", "HTML tegi"], correct: 0 }
        ],
        ui: {
            subtitle: "Darajani tanlang!", easy: "Oson", hard: "Qiyin", expert: "Juda Qiyin", settings: "Sozlamalar", shop: "Magazin",
            daily: "Kunlik Bonus", chooseLang: "Tilni tanlang:", resultBtn: "OK", success: "Ajoyib! 🌟", keepGoing: "Yaxshi! 💪",
            tryAgain: "Yana! 🧐", desc: "Bosqich", coinsEarned: "tanga!", notEnoughCoins: "Tangalar kam!", slogan: "Bilim cho'qqisi",
            countTitle: "Bosqichni tanlang", maxCount: "Hammasi", claimed: "Olingan",
            greeting: "Salom", sound: "Ovoz", vibrate: "Vibratsiya", darkMode: "Tungi rejim", reset: "Tarixni tozalash",
            rating: "Reyting", shop5050: "🌓 50/50", shopTime: "⏰ +10s Vaqt", shopSkip: "⏭ Skip"
        }
    },
    en: {
        easy: [
            { id: "en_e_1", q: "Largest heading in HTML?", a: ["<h6>", "<p>", "<h1>", "<span>"], correct: 2 },
            { id: "en_e_2", q: "CSS text color property?", a: ["background", "color", "font", "style"], correct: 1 },
            { id: "en_e_3", q: "Tag for a link?", a: ["<img>", "<a>", "<link>", "<li>"], correct: 1 },
            { id: "en_e_4", q: "Tag for a line break?", a: ["<lb>", "<break>", "<br>", "<hr>"], correct: 2 },
            { id: "en_e_5", q: "HTML stands for?", a: ["Hyper Text Markup Language", "Home Tool Markup Link", "High Tech Main Lang", "None"], correct: 0 }
        ],
        hard: [{ id: "en_h_1", q: "Python print function?", a: ["input()", "print()", "echo()", "Log()"], correct: 1 }],
        expert: [{ id: "en_ex_1", q: "JS constant?", a: ["var", "let", "const", "def"], correct: 2 }],
        ui: {
            subtitle: "Choose level!", easy: "Easy", hard: "Hard", expert: "Expert", settings: "Settings", shop: "Shop",
            daily: "Daily Bonus", chooseLang: "Select Language:", resultBtn: "OK", success: "Great! 🌟", keepGoing: "Nice! 💪",
            tryAgain: "Again! 🧐", desc: "Stages", coinsEarned: "coins!", notEnoughCoins: "Not enough!", slogan: "Peak of Knowledge",
            countTitle: "Select Stage", maxCount: "All", claimed: "Claimed",
            greeting: "Hello", sound: "Sound", vibrate: "Vibration", darkMode: "Dark Mode", reset: "Reset Progress",
            rating: "Rating", shop5050: "🌓 50/50", shopTime: "⏰ +10s Time", shopSkip: "⏭ Skip"
        }
    },
    ru: {
        easy: [
            { id: "ru_e_1", q: "Самый большой заголовок в HTML?", a: ["<h6>", "<p>", "<h1>", "<span>"], correct: 2 },
            { id: "ru_e_2", q: "Свойство CSS для цвета текста?", a: ["background", "color", "font", "style"], correct: 1 }
        ],
        hard: [], expert: [],
        ui: {
            subtitle: "Выберите уровень!", easy: "Легкий", hard: "Сложный", expert: "Эксперт", settings: "Настройки", shop: "Магазин",
            daily: "Бонус", chooseLang: "Выберите язык:", resultBtn: "OK", success: "Отлично! 🌟", keepGoing: "Хорошо! 💪",
            tryAgain: "Еще раз! 🧐", desc: "Этапов", coinsEarned: "монет!", notEnoughCoins: "Мало монет!", slogan: "Вершина знаний",
            countTitle: "Выберите этап", maxCount: "Все", claimed: "Получено",
            greeting: "Привет", sound: "Звук", vibrate: "Вибрация", darkMode: "Темный режим", reset: "Сбросить историю",
            rating: "Рейтинг", shop5050: "🌓 50/50", shopTime: "⏰ +10с Время", shopSkip: "⏭ Skip"
        }
    }
};

const appState = {
    lang: 'uz', level: '', questions: [], index: 0, score: 0,
    coins: Number(localStorage.getItem('totalCoins')) || 50,
    xp: Number(localStorage.getItem('totalXP')) || 0,
    helps: JSON.parse(localStorage.getItem('helps')) || { '5050': 0, 'skip': 0, 'time': 0 },
    canClick: true, currentStage: 1,
    settings: JSON.parse(localStorage.getItem('appSettings')) || { sound: true, vibrate: true, darkMode: false },
    timer: null, timeLeft: 15,
    bonusTimer: null
};

const gameLogic = {
    init() {
        // Foydalanuvchi ismini tekshirish va boshlang'ich ism berish
        if (!localStorage.getItem('user')) {
            const randomID = Math.floor(1000 + Math.random() * 9000);
            localStorage.setItem('user', 'Player' + randomID);
        }

        const loader = document.getElementById('loader'), bar = document.getElementById('loadProgress');
        let p = 0;
        const int = setInterval(() => {
            p += 10; bar.style.width = p + '%';
            if (p >= 100) {
                clearInterval(int);
                setTimeout(() => { loader.style.opacity = '0'; setTimeout(() => loader.style.visibility = 'hidden', 500); }, 300);
            }
        }, 40);
        this.applyLanguage(localStorage.getItem('appLang') || 'uz');
        const userName = localStorage.getItem('user');
        document.getElementById('userNameInput').value = userName;
        document.getElementById('soundToggle').checked = appState.settings.sound;
        document.getElementById('vibrateToggle').checked = appState.settings.vibrate;
        document.getElementById('darkModeToggle').checked = appState.settings.darkMode;
        this.applyTheme();
        this.updateStats(false); this.updateGreeting(); this.updateDailyBonusUI();
    },
    saveName() { 
        const newName = document.getElementById('userNameInput').value;
        if (!newName.trim()) return uiAction.showToast("Ism bo'sh bo'lishi mumkin emas!");
        localStorage.setItem('user', newName); 
        this.updateGreeting();
        uiAction.showToast("Ism muvaffaqiyatli saqlandi! ✅");
    },
    toggleSetting(type) {
        appState.settings[type] = document.getElementById(type + 'Toggle').checked;
        localStorage.setItem('appSettings', JSON.stringify(appState.settings));
        if (type === 'darkMode') this.applyTheme();
    },
    applyTheme() {
        document.body.classList.toggle('dark-theme', appState.settings.darkMode);
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) metaTheme.setAttribute('content', appState.settings.darkMode ? '#1a1a1a' : '#FF7235');
    },
    changeLanguage(l) {
        const ld = document.getElementById('loader'); ld.style.visibility = 'visible'; ld.style.opacity = '1';
        setTimeout(() => {
            this.applyLanguage(l); localStorage.setItem('appLang', l); uiAction.backToHome(); uiAction.toggleSettings();
            ld.style.opacity = '0'; setTimeout(() => ld.style.visibility = 'hidden', 500);
        }, 800);
    },
    applyLanguage(lang) {
        appState.lang = lang; const ui = testData[lang].ui;
        if (!ui) return;
        if(document.getElementById('appSlogan')) document.getElementById('appSlogan').innerText = ui.slogan;
        document.getElementById('appSubtitle').innerText = ui.subtitle;
        document.getElementById('levelEasyTitle').innerText = ui.easy;
        document.getElementById('levelHardTitle').innerText = ui.hard;
        document.getElementById('levelExpertTitle').innerText = ui.expert;
        
        document.getElementById('levelEasyDesc').innerText = '100 ' + ui.desc;
        document.getElementById('levelHardDesc').innerText = '100 ' + ui.desc;
        document.getElementById('levelExpertDesc').innerText = '100 ' + ui.desc;
        
        document.getElementById('settingsTitle').innerText = ui.settings; document.getElementById('shopTitle').innerText = ui.shop;
        document.getElementById('stageTitle').innerText = ui.countTitle;
        document.getElementById('ratingTitle').innerText = ui.rating;
        
        document.getElementById('soundLabel').innerText = ui.sound;
        document.getElementById('vibrateLabel').innerText = ui.vibrate;
        document.getElementById('darkModeLabel').innerText = ui.darkMode;
        document.getElementById('settingsLangLabel').innerText = ui.chooseLang;
        document.getElementById('resetBtn').innerText = ui.reset;

        document.getElementById('shop5050Label').innerText = ui.shop5050;
        document.getElementById('shopTimeLabel').innerText = ui.shopTime;
        document.getElementById('shopSkipLabel').innerText = ui.shopSkip;

        document.querySelectorAll('.lang-sel').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        this.updateStats(false); this.updateGreeting(); this.updateDailyBonusUI();
    },
    updateStats(animate = true) {
        // Darajani hisoblash (har 500 XP bitta daraja)
        const level = Math.floor(appState.xp / 500) + 1;
        document.getElementById('userLevelText').innerText = 'Lvl ' + level;
        
        document.getElementById('highScoreText').innerText = localStorage.getItem('hs_' + appState.lang) || 0;
        document.getElementById('totalCoinsText').innerText = appState.coins;
        document.getElementById('count5050').innerText = appState.helps['5050'];
        document.getElementById('countSkip').innerText = appState.helps['skip'];
        if(document.getElementById('countTime')) document.getElementById('countTime').innerText = appState.helps['time'];
        if (animate) {
            const el = document.getElementById('totalCoinsText').parentElement;
            el.classList.add('pop-animation'); setTimeout(() => el.classList.remove('pop-animation'), 400);
        }
    },
    updateGreeting() {
        const n = localStorage.getItem('user'), ui = testData[appState.lang].ui;
        document.getElementById('userGreeting').innerText = n ? ui.greeting + ', ' + n + '!' : '';
    },
    updateDailyBonusUI() {
        if (appState.bonusTimer) clearInterval(appState.bonusTimer);
        
        const last = localStorage.getItem('bonus'), today = new Date().toDateString(), ui = testData[appState.lang].ui;
        const btn = document.getElementById('dailyBonusBtn');

        if (last === today) { 
            btn.disabled = true; 
            
            const updateCountdown = () => {
                const now = new Date();
                const nextMidnight = new Date();
                nextMidnight.setHours(24, 0, 0, 0); // Keyingi yarim tunga vaqtni belgilash
                
                const diff = nextMidnight - now;
                if (diff <= 0) {
                    clearInterval(appState.bonusTimer);
                    this.updateDailyBonusUI();
                    return;
                }

                const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
                const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
                const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
                btn.innerText = `🎁 ${h}:${m}:${s}`;
            };

            updateCountdown();
            appState.bonusTimer = setInterval(updateCountdown, 1000);
        } else {
            btn.disabled = false;
            btn.innerText = '🎁 ' + ui.daily;
        }
    },
    claimDailyBonus() {
        appState.coins += 100; localStorage.setItem('totalCoins', appState.coins);
        localStorage.setItem('bonus', new Date().toDateString()); this.updateDailyBonusUI(); this.updateStats();
    },
    buyHelp(type) {
        const prices = { '5050': 100, 'skip': 150, 'time': 50 };
        const price = prices[type];
        if (appState.coins < price) return uiAction.showToast(testData[appState.lang].ui.notEnoughCoins);
        appState.coins -= price; appState.helps[type]++;
        localStorage.setItem('totalCoins', appState.coins);
        localStorage.setItem('helps', JSON.stringify(appState.helps)); this.updateStats();
        uiAction.showToast("Sotib olindi! 🛒");
    },
    openLevelSelection(l) { 
        appState.level = l; 
        uiAction.openStageModal(); 
        this.renderStages();
    },
    renderStages() {
        const grid = document.getElementById('stageGrid');
        grid.innerHTML = '';
        const storageKey = `unlocked_${appState.lang}_${appState.level}`;
        const compKey = `completed_${appState.lang}_${appState.level}`;
        const unlocked = Number(localStorage.getItem(storageKey)) || 3;
        const completed = JSON.parse(localStorage.getItem(compKey) || '[]');
        
        for (let i = 1; i <= 100; i++) {
            const btn = document.createElement('button');
            const isUnlocked = i <= unlocked;
            const isCompleted = completed.includes(i);
            // Oxirgi ochilgan bosqichga maxsus klass beramiz (effekt uchun)
            const isNew = i === unlocked && i > 3;
            btn.className = isUnlocked ? (isCompleted ? 'stage-btn completed' : (isNew ? 'stage-btn new-unlocked' : 'stage-btn')) : 'stage-btn locked';
            btn.innerHTML = i <= unlocked ? i : '🔒';
            if (isUnlocked) btn.onclick = () => gameLogic.startStage(i);
            grid.appendChild(btn);
        }
    },
    startStage(stageNum) {
        appState.currentStage = stageNum;
        const titleEl = document.getElementById('currentStageTitle');
        if (titleEl) titleEl.innerText = "Bosqich " + stageNum;
        
        const pool = testData[appState.lang][appState.level];
        if (!pool || pool.length === 0) return alert("Savollar topilmadi!");

        // Savollarni nusxalash va aralashtirish
        const all = [...pool];
        all.sort(() => Math.random() - 0.5);
        
        // Har bir bosqich uchun 5 ta tasodifiy savol (pool kichik bo'lsa borini oladi)
        appState.questions = all.slice(0, 5);
        
        uiAction.closeStageModal();
        appState.index = 0; appState.score = 0; uiAction.showQuiz(); this.loadQuestion();
    },
    loadQuestion() {
        clearInterval(appState.timer);
        if (appState.index >= appState.questions.length) return this.showResult();
        document.getElementById('progressBar').style.width = (appState.index / appState.questions.length) * 100 + '%';
        document.getElementById('quizProgressCounter').innerText = (appState.index + 1) + ' / ' + appState.questions.length;
        const q = appState.questions[appState.index]; document.getElementById('questionText').innerText = q.q;
        const list = document.getElementById('optionsList'); list.innerHTML = '';
        const labels = ["A", "B", "C", "D"];
        q.a.forEach((a, i) => {
            const b = document.createElement('button'); b.className = 'option-btn slide-in';
            b.style.animationDelay = (i * 0.1) + 's';
            b.innerText = labels[i] + ") " + a;
            b.onclick = () => this.checkAnswer(i); list.appendChild(b);
        });
        document.getElementById('btn5050').style.display = appState.helps['5050'] > 0 ? 'block' : 'none';
        document.getElementById('btnTime').style.display = appState.helps['time'] > 0 ? 'block' : 'none';
        document.getElementById('btnSkip').style.display = appState.helps['skip'] > 0 ? 'block' : 'none';
        appState.canClick = true;
        this.startTimer();
    },
    startTimer() {
        appState.timeLeft = 15;
        const bar = document.getElementById('timerBar');
        if (bar) {
            bar.style.width = '100%';
            bar.classList.remove('critical');
        }
        appState.timer = setInterval(() => {
            appState.timeLeft--;
            if (bar) {
                bar.style.width = (appState.timeLeft / 15) * 100 + '%';
                if (appState.timeLeft <= 5) bar.classList.add('critical');
            }
            if (appState.timeLeft <= 0) { clearInterval(appState.timer); this.checkAnswer(-1); }
        }, 1000);
    },
    checkAnswer(idx) {
        if (!appState.canClick) return; 
        appState.canClick = false; 
        clearInterval(appState.timer);

        const q = appState.questions[appState.index], btns = document.querySelectorAll('.option-btn'), dots = document.querySelectorAll('.status-dot');
        
        if (idx === q.correct) {
            audio.play(800); 
            if (btns[idx]) btns[idx].classList.add('correct'); 
            if (dots[appState.index]) dots[appState.index].classList.add('correct');
            appState.score++; appState.coins += 10; appState.xp += 25;
            localStorage.setItem('totalCoins', appState.coins);
            localStorage.setItem('totalXP', appState.xp); this.updateStats();
            const comp = JSON.parse(localStorage.getItem('comp') || '[]');
            if (!comp.includes(q.id)) comp.push(q.id);
            localStorage.setItem('comp', JSON.stringify(comp));
            setTimeout(() => { appState.index++; this.loadQuestion(); }, 1000);
        } else {
            audio.play(200); 
            if (idx !== -1 && btns[idx]) btns[idx].classList.add('wrong'); 
            if (btns[q.correct]) btns[q.correct].classList.add('correct');
            if (dots[appState.index]) dots[appState.index].classList.add('wrong');
            if (appState.settings.vibrate && navigator.vibrate) navigator.vibrate(200);
            setTimeout(() => { appState.index++; this.loadQuestion(); }, 1500);
        }
    },
    use5050() {
        if (appState.helps['5050'] <= 0) return;
        const q = appState.questions[appState.index], btns = document.querySelectorAll('.option-btn');
        let bad = [0, 1, 2, 3].filter(i => i !== q.correct).sort(() => Math.random() - 0.5).slice(0, 2);
        bad.forEach(i => btns[i].style.visibility = 'hidden');
        appState.helps['5050']--; localStorage.setItem('helps', JSON.stringify(appState.helps));
        this.updateStats(); document.getElementById('btn5050').style.display = 'none';
    },
    useExtraTime() {
        if (appState.helps['time'] <= 0) return;
        appState.timeLeft += 10;
        appState.helps['time']--;
        localStorage.setItem('helps', JSON.stringify(appState.helps));
        this.updateStats();
        if (appState.timeLeft > 5) document.getElementById('timerBar').classList.remove('critical');
    },
    useSkip() {
        if (appState.helps['skip'] <= 0) return;
        appState.helps['skip']--; localStorage.setItem('helps', JSON.stringify(appState.helps));
        this.updateStats(); appState.index++; this.loadQuestion();
    },
    showResult() {
        uiAction.showResult();
        document.getElementById('resultText').innerText = appState.score + ' / ' + appState.questions.length;
        document.getElementById('earnedCoinsDisplay').innerText = '💰 +' + (appState.score * 10);
        const hs = localStorage.getItem('hs_' + appState.lang) || 0;
        if (appState.score > hs) localStorage.setItem('hs_' + appState.lang, appState.score);

        // n + 3 qoidasi
        if (appState.score >= 3) { 
            const compKey = `completed_${appState.lang}_${appState.level}`;
            const completed = JSON.parse(localStorage.getItem(compKey) || '[]');
            if (!completed.includes(appState.currentStage)) {
                completed.push(appState.currentStage);
                localStorage.setItem(compKey, JSON.stringify(completed));
            }

            const key = `unlocked_${appState.lang}_${appState.level}`;
            const currentlyUnlocked = Number(localStorage.getItem(key)) || 3;
            const targetStage = Number(appState.currentStage) + 3;

            if (targetStage > currentlyUnlocked) {
                localStorage.setItem(key, targetStage);
            }
        }
        this.updateStats(false);
    },
    renderRating() {
        const list = document.getElementById('ratingList');
        if (!list) return;
        list.innerHTML = '';

        // Simulyatsiya qilingan reyting ma'lumotlari
        const mockUsers = [
            { name: "MasterCoder", score: 2500 },
            { name: "DevWizard", score: 2100 },
            { name: "AlgoKing", score: 1850 },
            { name: "NoobDev", score: 1200 }
        ];

        // Joriy foydalanuvchini qo'shish
        const currentUser = { 
            name: localStorage.getItem('user') + " (Siz)", 
            score: Number(localStorage.getItem('totalCoins')) || appState.coins 
        };
        mockUsers.push(currentUser);
        mockUsers.sort((a, b) => b.score - a.score);

        mockUsers.forEach((u, i) => {
            const item = document.createElement('div');
            item.className = 'rating-item' + (u.name.includes('(Siz)') ? ' current-user' : '');
            item.innerHTML = `<span>${i + 1}. ${u.name}</span> <span>💰 ${u.score}</span>`;
            list.appendChild(item);
        });
    },
    resetProgress() { if (confirm('Tozalash?')) { localStorage.clear(); location.reload(); } }
};

const uiAction = {
    toggleSettings() { 
        const m = document.getElementById('settingsModal'); 
        const isOpen = m.style.display === 'flex';
        if (!isOpen) {
            // Modal ochilayotganda inputga xotiradagi haqiqiy ismni qayta yuklaymiz
            document.getElementById('userNameInput').value = localStorage.getItem('user') || '';
        }
        m.style.display = isOpen ? 'none' : 'flex'; 
    },
    toggleShop() { const m = document.getElementById('shopModal'); m.style.display = m.style.display === 'flex' ? 'none' : 'flex'; },
    toggleRating() { 
        const m = document.getElementById('ratingModal'); 
        const isOpen = m.style.display === 'flex';
        m.style.display = isOpen ? 'none' : 'flex'; 
        if (!isOpen) gameLogic.renderRating();
    },
    showToast(msg) {
        const t = document.getElementById('toast');
        if (!t) return;
        t.innerText = msg; t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 2500);
    },
    openStageModal() { document.getElementById('stageModal').style.display = 'flex'; },
    closeStageModal() { document.getElementById('stageModal').style.display = 'none'; },
    backToHome() {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'none';
        document.getElementById('homeContainer').style.display = 'block';
    },
    showQuiz() {
        document.getElementById('homeContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        const dots = document.getElementById('statusDots'); dots.innerHTML = '';
        appState.questions.forEach(() => { const d = document.createElement('div'); d.className = 'status-dot'; dots.appendChild(d); });
    },
    showResult() {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('homeContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
        if (appState.score >= 3) uiAction.createConfetti();
        const ui = testData[appState.lang].ui;
        document.getElementById('resultMessage').innerText = appState.score >= 3 ? ui.success : ui.keepGoing;
    },
    showResultOk() {
        uiAction.backToHome();
        gameLogic.renderStages(); 
        uiAction.openStageModal();
    },
    createConfetti() {
        const container = document.getElementById('confettiContainer');
        if (!container) return;
        container.innerHTML = '';
        const colors = ['#FF7235', '#58cc02', '#ff4b4b', '#FF9600', '#ffd700'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 8 + 5) + 'px';
            confetti.style.height = (Math.random() * 8 + 5) + 'px';
            confetti.style.animationDelay = (Math.random() * 2) + 's';
            container.appendChild(confetti);
        }
    }
};

const audio = {
    ctx: null,
    play(f) {
        if (!appState.settings.sound) return;
        try {
            if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = this.ctx.createOscillator(); const g = this.ctx.createGain();
            osc.frequency.value = f; g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
            osc.connect(g); g.connect(this.ctx.destination); osc.start(); osc.stop(this.ctx.currentTime + 0.3);
        } catch (e) { }
    }
};

window.onload = () => gameLogic.init();