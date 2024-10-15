
const qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
  ];
  
  //lowercase
  function toLower(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) { 
        result += String.fromCharCode(code + 32);
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  //remove punctuation
  function removePunctuation(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '?' && str[i] !== '!' && str[i] !== '.' && str[i] !== ',') {
        result += str[i];
      }
    }
    return result;
  }
  
  //split a string by spaces 
  function splitBySpaces(str) {
    let words = [];
    let word = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        word += str[i];
      } else if (word.length > 0) {
        words.push(word);
        word = '';
      }
    }
    if (word.length > 0) {
      words.push(word);
    }
  
    return words;
  }
  
  function wordExists(word, wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === word) {
        return true;
      }
    }
    return false;
  }
  
  //chatbot response
  function chatbotResponse(userQuestion, qaPairs) {
    userQuestion = toLower(userQuestion);
    userQuestion = removePunctuation(userQuestion);
    let userWords = splitBySpaces(userQuestion); 
  
    let bestMatch = null;
    let maxMatchCount = 0;
  
    //Compare with each predefined question
    for (let i = 0; i < qaPairs.length; i++) {
      let predefinedQuestion = toLower(qaPairs[i].question);
      predefinedQuestion = removePunctuation(predefinedQuestion);
      let predefinedWords = splitBySpaces(predefinedQuestion);
  
      //question and predefined question
      let commonWordsCount = 0;
      for (let j = 0; j < predefinedWords.length; j++) {
        if (wordExists(predefinedWords[j], userWords)) {
          commonWordsCount++;
        }
      }
  
      //question has more common words
      if (commonWordsCount > maxMatchCount) {
        maxMatchCount = commonWordsCount;
        bestMatch = qaPairs[i].answer;
      }
    }
  
    //default response
    return bestMatch ? bestMatch : "Sorry, I don't understand the question.";
  }
  
  const userInput = "What's the weather like today?";
  // const userInput = "How can I help you?";
  const response = chatbotResponse(userInput, qaPairs);
  console.log(response); 
  