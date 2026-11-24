"use strict";

const STORAGE_KEY = "grammarChallengeProgressV1";

const levels = [
  {
    title: "Start easy", subtitle: "Grundform oder -s?", description: "Choose the correct verb form.",
    questions: [
      choice("Lena ___ up at 6:30 every day.", ["get", "gets", "getting"], "gets", "Bei he, she und it bekommt das Verb meist ein -s."),
      choice("I often ___ to music after school.", ["listens", "listen", "listening"], "listen", "Bei I, you, we und they benutzt du die Grundform."),
      choice("The school bus ___ at 7:45.", ["arrive", "arrives", "arriving"], "arrives", "The school bus kann durch it ersetzt werden. Deshalb kommt -s ans Verb."),
      choice("Lena and Paisley ___ the bus.", ["catches", "catch", "catchs"], "catch", "Zwei Personen sind they. Mit they steht die Grundform."),
      choice("Mrs Martinez ___ the class news.", ["give", "gives", "givs"], "gives", "Bei she kommt ein -s ans Verb."),
      choice("The gates ___ at 7:55.", ["closes", "close", "closees"], "close", "The gates ist Mehrzahl. Mit they steht die Grundform."),
      choice("She ___ her bag upstairs.", ["carrys", "carries", "carry"], "carries", "Nach Konsonant + y wird y zu i: carry → carries."),
      choice("He ___ football on Fridays.", ["play", "plays", "plaies"], "plays", "Vor dem y steht ein Vokal. Deshalb hängst du nur -s an."),
      choice("Students ___ lunch at school.", ["has", "have", "haves"], "have", "Students ist Mehrzahl. Die Grundform von has ist have."),
      choice("My friend ___ to the school club.", ["go", "gos", "goes"], "goes", "Verben auf -o bekommen bei he, she, it meist -es."),
    ]
  },
  {
    title: "Special forms", subtitle: "goes, does, has", description: "Spot the tricky third-person forms.",
    questions: [
      choice("Paisley ___ her homework after dinner.", ["do", "does", "dos"], "does", "Die besondere Form von do bei she lautet does."),
      choice("Our teacher ___ a new idea.", ["have", "haves", "has"], "has", "Die besondere Form von have bei he, she, it lautet has."),
      choice("Jason ___ to school on foot.", ["goes", "gos", "go"], "goes", "go endet auf -o. Bei he kommt -es dazu."),
      choice("The lesson ___ at 8:00.", ["start", "starts", "startes"], "starts", "The lesson ist it. Du hängst -s an."),
      choice("She ___ the school bus every morning.", ["catch", "catchs", "catches"], "catches", "Nach -ch kommt bei he, she, it die Endung -es."),
      choice("My brother ___ TV after school.", ["watchs", "watches", "watch"], "watches", "Nach -ch kommt die Endung -es."),
      choice("Lena ___ English and German.", ["studys", "studies", "study"], "studies", "Konsonant + y: Das y wird zu i, dann folgt -es."),
      choice("The cafeteria ___ at 4 p.m.", ["closes", "close", "closees"], "closes", "Das Verb close hat schon ein e. Du hängst nur -s an."),
      choice("Her friend ___ a red backpack.", ["have", "has", "haves"], "has", "Her friend ist eine Person. Deshalb brauchst du has."),
      choice("School ___ early on Fridays.", ["finish", "finishs", "finishes"], "finishes", "Nach -sh kommt bei he, she, it die Endung -es."),
    ]
  },
  {
    title: "Build it", subtitle: "Sätze ordnen", description: "Build statements and ignore extra words.",
    questions: [
      order("Bilde einen Aussagesatz.", ["Lena", "usually", "takes", "the bus"], "Lena usually takes the bus", "Häufigkeitswörter stehen meist vor dem Vollverb."),
      order("Bilde einen Aussagesatz.", ["They", "play", "volleyball", "after school"], "They play volleyball after school", "Beginne mit dem Subjekt. Danach folgen Verb, Objekt und Zeitangabe."),
      order("Ein Wort ist überflüssig.", ["Paisley", "goes", "go", "to", "a club"], "Paisley goes to a club", "Bei Paisley brauchst du goes. Die Grundform go bleibt übrig."),
      order("Bilde einen Aussagesatz.", ["The school", "has", "many", "clubs"], "The school has many clubs", "The school entspricht it. Die richtige Form lautet has."),
      order("Ein Wort ist überflüssig.", ["We", "often", "eat", "eats", "in the cafeteria"], "We often eat in the cafeteria", "Mit we steht die Grundform eat. eats bleibt übrig."),
      order("Bilde einen Aussagesatz.", ["Jason", "walks", "to school", "every day"], "Jason walks to school every day", "Die Zeitangabe every day passt gut ans Satzende."),
      order("Ein Wort ist überflüssig.", ["Her lessons", "usually", "finish", "finishes", "at three"], "Her lessons usually finish at three", "Her lessons ist Mehrzahl. Deshalb brauchst du finish."),
      order("Bilde einen Aussagesatz.", ["My teacher", "gives", "us", "homework"], "My teacher gives us homework", "Nach dem Verb folgen zuerst us und dann homework."),
      order("Ein Wort ist überflüssig.", ["Students", "sometimes", "wear", "wears", "team shirts"], "Students sometimes wear team shirts", "Students ist Mehrzahl. wears bleibt übrig."),
      order("Bilde einen Aussagesatz.", ["The train", "leaves", "at six", "tomorrow"], "The train leaves at six tomorrow", "Für einen festen Fahrplan kann das simple present stehen."),
    ]
  },
  {
    title: "Do or does?", subtitle: "Verneinungen & Fragen", description: "Build questions and negative sentences.",
    questions: [
      choice("Lena ___ stay late after class.", ["don't", "doesn't", "isn't"], "doesn't", "Bei she verwendest du doesn't + Grundform."),
      choice("Her classmates ___ speak German.", ["doesn't", "aren't", "don't"], "don't", "Classmates ist Mehrzahl. Deshalb brauchst du don't."),
      order("Bilde eine Frage.", ["Does", "Jason", "play", "football", "?"], "Does Jason play football?", "Nach does steht das Vollverb in der Grundform."),
      order("Ein Wort ist überflüssig.", ["Do", "Does", "they", "wear", "school uniforms", "?"], "Do they wear school uniforms?", "Mit they beginnt die Frage mit Do. Does bleibt übrig."),
      choice("She doesn't ___ to volleyball club.", ["goes", "go", "going"], "go", "Nach doesn't steht immer die Grundform."),
      order("Bilde eine Verneinung.", ["The buses", "don't", "leave", "early"], "The buses don't leave early", "Bei Mehrzahl benutzt du don't + Grundform."),
      order("Ein Wort ist überflüssig.", ["Where", "does", "do", "Lena", "eat", "lunch", "?"], "Where does Lena eat lunch?", "Lena ist she. Deshalb brauchst du does. do bleibt übrig."),
      choice("___ your school have a dress code?", ["Do", "Does", "Is"], "Does", "Your school entspricht it. Die Frage beginnt mit Does."),
      order("Bilde eine Frage.", ["What", "do", "you", "do", "after school", "?"], "What do you do after school?", "Das erste do ist das Hilfsverb, das zweite das Vollverb."),
      order("Ein Wort ist überflüssig.", ["Paisley", "doesn't", "don't", "call", "on Mondays"], "Paisley doesn't call on Mondays", "Bei Paisley brauchst du doesn't. Danach steht call ohne -s."),
    ]
  },
  {
    title: "Type it", subtitle: "Wörter selbst schreiben", description: "Mix choices, word order and short answers.",
    questions: [
      type("Ergänze die richtige Verbform.", "Lena usually ___ (carry) her bag upstairs.", ["carries"], "Konsonant + y: carry wird zu carries."),
      choice("Choose the correct sentence.", ["She don't stay late.", "She doesn't stays late.", "She doesn't stay late."], "She doesn't stay late.", "doesn't übernimmt das -s. Das Vollverb bleibt in der Grundform."),
      type("Schreibe nur das fehlende Wort.", "___ Jason walk to school?", ["does"], "Bei Jason beginnt die Frage mit Does."),
      order("Zwei Wörter sind überflüssig.", ["When", "does", "do", "the bus", "arrive", "arrives", "?"], "When does the bus arrive?", "Nach does steht arrive in der Grundform. do und arrives bleiben übrig."),
      type("Schreibe die Verneinung von have.", "Paisley's parents ___ time today.", ["don't have", "do not have"], "Parents ist Mehrzahl. Verwende don't have."),
      choice("Choose the correct question.", ["Where she eats lunch?", "Where does she eat lunch?", "Where does she eats lunch?"], "Where does she eat lunch?", "Fragewort + does + Subjekt + Grundform."),
      type("Schreibe die richtige Form von be.", "The school days ___ not shorter.", ["are"], "School days ist Mehrzahl. Die Form von be lautet are."),
      order("Ein Wort ist überflüssig.", ["He", "isn't", "doesn't", "in", "the football team"], "He isn't in the football team", "Hier gibt es kein Vollverb. Deshalb verneinst du be mit isn't."),
      type("Schreibe nur die Kurzantwort.", "Does Lena call on Sundays? – Yes, ___.", ["she does"], "In der positiven Kurzantwort wiederholst du she + does."),
      type("Schreibe nur das Fragewort.", "___ helps you with homework?", ["who"], "Wenn du nach der handelnden Person fragst, beginnt die Frage mit Who."),
    ]
  },
  {
    title: "School life", subtitle: "Alles im Kontext", description: "Use the grammar in realistic school situations.",
    questions: [
      type("Schreibe den vollständigen Satz.", "Setze ins Englische: Sie geht jeden Tag zur Schule.", ["she goes to school every day", "she goes to school every day."], "Bei she wird go zu goes. every day steht meist am Satzende."),
      order("Zwei Wörter sind überflüssig.", ["Students", "don't", "doesn't", "wear", "wears", "short tops", "at this school"], "Students don't wear short tops at this school", "Students ist Mehrzahl. Verwende don't + Grundform wear."),
      type("Formuliere die Frage vollständig.", "Frage: Hat deine Schule einen Dresscode?", ["does your school have a dress code", "does your school have a dress code?"], "Does + your school + Grundform have."),
      choice("Which sentence is correct?", ["The cafeteria food isn't as good as at home.", "The cafeteria food don't be as good as at home.", "The cafeteria food doesn't is as good as at home."], "The cafeteria food isn't as good as at home.", "Das Verb be wird direkt mit not verneint: is not oder isn't."),
      type("Schreibe die vollständige Kurzantwort.", "Do many students join clubs? – Yes, ___.", ["they do", "they do."], "many students wird in der Kurzantwort zu they."),
      order("Ein Wort ist überflüssig.", ["What", "are", "is", "your", "favourite subjects", "?"], "What are your favourite subjects?", "Favourite subjects ist Mehrzahl. Deshalb brauchst du are."),
      type("Schreibe den vollständigen Satz.", "Setze ins Englische: Jason spielt freitags Football.", ["jason plays football on fridays", "jason plays football on fridays."], "Bei Jason kommt -s an play. Wochentage werden großgeschrieben, die Eingabe wird hier tolerant geprüft."),
      choice("Choose the best question.", ["What do you do at the weekend?", "What you do at the weekend?", "What does you do at the weekend?"], "What do you do at the weekend?", "Mit you verwendest du do."),
      type("Ergänze zwei Wörter.", "Paisley ___ ___ with the same friends all the time. (negative)", ["doesn't hang out", "does not hang out"], "Bei Paisley brauchst du doesn't. Das Verb bleibt hang out."),
      type("Schreibe die Frage vollständig.", "Frage, wann Lena ihre Eltern anruft.", ["when does lena call her parents", "when does lena call her parents?"], "When + does + Lena + Grundform call + Ergänzung."),
    ]
  },
  {
    title: "Final Boss", subtitle: "The ultimate challenge", description: "No easy route. Use everything you know.", boss: true,
    questions: [
      type("Korrigiere den Satz vollständig.", "She doesn't goes to the volleyball club.", ["she doesn't go to the volleyball club", "she doesn't go to the volleyball club."], "Nach doesn't steht das Verb in der Grundform go."),
      order("Drei Wörter sind überflüssig.", ["How", "does", "do", "Jason", "usually", "go", "goes", "to school", "is", "?"], "How does Jason usually go to school?", "Fragewort + does + Subjekt + usually + Grundform. do, goes und is bleiben übrig."),
      type("Formuliere die Verneinung vollständig.", "Lena calls her parents on Mondays. (not)", ["lena doesn't call her parents on mondays", "lena doesn't call her parents on mondays."], "Bei Lena verwendest du doesn't. call steht danach ohne -s."),
      choice("Which question asks about the subject?", ["Who do you help?", "Who helps you?", "Who does help you?"], "Who helps you?", "Who ist hier selbst das Subjekt. Deshalb brauchst du kein do oder does."),
      type("Schreibe den Satz vollständig.", "Der Zug fährt morgen um 18 Uhr.", ["the train leaves at 6 p.m. tomorrow", "the train leaves at 6 pm tomorrow", "the train leaves at 6 p.m. tomorrow."], "Bei feststehenden Fahrplänen kann das simple present stehen."),
      order("Drei Wörter sind überflüssig.", ["Why", "don't", "doesn't", "the students", "wear", "wears", "uniforms", "are", "?"], "Why don't the students wear uniforms?", "Students ist Mehrzahl. Verwende don't + Grundform wear."),
      type("Ergänze die beiden fehlenden Wörter.", "___ she American? – No, she ___.", ["is isn't", "is, isn't", "is / isn't"], "Bei be brauchst du kein does: Is she ...? No, she isn't."),
      choice("Find the only correct sentence.", ["Paisley usually is at school early.", "Paisley is usually at school early.", "Paisley does usually be at school early."], "Paisley is usually at school early.", "Bei be steht usually normalerweise nach am, is oder are."),
      type("Schreibe die Frage vollständig.", "Frage nach Lenas Lieblingsfächern.", ["what are lena's favourite subjects", "what are lena's favourite subjects?", "what are lenas favourite subjects", "what are lenas favourite subjects?"], "subjects ist Mehrzahl. Daher lautet die Struktur: What are ...?"),
      type("Korrigiere den Satz vollständig.", "Does your friends goes to clubs after school?", ["do your friends go to clubs after school", "do your friends go to clubs after school?"], "Friends ist Mehrzahl: Do. Danach steht go in der Grundform."),
    ]
  }
];

function choice(prompt, options, answer, hint) { return { type: "choice", instruction: "Choose the correct answer.", prompt, options, answer, hint }; }
function order(instruction, words, answer, hint) { return { type: "order", instruction, prompt: "Build the correct sentence.", words, answer, hint }; }
function type(instruction, prompt, answers, hint) { return { type: "type", instruction, prompt, answers, hint }; }

const els = Object.fromEntries([
  "homeView", "gameView", "resultView", "levelGrid", "totalStars", "overallLabel", "overallBar",
  "resetButton", "resetDialog", "confirmReset", "backButton", "gameLevelNumber", "gameLevelTitle",
  "questionCount", "questionBar", "taskType", "scoreNow", "instruction", "prompt", "taskArea",
  "feedback", "hintButton", "hintBox", "checkButton", "nextButton", "resultEyebrow", "resultTitle",
  "resultPercent", "resultFraction", "resultStars", "resultMessage", "retryButton", "continueButton"
].map(id => [id, document.getElementById(id)]));

let progress = loadProgress();
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let builtWords = [];
let answered = false;

function defaultProgress() { return { unlocked: 1, results: Array(7).fill(null) }; }
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.results)) return defaultProgress();
    return { unlocked: Math.min(7, Math.max(1, Number(saved.unlocked) || 1)), results: [...saved.results, ...Array(7).fill(null)].slice(0, 7) };
  } catch { return defaultProgress(); }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function starsFor(percent) { return percent >= 90 ? 3 : percent >= 80 ? 2 : percent >= 70 ? 1 : 0; }

function renderHome() {
  const totalStars = progress.results.reduce((sum, result) => sum + (result ? starsFor(result.best) : 0), 0);
  const completed = progress.results.filter(result => result && result.best >= 70).length;
  els.totalStars.textContent = totalStars;
  els.overallLabel.textContent = `${Math.round(completed / 7 * 100)} %`;
  els.overallBar.style.width = `${completed / 7 * 100}%`;
  els.levelGrid.innerHTML = "";

  levels.forEach((level, index) => {
    const unlocked = index < progress.unlocked;
    const result = progress.results[index];
    const stars = result ? starsFor(result.best) : 0;
    const card = document.createElement("article");
    card.className = `level-card${unlocked ? "" : " locked"}${level.boss ? " boss" : ""}`;
    card.innerHTML = `
      <div class="level-card-top"><span class="level-number">${level.boss ? "★" : index + 1}</span><span class="level-state">${unlocked ? (result ? `Best: ${result.best} %` : "Ready") : "Locked"}</span></div>
      <h3>${level.title}</h3><p>${level.subtitle}<br>${level.description}</p>
      <div class="level-card-bottom"><span class="stars" aria-label="${stars} von 3 Sternen">${[0,1,2].map(i => `<span class="${i < stars ? "earned" : ""}">★</span>`).join("")}</span><button class="start-level" ${unlocked ? "" : "disabled"}>${result ? "Noch einmal" : "Start"}</button></div>`;
    if (unlocked) card.querySelector("button").addEventListener("click", () => startLevel(index));
    els.levelGrid.appendChild(card);
  });
}

function showView(name) {
  [els.homeView, els.gameView, els.resultView].forEach(view => { view.hidden = view.id !== name; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startLevel(index) {
  currentLevel = index; currentQuestion = 0; score = 0;
  els.gameLevelNumber.textContent = levels[index].boss ? "Final Boss" : `Level ${index + 1}`;
  els.gameLevelTitle.textContent = levels[index].title;
  showView("gameView");
  renderQuestion();
}

function renderQuestion() {
  const q = levels[currentLevel].questions[currentQuestion];
  selectedAnswer = null; builtWords = []; answered = false;
  els.questionCount.textContent = `${currentQuestion + 1} / 10`;
  els.questionBar.style.width = `${currentQuestion * 10}%`;
  els.scoreNow.textContent = `${score} ${score === 1 ? "Punkt" : "Punkte"}`;
  els.taskType.textContent = q.type === "choice" ? "Choose" : q.type === "order" ? "Build" : "Type";
  els.instruction.textContent = q.instruction;
  els.prompt.textContent = q.prompt;
  els.feedback.hidden = true; els.feedback.className = "feedback";
  els.hintBox.hidden = true; els.hintBox.textContent = q.hint;
  els.checkButton.hidden = false; els.checkButton.disabled = true;
  els.nextButton.hidden = true;
  els.taskArea.innerHTML = "";
  if (q.type === "choice") renderChoice(q);
  if (q.type === "order") renderOrder(q);
  if (q.type === "type") renderType(q);
}

function renderChoice(q) {
  const wrap = document.createElement("div"); wrap.className = "options";
  q.options.forEach(option => {
    const button = document.createElement("button"); button.type = "button"; button.className = "option-button"; button.textContent = option;
    button.addEventListener("click", () => {
      if (answered) return;
      wrap.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected"); selectedAnswer = option; els.checkButton.disabled = false;
    });
    wrap.appendChild(button);
  });
  els.taskArea.appendChild(wrap);
}

function renderOrder(q) {
  const build = document.createElement("div"); build.className = "sentence-build"; build.setAttribute("aria-label", "Dein Satz");
  const bank = document.createElement("div"); bank.className = "word-bank"; bank.setAttribute("aria-label", "Wortauswahl");
  q.words.forEach((word, index) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "word-button"; button.textContent = word;
    button.addEventListener("click", () => {
      if (answered) return;
      const usedIndex = builtWords.findIndex(item => item.index === index);
      if (usedIndex >= 0) { builtWords.splice(usedIndex, 1); button.classList.remove("used"); }
      else { builtWords.push({ word, index }); button.classList.add("used"); }
      drawBuiltSentence(build, bank, q); els.checkButton.disabled = builtWords.length === 0;
    });
    bank.appendChild(button);
  });
  els.taskArea.append(build, bank);
}

function drawBuiltSentence(build, bank, q) {
  build.innerHTML = "";
  builtWords.forEach((item, position) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "word-button"; button.textContent = item.word;
    button.addEventListener("click", () => {
      if (answered) return;
      builtWords.splice(position, 1);
      bank.children[item.index].classList.remove("used");
      drawBuiltSentence(build, bank, q); els.checkButton.disabled = builtWords.length === 0;
    });
    build.appendChild(button);
  });
}

function renderType() {
  const input = document.createElement("input"); input.className = "typing-input"; input.type = "text"; input.autocomplete = "off"; input.spellcheck = false; input.placeholder = "Type your answer …";
  input.addEventListener("input", () => { selectedAnswer = input.value; els.checkButton.disabled = !input.value.trim(); });
  input.addEventListener("keydown", event => { if (event.key === "Enter" && !els.checkButton.disabled && !answered) checkAnswer(); });
  els.taskArea.appendChild(input); setTimeout(() => input.focus(), 0);
}

function normalize(value) {
  return String(value).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ").replace(/\s+([?.!,])/g, "$1");
}

function checkAnswer() {
  if (answered) return;
  const q = levels[currentLevel].questions[currentQuestion];
  let given = q.type === "order" ? builtWords.map(item => item.word).join(" ").replace(/\s+([?.,!])/g, "$1") : selectedAnswer;
  const accepted = q.type === "type" ? q.answers : [q.answer];
  const correct = accepted.some(answer => normalize(answer) === normalize(given));
  answered = true;
  if (correct) score++;
  els.scoreNow.textContent = `${score} ${score === 1 ? "Punkt" : "Punkte"}`;
  els.feedback.hidden = false; els.feedback.classList.add(correct ? "good" : "bad");
  els.feedback.textContent = correct ? "Richtig! Stark gelöst." : `Noch nicht richtig. Lösung: ${accepted[0]}`;
  els.checkButton.hidden = true; els.nextButton.hidden = false;
  els.nextButton.textContent = currentQuestion === 9 ? "Ergebnis →" : "Weiter →";
  els.questionBar.style.width = `${(currentQuestion + 1) * 10}%`;
  if (q.type === "choice") {
    els.taskArea.querySelectorAll("button").forEach(button => {
      if (normalize(button.textContent) === normalize(q.answer)) button.classList.add("correct");
      else if (button.classList.contains("selected")) button.classList.add("wrong");
      button.disabled = true;
    });
  }
  if (q.type === "type") els.taskArea.querySelector("input").classList.add(correct ? "correct" : "wrong");
}

function nextQuestion() {
  if (currentQuestion < 9) { currentQuestion++; renderQuestion(); }
  else finishLevel();
}

function finishLevel() {
  const percent = score * 10;
  const passed = percent >= 70;
  const previous = progress.results[currentLevel]?.best || 0;
  progress.results[currentLevel] = { best: Math.max(previous, percent) };
  if (passed && currentLevel + 1 < 7) progress.unlocked = Math.max(progress.unlocked, currentLevel + 2);
  saveProgress();
  const stars = starsFor(percent);
  els.resultEyebrow.textContent = levels[currentLevel].boss ? "Final Boss complete" : `Level ${currentLevel + 1} complete`;
  els.resultTitle.textContent = passed ? (currentLevel === 6 ? "Boss defeated!" : "Level geschafft!") : "Fast geschafft!";
  els.resultPercent.textContent = `${percent} %`;
  els.resultFraction.textContent = `${score} von 10 richtig`;
  els.resultStars.textContent = `${"★".repeat(stars)}${"☆".repeat(3 - stars)}`;
  els.resultMessage.textContent = passed ? (currentLevel === 6 ? "Du hast alle sieben Levels gemeistert." : "Das nächste Level ist jetzt freigeschaltet.") : "Für das nächste Level brauchst du mindestens 70 %. Versuch es noch einmal.";
  els.continueButton.textContent = passed && currentLevel < 6 ? "Nächstes Level" : "Zur Übersicht";
  els.continueButton.dataset.next = passed && currentLevel < 6 ? String(currentLevel + 1) : "home";
  showView("resultView");
}

els.checkButton.addEventListener("click", checkAnswer);
els.nextButton.addEventListener("click", nextQuestion);
els.hintButton.addEventListener("click", () => { els.hintBox.hidden = !els.hintBox.hidden; });
els.backButton.addEventListener("click", () => { renderHome(); showView("homeView"); });
els.retryButton.addEventListener("click", () => startLevel(currentLevel));
els.continueButton.addEventListener("click", () => {
  if (els.continueButton.dataset.next === "home") { renderHome(); showView("homeView"); }
  else startLevel(Number(els.continueButton.dataset.next));
});
els.resetButton.addEventListener("click", () => els.resetDialog.showModal());
els.confirmReset.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY); progress = defaultProgress(); renderHome(); showView("homeView");
});

renderHome();
