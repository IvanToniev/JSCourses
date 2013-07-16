var text='We are living in a yellow submarine.';
document.getElementById('content').innerHTML+=text;

var count = text.match(/'is'/g);

console.log(count.length);