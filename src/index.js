const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
  
      function decode(expr) {
        let exprArr = [];
        let morseArr = [];
        let morseStr = "";
        let translatedMorse = "";
      
        // 1) разделить по 10 штук
        for (let i = 0; i < expr.length; ) {
          exprArr.push(expr.slice(i, i + 10));
          i += 10;
        }
      
        // 2) убрали все нули впереди
        for (let i = 0; i < exprArr.length; i++) {
          let index = exprArr[i].indexOf("1");
          exprArr[i] = exprArr[i]
            .split("")
            .splice(index)
            .join("");
        }
      
        // 3) разделить по 2 штуки все 10 и 11 (сделать массив массивов);
        // 4) перевести в . и -
        for (let i = 0; i < exprArr.length; i++) {
          let temporary = "";
          let secondArr = exprArr[i].split("");
      
          for (let j = 0; j < secondArr.length; ) {
            temporary = secondArr.splice(0, 2).join("");
            if (temporary == "10") {
              temporary = ".";
            } else if (temporary == "11") {
              temporary = "-";
            } else if (temporary == "*") {
              temporary = " ";
            }
            morseStr += temporary;
          }
      
          morseArr.push(morseStr);
          morseStr = "";
        }
        
        // 5) перевести в алфавит  
        
        for(let i = 0; i < morseArr.length; i++){
          if(morseArr[i] in MORSE_TABLE){
            morseArr[i] = MORSE_TABLE[morseArr[i]];
          }
        }

        return morseArr.join('');
        
      
      }


module.exports = {
    decode
}

