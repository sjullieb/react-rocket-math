const songList = {
  1: "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(
    ", "
  ),
  2: "Twenty-five years and my life is still, Trying to get up that great big hill of hope, For a destination, I realized quickly when I knew I should, That the world was made up of this brotherhood of man, For whatever that means, And so I cry sometimes when I'm lying in bed, Just to get it all out what's in my head, And I, I am feeling a little peculiar, And so I wake in the morning and I step outside, And I take a deep breath and I get real high, and I Scream from the top of my lungs, What's going on?, And I say hey yeah yeah hey yeah yeah, I said hey what's going on?, And I say hey yeah yeah hey yeah yeah,I said hey what's going on?".split(
    ", "
  )
};

export const initialState = {
  shownTestId: null,
  user: {
    id: 25,
    name: "Anya",
    username: "anyat",
    operator: "+",
    level: "E",
    testTime: 10000,
    tests: [1, 2]
  },
  currentTest: {
    factIndex: 0,
    level: "E",
    operator: "+",
    timeLeft: null,
    correctAnswers: 0,
    complete: "false",
    pass: "false",
    timestamp: null,
    facts: [
      { term1: 7, term2: 2, result: 9, answer: null },
      { term1: 5, term2: 9, result: 14, answer: null }
    ]
  },

  testsById: {
    1: {
      id: 1,
      userId: 1,
      operator: "+",
      level: "D",
      correctAnswers: 0,
      pass: "false",
      timestamp: null,
      facts: [
        { term1: 2, term2: 3, result: 5, answer: 6 },
        { term1: 5, term2: 6, result: 11, answer: null }
      ]
    },
    2: {
      id: 2,
      userId: 1,
      operator: "+",
      level: "D",
      correctAnswers: 2,
      pass: "true",
      timestamp: null,
      facts: [
        { term1: 2, term2: 3, result: 5, answer: 5 },
        { term1: 5, term2: 6, result: 11, answer: 11 }
      ]
    }
  },

  currentFactIndex: 0,
  currentSet: {
    timeStamp: null,
    operator: "+",
    facts: [
      { term1: 7, term2: 2, result: 9, answer: 10 },
      { term1: 5, term2: 9, result: 14, answer: null }
    ]
  },
  masterSets: {
    "A+": {
      id: "A+",
      operator: "+",
      level: "A",
      facts: [1, 2, 3]
    },
    "B+": {
      operator: "+",
      level: "B",
      facts: [2, 4, 5]
    },
    "C+": {
      operator: "+",
      level: "C",
      facts: [2, 3, 5]
    },
    "D+": {
      operator: "+",
      level: "D",
      facts: [1, 4, 5]
    },
    "E+": {
      operator: "+",
      level: "E",
      facts: [2, 6, 8]
    },
    "F+": {
      operator: "+",
      level: "F",
      facts: [3, 1, 10]
    },
    "G+": {
      operator: "+",
      level: "G",
      facts: [6, 8, 5]
    },
    "H+": {
      operator: "+",
      level: "H",
      facts: [4, 9, 5]
    },
    "I+": {
      operator: "+",
      level: "I",
      facts: [7, 3, 10]
    },
    "J+": {
      operator: "+",
      level: "J",
      facts: [3, 7, 1]
    },
    "K+": {
      operator: "+",
      level: "K",
      facts: [9, 4, 4]
    },
    "L+": {
      operator: "+",
      level: "L",
      facts: [10, 8, 5]
    },
    "M+": {
      operator: "+",
      level: "M",
      facts: [1, 9, 3]
    }
  },
  masterFacts: {
    1: { term1: 1, term2: 3, result: 4 },
    2: { term1: 2, term2: 3, result: 5 },
    3: { term1: 3, term2: 4, result: 7 },
    4: { term1: 4, term2: 2, result: 6 },
    5: { term1: 5, term2: 3, result: 8 },
    6: { term1: 6, term2: 5, result: 11 },
    7: { term1: 7, term2: 3, result: 10 },
    8: { term1: 8, term2: 4, result: 12 },
    9: { term1: 9, term2: 2, result: 11 },
    10: { term1: 1, term2: 9, result: 10 }
  },
  // ---------------------------------
  currentSongId: 1,
  songsById: {
    1: {
      title: "Bye Bye Bye",
      artist: "N'Sync",
      songId: 1,
      songArray: songList[1],
      arrayPosition: 0
    },
    2: {
      title: "What's Goin' On",
      artist: "Four Non-Blondes",
      songId: 2,
      songArray: songList[2],
      arrayPosition: 0
    }
  }
};
