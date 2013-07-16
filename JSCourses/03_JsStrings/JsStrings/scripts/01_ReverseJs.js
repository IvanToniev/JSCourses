var word ='petkan';
document.getElementById('content').innerHTML+=word;
var revWord=word.split('').reverse().join('');
function showAnswer(){
    console.log('Your word is: '+ word);
    console.log('The reversed word is: ' + revWord);
    document.getElementById('reversed').innerHTML+=revWord;
}
