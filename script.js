const screens = {
  landing: document.getElementById("landing-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
};

const startQuizButton = document.getElementById("start-quiz-btn");
const retryQuizButton = document.getElementById("retry-quiz-btn");
const quizProgress = document.getElementById("quiz-progress");
const questionTitle = document.getElementById("question-title");
const answerOptions = document.getElementById("answer-options");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultMeta = document.getElementById("result-meta");
const resultPlaylist = document.getElementById("result-playlist");
const categoryEmojiMap = {
  energetic: "🔥",
  chill: "🌿",
  "night-vibes": "🌙",
};

const questions = [
  {
    id: 1,
    question: "Güne nasıl başlamak istersin?",
    options: [
      { text: "Yüksek enerjiyle", category: "energetic", points: 2 },
      { text: "Sakin bir tempoyla", category: "chill", points: 1 },
      { text: "Gece ruhuyla", category: "night-vibes", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Çalışırken hangi ritim iyi gider?",
    options: [
      { text: "Hızlı beat", category: "energetic", points: 2 },
      { text: "Lo-fi ve soft", category: "chill", points: 1 },
      { text: "Alternatif gece tonu", category: "night-vibes", points: 0 },
    ],
  },
  {
    id: 3,
    question: "Arkadaş buluşmasında müzik seçimin?",
    options: [
      { text: "Dans ettiren", category: "energetic", points: 2 },
      { text: "Arka planda huzurlu", category: "chill", points: 1 },
      { text: "Cool ve karanlık", category: "night-vibes", points: 0 },
    ],
  },
  {
    id: 4,
    question: "Yağmurda ne dinlersin?",
    options: [
      { text: "Motivasyon veren", category: "energetic", points: 2 },
      { text: "Duygusal ve sakin", category: "chill", points: 1 },
      { text: "Derin ve melankolik", category: "night-vibes", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Bir kelimeyle bugünkü modun?",
    options: [
      { text: "Coşkulu", category: "energetic", points: 2 },
      { text: "Huzurlu", category: "chill", points: 1 },
      { text: "Gizemli", category: "night-vibes", points: 0 },
    ],
  },
];

const personalityResults = {
  energetic: {
    title: "Pulse Runner",
  },
  chill: {
    title: "Calm Voyager",
  },
  "night-vibes": {
    title: "Night Dreamer",
  },
};

const scorePlaylists = {
  0: {
    vibe: "Sakin Mod",
    playlist: [
      { title: "Cigarettes After Sex - Nothing's Gonna Hurt You Baby", spotifyUrl: "https://open.spotify.com/search/Nothing%27s%20Gonna%20Hurt%20You%20Baby" },
      { title: "Daughter - Youth", spotifyUrl: "https://open.spotify.com/search/Daughter%20Youth" },
      { title: "Bon Iver - Holocene", spotifyUrl: "https://open.spotify.com/search/Bon%20Iver%20Holocene" },
      { title: "Lorde - Liability", spotifyUrl: "https://open.spotify.com/search/Lorde%20Liability" },
      { title: "James Blake - Retrograde", spotifyUrl: "https://open.spotify.com/search/James%20Blake%20Retrograde" },
    ],
  },
  1: {
    vibe: "Sakin Mod",
    playlist: [
      { title: "Phoebe Bridgers - Moon Song", spotifyUrl: "https://open.spotify.com/search/Phoebe%20Bridgers%20Moon%20Song" },
      { title: "The xx - Angels", spotifyUrl: "https://open.spotify.com/search/The%20xx%20Angels" },
      { title: "Rhye - Open", spotifyUrl: "https://open.spotify.com/search/Rhye%20Open" },
      { title: "Sufjan Stevens - Mystery of Love", spotifyUrl: "https://open.spotify.com/search/Sufjan%20Stevens%20Mystery%20of%20Love" },
      { title: "Agnes Obel - Riverside", spotifyUrl: "https://open.spotify.com/search/Agnes%20Obel%20Riverside" },
    ],
  },
  2: {
    vibe: "Sakin Mod",
    playlist: [
      { title: "Lana Del Rey - Video Games", spotifyUrl: "https://open.spotify.com/search/Lana%20Del%20Rey%20Video%20Games" },
      { title: "London Grammar - Strong", spotifyUrl: "https://open.spotify.com/search/London%20Grammar%20Strong" },
      { title: "Hozier - Cherry Wine", spotifyUrl: "https://open.spotify.com/search/Hozier%20Cherry%20Wine" },
      { title: "Mazzy Star - Fade Into You", spotifyUrl: "https://open.spotify.com/search/Mazzy%20Star%20Fade%20Into%20You" },
      { title: "SYML - Where's My Love", spotifyUrl: "https://open.spotify.com/search/SYML%20Where%27s%20My%20Love" },
    ],
  },
  3: {
    vibe: "Sakin Mod",
    playlist: [
      { title: "Joji - Slow Dancing in the Dark", spotifyUrl: "https://open.spotify.com/search/Joji%20Slow%20Dancing%20in%20the%20Dark" },
      { title: "Billie Eilish - when the party's over", spotifyUrl: "https://open.spotify.com/search/Billie%20Eilish%20when%20the%20party%27s%20over" },
      { title: "Tom Odell - Another Love", spotifyUrl: "https://open.spotify.com/search/Tom%20Odell%20Another%20Love" },
      { title: "Keaton Henson - You", spotifyUrl: "https://open.spotify.com/search/Keaton%20Henson%20You" },
      { title: "Mitski - My Love Mine All Mine", spotifyUrl: "https://open.spotify.com/search/Mitski%20My%20Love%20Mine%20All%20Mine" },
    ],
  },
  4: {
    vibe: "Dengeli Mod",
    playlist: [
      { title: "Rex Orange County - Sunflower", spotifyUrl: "https://open.spotify.com/search/Rex%20Orange%20County%20Sunflower" },
      { title: "LANY - Malibu Nights", spotifyUrl: "https://open.spotify.com/search/LANY%20Malibu%20Nights" },
      { title: "The 1975 - Somebody Else", spotifyUrl: "https://open.spotify.com/search/The%201975%20Somebody%20Else" },
      { title: "Conan Gray - Heather", spotifyUrl: "https://open.spotify.com/search/Conan%20Gray%20Heather" },
      { title: "Tame Impala - Borderline", spotifyUrl: "https://open.spotify.com/search/Tame%20Impala%20Borderline" },
    ],
  },
  5: {
    vibe: "Dengeli Mod",
    playlist: [
      { title: "Coldplay - Sparks", spotifyUrl: "https://open.spotify.com/search/Coldplay%20Sparks" },
      { title: "Harry Styles - Sign of the Times", spotifyUrl: "https://open.spotify.com/search/Harry%20Styles%20Sign%20of%20the%20Times" },
      { title: "AURORA - Runaway", spotifyUrl: "https://open.spotify.com/search/AURORA%20Runaway" },
      { title: "Kodaline - All I Want", spotifyUrl: "https://open.spotify.com/search/Kodaline%20All%20I%20Want" },
      { title: "Troye Sivan - Angel Baby", spotifyUrl: "https://open.spotify.com/search/Troye%20Sivan%20Angel%20Baby" },
    ],
  },
  6: {
    vibe: "Dengeli Mod",
    playlist: [
      { title: "The Weeknd - I Feel It Coming", spotifyUrl: "https://open.spotify.com/search/The%20Weeknd%20I%20Feel%20It%20Coming" },
      { title: "Dua Lipa - Levitating", spotifyUrl: "https://open.spotify.com/search/Dua%20Lipa%20Levitating" },
      { title: "Post Malone - Circles", spotifyUrl: "https://open.spotify.com/search/Post%20Malone%20Circles" },
      { title: "OneRepublic - I Lived", spotifyUrl: "https://open.spotify.com/search/OneRepublic%20I%20Lived" },
      { title: "Miley Cyrus - Flowers", spotifyUrl: "https://open.spotify.com/search/Miley%20Cyrus%20Flowers" },
    ],
  },
  7: {
    vibe: "Dengeli Mod",
    playlist: [
      { title: "Calvin Harris - Feel So Close", spotifyUrl: "https://open.spotify.com/search/Calvin%20Harris%20Feel%20So%20Close" },
      { title: "Avicii - The Nights", spotifyUrl: "https://open.spotify.com/search/Avicii%20The%20Nights" },
      { title: "Kygo - Firestone", spotifyUrl: "https://open.spotify.com/search/Kygo%20Firestone" },
      { title: "The Chainsmokers - Closer", spotifyUrl: "https://open.spotify.com/search/The%20Chainsmokers%20Closer" },
      { title: "Shawn Mendes - There's Nothing Holdin' Me Back", spotifyUrl: "https://open.spotify.com/search/Shawn%20Mendes%20There%27s%20Nothing%20Holdin%27%20Me%20Back" },
    ],
  },
  8: {
    vibe: "Yüksek Enerji Modu",
    playlist: [
      { title: "Imagine Dragons - Believer", spotifyUrl: "https://open.spotify.com/search/Imagine%20Dragons%20Believer" },
      { title: "The Weeknd - Blinding Lights", spotifyUrl: "https://open.spotify.com/search/The%20Weeknd%20Blinding%20Lights" },
      { title: "Katy Perry - Firework", spotifyUrl: "https://open.spotify.com/search/Katy%20Perry%20Firework" },
      { title: "One Direction - Drag Me Down", spotifyUrl: "https://open.spotify.com/search/One%20Direction%20Drag%20Me%20Down" },
      { title: "Fall Out Boy - My Songs Know What You Did in the Dark", spotifyUrl: "https://open.spotify.com/search/Fall%20Out%20Boy%20My%20Songs%20Know%20What%20You%20Did%20in%20the%20Dark" },
    ],
  },
  9: {
    vibe: "Yüksek Enerji Modu",
    playlist: [
      { title: "Dua Lipa - Houdini", spotifyUrl: "https://open.spotify.com/search/Dua%20Lipa%20Houdini" },
      { title: "Avicii - Wake Me Up", spotifyUrl: "https://open.spotify.com/search/Avicii%20Wake%20Me%20Up" },
      { title: "Swedish House Mafia - Don't You Worry Child", spotifyUrl: "https://open.spotify.com/search/Don%27t%20You%20Worry%20Child" },
      { title: "David Guetta - Titanium", spotifyUrl: "https://open.spotify.com/search/David%20Guetta%20Titanium" },
      { title: "Martin Garrix - Animals", spotifyUrl: "https://open.spotify.com/search/Martin%20Garrix%20Animals" },
    ],
  },
  10: {
    vibe: "Yüksek Enerji Modu",
    playlist: [
      { title: "Skrillex - Bangarang", spotifyUrl: "https://open.spotify.com/search/Skrillex%20Bangarang" },
      { title: "MACKLEMORE & RYAN LEWIS - Can't Hold Us", spotifyUrl: "https://open.spotify.com/search/Can%27t%20Hold%20Us" },
      { title: "The Killers - Mr. Brightside", spotifyUrl: "https://open.spotify.com/search/The%20Killers%20Mr.%20Brightside" },
      { title: "Panic! At The Disco - High Hopes", spotifyUrl: "https://open.spotify.com/search/Panic%20At%20The%20Disco%20High%20Hopes" },
      { title: "Kanye West - POWER", spotifyUrl: "https://open.spotify.com/search/Kanye%20West%20POWER" },
    ],
  },
};

let currentQuestionIndex = 0;
let totalScore = 0;
let isTransitioningQuestion = false;

function validateQuizConfiguration() {
  const hasFiveQuestions = questions.length === 5;
  const allQuestionsHaveThreeOptions = questions.every(
    (question) => question.options.length >= 3
  );
  const allOptionCategoriesExist = questions.every((question) =>
    question.options.every((option) =>
      Object.hasOwn(personalityResults, option.category)
    )
  );
  const allOptionPointsAreValid = questions.every((question) =>
    question.options.every((option) => Number.isInteger(option.points) && option.points >= 0 && option.points <= 2)
  );
  const hasAllScorePlaylists = Array.from({ length: 11 }, (_, index) => index).every(
    (scoreKey) => Object.hasOwn(scorePlaylists, scoreKey)
  );
  const allScorePlaylistsHaveLinks = Object.values(scorePlaylists).every((scoreEntry) =>
    scoreEntry.playlist.every((song) => song.title && song.spotifyUrl)
  );

  if (
    !hasFiveQuestions ||
    !allQuestionsHaveThreeOptions ||
    !allOptionCategoriesExist ||
    !allOptionPointsAreValid ||
    !hasAllScorePlaylists ||
    !allScorePlaylistsHaveLinks
  ) {
    console.error("Quiz ayarları geçersiz. Lütfen soru, kategori ve playlist verisini kontrol et.");
    return false;
  }

  return true;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("is-hidden"));
  screens[name].classList.remove("is-hidden");
}

function renderQuestion(index) {
  const currentQuestion = questions[index];
  if (!currentQuestion) {
    return;
  }

  quizProgress.textContent = `Soru ${index + 1}/${questions.length}`;
  questionTitle.textContent = currentQuestion.question;
  answerOptions.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    const optionEmoji = categoryEmojiMap[option.category] || "🎧";
    const textSpan = document.createElement("span");
    textSpan.textContent = option.text;
    const emojiSpan = document.createElement("span");
    emojiSpan.className = "option-emoji";
    emojiSpan.textContent = optionEmoji;
    optionButton.append(textSpan, emojiSpan);
    optionButton.dataset.category = option.category;
    optionButton.dataset.points = String(option.points);
    answerOptions.append(optionButton);
  });
}

function incrementScore(points) {
  totalScore += points;
}

function getWinningCategory() {
  if (totalScore <= 3) {
    return "night-vibes";
  }

  if (totalScore <= 7) {
    return "chill";
  }

  return "energetic";
}

function getScoreLevel(score) {
  if (score <= 3) {
    return "Sakin";
  }

  if (score <= 7) {
    return "Dengeli";
  }

  return "Yüksek Enerji";
}

function getCategoryLevelMessage(category, level) {
  const messages = {
    energetic:
      "Bugün yüksek tempodasın; güçlü beat ve motivasyon veren parçalar tam senlik.",
    chill:
      "Rahat ama akıştasın; huzurlu ve hafif hareketli bir denge kuruyorsun.",
    "night-vibes":
      "Gece ruhunda daha derin ve melankolik bir tondasın; karanlık tınılar öne çıkıyor.",
  };

  return messages[category] || "Ruh haline uygun bir liste hazırlandı.";
}

function renderResult(category) {
  const result = personalityResults[category];
  const scorePlaylist = scorePlaylists[totalScore];
  if (!result) {
    resultTitle.textContent = "Sonuç görüntülenemedi";
    resultDescription.textContent = "Lütfen quizi yeniden başlat.";
    resultMeta.innerHTML = "";
    resultPlaylist.innerHTML = "";
    return;
  }
  if (!scorePlaylist) {
    resultTitle.textContent = "Sonuç görüntülenemedi";
    resultDescription.textContent = "Puan listesi bulunamadı. Lütfen quizi yeniden başlat.";
    resultMeta.innerHTML = "";
    resultPlaylist.innerHTML = "";
    return;
  }

  const scoreLevel = getScoreLevel(totalScore);
  const emoji = categoryEmojiMap[category] || "🎵";
  const levelMessage = getCategoryLevelMessage(category, scoreLevel);
  resultTitle.textContent = `${emoji} ${result.title}`;
  resultDescription.textContent = levelMessage;
  resultMeta.innerHTML = "";
  resultPlaylist.innerHTML = "";

  const metaItems = [
    `Ritim Skoru: ${totalScore}`,
    `Seviye: ${scoreLevel}`,
    `Vibe: ${scorePlaylist.vibe}`,
  ];
  metaItems.forEach((value) => {
    const pill = document.createElement("span");
    pill.className = "meta-pill";
    pill.textContent = value;
    resultMeta.append(pill);
  });

  scorePlaylist.playlist.forEach((song) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = song.spotifyUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = song.title;
    item.append(link);
    resultPlaylist.append(item);
  });
}

function resetQuizState() {
  currentQuestionIndex = 0;
  totalScore = 0;
  isTransitioningQuestion = false;
}

function handleAnswerSelection(category, points) {
  if (isTransitioningQuestion) {
    return;
  }

  isTransitioningQuestion = true;
  incrementScore(points);
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion(currentQuestionIndex);
    isTransitioningQuestion = false;
    return;
  }

  const winningCategory = getWinningCategory();
  renderResult(winningCategory);
  showScreen("result");
  isTransitioningQuestion = false;
}

startQuizButton.addEventListener("click", () => {
  if (!validateQuizConfiguration()) {
    return;
  }

  resetQuizState();
  renderQuestion(currentQuestionIndex);
  showScreen("quiz");
});

answerOptions.addEventListener("click", (event) => {
  const targetButton = event.target.closest("button[data-category]");
  if (!targetButton) {
    return;
  }

  const points = Number(targetButton.dataset.points);
  handleAnswerSelection(targetButton.dataset.category, Number.isNaN(points) ? 0 : points);
});

retryQuizButton.addEventListener("click", () => {
  resetQuizState();
  showScreen("landing");
});
