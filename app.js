// ============================================================
// AUTHORITATIVE DATA — Terms, Definitions, Scenarios
// ============================================================

const TERMS = {
  "fee simple absolute": {
    definition: 'The estate holder has the estate forever.',
    examples: ['"To A"', '"To A and her heirs."'],
    category: 'present'
  },
  "life estate": {
    definition: 'An estate measured by the life of the holder. Future interest is a remainder (if it goes to a third party) or reversion (if it goes back to the grantor).',
    examples: ['"To A for life."'],
    category: 'present'
  },
  "reversion": {
    definition: 'A future interest retained by the grantor when a life estate is created without naming a third-party remainderman.',
    examples: ['"To A for life." — O has a reversion.'],
    category: 'future'
  },
  "indefeasibly vested remainder": {
    definition: 'A remainder is indefeasibly vested when there is no way the identified remainder-holders will receive any less than the full identified interest.',
    examples: ['"To A for life then to B." — B has an indefeasibly vested remainder.'],
    category: 'future'
  },
  "vested remainder subject to open": {
    definition: 'A vested remainder subject to open exists when the identified existing remainder-holder will receive some interest but may be less by the time the life estate ends.',
    examples: ['"To A for life, then to B\'s children." (B has one child, C) — C has a vested remainder subject to open.'],
    category: 'future'
  },
  "vested remainder subject to divestment": {
    definition: 'A vested remainder subject to divestment exists when there is a condition subsequent that could take the interest from the remainder-holder, but until or in absence of that condition the holder will receive the remainder.',
    examples: ['"To A for life, then to B, but if B fails the bar exam, to C." — B has a vested remainder subject to divestment.'],
    category: 'future'
  },
  "contingent remainder": {
    definition: 'A contingent remainder exists when the remainderman is unknown, unborn, or uncertain to vest because of a condition precedent.',
    examples: ['"To A for life, then to B if B graduates law school." — B has a contingent remainder.'],
    category: 'future'
  },
  "fee simple determinable": {
    definition: 'A fee simple determinable is measured by time, and seen in the words of creation like "so long as," "while," and "during." The present estate ends automatically when the time period ends. A fee simple determinable is a type of fee simple defeasible.',
    examples: ['"To A for so long as A is in college." — A has a fee simple determinable.'],
    category: 'present'
  },
  "possibility of reverter": {
    definition: 'The future interest associated with a fee simple determinable, held by the grantor.',
    examples: ['"To A for so long as A is in college." — O has a possibility of reverter.'],
    category: 'future'
  },
  "fee simple subject to condition subsequent": {
    definition: 'A fee simple subject to condition subsequent is conditional and measured by the occurrence of an event that happens after conveyance. The language itself will reserve the right of entry for the owner/grantor. A fee simple subject to condition subsequent is a type of fee simple defeasible.',
    examples: ['"To A but if A smokes, O reserves a right of entry." — A has a fee simple subject to condition subsequent.'],
    category: 'present'
  },
  "right of reentry": {
    definition: 'The future interest associated with a fee simple subject to condition subsequent. It is not automatic but must be acted upon by the grantor within the statutory period.',
    examples: ['"To A but if A smokes, O reserves a right of entry." — O has a right of reentry.'],
    category: 'future'
  },
  "fee simple subject to executory interest": {
    definition: 'A defeasible fee simple (either subject to a condition subsequent or determinable) where the property reverts to a third party. A fee simple subject to executory interest is a type of fee simple defeasible.',
    examples: ['"To A but if A smokes, to B." — A has a fee simple subject to executory interest.'],
    category: 'present'
  },
  "executory interest": {
    definition: 'The future interest associated with a fee simple subject to executory interest, held by a third party.',
    examples: ['"To A but if A smokes, to B." — B has an executory interest.'],
    category: 'future'
  },
  "shifting executory interest": {
    definition: 'An executory interest is shifting when it divests a third party of his interest.',
    examples: ['"To A, but if A smokes, to B." — B has a shifting executory interest (divests A, a third party).'],
    category: 'future'
  },
  "springing executory interest": {
    definition: 'An executory interest is springing if it divests the original grantor of the interest.',
    examples: ['"To A when A graduates law school." — A has a springing executory interest (divests O, the grantor).'],
    category: 'future'
  }
};

const RAP_RULE = 'The common law Rule Against Perpetuities provides that no interest is good unless it must vest, if at all, no later than 21 years after the life in being at the creation of the interest. If it is certain to vest within that time, the conveyance is valid. If it might not, it is invalid.';

// ============================================================
// SCENARIO BANK
// Each scenario: conveyance text, parties with their interests,
// RAP validity, and explanation
// ============================================================

const SCENARIOS = [
  {
    id: 1,
    conveyance: '"To A."',
    parties: [
      { name: 'A', interest: 'fee simple absolute', type: 'present' }
    ],
    rapValid: true,
    rapExplanation: 'A fee simple absolute vests immediately and completely. No future interest is subject to RAP analysis.',
    explanation: 'A simple conveyance with no conditions or limitations gives A the estate forever.'
  },
  {
    id: 2,
    conveyance: '"To A and her heirs."',
    parties: [
      { name: 'A', interest: 'fee simple absolute', type: 'present' }
    ],
    rapValid: true,
    rapExplanation: '"And her heirs" is words of limitation, not words of purchase. A has a fee simple absolute that vests immediately.',
    explanation: '"And her heirs" are words of limitation describing the duration of the estate, not a gift to the heirs.'
  },
  {
    id: 3,
    conveyance: '"To A for life."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A reversion is a future interest in the grantor and is not subject to RAP.',
    explanation: 'A has the estate for A\'s lifetime. Since no third party is named, the estate reverts to the grantor O.'
  },
  {
    id: 4,
    conveyance: '"To A for life, then to B."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'indefeasibly vested remainder', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'B\'s remainder is already vested. It will vest in possession at A\'s death, which is certain to occur within a life in being.',
    explanation: 'B is ascertained and there is no condition or possibility of receiving less. B has an indefeasibly vested remainder.'
  },
  {
    id: 5,
    conveyance: '"To A for life, then to B\'s children." (B has one child, C.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'C', interest: 'vested remainder subject to open', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'The class will close at A\'s death (a life in being). All members will be determined at that point, so the interest must vest within a life in being.',
    explanation: 'C is an existing child of B, so the remainder is vested. But B could have more children before A dies, so C\'s share may decrease — vested subject to open.'
  },
  {
    id: 6,
    conveyance: '"To A for life, then to B, but if B fails the bar exam, to C."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'vested remainder subject to divestment', type: 'future' },
      { name: 'C', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'B\'s remainder vests at the conveyance. C\'s executory interest will either vest or fail within B\'s lifetime (a life in being).',
    explanation: 'B is ascertained and will receive the remainder unless the condition subsequent (failing the bar) occurs. C\'s interest shifts from B (a third party).'
  },
  {
    id: 7,
    conveyance: '"To A for life, then to B if B graduates law school."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'B\'s contingent remainder will either vest or fail at A\'s death. A is a life in being, so the interest must vest, if at all, within a life in being.',
    explanation: 'B\'s remainder depends on a condition precedent (graduating law school). Until that condition is met, the remainder is contingent. O retains a reversion in case B never qualifies.'
  },
  {
    id: 8,
    conveyance: '"To A for so long as A is in college."',
    parties: [
      { name: 'A', interest: 'fee simple determinable', type: 'present' },
      { name: 'O', interest: 'possibility of reverter', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A possibility of reverter is a future interest in the grantor and is not subject to RAP.',
    explanation: '"So long as" signals a fee simple determinable. The estate ends automatically when A is no longer in college. O has a possibility of reverter.'
  },
  {
    id: 9,
    conveyance: '"To A while A uses the land for farming."',
    parties: [
      { name: 'A', interest: 'fee simple determinable', type: 'present' },
      { name: 'O', interest: 'possibility of reverter', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A possibility of reverter is a future interest in the grantor and is not subject to RAP.',
    explanation: '"While" is durational language creating a fee simple determinable. The estate automatically ends if A stops farming.'
  },
  {
    id: 10,
    conveyance: '"To A during A\'s employment at the firm."',
    parties: [
      { name: 'A', interest: 'fee simple determinable', type: 'present' },
      { name: 'O', interest: 'possibility of reverter', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A possibility of reverter is a future interest in the grantor and is not subject to RAP.',
    explanation: '"During" is durational language creating a fee simple determinable.'
  },
  {
    id: 11,
    conveyance: '"To A, but if A smokes, O reserves a right of entry."',
    parties: [
      { name: 'A', interest: 'fee simple subject to condition subsequent', type: 'present' },
      { name: 'O', interest: 'right of reentry', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A right of reentry is a future interest in the grantor and is not subject to RAP.',
    explanation: 'The condition subsequent (smoking) could end A\'s estate, but only if O exercises the right of reentry. It is not automatic.'
  },
  {
    id: 12,
    conveyance: '"To A, but if A uses the land commercially, O may reenter and retake."',
    parties: [
      { name: 'A', interest: 'fee simple subject to condition subsequent', type: 'present' },
      { name: 'O', interest: 'right of reentry', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A right of reentry is a future interest in the grantor and is not subject to RAP.',
    explanation: 'The language reserves the right of entry for O. A\'s estate does not end automatically — O must act.'
  },
  {
    id: 13,
    conveyance: '"To A, but if A smokes, to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'B\'s executory interest will vest or fail within A\'s lifetime. A is a life in being.',
    explanation: 'A has a defeasible fee that goes to a third party (B) on the condition. B\'s interest shifts from A (a third party), making it a shifting executory interest.'
  },
  {
    id: 14,
    conveyance: '"To A, but if A stops using the land as a school, to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'A might stop using the land as a school more than 21 years after all lives in being have ended. There is no measuring life that guarantees vesting within the perpetuities period.',
    explanation: 'The property goes to B (a third party) if the condition occurs. B\'s interest divests A, making it shifting. However, this could happen beyond the perpetuities period.'
  },
  {
    id: 15,
    conveyance: '"To A when A graduates law school."',
    parties: [
      { name: 'A', interest: 'springing executory interest', type: 'future' },
      { name: 'O', interest: 'fee simple subject to executory interest', type: 'present' }
    ],
    rapValid: true,
    rapExplanation: 'A\'s interest will vest or fail within A\'s lifetime. A is a life in being.',
    explanation: 'O retains the estate until the condition is met. A\'s interest springs from O (the grantor), making it a springing executory interest.'
  },
  {
    id: 16,
    conveyance: '"To A for life, then to B\'s first child to pass the bar exam." (B has no children.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B\'s first child to pass the bar', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'The contingent remainder must vest, if at all, at A\'s death. If no child of B has passed the bar by then, the remainder is destroyed and O\'s reversion becomes possessory. A is the measuring life.',
    explanation: 'The remainderman is unborn and subject to a condition precedent. O retains a reversion in case the contingency is not met.'
  },
  {
    id: 17,
    conveyance: '"To A for life, then to A\'s children." (A has no children.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'A\'s children', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A\'s children must be born, if at all, during A\'s lifetime. A is the measuring life. The interest must vest within a life in being.',
    explanation: 'A\'s children are unborn, making the remainder contingent. O has a reversion in case A dies without children.'
  },
  {
    id: 18,
    conveyance: '"To A for life, then to A\'s children." (A has two children, D and E.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'D and E', interest: 'vested remainder subject to open', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'The class closes at A\'s death. A is the measuring life, so all interests vest within a life in being.',
    explanation: 'D and E are ascertained, so the remainder is vested. But A could have more children, so the class is open — vested subject to open.'
  },
  {
    id: 19,
    conveyance: '"To A for so long as the land is used for educational purposes, then to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'The land might stop being used for educational purposes more than 21 years after all lives in being have ended. There is no measuring life that guarantees vesting within the perpetuities period.',
    explanation: 'Durational language with a third-party transferee creates a fee simple subject to executory interest. B\'s interest shifts from A.'
  },
  {
    id: 20,
    conveyance: '"To A, but if alcohol is ever served on the premises, to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'Alcohol might first be served on the premises more than 21 years after all lives in being have ended. There is no measuring life that guarantees vesting within the perpetuities period.',
    explanation: 'The condition could occur at any time in the future, with no life in being to limit it. B\'s executory interest violates RAP.'
  },
  {
    id: 21,
    conveyance: '"To A for life, then to B for life, then to C."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'indefeasibly vested remainder', type: 'future' },
      { name: 'C', interest: 'indefeasibly vested remainder', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'Both B\'s and C\'s remainders are already vested. They will vest in possession at the deaths of A and B respectively, both lives in being.',
    explanation: 'B has a vested remainder in a life estate. C has a vested remainder in fee simple. Both are ascertained with no conditions.'
  },
  {
    id: 22,
    conveyance: '"To A for life, then to B if B survives A, otherwise to C."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'contingent remainder', type: 'future' },
      { name: 'C', interest: 'contingent remainder', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'Both contingent remainders will vest or fail at A\'s death. A is the measuring life.',
    explanation: 'B\'s remainder is contingent on surviving A (a condition precedent). C\'s remainder is the alternative contingent remainder — also contingent on B not surviving A.'
  },
  {
    id: 23,
    conveyance: '"To A, but if A divorces, O reserves a right of entry."',
    parties: [
      { name: 'A', interest: 'fee simple subject to condition subsequent', type: 'present' },
      { name: 'O', interest: 'right of reentry', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A right of reentry is a future interest in the grantor and is not subject to RAP.',
    explanation: 'The language reserves the right of entry for O upon a condition subsequent (divorce). A\'s estate does not end automatically.'
  },
  {
    id: 24,
    conveyance: '"To A during A\'s widowhood."',
    parties: [
      { name: 'A', interest: 'fee simple determinable', type: 'present' },
      { name: 'O', interest: 'possibility of reverter', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'A possibility of reverter is a future interest in the grantor and is not subject to RAP.',
    explanation: '"During" is durational language. The estate ends automatically if A remarries.'
  },
  {
    id: 25,
    conveyance: '"To A for life, then to B\'s children who reach age 25." (B is alive, no children yet.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B\'s qualifying children', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'B could have a child after the conveyance, then A and B could both die. That child might not reach 25 until more than 21 years after all lives in being have ended.',
    explanation: 'The remaindermen are unborn and subject to a condition precedent (reaching age 25). O has a reversion. RAP is violated because a child of B born after the conveyance might reach 25 more than 21 years after all lives in being.'
  },
  {
    id: 26,
    conveyance: '"To A for life, then to B\'s children who reach age 21." (B is alive, no children yet.)',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B\'s qualifying children', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'Any child of B must reach 21 within 21 years of B\'s death. B is the measuring life. The interest must vest, if at all, within a life in being plus 21 years.',
    explanation: 'The remaindermen are unborn and subject to a condition precedent (reaching age 21). The key difference from age 25: any child of B will reach 21 within 21 years of B\'s death.'
  },
  {
    id: 27,
    conveyance: '"To A, but if the land is ever used for a liquor store, to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'The land might first be used for a liquor store more than 21 years after all lives in being have ended. There is no measuring life that guarantees vesting within the perpetuities period.',
    explanation: '"Ever" signals no time limit. B\'s executory interest could vest at any point in the indefinite future.'
  },
  {
    id: 28,
    conveyance: '"To A for life, then to B, but if B does not survive A, to C."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'B', interest: 'vested remainder subject to divestment', type: 'future' },
      { name: 'C', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'B\'s remainder is already vested. C\'s executory interest will vest or fail at A\'s death. A is the measuring life.',
    explanation: 'B is ascertained and has a vested remainder, but it is subject to divestment if B does not survive A. C\'s interest would shift from B.'
  },
  {
    id: 29,
    conveyance: '"To A for life, then to the first person to walk on Mars."',
    parties: [
      { name: 'A', interest: 'life estate', type: 'present' },
      { name: 'First person to walk on Mars', interest: 'contingent remainder', type: 'future' },
      { name: 'O', interest: 'reversion', type: 'future' }
    ],
    rapValid: true,
    rapExplanation: 'The contingent remainder must vest, if at all, at A\'s death. If no one has walked on Mars by then, the remainder is destroyed and O\'s reversion becomes possessory. A is the measuring life.',
    explanation: 'The remainderman is unknown and subject to a condition precedent. At common law, the contingent remainder is destroyed if it has not vested by the end of the life estate.'
  },
  {
    id: 30,
    conveyance: '"To A, but if no one in A\'s family ever becomes a lawyer, to B."',
    parties: [
      { name: 'A', interest: 'fee simple subject to executory interest', type: 'present' },
      { name: 'B', interest: 'shifting executory interest', type: 'future' }
    ],
    rapValid: false,
    rapExplanation: 'It might not be determined whether anyone in A\'s family becomes a lawyer until well beyond 21 years after all lives in being have ended. There is no measuring life that guarantees vesting within the perpetuities period.',
    explanation: 'The condition ("no one ever") has no time limit and could remain unresolved indefinitely. B\'s executory interest violates RAP.'
  }
];

// ============================================================
// ALL TERM NAMES for autocomplete / choices
// ============================================================
const ALL_TERM_NAMES = Object.keys(TERMS);
const ALL_INTEREST_NAMES = [
  'fee simple absolute', 'life estate', 'reversion',
  'indefeasibly vested remainder', 'vested remainder subject to open',
  'vested remainder subject to divestment', 'contingent remainder',
  'fee simple determinable', 'possibility of reverter',
  'fee simple subject to condition subsequent', 'right of reentry',
  'fee simple subject to executory interest', 'executory interest',
  'shifting executory interest', 'springing executory interest'
];

// ============================================================
// STATE
// ============================================================
let state = {
  selectedDrills: [],
  currentRound: 0,
  currentQuestion: 0,
  roundScores: [],
  roundTimes: [],
  questionResults: [], // {scenario, drill, party, correct, userAnswer, correctAnswer, timeMs, termTested}
  sessionStartTime: null,
  questionStartTime: null,
  timerInterval: null,
  roundStartTime: null,
  currentDrillScenarios: [],
  answered: false,
  // For matcher drill
  matcherState: null,
  // For builder drill
  builderState: null
};

// ============================================================
// STORAGE (localStorage)
// ============================================================
function loadProgress() {
  try {
    const d = JSON.parse(localStorage.getItem('atl_progress') || '{}');
    return d;
  } catch { return {}; }
}

function saveProgress(data) {
  try {
    const existing = loadProgress();
    Object.assign(existing, data);
    localStorage.setItem('atl_progress', JSON.stringify(existing));
  } catch {}
}

function getTermStats() {
  const p = loadProgress();
  return p.termStats || {};
}

function updateTermStats(termName, correct) {
  const p = loadProgress();
  if (!p.termStats) p.termStats = {};
  if (!p.termStats[termName]) p.termStats[termName] = { correct: 0, total: 0 };
  p.termStats[termName].total++;
  if (correct) p.termStats[termName].correct++;
  saveProgress(p);
}

function saveSessionReport(report) {
  const p = loadProgress();
  if (!p.sessions) p.sessions = [];
  p.sessions.push(report);
  // Update streak
  const today = new Date().toDateString();
  if (p.lastSessionDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = (p.lastSessionDate === yesterday) ? (p.streak || 0) + 1 : 1;
  }
  p.lastSessionDate = today;
  saveProgress(p);
}

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'screen-welcome') updateWelcome();
}

function updateWelcome() {
  const p = loadProgress();
  const card = document.getElementById('streak-card');
  if (p.streak && p.streak > 0) {
    card.style.display = 'block';
    document.getElementById('streak-text').textContent = `${p.streak} day streak!`;
  }
}

// ============================================================
// DRILL SELECTION
// ============================================================
function toggleDrill(el) {
  el.classList.toggle('selected');
  const selected = document.querySelectorAll('.drill-option.selected');
  if (selected.length > 3) {
    el.classList.remove('selected');
    return;
  }
  state.selectedDrills = Array.from(selected).map(e => e.dataset.drill);
  document.getElementById('btn-start-session').textContent = `Start with Selected (${state.selectedDrills.length}/3)`;
  document.getElementById('btn-start-session').disabled = state.selectedDrills.length !== 3;
}

function randomizeDrills() {
  const allDrills = ['classifier', 'matcher', 'builder', 'spotlight', 'courtroom'];
  const shuffled = allDrills.sort(() => Math.random() - 0.5).slice(0, 3);
  document.querySelectorAll('.drill-option').forEach(el => {
    el.classList.toggle('selected', shuffled.includes(el.dataset.drill));
  });
  state.selectedDrills = shuffled;
  document.getElementById('btn-start-session').textContent = `Start with Selected (3/3)`;
  document.getElementById('btn-start-session').disabled = false;
}

// ============================================================
// SESSION MANAGEMENT
// ============================================================
function startSession() {
  if (state.selectedDrills.length !== 3) return;
  state.currentRound = 0;
  state.roundScores = [];
  state.roundTimes = [];
  state.questionResults = [];
  state.sessionStartTime = Date.now();
  startNextRound();
}

function startNextRound() {
  if (state.currentRound >= 3) {
    finishSession();
    return;
  }
  const drillType = state.selectedDrills[state.currentRound];
  state.currentQuestion = 0;
  state.roundStartTime = Date.now();
  state.answered = false;

  // Pick 10 scenarios for this round, weighted toward weak terms
  state.currentDrillScenarios = pickWeightedScenarios(10, drillType);

  startTimer();
  showScreen('screen-drill');
  updateDrillUI();
  renderQuestion();
}

function pickWeightedScenarios(count, drillType) {
  let pool = [...SCENARIOS];
  // For courtroom, prefer scenarios with interesting RAP analysis
  if (drillType === 'courtroom') {
    // Ensure mix of valid and invalid
    const invalid = pool.filter(s => !s.rapValid);
    const valid = pool.filter(s => s.rapValid);
    const picked = [];
    // Pick ~4 invalid, ~6 valid (or whatever is available)
    shuffle(invalid); shuffle(valid);
    picked.push(...invalid.slice(0, Math.min(4, invalid.length)));
    picked.push(...valid.slice(0, count - picked.length));
    shuffle(picked);
    return picked.slice(0, count);
  }

  // Weight by weakness
  const stats = getTermStats();
  pool.forEach(s => {
    let weight = 1;
    s.parties.forEach(p => {
      const t = stats[p.interest];
      if (t && t.total > 0) {
        const accuracy = t.correct / t.total;
        weight += (1 - accuracy) * 2; // weaker terms get higher weight
      } else {
        weight += 1.5; // untested terms get moderate boost
      }
    });
    s._weight = weight;
  });

  // Weighted random selection
  const picked = [];
  const available = [...pool];
  for (let i = 0; i < count && available.length > 0; i++) {
    const totalWeight = available.reduce((s, sc) => s + sc._weight, 0);
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (let j = 0; j < available.length; j++) {
      r -= available[j]._weight;
      if (r <= 0) { idx = j; break; }
    }
    picked.push(available.splice(idx, 1)[0]);
  }
  return picked;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  state.roundStartTime = Date.now();
  state.questionStartTime = Date.now();
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.roundStartTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    document.getElementById('drill-timer').textContent = `${m}:${s.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

// ============================================================
// DRILL UI UPDATES
// ============================================================
function updateDrillUI() {
  const drillNames = {
    classifier: '📋 Scenario Classifier',
    matcher: '🔗 Term Matcher',
    builder: '🏗️ Build the Conveyance',
    spotlight: '💡 Cascading Reveal',
    courtroom: '⚖️ RAP Courtroom'
  };
  const drillType = state.selectedDrills[state.currentRound];
  document.getElementById('drill-round-label').textContent = `Round ${state.currentRound + 1} of 3`;
  document.getElementById('drill-type-label').textContent = drillNames[drillType];
  updateQuestionUI();
}

function updateQuestionUI() {
  const drillType = state.selectedDrills[state.currentRound];
  const q = state.currentQuestion;
  let total = state.currentDrillScenarios.length;
  let label = `Question ${q + 1} of ${total}`;

  if (drillType === 'matcher') {
    total = 2;
    label = `Batch ${q + 1} of ${total} (5 matches each)`;
  }

  document.getElementById('drill-q-label').textContent = label;
  document.getElementById('drill-progress').style.width = `${((q) / total) * 100}%`;
  const roundCorrect = state.questionResults.filter(r => r.round === state.currentRound && r.correct).length;
  const roundTotal = state.questionResults.filter(r => r.round === state.currentRound).length;
  document.getElementById('drill-score-label').textContent = `Score: ${roundCorrect}/${roundTotal}`;
}

// ============================================================
// RENDER QUESTION — dispatches to drill type
// ============================================================
function renderQuestion() {
  state.answered = false;
  state.questionStartTime = Date.now();
  document.getElementById('drill-feedback').className = 'feedback';
  document.getElementById('drill-feedback').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-submit-drill').style.display = 'none';

  const drillType = state.selectedDrills[state.currentRound];
  const scenario = state.currentDrillScenarios[state.currentQuestion];

  const content = document.getElementById('drill-content');
  content.className = 'card fade-in';

  switch (drillType) {
    case 'classifier': renderClassifier(scenario, content); break;
    case 'matcher': renderMatcher(content); break;
    case 'builder': renderBuilder(scenario, content); break;
    case 'spotlight': renderSpotlight(scenario, content); break;
    case 'courtroom': renderCourtroom(scenario, content); break;
  }
  updateQuestionUI();
}

// ============================================================
// DRILL 1: SCENARIO CLASSIFIER (Multiple Choice)
// ============================================================
function renderClassifier(scenario, container) {
  // Pick a random party from the scenario to ask about
  const party = scenario.parties[Math.floor(Math.random() * scenario.parties.length)];
  state._classifierAnswer = party.interest;
  state._classifierParty = party;
  state._classifierScenario = scenario;

  // Generate wrong answers
  const wrongPool = ALL_INTEREST_NAMES.filter(n => n !== party.interest);
  shuffle(wrongPool);
  const options = shuffle([party.interest, ...wrongPool.slice(0, 3)]);

  const typeLabel = party.type === 'present' ? 'present interest' : 'future interest';

  container.innerHTML = `
    <div class="question-label">What ${typeLabel} does ${party.name} have?</div>
    <div class="conveyance-display">${scenario.conveyance}</div>
    <ul class="mc-options" id="mc-options">
      ${options.map((o, i) => `<li onclick="selectMC(this, ${i})" data-answer="${o}">${capitalize(o)}</li>`).join('')}
    </ul>
  `;
}

function selectMC(el, idx) {
  if (state.answered) return;
  document.querySelectorAll('#mc-options li').forEach(li => li.classList.remove('selected'));
  el.classList.add('selected');
  state._selectedMC = el.dataset.answer;
  document.getElementById('btn-submit-drill').style.display = 'inline-block';
}

function submitClassifier() {
  if (!state._selectedMC) return;
  state.answered = true;
  const correct = state._selectedMC === state._classifierAnswer;
  const timeMs = Date.now() - state.questionStartTime;

  document.querySelectorAll('#mc-options li').forEach(li => {
    li.classList.add('disabled');
    if (li.dataset.answer === state._classifierAnswer) li.classList.add('correct');
    if (li.classList.contains('selected') && !correct) li.classList.add('incorrect');
  });

  const term = TERMS[state._classifierAnswer];
  const fb = document.getElementById('drill-feedback');
  fb.className = `feedback show ${correct ? 'correct' : 'incorrect'}`;
  fb.style.display = 'block';
  fb.innerHTML = correct
    ? `<strong>Correct!</strong> ${capitalize(state._classifierAnswer)}: ${term.definition}`
    : `<strong>Not quite.</strong> The correct answer is <strong>${capitalize(state._classifierAnswer)}</strong>. ${term.definition}`;

  recordResult(state._classifierScenario, 'classifier', state._classifierParty.name, correct, state._selectedMC, state._classifierAnswer, timeMs, state._classifierAnswer);
  document.getElementById('btn-submit-drill').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
}

// ============================================================
// DRILL 2: TERM MATCHER (Drag & Drop)
// ============================================================
function renderMatcher(container) {
  const batchSize = 5;
  const batchStart = state.currentQuestion * batchSize;
  const batch = state.currentDrillScenarios.slice(batchStart, batchStart + batchSize);

  if (batch.length === 0) {
    nextQuestion();
    return;
  }

  // For each scenario, pick one party to ask about
  const items = batch.map(s => {
    const party = s.parties[Math.floor(Math.random() * s.parties.length)];
    return { scenario: s, party, correctAnswer: party.interest };
  });

  // Collect answer labels — handle duplicates by adding a unique suffix for internal tracking
  const answerLabels = shuffle(items.map((it, i) => ({ label: it.correctAnswer, uid: i })));

  state.matcherState = { items, answers: {}, answerLabels };

  let html = '<div class="question-label">Drag each interest to its matching conveyance (or tap to select, then tap a drop zone).</div>';

  // Answer pool
  html += '<div class="block-pool" id="matcher-pool">';
  answerLabels.forEach((item, i) => {
    html += `<div class="drag-item" draggable="true" data-matcher-idx="${i}" data-value="${item.label}" data-uid="${item.uid}"
      ondragstart="matcherDragStart(event)" onclick="matcherTapSelect(this)" id="matcher-drag-${i}">${capitalize(item.label)}</div>`;
  });
  html += '</div>';

  // Drop zones
  items.forEach((item, i) => {
    html += `<div class="match-row">
      <div class="match-label">${item.scenario.conveyance}<br><small style="color:var(--charcoal-light)">What interest does ${item.party.name} have?</small></div>
      <div class="match-drop" id="matcher-drop-${i}" data-drop-idx="${i}"
        ondragover="matcherDragOver(event)" ondragleave="matcherDragLeave(event)" ondrop="matcherDrop(event, ${i})" onclick="matcherTapDrop(${i})">
        <span style="color:var(--charcoal-light);font-size:0.85rem;">Drop or tap here</span>
      </div>
    </div>`;
  });

  container.innerHTML = html;
  document.getElementById('btn-submit-drill').style.display = 'inline-block';

  // Override: matcher uses 2 pages of 5 instead of 10 individual questions
  // We'll handle this by treating each batch as one "question"
  // Adjust total to 2 for matcher
  state._matcherBatchMode = true;
}

function matcherDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'move';
}

// Tap-based selection for mobile
let _matcherTapSelected = null;

function matcherTapSelect(el) {
  // Deselect previous
  document.querySelectorAll('#matcher-pool .drag-item').forEach(d => d.style.outline = 'none');
  el.style.outline = '3px solid var(--sage-dark)';
  _matcherTapSelected = el;
}

function matcherTapDrop(dropIdx) {
  if (!_matcherTapSelected) return;
  const dragEl = _matcherTapSelected;
  const value = dragEl.dataset.value;

  // Remove from pool, place in drop zone
  const dropZone = document.getElementById(`matcher-drop-${dropIdx}`);
  if (state.matcherState.answers[dropIdx] !== undefined) {
    const oldDragIdx = state.matcherState.answers[dropIdx].dragIdx;
    const oldEl = document.getElementById(`matcher-drag-${oldDragIdx}`);
    if (oldEl) {
      oldEl.style.display = 'inline-block';
      oldEl.classList.remove('placed');
      oldEl.style.outline = 'none';
    }
  }

  state.matcherState.answers[dropIdx] = { value, dragIdx: parseInt(dragEl.dataset.matcherIdx) };
  dragEl.classList.add('placed');
  dragEl.style.display = 'none';
  dragEl.style.outline = 'none';
  _matcherTapSelected = null;

  dropZone.innerHTML = `<span class="drag-item" style="cursor:default">${capitalize(value)}</span>`;
  dropZone.classList.add('filled');
}

function matcherDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('over');
}

function matcherDragLeave(e) {
  e.currentTarget.classList.remove('over');
}

function matcherDrop(e, dropIdx) {
  e.preventDefault();
  e.currentTarget.classList.remove('over');
  const dragId = e.dataTransfer.getData('text/plain');
  const dragEl = document.getElementById(dragId);
  if (!dragEl) return;

  const value = dragEl.dataset.value;

  // Remove from pool, place in drop zone
  const dropZone = document.getElementById(`matcher-drop-${dropIdx}`);
  // If already has an item, return it to pool
  if (state.matcherState.answers[dropIdx] !== undefined) {
    const oldDragIdx = state.matcherState.answers[dropIdx].dragIdx;
    const oldEl = document.getElementById(`matcher-drag-${oldDragIdx}`);
    if (oldEl) {
      oldEl.style.display = 'inline-block';
      oldEl.classList.remove('placed');
    }
  }

  state.matcherState.answers[dropIdx] = { value, dragIdx: parseInt(dragEl.dataset.matcherIdx) };
  dragEl.classList.add('placed');
  dragEl.style.display = 'none';

  dropZone.innerHTML = `<span class="drag-item" style="cursor:default">${capitalize(value)}</span>`;
  dropZone.classList.add('filled');
}

function submitMatcher() {
  if (!state.matcherState) return;
  state.answered = true;
  const { items, answers } = state.matcherState;
  const timeMs = Date.now() - state.questionStartTime;
  const perItemTime = timeMs / items.length;

  let allCorrect = true;
  items.forEach((item, i) => {
    const userAnswer = answers[i] ? answers[i].value : '(none)';
    const correct = userAnswer === item.correctAnswer;
    if (!correct) allCorrect = false;

    const dropZone = document.getElementById(`matcher-drop-${i}`);
    if (correct) {
      dropZone.style.borderColor = 'var(--green-soft)';
      dropZone.style.background = 'var(--green-bg)';
    } else {
      dropZone.style.borderColor = 'var(--red-soft)';
      dropZone.style.background = 'var(--red-bg)';
      dropZone.innerHTML += `<br><small style="color:var(--red-soft)">→ ${capitalize(item.correctAnswer)}</small>`;
    }

    recordResult(item.scenario, 'matcher', item.party.name, correct, userAnswer, item.correctAnswer, perItemTime, item.correctAnswer);
  });

  const fb = document.getElementById('drill-feedback');
  const correctCount = items.filter((item, i) => (answers[i] ? answers[i].value : '') === item.correctAnswer).length;
  fb.className = `feedback show ${allCorrect ? 'correct' : (correctCount > 0 ? 'info' : 'incorrect')}`;
  fb.style.display = 'block';
  fb.innerHTML = allCorrect
    ? '<strong>All correct!</strong> Great pattern recognition.'
    : `<strong>${correctCount} of ${items.length} correct.</strong> Review the corrections above.`;

  document.getElementById('btn-submit-drill').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
}

// ============================================================
// DRILL 3: BUILD THE CONVEYANCE (Reverse Engineering)
// ============================================================
const CONVEYANCE_BLOCKS = [
  'To A', 'To B', 'To C', 'and her heirs', 'for life',
  'then to B', 'then to C', 'then to A\'s children',
  'but if', 'A smokes,', 'A divorces,', 'so long as', 'while',
  'during', 'A is in college', 'the land is used for farming',
  'O reserves a right of entry', 'to B', 'to C',
  'if B graduates law school', 'if B survives A', 'otherwise to C',
  'but if B fails the bar exam,', 'A uses the land commercially,',
  'O may reenter and retake'
];

function renderBuilder(scenario, container) {
  // Show the target interests, ask student to build a conveyance
  const partyDescs = scenario.parties.map(p =>
    `${p.name}: ${capitalize(p.interest)}`
  ).join('<br>');

  // Parse the actual conveyance into blocks
  const correctBlocks = parseConveyanceToBlocks(scenario.conveyance);
  // Add some distractor blocks
  const distractors = CONVEYANCE_BLOCKS.filter(b =>
    !correctBlocks.some(cb => cb.toLowerCase() === b.toLowerCase())
  );
  shuffle(distractors);
  const allBlocks = shuffle([...correctBlocks, ...distractors.slice(0, Math.min(5, distractors.length))]);

  state.builderState = { scenario, correctBlocks, selectedBlocks: [] };

  let html = `
    <div class="question-label">Build a conveyance that creates these interests:</div>
    <div style="background:var(--gold-light);padding:14px 18px;border-radius:8px;margin:12px 0;border-left:4px solid var(--gold);">
      ${partyDescs}
    </div>
    <div class="question-label" style="font-size:0.9rem;margin-top:12px;">Click blocks to build your conveyance:</div>
    <div class="build-area" id="build-area" style="min-height:50px;">
      <span style="color:var(--charcoal-light);font-size:0.85rem;" id="build-placeholder">Your conveyance will appear here...</span>
    </div>
    <div class="block-pool" id="block-pool">
      ${allBlocks.map((b, i) => `<div class="block-item" data-block="${escapeAttr(b)}" data-idx="${i}" onclick="addBlock(this)">${escapeHtml(b)}</div>`).join('')}
    </div>
    <div class="mt-12">
      <button class="btn btn-small btn-secondary" onclick="clearBuilder()">Clear</button>
    </div>
  `;
  container.innerHTML = html;
  document.getElementById('btn-submit-drill').style.display = 'inline-block';
}

function parseConveyanceToBlocks(conveyance) {
  // Remove quotes
  let c = conveyance.replace(/^"|"$/g, '').replace(/[""]/g, '');
  // Split into meaningful chunks
  const blocks = [];
  // Simple heuristic: split on commas and key phrases
  const parts = c.split(/,\s*/);
  parts.forEach(p => {
    p = p.trim();
    if (p) blocks.push(p);
  });
  return blocks;
}

function addBlock(el) {
  if (el.classList.contains('used')) return;
  el.classList.add('used');
  const block = el.dataset.block;
  state.builderState.selectedBlocks.push({ text: block, elIdx: el.dataset.idx });
  updateBuildArea();
}

function removeBlock(idx) {
  const removed = state.builderState.selectedBlocks.splice(idx, 1)[0];
  const el = document.querySelector(`#block-pool .block-item[data-idx="${removed.elIdx}"]`);
  if (el) el.classList.remove('used');
  updateBuildArea();
}

function updateBuildArea() {
  const area = document.getElementById('build-area');
  if (state.builderState.selectedBlocks.length === 0) {
    area.innerHTML = '<span style="color:var(--charcoal-light);font-size:0.85rem;" id="build-placeholder">Your conveyance will appear here...</span>';
  } else {
    area.innerHTML = state.builderState.selectedBlocks.map((b, i) =>
      `<div class="block-item" onclick="removeBlock(${i})" title="Click to remove">${b.text}</div>`
    ).join('');
  }
}

function clearBuilder() {
  state.builderState.selectedBlocks = [];
  document.querySelectorAll('#block-pool .block-item').forEach(el => el.classList.remove('used'));
  updateBuildArea();
}

function submitBuilder() {
  state.answered = true;
  const { scenario, correctBlocks, selectedBlocks } = state.builderState;
  const timeMs = Date.now() - state.questionStartTime;

  // Check if the built conveyance matches (flexible matching)
  const builtText = selectedBlocks.map(b => b.text).join(', ').toLowerCase().trim();
  const correctText = correctBlocks.join(', ').toLowerCase().trim();

  // Flexible: check if key elements are present
  const correct = builtText === correctText || fuzzyConveyanceMatch(builtText, correctText, scenario);

  const fb = document.getElementById('drill-feedback');
  fb.className = `feedback show ${correct ? 'correct' : 'incorrect'}`;
  fb.style.display = 'block';

  const partyExplanations = scenario.parties.map(p => {
    const term = TERMS[p.interest];
    return `<strong>${p.name} — ${capitalize(p.interest)}:</strong> ${term ? term.definition : ''}`;
  }).join('<br><br>');

  fb.innerHTML = correct
    ? `<strong>Well done!</strong> Your conveyance correctly creates the target interests.<br><br>${partyExplanations}`
    : `<strong>Not quite.</strong> The expected conveyance was:<br><div class="conveyance-display" style="margin:8px 0;">${scenario.conveyance}</div>${partyExplanations}`;

  scenario.parties.forEach(p => {
    recordResult(scenario, 'builder', p.name, correct, builtText, correctText, timeMs / scenario.parties.length, p.interest);
  });

  document.getElementById('btn-submit-drill').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
}

function fuzzyConveyanceMatch(built, correct, scenario) {
  // Check if key structural elements are present
  const builtLower = built.toLowerCase();
  const correctLower = correct.toLowerCase();

  // Must contain the key party names and structural words
  const keyElements = [];
  scenario.parties.forEach(p => {
    keyElements.push(p.name.toLowerCase());
  });

  // Check for key structural phrases
  if (correctLower.includes('for life') && !builtLower.includes('for life')) return false;
  if (correctLower.includes('so long as') && !builtLower.includes('so long as')) return false;
  if (correctLower.includes('while') && !builtLower.includes('while')) return false;
  if (correctLower.includes('during') && !builtLower.includes('during')) return false;
  if (correctLower.includes('but if') && !builtLower.includes('but if')) return false;
  if (correctLower.includes('right of entry') && !builtLower.includes('right of entry')) return false;
  if (correctLower.includes('then to') && !builtLower.includes('then to')) return false;

  // Check all key elements present
  return keyElements.every(k => builtLower.includes(k));
}

// ============================================================
// DRILL 4: CASCADING REVEAL (Self-Graded Recall)
// ============================================================
function renderSpotlight(scenario, container) {
  const party = scenario.parties[Math.floor(Math.random() * scenario.parties.length)];
  state._spotlightAnswer = party.interest;
  state._spotlightParty = party;
  state._spotlightScenario = scenario;
  state._spotlightRevealed = false;

  const typeLabel = party.type === 'present' ? 'present interest' : 'future interest';

  container.innerHTML = `
    <div class="question-label">Think: What ${typeLabel} does ${party.name} have?</div>
    <div class="conveyance-display">${scenario.conveyance}</div>
    <div style="text-align:center;margin:20px 0;">
      <p style="color:var(--charcoal-light);font-size:0.9rem;margin-bottom:12px;">Commit to your answer in your mind, then reveal.</p>
      <button class="btn btn-gold" id="btn-reveal" onclick="revealSpotlight()">Reveal Answer</button>
    </div>
    <div id="spotlight-answer" style="display:none;">
      <div style="background:var(--gold-light);padding:18px 22px;border-radius:8px;border-left:4px solid var(--gold);margin:16px 0;">
        <div style="font-size:1.15rem;font-weight:700;color:var(--sage-dark);margin-bottom:6px;">${capitalize(party.interest)}</div>
        <div style="font-size:0.93rem;color:var(--charcoal);">${TERMS[party.interest].definition}</div>
      </div>
      <p style="text-align:center;font-weight:600;margin:16px 0 8px;">How did you do?</p>
      <div class="self-grade-options" id="self-grade-options">
        <button class="grade-btn grade-knew" onclick="gradeSpotlight('knew')">😊 I knew it</button>
        <button class="grade-btn grade-close" onclick="gradeSpotlight('close')">🤔 I was close</button>
        <button class="grade-btn grade-missed" onclick="gradeSpotlight('missed')">😬 I didn't know</button>
      </div>
    </div>
  `;
  // Hide submit and next — this drill uses its own flow
  document.getElementById('btn-submit-drill').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
}

function revealSpotlight() {
  state._spotlightRevealed = true;
  document.getElementById('btn-reveal').style.display = 'none';
  document.getElementById('spotlight-answer').style.display = 'block';
}

function gradeSpotlight(grade) {
  state.answered = true;
  const timeMs = Date.now() - state.questionStartTime;
  const correct = grade === 'knew';
  const partial = grade === 'close';

  // Disable grade buttons
  document.querySelectorAll('#self-grade-options .grade-btn').forEach(b => {
    b.disabled = true;
    b.style.opacity = '0.5';
  });
  // Highlight selected
  const selectedBtn = document.querySelector(`#self-grade-options .grade-${grade === 'knew' ? 'knew' : grade === 'close' ? 'close' : 'missed'}`);
  if (selectedBtn) {
    selectedBtn.style.opacity = '1';
    selectedBtn.style.outline = '3px solid var(--sage-dark)';
  }

  // Show feedback
  const fb = document.getElementById('drill-feedback');
  fb.style.display = 'block';
  if (correct) {
    fb.className = 'feedback show correct';
    fb.innerHTML = '<strong>Nice recall!</strong> Keep it up — this one is solid in your memory.';
  } else if (partial) {
    fb.className = 'feedback show info';
    fb.innerHTML = `<strong>Almost there.</strong> You're building the right connections. Review the definition above and you'll lock it in.`;
    // Partial credit: record as incorrect but with lighter weight for adaptive system
    updateTermStats(state._spotlightAnswer, false);
  } else {
    fb.className = 'feedback show incorrect';
    fb.innerHTML = `<strong>That's okay — this is how learning works.</strong> Read the definition carefully. You'll see this one again soon.`;
  }

  recordResult(
    state._spotlightScenario, 'spotlight', state._spotlightParty.name,
    correct, `self-grade:${grade}`, state._spotlightAnswer, timeMs, state._spotlightAnswer
  );

  document.getElementById('btn-next').style.display = 'inline-block';
}

function submitSpotlight() {
  // No-op — cascading reveal uses its own grading flow
}

// ============================================================
// DRILL 5: RAP COURTROOM
// ============================================================
function renderCourtroom(scenario, container) {
  state._courtroomScenario = scenario;
  state._courtroomRuling = null;
  state._courtroomReasoning = null;

  container.innerHTML = `
    <div class="question-label">⚖️ As the judge, rule on this conveyance under the Rule Against Perpetuities:</div>
    <div class="conveyance-display">${scenario.conveyance}</div>
    <div class="question-label" style="font-size:0.95rem;">Is this conveyance valid under RAP?</div>
    <div class="ruling-options" id="ruling-options">
      <div class="ruling-btn" onclick="selectRuling(this, true)">✅ Valid</div>
      <div class="ruling-btn" onclick="selectRuling(this, false)">❌ Invalid</div>
    </div>
    <div id="reasoning-section" style="display:none;">
      <div class="question-label" style="font-size:0.95rem;margin-top:12px;">Select your reasoning:</div>
      <ul class="mc-options" id="reasoning-options"></ul>
    </div>
  `;
  document.getElementById('btn-submit-drill').style.display = 'none';
}

function selectRuling(el, isValid) {
  if (state.answered) return;
  document.querySelectorAll('#ruling-options .ruling-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  state._courtroomRuling = isValid;
  showReasoningOptions();
}

function showReasoningOptions() {
  const scenario = state._courtroomScenario;
  const section = document.getElementById('reasoning-section');
  section.style.display = 'block';

  // Generate reasoning options
  const correctReasoning = scenario.rapExplanation;
  const wrongReasonings = generateWrongReasonings(scenario);
  const options = shuffle([correctReasoning, ...wrongReasonings.slice(0, 2)]);

  const list = document.getElementById('reasoning-options');
  list.innerHTML = options.map((o, i) =>
    `<li onclick="selectReasoning(this, ${i})" data-ridx="${i}">${o}</li>`
  ).join('');

  state._courtroomReasoningOptions = options;
  state._courtroomCorrectReasoning = correctReasoning;
  document.getElementById('btn-submit-drill').style.display = 'inline-block';
}

function generateWrongReasonings(scenario) {
  const wrongs = [];
  if (scenario.rapValid) {
    wrongs.push('There is no measuring life that guarantees vesting within the perpetuities period. The interest could vest beyond 21 years after all lives in being.');
    wrongs.push('The interest might not vest within 21 years of the conveyance because the condition could occur at any time in the indefinite future.');
    wrongs.push('The class might not close within the perpetuities period, so the interest is invalid.');
  } else {
    wrongs.push('The interest is already vested at the time of conveyance, so RAP does not apply.');
    wrongs.push('The future interest is in the grantor, and grantor interests are not subject to RAP.');
    wrongs.push('The interest must vest, if at all, at the death of a life in being, which satisfies RAP.');
  }
  return shuffle(wrongs);
}

function selectReasoning(el, idx) {
  if (state.answered) return;
  document.querySelectorAll('#reasoning-options li').forEach(li => li.classList.remove('selected'));
  el.classList.add('selected');
  state._courtroomReasoning = state._courtroomReasoningOptions[idx];
}

function submitCourtroom() {
  if (state._courtroomRuling === null || !state._courtroomReasoning) return;
  state.answered = true;
  const timeMs = Date.now() - state.questionStartTime;
  const scenario = state._courtroomScenario;

  const rulingCorrect = state._courtroomRuling === scenario.rapValid;
  const reasoningCorrect = state._courtroomReasoning === state._courtroomCorrectReasoning;
  const fullyCorrect = rulingCorrect && reasoningCorrect;

  // Show ruling feedback
  document.querySelectorAll('#ruling-options .ruling-btn').forEach((btn, i) => {
    const btnIsValid = i === 0;
    if (btnIsValid === scenario.rapValid) btn.classList.add('correct-ruling');
    if (btn.classList.contains('selected') && btnIsValid !== scenario.rapValid) btn.classList.add('incorrect-ruling');
  });

  // Show reasoning feedback
  const correctReasoningIdx = state._courtroomReasoningOptions.indexOf(state._courtroomCorrectReasoning);
  document.querySelectorAll('#reasoning-options li').forEach(li => {
    li.classList.add('disabled');
    const ridx = parseInt(li.dataset.ridx);
    if (ridx === correctReasoningIdx) li.classList.add('correct');
    if (li.classList.contains('selected') && ridx !== correctReasoningIdx) li.classList.add('incorrect');
  });

  const fb = document.getElementById('drill-feedback');
  fb.className = `feedback show ${fullyCorrect ? 'correct' : (rulingCorrect ? 'info' : 'incorrect')}`;
  fb.style.display = 'block';

  let fbText = '';
  if (fullyCorrect) {
    fbText = '<strong>Excellent ruling, Your Honor!</strong> Both your verdict and reasoning are correct.';
  } else if (rulingCorrect) {
    fbText = `<strong>Correct ruling, but your reasoning needs work.</strong>`;
  } else {
    fbText = `<strong>Incorrect ruling.</strong> This conveyance is <strong>${scenario.rapValid ? 'valid' : 'invalid'}</strong> under RAP.`;
  }
  fbText += `<br><br><strong>Explanation:</strong> ${scenario.rapExplanation}`;
  fbText += `<br><br><em style="font-size:0.85rem;color:var(--charcoal-light);">${RAP_RULE}</em>`;
  fb.innerHTML = fbText;

  // Record — test the executory/contingent interest terms involved
  const rapTerms = scenario.parties.filter(p => p.type === 'future').map(p => p.interest);
  const mainTerm = rapTerms[0] || scenario.parties[0].interest;
  recordResult(scenario, 'courtroom', 'RAP', fullyCorrect, `ruling:${state._courtroomRuling},reasoning:${state._courtroomReasoning}`, `ruling:${scenario.rapValid}`, timeMs, mainTerm);

  document.getElementById('btn-submit-drill').style.display = 'none';
  document.getElementById('btn-next').style.display = 'inline-block';
}

// ============================================================
// SUBMIT DISPATCHER & NAVIGATION
// ============================================================
function submitDrillAnswer() {
  if (state.answered) return;
  const drillType = state.selectedDrills[state.currentRound];
  switch (drillType) {
    case 'classifier': submitClassifier(); break;
    case 'matcher': submitMatcher(); break;
    case 'builder': submitBuilder(); break;
    case 'spotlight': submitSpotlight(); break;
    case 'courtroom': submitCourtroom(); break;
  }
}

function nextQuestion() {
  const drillType = state.selectedDrills[state.currentRound];
  let totalQs = state.currentDrillScenarios.length;

  // Matcher does batches of 5
  if (drillType === 'matcher') {
    totalQs = 2; // 2 batches of 5
  }

  state.currentQuestion++;
  if (state.currentQuestion >= totalQs) {
    // Round complete
    stopTimer();
    const roundTime = Date.now() - state.roundStartTime;
    state.roundTimes.push(roundTime);
    const roundResults = state.questionResults.filter(r => r.round === state.currentRound);
    const roundCorrect = roundResults.filter(r => r.correct).length;
    state.roundScores.push({ correct: roundCorrect, total: roundResults.length });

    state.currentRound++;
    if (state.currentRound >= 3) {
      finishSession();
    } else {
      showRoundBreak();
    }
    return;
  }

  renderQuestion();
}

function showRoundBreak() {
  const lastScore = state.roundScores[state.roundScores.length - 1];
  const pct = Math.round((lastScore.correct / lastScore.total) * 100);
  document.getElementById('break-title').textContent = `Round ${state.currentRound} Complete!`;
  document.getElementById('break-summary').innerHTML =
    `You scored <strong>${lastScore.correct}/${lastScore.total}</strong> (${pct}%).<br>
    <span style="font-size:0.9rem;color:var(--charcoal-light);">Take a breath. Next round starts when you're ready.</span>`;
  showScreen('screen-break');
}

// ============================================================
// RECORD RESULT
// ============================================================
function recordResult(scenario, drill, partyName, correct, userAnswer, correctAnswer, timeMs, termTested) {
  state.questionResults.push({
    scenarioId: scenario.id,
    conveyance: scenario.conveyance,
    drill,
    partyName,
    correct,
    userAnswer,
    correctAnswer,
    timeMs,
    termTested,
    round: state.currentRound
  });
  updateTermStats(termTested, correct);
  updateQuestionUI();
}

// ============================================================
// FINISH SESSION & REPORT
// ============================================================
function finishSession() {
  stopTimer();
  const totalTime = Date.now() - state.sessionStartTime;
  const results = state.questionResults;
  const totalCorrect = results.filter(r => r.correct).length;
  const totalQuestions = results.length;
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Build term breakdown
  const termBreakdown = {};
  results.forEach(r => {
    if (!termBreakdown[r.termTested]) termBreakdown[r.termTested] = { correct: 0, total: 0, times: [] };
    termBreakdown[r.termTested].total++;
    if (r.correct) termBreakdown[r.termTested].correct++;
    termBreakdown[r.termTested].times.push(r.timeMs);
  });

  // Build drill breakdown
  const drillBreakdown = {};
  results.forEach(r => {
    if (!drillBreakdown[r.drill]) drillBreakdown[r.drill] = { correct: 0, total: 0, times: [] };
    drillBreakdown[r.drill].total++;
    if (r.correct) drillBreakdown[r.drill].correct++;
    drillBreakdown[r.drill].times.push(r.timeMs);
  });

  const report = {
    date: new Date().toISOString(),
    totalTime,
    totalCorrect,
    totalQuestions,
    pct,
    termBreakdown,
    drillBreakdown,
    roundScores: state.roundScores,
    roundTimes: state.roundTimes,
    drills: state.selectedDrills
  };

  saveSessionReport(report);
  state._lastReport = report;
  renderReport(report);
  showScreen('screen-report');
}

function renderReport(report) {
  // Stats
  const statsEl = document.getElementById('report-stats');
  statsEl.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${report.pct}%</div>
      <div class="stat-label">Overall Score</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${report.totalCorrect}/${report.totalQuestions}</div>
      <div class="stat-label">Correct Answers</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${formatTime(report.totalTime)}</div>
      <div class="stat-label">Total Time</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${report.totalQuestions > 0 ? formatTime(report.totalTime / report.totalQuestions) : '0s'}</div>
      <div class="stat-label">Avg per Question</div>
    </div>
  `;

  // Concepts
  const conceptsEl = document.getElementById('report-concepts');
  const terms = Object.entries(report.termBreakdown).sort((a, b) => {
    const aPct = a[1].correct / a[1].total;
    const bPct = b[1].correct / b[1].total;
    return aPct - bPct;
  });

  conceptsEl.innerHTML = terms.map(([term, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const color = pct >= 80 ? 'var(--green-soft)' : pct >= 50 ? 'var(--gold)' : 'var(--red-soft)';
    const avgTime = formatTime(data.times.reduce((a, b) => a + b, 0) / data.times.length);
    return `<div class="term-row">
      <span style="flex:2">${capitalize(term)}</span>
      <span style="flex:1;text-align:center;font-size:0.85rem;">${data.correct}/${data.total}</span>
      <span style="flex:1;text-align:center;font-size:0.85rem;">${avgTime}</span>
      <div class="term-bar"><div class="term-bar-fill" style="width:${pct}%;background:${color};"></div></div>
    </div>`;
  }).join('');

  // Drills
  const drillNames = { classifier: 'Scenario Classifier', matcher: 'Term Matcher', builder: 'Build the Conveyance', spotlight: 'Cascading Reveal', courtroom: 'RAP Courtroom' };
  const drillsEl = document.getElementById('report-drills');
  drillsEl.innerHTML = Object.entries(report.drillBreakdown).map(([drill, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const color = pct >= 80 ? 'var(--green-soft)' : pct >= 50 ? 'var(--gold)' : 'var(--red-soft)';
    const avgTime = formatTime(data.times.reduce((a, b) => a + b, 0) / data.times.length);
    return `<div class="term-row">
      <span style="flex:2">${drillNames[drill] || drill}</span>
      <span style="flex:1;text-align:center;font-size:0.85rem;">${data.correct}/${data.total} (${pct}%)</span>
      <span style="flex:1;text-align:center;font-size:0.85rem;">${avgTime} avg</span>
    </div>`;
  }).join('');

  // Recommendations
  const recsEl = document.getElementById('report-recs');
  const weakTerms = terms.filter(([_, d]) => (d.correct / d.total) < 0.7);
  const strongTerms = terms.filter(([_, d]) => (d.correct / d.total) >= 0.8);

  let recsHtml = '';
  if (weakTerms.length > 0) {
    recsHtml += `<p style="margin-bottom:8px;"><span class="weakness">Areas to review:</span></p><ul style="margin-left:20px;margin-bottom:12px;">`;
    weakTerms.forEach(([term, data]) => {
      const termDef = TERMS[term];
      recsHtml += `<li style="margin-bottom:6px;"><strong>${capitalize(term)}</strong>: ${termDef ? termDef.definition : ''}</li>`;
    });
    recsHtml += '</ul>';
  }
  if (strongTerms.length > 0) {
    recsHtml += `<p><span class="strength">Strong areas:</span> ${strongTerms.map(([t]) => capitalize(t)).join(', ')}</p>`;
  }
  if (weakTerms.length === 0) {
    recsHtml += '<p class="strength">Excellent work across all concepts! Consider increasing difficulty by focusing on RAP Courtroom drills.</p>';
  }
  recsEl.innerHTML = recsHtml;
}

function showPastReport() {
  const p = loadProgress();
  if (!p.sessions || p.sessions.length === 0) {
    alert('No past sessions found. Complete a drill session first!');
    return;
  }
  const lastReport = p.sessions[p.sessions.length - 1];
  state._lastReport = lastReport;
  renderReport(lastReport);
  showScreen('screen-report');
}

// ============================================================
// DOWNLOAD REPORT
// ============================================================
function downloadReport() {
  const report = state._lastReport;
  if (!report) return;

  const drillNames = { classifier: 'Scenario Classifier', matcher: 'Term Matcher', builder: 'Build the Conveyance', spotlight: 'Cascading Reveal', courtroom: 'RAP Courtroom' };
  const date = new Date(report.date).toLocaleDateString();

  let html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Legal Interests Drill Report — ${date}</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:700px;margin:40px auto;padding:20px;color:#2d2d2d;line-height:1.6;}
h1{color:#5a7e5e;font-family:Georgia,serif;border-bottom:2px solid #e8f0e9;padding-bottom:10px;}
h2{color:#5a7e5e;font-family:Georgia,serif;margin-top:24px;}
.stats{display:flex;gap:16px;flex-wrap:wrap;margin:16px 0;}
.stat{background:#e8f0e9;padding:16px;border-radius:8px;text-align:center;flex:1;min-width:120px;}
.stat .val{font-size:1.6rem;font-weight:700;color:#5a7e5e;}
.stat .lbl{font-size:0.8rem;color:#555;margin-top:4px;}
table{width:100%;border-collapse:collapse;margin:12px 0;}
th,td{padding:8px 12px;text-align:left;border-bottom:1px solid #e0dcd5;font-size:0.9rem;}
th{background:#e8f0e9;color:#5a7e5e;font-weight:600;}
.weak{color:#d9534f;font-weight:600;} .strong{color:#5cb85c;font-weight:600;}
.footer{margin-top:30px;padding-top:16px;border-top:1px solid #e0dcd5;font-size:0.8rem;color:#999;text-align:center;}
</style></head><body>
<h1>Legal Interests Drill — Session Report</h1>
<p>Date: ${date} | Drills: ${report.drills.map(d => drillNames[d] || d).join(', ')}</p>

<div class="stats">
  <div class="stat"><div class="val">${report.pct}%</div><div class="lbl">Overall Score</div></div>
  <div class="stat"><div class="val">${report.totalCorrect}/${report.totalQuestions}</div><div class="lbl">Correct</div></div>
  <div class="stat"><div class="val">${formatTime(report.totalTime)}</div><div class="lbl">Total Time</div></div>
  <div class="stat"><div class="val">${report.totalQuestions > 0 ? formatTime(report.totalTime / report.totalQuestions) : '0s'}</div><div class="lbl">Avg/Question</div></div>
</div>

<h2>Performance by Concept</h2>
<table><tr><th>Concept</th><th>Score</th><th>Avg Time</th><th>Status</th></tr>`;

  Object.entries(report.termBreakdown).sort((a, b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total)).forEach(([term, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const avgTime = formatTime(data.times.reduce((a, b) => a + b, 0) / data.times.length);
    const status = pct >= 80 ? '<span class="strong">Strong</span>' : pct >= 50 ? 'Developing' : '<span class="weak">Needs Review</span>';
    html += `<tr><td>${capitalize(term)}</td><td>${data.correct}/${data.total} (${pct}%)</td><td>${avgTime}</td><td>${status}</td></tr>`;
  });

  html += `</table>

<h2>Performance by Drill Type</h2>
<table><tr><th>Drill</th><th>Score</th><th>Avg Time</th></tr>`;

  Object.entries(report.drillBreakdown).forEach(([drill, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const avgTime = formatTime(data.times.reduce((a, b) => a + b, 0) / data.times.length);
    html += `<tr><td>${drillNames[drill] || drill}</td><td>${data.correct}/${data.total} (${pct}%)</td><td>${avgTime}</td></tr>`;
  });

  html += `</table>

<h2>Round Breakdown</h2>
<table><tr><th>Round</th><th>Drill</th><th>Score</th><th>Time</th></tr>`;

  report.roundScores.forEach((rs, i) => {
    const pct = rs.total > 0 ? Math.round((rs.correct / rs.total) * 100) : 0;
    html += `<tr><td>${i + 1}</td><td>${drillNames[report.drills[i]] || report.drills[i]}</td><td>${rs.correct}/${rs.total} (${pct}%)</td><td>${formatTime(report.roundTimes[i])}</td></tr>`;
  });

  html += `</table>

<h2>Recommendations</h2>`;

  const weakTerms = Object.entries(report.termBreakdown).filter(([_, d]) => (d.correct / d.total) < 0.7);
  if (weakTerms.length > 0) {
    html += '<p><strong class="weak">Focus areas for review:</strong></p><ul>';
    weakTerms.forEach(([term]) => {
      const t = TERMS[term];
      html += `<li><strong>${capitalize(term)}</strong>: ${t ? t.definition : ''}</li>`;
    });
    html += '</ul>';
  } else {
    html += '<p class="strong">Excellent performance across all concepts!</p>';
  }

  html += `<div class="footer">Generated by Legal Interests Drill — Amber Tutors Law<br>${new Date().toLocaleString()}</div>
</body></html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `legal-interests-report-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// UTILITIES
// ============================================================
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatTime(ms) {
  if (!ms || isNaN(ms)) return '0s';
  const totalSec = Math.round(ms / 1000);
  if (totalSec < 60) return `${totalSec}s`;
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}m ${s}s`;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-welcome');
  // Disable start button initially
  document.getElementById('btn-start-session').disabled = true;
});
