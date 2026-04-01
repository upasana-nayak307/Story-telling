const stories = {
    start: {
    bg: "radial-gradient(ellipse at 30% 20%,#2a1a4e 0%,#1A1135 50%,#0d0a1a 100%)",
    isHome: true
    },
    scene1: {
    text: "You awaken in a forest veiled in mist. Ancient trees tower above, their branches intertwined like cathedral arches. A faint luminescence pulses from somewhere deep within the woods. Two paths diverge before you—one marked by blue-glowing mushrooms, the other by a trail of golden leaves.",
    bg: "radial-gradient(ellipse at 20% 40%,#1a2a1a 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Follow the glowing mushrooms", next: "scene2a" },
        { text: "Walk the golden leaf trail", next: "scene2b" },
        { text: "Stay and listen to the forest", next: "scene2c" }
    ]
    },
    scene2a: {
    text: "The mushrooms pulse brighter as you approach, casting an ethereal blue glow across the underbrush. You arrive at a crystalline pool where the water reflects not the sky above, but a vast star field—a window into another realm. A spectral figure rises from the surface, extending a translucent hand toward you.",
    bg: "radial-gradient(ellipse at 50% 60%,#0a2a3a 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Take the spectral hand", next: "scene3a" },
        { text: "Speak to the figure first", next: "scene3b" }
    ]
    },
    scene2b: {
    text: "Golden leaves crunch softly beneath your feet. The trail winds upward through ancient oaks until you reach a clearing. There, bathed in amber moonlight, stands a stone archway covered in runes that shift and dance. Beyond the arch, you glimpse a vast, impossible library—shelves stretching into infinity.",
    bg: "radial-gradient(ellipse at 70% 30%,#2a2010 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Step through the archway", next: "scene3c" },
        { text: "Study the runes carefully", next: "scene3d" }
    ]
    },
    scene2c: {
    text: "You close your eyes and listen. The forest speaks—not in words, but in feelings. The wind carries fragments of memory: a child's laughter, a distant bell, the scent of rain on warm stone. Slowly, the ground beneath you begins to glow, revealing an ancient symbol. You are standing at the heart of the forest.",
    bg: "radial-gradient(ellipse at 50% 50%,#1a1a2e 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Embrace the forest's memory", next: "scene3e" },
        { text: "Trace the symbol with your hand", next: "scene3f" }
    ]
    },
    scene3a: {
    text: "As your fingers meet the spectral hand, the world dissolves into light. You are pulled gently beneath the surface into a realm of living constellations. Stars wheel around you, each one a story, a life, a choice once made. The figure speaks: \"You carry a shadow. Would you like to see its shape?\" The stars pause, waiting.",
    bg: "radial-gradient(ellipse at 50% 50%,#0a0a2e 0%,#0d1035 60%,#000010 100%)",
    choices: [
        { text: "Yes—show me my shadow", next: "ending_truth" },
        { text: "No—I choose to move forward", next: "ending_courage" }
    ]
    },
    scene3b: {
    text: "\"I am the Keeper of Reflections,\" the figure whispers, its voice like wind chimes. \"This pool shows not what is, but what could be. Every soul who finds this place carries a question they're afraid to ask.\" The water ripples, and you see your own face—but older, wiser, marked by a journey you haven't yet taken.",
    bg: "radial-gradient(ellipse at 40% 50%,#0a1a2e 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Ask your deepest question", next: "ending_wisdom" },
        { text: "Thank the Keeper and leave", next: "ending_peace" }
    ]
    },
    scene3c: {
    text: "You step through and the silence is absolute. The library is alive—books float gently, their pages turning of their own accord. A voice echoes from everywhere and nowhere: \"Each book contains a life that was never lived. You may read one, and in doing so, live it. But you must leave your own story behind.\"",
    bg: "radial-gradient(ellipse at 50% 40%,#1a1010 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Choose a book and read", next: "ending_dreams" },
        { text: "Write your own book instead", next: "ending_creation" }
    ]
    },
    scene3d: {
    text: "The runes tell an ancient story—of a world that existed before memory, where choices were not made but grown, like seeds in soil. As you trace the final symbol, the archway transforms. Instead of the library, you now see a garden of impossible flowers, each one a different color of emotion. A single black rose stands at the center.",
    bg: "radial-gradient(ellipse at 60% 50%,#1e1a2e 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Pick the black rose", next: "ending_mystery" },
        { text: "Sit among the flowers", next: "ending_peace" }
    ]
    },
    scene3e: {
    text: "The forest's memories flow into you like a river of light. You see centuries pass—civilizations rise and fall, seasons cycle endlessly, and through it all, this forest stands witness. You understand now: you are not separate from this place. You never were. The boundaries between you and the ancient trees dissolve into golden light.",
    bg: "radial-gradient(ellipse at 50% 50%,#1a2a1a 0%,#0d1a0d 50%,#050a05 100%)",
    choices: [
        { text: "Become one with the forest", next: "ending_eternity" },
        { text: "Carry its wisdom home", next: "ending_wisdom" }
    ]
    },
    scene3f: {
    text: "As your finger completes the symbol, a doorway opens in the air itself—not to another place, but to another time. You see yourself at a crossroads you remember: the moment that defined everything. But now you see what you couldn't then—all the paths at once, spreading like roots through possibility.",
    bg: "radial-gradient(ellipse at 50% 60%,#2a1a2e 0%,#1A1135 50%,#0d0a1a 100%)",
    choices: [
        { text: "Choose differently this time", next: "ending_change" },
        { text: "Accept the path you took", next: "ending_peace" }
    ]
    },
    ending_truth: {
    text: "Your shadow takes shape—not dark, but shimmering with every doubt, every fear, every unspoken hope. It is beautiful in its honesty. \"This is your strength,\" the figure says. \"Those who face their shadow walk in the truest light.\" The stars ignite around you, and you rise—not as who you were, but as who you've always been.",
    bg: "radial-gradient(ellipse at 50% 50%,#1a1040 0%,#2a1a5e 40%,#0d0a2a 100%)",
    ending: true, title: "The Unveiled Self"
    },
    ending_courage: {
    text: "\"Then walk boldly,\" the figure says, smiling as it fades. The constellation path solidifies beneath your feet, becoming a bridge of light that stretches toward the horizon. With each step, a star flickers to life behind you—a trail for others who will find this place. You don't look back. The path ahead glows brighter with every step.",
    bg: "radial-gradient(ellipse at 50% 30%,#0a1a3e 0%,#1a2a5e 40%,#0d0a2a 100%)",
    ending: true, title: "The Pathfinder"
    },
    ending_wisdom: {
    text: "The answer comes not in words but in feeling—a deep, quiet knowing that settles into your bones. The question you carried was never about finding something lost. It was about understanding that nothing was ever missing. The pool stills, reflecting your face now at peace. The forest hums its ancient approval.",
    bg: "radial-gradient(ellipse at 40% 40%,#1a2020 0%,#1A1135 50%,#0d0a1a 100%)",
    ending: true, title: "The Seeker's Rest"
    },
    ending_peace: {
    text: "A warmth spreads through you—gentle, unhurried, complete. The shadows soften, the glow steadies, and the world feels, for the first time, exactly as it should. You sit in this moment, needing nothing. Wanting nothing. The story doesn't end here—it simply becomes still, like a river reaching the sea.",
    bg: "radial-gradient(ellipse at 50% 50%,#1a1a25 0%,#1A1135 50%,#0d0a1a 100%)",
    ending: true, title: "The Still Waters"
    },
    ending_dreams: {
    text: "You open the book and the words lift from the page, wrapping around you like silk. You become someone else—a cartographer of imaginary lands, a keeper of forgotten songs, a traveler between heartbeats. The life is vivid, full, extraordinary. And somewhere in its pages, a character sits in a library, reaching for a book that tells your story.",
    bg: "radial-gradient(ellipse at 60% 40%,#2a1020 0%,#1A1135 50%,#0d0a1a 100%)",
    ending: true, title: "The Infinite Reader"
    },
    ending_creation: {
    text: "You find a blank book and a pen that glows with inner fire. As you write, the words become real—the library reshapes around your story, new shelves growing from your sentences, new worlds blooming from your paragraphs. The voice whispers in awe: \"No one has ever done this before.\" But you know that isn't true. Every storyteller creates their own universe.",
    bg: "radial-gradient(ellipse at 50% 50%,#2a1a10 0%,#1A1135 50%,#0d0a1a 100%)",
    ending: true, title: "The Author of Worlds"
    },
    ending_mystery: {
    text: "The black rose is cold to the touch, but as you hold it, color blooms from its center outward—deep violet, then crimson, then a gold so bright it hurts to look at. The garden whispers: \"Some mysteries are not meant to be solved—only held.\" The rose pulses once, like a heartbeat, and you understand: the mystery is the gift.",
    bg: "radial-gradient(ellipse at 50% 50%,#1a0a2a 0%,#2a1050 40%,#0d0a1a 100%)",
    ending: true, title: "The Black Rose"
    },
    ending_eternity: {
    text: "Your form dissolves—not into nothing, but into everything. You become the rustle of leaves, the creak of ancient bark, the cool breath of morning fog. Time ceases to matter. You watch centuries pass with quiet joy, sheltering travelers, whispering guidance to those who listen. You are the forest now, and the forest remembers everything.",
    bg: "radial-gradient(ellipse at 50% 50%,#0a1a0a 0%,#0d1a0d 50%,#020a02 100%)",
    ending: true, title: "The Eternal Grove"
    },
    ending_change: {
    text: "The world fractures and reforms. The new path unfolds differently—new faces, new places, new light. But as the vision settles, you realize the destination is strangely familiar. Different roads, same horizon. You smile, understanding at last: it was never about the choice. It was about the choosing.",
    bg: "radial-gradient(ellipse at 50% 50%,#2a1a2e 0%,#1A1135 50%,#0d0a1a 100%)",
    ending: true, title: "The Eternal Crossroads"
    }
};

const sceneOrder = ['start','scene1','scene2a','scene2b','scene2c','scene3a','scene3b','scene3c','scene3d','scene3e','scene3f'];
let currentScene = 'start';
let visitedScenes = new Set();

const defaultConfig = {
    story_title: "The Shadow Path",
    story_subtitle: "Your choices shape the journey.",
    start_button_text: "Begin Your Journey",
    background_color: "#1A1135",
    surface_color: "#6ECBF5",
    text_color: "#e0d8f0",
    primary_action_color: "#F4D483",
    secondary_action_color: "#8b5cf6",
    font_family: "Cinzel Decorative",
    font_size: 16
};

function createStars() {
    const c = document.getElementById('stars');
    c.innerHTML = '';
    for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${2+Math.random()*3}s;--delay:${Math.random()*4}s;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px`;
    c.appendChild(s);
    }
}

function renderProgress() {
    const p = document.getElementById('progress');
    const depth = currentScene === 'start' ? 0 : currentScene.startsWith('scene1') ? 1 : currentScene.startsWith('scene2') ? 2 : currentScene.startsWith('scene3') ? 3 : 4;
    p.innerHTML = '';
    for (let i = 0; i < 5; i++) {
    const pip = document.createElement('div');
    pip.className = 'progress-pip' + (i === depth ? ' active' : i < depth ? ' visited' : '');
    p.appendChild(pip);
    }
}

function goToScene(id) {
    const area = document.getElementById('content-area');
    area.style.opacity = '0';
    setTimeout(() => {
    currentScene = id;
    visitedScenes.add(id);
    renderScene();
    area.style.opacity = '1';
    }, 500);
}

function renderScene() {
    const scene = stories[currentScene];
    const area = document.getElementById('content-area');
    const bg = document.getElementById('scene-bg');
    const restart = document.getElementById('restart-btn');
    const progress = document.getElementById('progress');
    const cfg = window.elementSdk ? window.elementSdk.config : defaultConfig;
    const font = cfg.font_family || defaultConfig.font_family;
    const baseSize = cfg.font_size || defaultConfig.font_size;
    const textColor = cfg.text_color || defaultConfig.text_color;
    const actionColor = cfg.primary_action_color || defaultConfig.primary_action_color;
    const surfaceColor = cfg.surface_color || defaultConfig.surface_color;

    bg.style.background = scene.bg;

    if (scene.isHome) {
    restart.classList.add('hidden');
    progress.classList.add('hidden');
    const title = cfg.story_title || defaultConfig.story_title;
    const subtitle = cfg.story_subtitle || defaultConfig.story_subtitle;
    const btnText = cfg.start_button_text || defaultConfig.start_button_text;
    area.innerHTML = `
        <div class="fade-in" style="animation:float 4s ease-in-out infinite">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin:0 auto 24px">
            <circle cx="40" cy="40" r="35" stroke="${surfaceColor}" stroke-width="1.5" opacity="0.4"/>
            <circle cx="40" cy="40" r="25" stroke="${actionColor}" stroke-width="1" opacity="0.6"/>
            <path d="M40 20 L44 35 L55 28 L47 38 L60 40 L47 42 L55 52 L44 45 L40 60 L36 45 L25 52 L33 42 L20 40 L33 38 L25 28 L36 35 Z" fill="${actionColor}" opacity="0.8"/>
        </svg>
        </div>
        <h1 class="gold-shimmer fade-in-delay-1" style="font-family:'${font}',serif;font-size:${baseSize*2.5}px;font-weight:900;line-height:1.2;margin-bottom:16px">${title}</h1>
        <p class="fade-in-delay-2" style="font-size:${baseSize*1.2}px;color:${surfaceColor};margin-bottom:40px;opacity:0.8;font-style:italic">${subtitle}</p>
        <button onclick="goToScene('scene1')" class="choice-btn fade-in-delay-3" style="font-family:'${font}',serif;font-size:${baseSize*1.1}px;color:${actionColor};padding:16px 48px;border-radius:50px;cursor:pointer;letter-spacing:2px">
        ${btnText}
        </button>
    `;
    } else if (scene.ending) {
    restart.classList.remove('hidden');
    progress.classList.remove('hidden');
    renderProgress();
    area.innerHTML = `
        <div class="fade-in" style="margin-bottom:20px">
        <span style="font-family:'${font}',serif;font-size:${baseSize*0.75}px;text-transform:uppercase;letter-spacing:4px;color:${actionColor};opacity:0.7">Journey's End</span>
        </div>
        <h2 class="gold-shimmer fade-in-delay-1" style="font-family:'${font}',serif;font-size:${baseSize*2}px;font-weight:700;margin-bottom:28px">${scene.title}</h2>
        <div class="fade-in-delay-2" style="background:rgba(26,17,53,0.7);backdrop-filter:blur(20px);border:1px solid rgba(110,203,245,0.15);border-radius:16px;padding:32px;margin-bottom:32px;max-width:600px">
        <p class="story-text" style="font-size:${baseSize*1.15}px;color:${textColor}">${scene.text}</p>
        </div>
        <button onclick="goToScene('start')" class="choice-btn fade-in-delay-3" style="font-family:'${font}',serif;font-size:${baseSize}px;color:${actionColor};padding:14px 40px;border-radius:50px;cursor:pointer;letter-spacing:1px">
        <span style="display:flex;align-items:center;gap:8px;justify-content:center"><i data-lucide="rotate-ccw" style="width:16px;height:16px"></i> Begin Again</span>
        </button>
    `;
    } else {
    restart.classList.remove('hidden');
    progress.classList.remove('hidden');
    renderProgress();
    let choicesHTML = scene.choices.map((c, i) => `
        <button onclick="goToScene('${c.next}')" class="choice-btn fade-in-delay-${i+2}" style="font-family:'${font}',serif;font-size:${baseSize}px;color:${textColor};padding:16px 28px;border-radius:12px;cursor:pointer;text-align:left;width:100%;display:flex;align-items:center;gap:12px">
        <span style="color:${actionColor};font-size:${baseSize*0.8}px;opacity:0.7;flex-shrink:0">${String.fromCharCode(9670)}</span>
        ${c.text}
        </button>
    `).join('');

    area.innerHTML = `
        <div class="fade-in" style="background:rgba(26,17,53,0.7);backdrop-filter:blur(20px);border:1px solid rgba(110,203,245,0.1);border-radius:20px;padding:36px;margin-bottom:28px;max-width:600px">
        <p class="story-text" style="font-size:${baseSize*1.15}px;color:${textColor}">${scene.text}</p>
        </div>
        <div class="flex flex-col gap-3 w-full" style="max-width:600px">
        ${choicesHTML}
        </div>
    `;
    }
    lucide.createIcons();
}
createStars();
renderScene();