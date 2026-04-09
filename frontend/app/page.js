export default function HomePage() {
  return (
    <div className="app-shell">
      <header className="topbar glass" id="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark"></span>
          <span>
            <strong>TradeLearn AI</strong>
            <small>Learn. Test. Trade with confidence.</small>
          </span>
        </a>
        <nav className="topnav">
          <a href="#roadmap">Roadmap</a>
          <a href="#academy">Academy</a>
          <a href="#tracks">Tracks</a>
          <a href="#practice">Practice</a>
          <a href="#mentor">Mentor</a>
          <a href="#dashboard">Progress</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy reveal" id="heroCopy">
            <p className="eyebrow">Beginner to Advanced Trading Mastery</p>
            <h1>Build market confidence with lessons, live-style practice, and a learner-first vibe.</h1>
            <p className="hero-text">
              A creative learning platform for trading basics, chart reading, psychology, risk management, and strategy
              building. Learn in steps, test yourself with quizzes, and apply your knowledge in a realistic paper trading
              simulator.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#academy">
                Start Learning
              </a>
              <a className="button secondary" href="#practice">
                Try the Simulator
              </a>
            </div>
            <div className="hero-stats">
              <article className="stat-card glass">
                <span>30+</span>
                <p>Guided lessons across 3 experience levels</p>
              </article>
              <article className="stat-card glass">
                <span>12</span>
                <p>Interactive checkpoints and challenge quizzes</p>
              </article>
              <article className="stat-card glass">
                <span>∞</span>
                <p>Practice sessions with zero real-money risk</p>
              </article>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" id="heroVisual">
            <div className="hero-orb hero-orb-one"></div>
            <div className="hero-orb hero-orb-two"></div>
            <div className="market-card glass" id="marketCard">
              <div className="market-header">
                <div>
                  <p>Learning Pulse</p>
                  <strong>Weekly Growth</strong>
                </div>
                <span className="badge">Adaptive</span>
              </div>
              <div className="candles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="market-footer">
                <div>
                  <small>Risk Control</small>
                  <strong>+24%</strong>
                </div>
                <div>
                  <small>Discipline Score</small>
                  <strong>88/100</strong>
                </div>
              </div>
            </div>

            <div className="mini-panel glass delay-float" id="focusPanel">
              <p>Today’s Focus</p>
              <strong>Support &amp; Resistance</strong>
              <small>Learn how price reacts near key levels and test it in the simulator.</small>
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="section-heading reveal">
            <p className="eyebrow">Your Learning Path</p>
            <h2>A roadmap that grows with you from your first trade idea to advanced execution.</h2>
          </div>
          <div className="roadmap-grid">
            <article className="path-card glass reveal">
              <span className="path-step">01</span>
              <h3>Foundation</h3>
              <p>Understand what trading is, how markets work, and which instruments fit your style.</p>
              <ul>
                <li>Market structure and order flow basics</li>
                <li>Stocks, forex, crypto, and indices explained</li>
                <li>Terminology, brokers, and chart setup</li>
              </ul>
            </article>
            <article className="path-card glass reveal delay-1">
              <span className="path-step">02</span>
              <h3>Execution</h3>
              <p>Move from theory into chart reading, setups, entries, exits, and basic strategies.</p>
              <ul>
                <li>Candlestick patterns and trend recognition</li>
                <li>Support, resistance, and momentum</li>
                <li>Paper trading and session review habits</li>
              </ul>
            </article>
            <article className="path-card glass reveal delay-2">
              <span className="path-step">03</span>
              <h3>Mastery</h3>
              <p>Develop systems, risk frameworks, and trading psychology for more advanced growth.</p>
              <ul>
                <li>Position sizing and drawdown control</li>
                <li>Strategy confluence and journaling</li>
                <li>Performance analysis and mindset loops</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section academy" id="academy">
          <div className="section-heading reveal">
            <p className="eyebrow">Academy</p>
            <h2>Choose a module, learn the concept, then lock it in with practice.</h2>
          </div>
          <div className="module-grid" id="moduleGrid"></div>
        </section>

        <section className="section" id="tracks">
          <div className="section-heading reveal">
            <p className="eyebrow">Learning Tracks</p>
            <h2>Follow a path built for your trading style, time horizon, and learning goals.</h2>
          </div>
          <div className="tracks-grid" id="tracksGrid"></div>
        </section>

        <section className="section practice" id="practice">
          <div className="section-heading reveal">
            <p className="eyebrow">Practice Lab</p>
            <h2>Test your thinking before risking capital.</h2>
          </div>
          <div className="practice-layout">
            <article className="simulator glass reveal">
              <div className="card-head">
                <div>
                  <p>Paper Trading Drill</p>
                  <h3>Scenario Simulator</h3>
                </div>
                <span className="badge">No Risk</span>
              </div>
              <p className="muted">
                Pick a market context, define your risk, and see if your decision-making stays disciplined.
              </p>
              <div className="sim-controls">
                <label>
                  Scenario
                  <select id="scenarioSelect"></select>
                </label>
                <label>
                  Account Size
                  <input id="accountSize" type="number" min="1000" step="500" defaultValue="10000" />
                </label>
                <label>
                  Risk Per Trade %
                  <input id="riskPercent" type="number" min="0.25" max="5" step="0.25" defaultValue="1" />
                </label>
              </div>
              <button className="button primary full" id="runSimulation">
                Run Simulation
              </button>
              <div className="result-card" id="simResult">
                <p>Simulation results will appear here with position sizing, reward/risk, and coaching guidance.</p>
              </div>
            </article>

            <article className="quiz-card glass reveal delay-1">
              <div className="card-head">
                <div>
                  <p>Checkpoint Quiz</p>
                  <h3>Concept Review</h3>
                </div>
                <span className="badge warm">Focus Mode</span>
              </div>
              <div id="quizArea" className="quiz-area"></div>
              <button className="button secondary full" id="nextQuestion">
                Next Question
              </button>
            </article>
          </div>
        </section>

        <section className="section" id="mentor">
          <div className="section-heading reveal">
            <p className="eyebrow">AI Mentor</p>
            <h2>Ask beginner questions, get guided explanations, and receive your next learning step.</h2>
          </div>
          <div className="insight-layout">
            <article className="dashboard-panel glass reveal">
              <div className="card-head">
                <div>
                  <p>Study Assistant</p>
                  <h3>Mentor Chat</h3>
                </div>
                <span className="badge">Beta</span>
              </div>
              <div className="mentor-presets" id="mentorPresets"></div>
              <label className="mentor-input">
                Ask anything about trading:
                <textarea
                  id="mentorPrompt"
                  rows="4"
                  placeholder="Example: Explain support and resistance like I'm a beginner."
                ></textarea>
              </label>
              <button className="button primary full" id="askMentor">
                Ask Mentor
              </button>
              <div className="result-card mentor-response" id="mentorResponse">
                <p>Your mentor answer will appear here with a short explanation and a recommended next lesson.</p>
              </div>
            </article>

            <article className="dashboard-panel glass reveal delay-1">
              <div className="card-head">
                <div>
                  <p>Market Study Space</p>
                  <h3>Watchlist and Session Notes</h3>
                </div>
                <span className="badge warm">Live Feel</span>
              </div>
              <div className="watchlist" id="watchlist"></div>
              <div className="result-card watch-detail" id="watchDetail">
                <p>Select a watchlist item to see the study plan, volatility notes, and what to observe.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section dashboard" id="dashboard">
          <div className="section-heading reveal">
            <p className="eyebrow">Progress Dashboard</p>
            <h2>Track momentum, keep notes, and build consistency like a serious learner.</h2>
          </div>
          <div className="dashboard-layout">
            <article className="dashboard-panel glass reveal">
              <div className="card-head">
                <div>
                  <p>Your Stats</p>
                  <h3>Learning Momentum</h3>
                </div>
              </div>
              <div className="progress-metrics">
                <div>
                  <strong id="completedLessons">0</strong>
                  <span>Lessons completed</span>
                </div>
                <div>
                  <strong id="quizScore">0%</strong>
                  <span>Quiz accuracy</span>
                </div>
                <div>
                  <strong id="simulationCount">0</strong>
                  <span>Practice runs</span>
                </div>
              </div>
              <div className="progress-bar">
                <div id="progressFill"></div>
              </div>
              <div className="profile-pills">
                <span className="profile-pill">
                  Current streak: <strong id="currentStreak">3 days</strong>
                </span>
                <span className="profile-pill">
                  Readiness: <strong id="readinessState">Building</strong>
                </span>
              </div>
            </article>

            <article className="dashboard-panel glass reveal delay-1">
              <div className="card-head">
                <div>
                  <p>Reflection Journal</p>
                  <h3>What did you learn today?</h3>
                </div>
              </div>
              <textarea
                id="journalInput"
                rows="6"
                placeholder="Write your market observations, mistakes, patterns, and next steps..."
              ></textarea>
              <button className="button primary full" id="saveJournal">
                Save Journal
              </button>
            </article>
          </div>
        </section>

        <section className="section" id="assessments">
          <div className="section-heading reveal">
            <p className="eyebrow">Assessments</p>
            <h2>Measure your progress with level checks, scenario drills, and milestone certificates.</h2>
          </div>
          <div className="assessment-grid" id="assessmentGrid"></div>
        </section>

        <section className="section" id="ecosystem">
          <div className="section-heading reveal">
            <p className="eyebrow">Platform Layers</p>
            <h2>Everything needed to turn this into a full trading education product.</h2>
          </div>
          <div className="ecosystem-grid">
            <article className="dashboard-panel glass reveal">
              <div className="card-head">
                <div>
                  <p>Profiles and Access</p>
                  <h3>Auth Experience</h3>
                </div>
              </div>
              <ul className="feature-list">
                <li>Google, email, and Apple sign-in</li>
                <li>Saved progress across devices</li>
                <li>Streaks, achievements, and badges</li>
              </ul>
            </article>
            <article className="dashboard-panel glass reveal delay-1">
              <div className="card-head">
                <div>
                  <p>Community Layer</p>
                  <h3>Peer Learning</h3>
                </div>
              </div>
              <ul className="feature-list">
                <li>Study groups and trade review rooms</li>
                <li>Leaderboards and weekly challenges</li>
                <li>Mentor office hours and shared journals</li>
              </ul>
            </article>
            <article className="dashboard-panel glass reveal delay-2">
              <div className="card-head">
                <div>
                  <p>Creator Tools</p>
                  <h3>Admin and CMS</h3>
                </div>
              </div>
              <ul className="feature-list">
                <li>Lesson editor and quiz builder</li>
                <li>Simulator scenario manager</li>
                <li>Notifications, spotlight modules, and analytics</li>
              </ul>
            </article>
          </div>
          <div className="notification-panel glass reveal">
            <div className="card-head">
              <div>
                <p>Notification Center</p>
                <h3>Choose your nudges</h3>
              </div>
            </div>
            <div className="notification-list" id="notificationList"></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          TradeLearn AI is evolving into a full learning platform with lessons, practice, profiles, AI guidance, and
          backend-powered progress sync.
        </p>
      </footer>

      <template id="moduleTemplate">
        <article className="module-card glass reveal">
          <div className="module-top">
            <span className="module-level"></span>
            <button className="module-toggle" type="button" aria-label="Mark lesson as complete">
              Mark Complete
            </button>
          </div>
          <h3 className="module-title"></h3>
          <p className="module-summary"></p>
          <div className="lesson-points"></div>
        </article>
      </template>

      <template id="trackTemplate">
        <article className="track-card glass reveal">
          <div className="card-head">
            <div>
              <p className="track-audience"></p>
              <h3 className="track-title"></h3>
            </div>
            <span className="badge track-duration"></span>
          </div>
          <p className="track-summary"></p>
          <div className="track-milestones"></div>
        </article>
      </template>

      <template id="assessmentTemplate">
        <article className="assessment-card glass reveal">
          <div className="card-head">
            <div>
              <p className="assessment-type"></p>
              <h3 className="assessment-title"></h3>
            </div>
            <span className="badge assessment-badge"></span>
          </div>
          <p className="assessment-summary"></p>
          <button className="button secondary full" type="button">
            Preview Challenge
          </button>
        </article>
      </template>
    </div>
  );
}
