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

const storageKeys = {
  completed: "tradelearn-completed-modules",
  quiz: "tradelearn-quiz-stats",
  simulations: "tradelearn-simulation-count",
  journal: "tradelearn-journal"
};

const moduleGrid = document.getElementById("moduleGrid");
const moduleTemplate = document.getElementById("moduleTemplate");
const scenarioSelect = document.getElementById("scenarioSelect");
const runSimulationButton = document.getElementById("runSimulation");
const simResult = document.getElementById("simResult");
const quizArea = document.getElementById("quizArea");
const nextQuestionButton = document.getElementById("nextQuestion");
const saveJournalButton = document.getElementById("saveJournal");
const journalInput = document.getElementById("journalInput");

const completedLessons = document.getElementById("completedLessons");
const quizScore = document.getElementById("quizScore");
const simulationCount = document.getElementById("simulationCount");
const progressFill = document.getElementById("progressFill");

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

function renderModules() {
  const completed = new Set(getCompletedModules());
  moduleGrid.innerHTML = "";

  modules.forEach((module, index) => {
    const fragment = moduleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");
    const level = fragment.querySelector(".module-level");
    const title = fragment.querySelector(".module-title");
    const summary = fragment.querySelector(".module-summary");
    const points = fragment.querySelector(".lesson-points");
    const toggle = fragment.querySelector(".module-toggle");

    level.textContent = module.level;
    title.textContent = module.title;
    summary.textContent = module.summary;
    points.innerHTML = module.points.map((point) => `<p>${point}</p>`).join("");
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

    moduleGrid.appendChild(fragment);
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

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

runSimulationButton.addEventListener("click", runSimulation);
nextQuestionButton.addEventListener("click", nextQuestion);
saveJournalButton.addEventListener("click", saveJournal);

renderModules();
populateScenarios();
renderQuestion();
restoreState();
setupRevealAnimations();
registerServiceWorker();
