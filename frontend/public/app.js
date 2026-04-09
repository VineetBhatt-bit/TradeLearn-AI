const modules = [
  {
    id: "m1",
    level: "Beginner",
    title: "Trading Foundations",
    summary: "Start with the core language of the market so every later lesson makes sense.",
    points: [
      "What trading is and how it differs from investing",
      "Types of markets: stocks, forex, crypto, commodities",
      "Market sessions, liquidity, volatility, and spreads"
    ]
  },
  {
    id: "m2",
    level: "Beginner",
    title: "Charts and Price Action",
    summary: "Read candles, identify trends, and understand what price is trying to tell you.",
    points: [
      "Candlestick anatomy and common candle patterns",
      "Trend, range, breakout, and reversal structures",
      "Support and resistance zones"
    ]
  },
  {
    id: "m3",
    level: "Intermediate",
    title: "Strategy Building",
    summary: "Turn random ideas into repeatable setups with clear entry and exit logic.",
    points: [
      "Trend-following and pullback models",
      "Confluence with indicators and market context",
      "Trade planning before execution"
    ]
  },
  {
    id: "m4",
    level: "Intermediate",
    title: "Risk Management",
    summary: "Learn how experienced traders survive first and grow second.",
    points: [
      "Position sizing and risk-per-trade rules",
      "Reward-to-risk ratios and expectancy",
      "Managing losing streaks and drawdown"
    ]
  },
  {
    id: "m5",
    level: "Advanced",
    title: "Trading Psychology",
    summary: "Build discipline, reduce emotional bias, and create a consistent process.",
    points: [
      "Fear, greed, revenge trading, and hesitation",
      "Pre-trade and post-trade routines",
      "Journaling for pattern recognition"
    ]
  },
  {
    id: "m6",
    level: "Advanced",
    title: "Performance Review",
    summary: "Use data to refine your edge and improve over time.",
    points: [
      "Tracking win rate, average R, and execution quality",
      "Finding setup-specific strengths and weaknesses",
      "Building a personal trading playbook"
    ]
  }
];

const quizQuestions = [
  {
    question: "What is the main purpose of a stop-loss in trading?",
    options: [
      "To lock in guaranteed profits",
      "To cap downside if the trade idea fails",
      "To increase position size automatically"
    ],
    answer: 1,
    explanation: "A stop-loss is a risk tool. It defines where your idea is invalid and helps protect your capital."
  },
  {
    question: "A market moving sideways between clear highs and lows is called:",
    options: ["A breakout trend", "A consolidation range", "A momentum spike"],
    answer: 1,
    explanation: "A range or consolidation happens when price moves within support and resistance without a strong trend."
  },
  {
    question: "Why is position sizing important?",
    options: [
      "It helps align risk with account size and protects consistency",
      "It guarantees a higher win rate",
      "It removes the need for a trading plan"
    ],
    answer: 0,
    explanation: "Position sizing keeps risk proportional and prevents one bad trade from doing major damage."
  }
];

const scenarios = [
  {
    name: "Trend Pullback on a Strong Uptrend",
    winProbability: 0.62,
    rewardRisk: 2.4,
    coaching: "Good trend context. Wait for confirmation instead of chasing green candles."
  },
  {
    name: "Range Breakdown Near Major Support",
    winProbability: 0.37,
    rewardRisk: 1.2,
    coaching: "Risk is elevated here because price is near a reactive level. Patience may be the best trade."
  },
  {
    name: "High-Volatility News Spike",
    winProbability: 0.41,
    rewardRisk: 3.1,
    coaching: "Big reward is possible, but only if your stop placement and timing are disciplined."
  }
];

const tracks = [
  {
    audience: "New to Markets",
    title: "Beginner Blueprint",
    duration: "4 Weeks",
    summary: "Build core trading literacy, chart confidence, and a safe practice routine before you think about advanced setups.",
    milestones: ["Market basics", "Chart reading", "Risk rules", "First simulator journal"]
  },
  {
    audience: "Part-Time Learners",
    title: "Swing Trading Path",
    duration: "6 Weeks",
    summary: "Focus on higher-timeframe setups, patience, trade planning, and risk-managed swing decisions.",
    milestones: ["Daily and 4H structure", "Entries and exits", "Watchlist discipline", "Review cycles"]
  },
  {
    audience: "Fast Execution",
    title: "Scalping Foundations",
    duration: "5 Weeks",
    summary: "Study session timing, momentum, tighter risk, and decision speed without skipping discipline.",
    milestones: ["Session timing", "Momentum cues", "Execution control", "Replay drills"]
  }
];

const watchlistItems = [
  {
    symbol: "BTCUSD",
    label: "Crypto Momentum",
    detail: "Watch for trend continuation after pullbacks. Study volatility compression, breakout confirmation, and emotional discipline during fast candles."
  },
  {
    symbol: "EURUSD",
    label: "Forex Structure",
    detail: "Use this pair to learn support, resistance, and session overlap behavior. Focus on patience and cleaner structure rather than excitement."
  },
  {
    symbol: "AAPL",
    label: "Equity Trend",
    detail: "Great for learning trend channels, earnings-related volatility, and higher timeframe confluence around key zones."
  }
];

const assessmentItems = [
  {
    type: "Level Check",
    title: "Beginner Readiness Test",
    badge: "12 Questions",
    summary: "Confirm your understanding of trading terms, market sessions, position sizing, and basic chart behavior."
  },
  {
    type: "Scenario Drill",
    title: "Risk Manager Challenge",
    badge: "Simulator",
    summary: "Review three trading scenarios, choose a stop and target, and defend your risk model under pressure."
  },
  {
    type: "Milestone",
    title: "Consistency Certificate",
    badge: "Unlockable",
    summary: "Earn a certificate after completing lessons, finishing quizzes, and logging your first five guided practice sessions."
  }
];

const mentorSuggestions = [
  "Explain support and resistance like I'm a beginner.",
  "How should I manage risk on my first trades?",
  "What should I study before trying scalping?"
];

const notificationOptions = [
  { id: "lesson_reminders", label: "Daily lesson reminder", active: true },
  { id: "practice_prompt", label: "Practice lab prompt", active: true },
  { id: "weekly_review", label: "Weekly review summary", active: false }
];

const storageKeys = {
  completed: "tradelearn-completed-modules",
  quiz: "tradelearn-quiz-stats",
  simulations: "tradelearn-simulation-count",
  journal: "tradelearn-journal",
  notifications: "tradelearn-notification-settings"
};

const moduleGrid = document.getElementById("moduleGrid");
const trackGrid = document.getElementById("tracksGrid");
const assessmentGrid = document.getElementById("assessmentGrid");
const scenarioSelect = document.getElementById("scenarioSelect");
const runSimulationButton = document.getElementById("runSimulation");
const simResult = document.getElementById("simResult");
const quizArea = document.getElementById("quizArea");
const nextQuestionButton = document.getElementById("nextQuestion");
const saveJournalButton = document.getElementById("saveJournal");
const journalInput = document.getElementById("journalInput");
const focusPanel = document.getElementById("focusPanel");
const heroSection = document.getElementById("hero");
const heroVisual = document.getElementById("heroVisual");
const heroCopy = document.getElementById("heroCopy");
const marketCard = document.getElementById("marketCard");
const topbar = document.getElementById("topbar");
const mentorPresets = document.getElementById("mentorPresets");
const mentorPrompt = document.getElementById("mentorPrompt");
const askMentorButton = document.getElementById("askMentor");
const mentorResponse = document.getElementById("mentorResponse");
const watchlist = document.getElementById("watchlist");
const watchDetail = document.getElementById("watchDetail");
const notificationList = document.getElementById("notificationList");

const completedLessons = document.getElementById("completedLessons");
const quizScore = document.getElementById("quizScore");
const simulationCount = document.getElementById("simulationCount");
const progressFill = document.getElementById("progressFill");
const currentStreak = document.getElementById("currentStreak");
const readinessState = document.getElementById("readinessState");

let quizIndex = 0;
let quizAnswered = 0;
let quizCorrect = 0;

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCompletedModules() {
  return readJSON(storageKeys.completed, []);
}

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (typeof textContent === "string") {
    element.textContent = textContent;
  }
  return element;
}

function renderModules() {
  const completed = new Set(getCompletedModules());
  moduleGrid.innerHTML = "";

  modules.forEach((module, index) => {
    const card = createElement("article", "module-card glass reveal");
    const top = createElement("div", "module-top");
    const level = createElement("span", "module-level", module.level);
    const toggle = createElement("button", "module-toggle", "Mark Complete");
    const title = createElement("h3", "module-title", module.title);
    const summary = createElement("p", "module-summary", module.summary);
    const points = createElement("div", "lesson-points");

    toggle.type = "button";
    toggle.setAttribute("aria-label", "Mark lesson as complete");
    module.points.forEach((point) => {
      points.appendChild(createElement("p", "", point));
    });

    top.append(level, toggle);
    card.append(top, title, summary, points);
    card.style.transitionDelay = `${index * 80}ms`;

    if (completed.has(module.id)) {
      card.classList.add("complete");
      toggle.textContent = "Completed";
    }

    toggle.addEventListener("click", () => {
      const nextCompleted = new Set(getCompletedModules());
      if (nextCompleted.has(module.id)) {
        nextCompleted.delete(module.id);
      } else {
        nextCompleted.add(module.id);
      }
      writeJSON(storageKeys.completed, [...nextCompleted]);
      renderModules();
      updateDashboard();
    });

    moduleGrid.appendChild(card);
  });
}

function renderTracks() {
  if (!trackGrid) {
    return;
  }

  trackGrid.innerHTML = "";
  tracks.forEach((track, index) => {
    const card = createElement("article", "track-card glass reveal");
    const head = createElement("div", "card-head");
    const headCopy = createElement("div");
    const audience = createElement("p", "track-audience", track.audience);
    const title = createElement("h3", "track-title", track.title);
    const duration = createElement("span", "badge track-duration", track.duration);
    const summary = createElement("p", "track-summary", track.summary);
    const milestones = createElement("div", "track-milestones");

    track.milestones.forEach((item) => {
      milestones.appendChild(createElement("span", "", item));
    });

    headCopy.append(audience, title);
    head.append(headCopy, duration);
    card.append(head, summary, milestones);
    card.style.transitionDelay = `${index * 90}ms`;
    trackGrid.appendChild(card);
  });
}

function renderAssessments() {
  if (!assessmentGrid) {
    return;
  }

  assessmentGrid.innerHTML = "";
  assessmentItems.forEach((item, index) => {
    const card = createElement("article", "assessment-card glass reveal");
    const head = createElement("div", "card-head");
    const headCopy = createElement("div");
    const type = createElement("p", "assessment-type", item.type);
    const title = createElement("h3", "assessment-title", item.title);
    const badge = createElement("span", "badge assessment-badge", item.badge);
    const summary = createElement("p", "assessment-summary", item.summary);
    const button = createElement("button", "button secondary full", "Preview Challenge");

    button.type = "button";
    headCopy.append(type, title);
    head.append(headCopy, badge);
    card.append(head, summary, button);
    card.style.transitionDelay = `${index * 90}ms`;
    assessmentGrid.appendChild(card);
  });
}

function populateScenarios() {
  scenarioSelect.innerHTML = scenarios
    .map((scenario, index) => `<option value="${index}">${scenario.name}</option>`)
    .join("");
}

function runSimulation() {
  const scenario = scenarios[Number(scenarioSelect.value)];
  const accountSize = Number(document.getElementById("accountSize").value);
  const riskPercent = Number(document.getElementById("riskPercent").value);

  if (!scenario || !accountSize || !riskPercent) {
    simResult.innerHTML = "<p>Please enter a valid account size and risk percentage.</p>";
    return;
  }

  const riskAmount = accountSize * (riskPercent / 100);
  const targetAmount = riskAmount * scenario.rewardRisk;
  const expectancy = (scenario.winProbability * targetAmount) - ((1 - scenario.winProbability) * riskAmount);

  const totalRuns = Number(localStorage.getItem(storageKeys.simulations) || "0") + 1;
  localStorage.setItem(storageKeys.simulations, String(totalRuns));

  simResult.innerHTML = `
    <h3>${scenario.name}</h3>
    <p><strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}</p>
    <p><strong>Potential Target:</strong> $${targetAmount.toFixed(2)}</p>
    <p><strong>Expected Value:</strong> $${expectancy.toFixed(2)}</p>
    <p><strong>Coach Note:</strong> ${scenario.coaching}</p>
  `;

  updateDashboard();
}

function renderQuestion() {
  const current = quizQuestions[quizIndex % quizQuestions.length];
  quizArea.dataset.locked = "false";
  quizArea.innerHTML = `
    <p class="eyebrow">Question ${quizIndex + 1}</p>
    <h3>${current.question}</h3>
    ${current.options
      .map(
        (option, index) => `
          <button class="quiz-option" data-index="${index}" type="button">${option}</button>
        `
      )
      .join("")}
    <p id="quizFeedback" class="muted">Choose the best answer.</p>
  `;

  quizArea.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button, current));
  });
}

function handleAnswer(button, current) {
  if (button.parentElement?.dataset.locked === "true") {
    return;
  }

  button.parentElement.dataset.locked = "true";
  const selectedIndex = Number(button.dataset.index);
  const options = quizArea.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("quizFeedback");

  quizAnswered += 1;

  options.forEach((option, index) => {
    if (index === current.answer) {
      option.classList.add("correct");
    }
  });

  if (selectedIndex === current.answer) {
    quizCorrect += 1;
    feedback.textContent = current.explanation;
  } else {
    button.classList.add("incorrect");
    feedback.textContent = `${current.explanation} Review this concept once more before moving on.`;
  }

  writeJSON(storageKeys.quiz, { answered: quizAnswered, correct: quizCorrect });
  updateDashboard();
}

function nextQuestion() {
  quizArea.dataset.locked = "false";
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  renderQuestion();
}

function updateDashboard() {
  const completed = getCompletedModules().length;
  const quizStats = readJSON(storageKeys.quiz, { answered: 0, correct: 0 });
  const simRuns = Number(localStorage.getItem(storageKeys.simulations) || "0");
  const moduleProgress = (completed / modules.length) * 60;
  const quizProgress = quizStats.answered ? (quizStats.correct / quizStats.answered) * 25 : 0;
  const simProgress = Math.min(simRuns, 5) * 3;
  const overall = Math.min(100, moduleProgress + quizProgress + simProgress);

  completedLessons.textContent = String(completed);
  quizScore.textContent = `${quizStats.answered ? Math.round((quizStats.correct / quizStats.answered) * 100) : 0}%`;
  simulationCount.textContent = String(simRuns);
  progressFill.style.width = `${overall}%`;

  if (currentStreak) {
    currentStreak.textContent = `${Math.max(3, completed + Math.min(simRuns, 4))} days`;
  }

  if (readinessState) {
    readinessState.textContent = overall >= 75 ? "Advanced" : overall >= 45 ? "Developing" : "Building";
  }
}

function restoreState() {
  const quizStats = readJSON(storageKeys.quiz, { answered: 0, correct: 0 });
  quizAnswered = quizStats.answered;
  quizCorrect = quizStats.correct;
  journalInput.value = localStorage.getItem(storageKeys.journal) || "";
  updateDashboard();
}

function saveJournal() {
  localStorage.setItem(storageKeys.journal, journalInput.value.trim());
  saveJournalButton.textContent = "Saved";
  window.setTimeout(() => {
    saveJournalButton.textContent = "Save Journal";
  }, 1200);
}

function getMentorReply(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes("support") || lowerPrompt.includes("resistance")) {
    return {
      title: "Support and Resistance",
      body: "Support is an area where price has historically found buyers, while resistance is where sellers often step in. Think of them as reaction zones, not exact lines. Your job is to watch how price behaves there instead of assuming it must reverse.",
      next: "Next lesson: Charts and Price Action"
    };
  }

  if (lowerPrompt.includes("risk")) {
    return {
      title: "Risk Management",
      body: "A beginner-friendly rule is to risk only 1% of your account on a single idea. Decide your stop-loss first, then size the trade so a loss stays small and repeatable. That protects you while you learn.",
      next: "Next lesson: Risk Management"
    };
  }

  if (lowerPrompt.includes("scalp")) {
    return {
      title: "Scalping Preparation",
      body: "Before trying scalping, learn session timing, execution discipline, and fast stop placement. Scalping rewards preparation more than speed, so study clean setups and avoid trading every small move.",
      next: "Recommended track: Scalping Foundations"
    };
  }

  return {
    title: "Trading Study Coach",
    body: "Break the topic into three parts: what it is, why it matters, and how to practice it safely. Learn the idea in the academy, test it in the simulator, then write one insight in your journal so the lesson becomes a habit.",
    next: "Recommended next step: complete one lesson and one simulator run"
  };
}

function renderMentorPresets() {
  if (!mentorPresets) {
    return;
  }

  mentorPresets.innerHTML = mentorSuggestions
    .map((suggestion, index) => `<button class="mentor-chip" data-index="${index}" type="button">${suggestion}</button>`)
    .join("");

  mentorPresets.querySelectorAll(".mentor-chip").forEach((button) => {
    button.addEventListener("click", () => {
      mentorPrompt.value = mentorSuggestions[Number(button.dataset.index)];
    });
  });
}

function askMentor() {
  if (!mentorPrompt || !mentorResponse) {
    return;
  }

  const prompt = mentorPrompt.value.trim();
  if (!prompt) {
    mentorResponse.innerHTML = "<p>Please ask a question so your mentor can guide you.</p>";
    return;
  }

  const reply = getMentorReply(prompt);
  mentorResponse.innerHTML = `
    <h3>${reply.title}</h3>
    <p>${reply.body}</p>
    <p><strong>${reply.next}</strong></p>
  `;
}

function renderWatchlist() {
  if (!watchlist || !watchDetail) {
    return;
  }

  watchlist.innerHTML = watchlistItems
    .map(
      (item, index) => `
        <button class="watch-item" data-index="${index}" type="button">
          <strong>${item.symbol}</strong>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  const updateSelected = (index) => {
    const item = watchlistItems[index];
    watchlist.querySelectorAll(".watch-item").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
    watchDetail.innerHTML = `
      <h3>${item.symbol} Study Focus</h3>
      <p>${item.detail}</p>
      <p><strong>Observe:</strong> structure, volatility, confirmation, and your decision process.</p>
    `;
  };

  watchlist.querySelectorAll(".watch-item").forEach((button) => {
    button.addEventListener("click", () => updateSelected(Number(button.dataset.index)));
  });

  updateSelected(0);
}

function renderNotifications() {
  if (!notificationList) {
    return;
  }

  const stored = readJSON(storageKeys.notifications, notificationOptions);
  notificationList.innerHTML = stored
    .map(
      (item, index) => `
        <div class="notification-item">
          <span>${item.label}</span>
          <button class="toggle-pill ${item.active ? "active" : ""}" data-index="${index}" type="button">
            ${item.active ? "Enabled" : "Disabled"}
          </button>
        </div>
      `
    )
    .join("");

  notificationList.querySelectorAll(".toggle-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const settings = readJSON(storageKeys.notifications, notificationOptions);
      const index = Number(button.dataset.index);
      settings[index].active = !settings[index].active;
      writeJSON(storageKeys.notifications, settings);
      renderNotifications();
    });
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupHeroEffects() {
  if (!focusPanel || !heroSection || !heroVisual) {
    return;
  }

  let ticking = false;

  const syncHeroMotion = () => {
    const heroRect = heroSection.getBoundingClientRect();
    const heroHeight = Math.max(heroRect.height, 1);
    const progress = Math.min(Math.max(-heroRect.top / heroHeight, 0), 1);
    const clampedProgress = window.innerWidth <= 760 ? 0 : progress;

    focusPanel.classList.toggle("is-active", clampedProgress < 0.32);
    focusPanel.classList.toggle("is-dimming", clampedProgress >= 0.32);

    if (topbar) {
      topbar.classList.toggle("compact", window.scrollY > 24);
    }

    if (heroVisual) {
      heroVisual.style.transform = `translate3d(0, ${clampedProgress * -26}px, 0)`;
      heroVisual.style.opacity = String(1 - clampedProgress * 0.08);
    }

    if (heroCopy) {
      const copyY = clampedProgress * -14;
      const copyScale = 1 - clampedProgress * 0.025;
      heroCopy.style.transform = `translate3d(0, ${copyY}px, 0) scale(${copyScale})`;
      heroCopy.style.opacity = String(1 - clampedProgress * 0.18);
    }

    if (marketCard) {
      const rotate = clampedProgress * -5;
      const lift = clampedProgress * -30;
      marketCard.style.transform = `translate3d(0, ${lift}px, 0) rotateX(${rotate}deg) scale(${1 - clampedProgress * 0.035})`;
      marketCard.style.opacity = String(1 - clampedProgress * 0.14);
    }
  };

  const requestSync = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(() => {
      syncHeroMotion();
      ticking = false;
    });
  };

  syncHeroMotion();
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
}

function setupSectionDepth() {
  const panels = document.querySelectorAll(".path-card, .module-card, .simulator, .quiz-card, .dashboard-panel, .stat-card");

  if (!panels.length) {
    return;
  }

  let ticking = false;

  const syncDepth = () => {
    const viewportHeight = window.innerHeight || 1;

    panels.forEach((panel) => {
      if (window.innerWidth <= 760) {
        panel.style.transform = "";
        return;
      }

      const rect = panel.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(viewportHeight / 2 - center);
      const normalized = Math.min(distance / viewportHeight, 1);
      const lift = (1 - normalized) * -8;
      const scale = 0.985 + (1 - normalized) * 0.02;

      panel.style.transform = `translate3d(0, ${lift}px, 0) scale(${scale})`;
    });
  };

  const requestSync = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(() => {
      syncDepth();
      ticking = false;
    });
  };

  syncDepth();
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

runSimulationButton.addEventListener("click", runSimulation);
nextQuestionButton.addEventListener("click", nextQuestion);
saveJournalButton.addEventListener("click", saveJournal);
if (askMentorButton) {
  askMentorButton.addEventListener("click", askMentor);
}

renderModules();
renderTracks();
renderAssessments();
populateScenarios();
renderQuestion();
restoreState();
renderMentorPresets();
renderWatchlist();
renderNotifications();
setupRevealAnimations();
setupHeroEffects();
setupSectionDepth();
registerServiceWorker();
