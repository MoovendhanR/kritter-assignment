
function normalizeString(inputStr) {
    let result = '';
    let word = '';
    let inSpace = false;
    let capitalizeNext = true;
  
    for (let i = 0; i < inputStr.length; i++) {
        let char = inputStr[i];
  
        //Remove extra spaces,special characters
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            if (capitalizeNext && (char >= 'a' && char <= 'z')) {
                word += String.fromCharCode(char.charCodeAt(0) - 32); //uppercase
            } else if (!capitalizeNext && (char >= 'A' && char <= 'Z')) {
                word += String.fromCharCode(char.charCodeAt(0) + 32); //lowercase
            } else {
                word += char;
            }
            capitalizeNext = false; 
            inSpace = false;
        } else if (char === ' ') {
            //multiple spaces to single space
            if (!inSpace && word.length > 0) {
                if (result.length > 0) {
                    result += ' ';
                }
                result += word;
                word = ''; // Reset word
            }
            inSpace = true; //space
            capitalizeNext = true; // Next word capitalized
        }
    }
  
    // adding last word if  exists
    if (word.length > 0) {
        if (result.length > 0) {
            result += ' ';
        }
        result += word;
    }
  
    return result;
  }
  
  let inputStr = " Hello! World@ This is a Test!. ";
  let normalizedStr = normalizeString(inputStr);
  console.log(normalizedStr);
  