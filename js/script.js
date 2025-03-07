function transliterate() {
    
    function changeLetter(letter){
        let finalForms = 'ךםןףץ';
        let normalForm = 'כמנפצ'
        let counter = finalForms.indexOf(letter);
        if (counter>-1)
            letter = normalForm[counter]

        let hebrewAlphabet = 'אבגדהוזחטיכלמנסעפצקרשת';
        let phoenicialAlphabet = '𐤀𐤁𐤂𐤃𐤄𐤅𐤆𐤇𐤈𐤉𐤊𐤋𐤌𐤍𐤎𐤏𐤐𐤑𐤒𐤓𐤔𐤕';
        let idx = hebrewAlphabet.indexOf(letter);
        if (idx > -1)
            return [phoenicialAlphabet[2*idx],phoenicialAlphabet[2*idx+1]].join('')
        let xdi = phoenicialAlphabet.indexOf(letter);
        if (xdi>-1)
            return hebrewAlphabet[(xdi-1)/2];
        if (letter == ' ')
            return '•';
        if (letter == '•')
            return ' ';
        return letter;
    }
    const map = Array.prototype.map;
    let input = document.getElementById("input").value;
    //let output = map.call(input, changeLetter).join('');
    let output = map.call(input, changeLetter).join('');
    document.getElementById("output").value = output;
}
