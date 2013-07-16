var expr='(a+b)*c+(3-a)()';
document.getElementById('content').innerHTML+=expr;
var firstCounter = 0;
var exprLen=expr.length;
var i=0;
function showAnswer(){
for (i = 0; i < exprLen && firstCounter >= 0; i++)
{
    if (expr[i] == '(')
    {
        firstCounter++;
    }
    if (expr[i] == ')')
    {
        firstCounter--;
    }
}
if (firstCounter < 0)
{
    console.log('Bad expression.');
    document.getElementById('answer').innerHTML+='Bad expression.';
}
else if (firstCounter == 0 && expr.indexOf(')') < expr.indexOf('('))
{
    console.log('Bad expression.');
    document.getElementById('answer').innerHTML+='Bad expression.';
}
else if (firstCounter == 0 && expr.indexOf(')') > expr.indexOf('('))
{
    console.log('Right expression.');
    document.getElementById('answer').innerHTML+='Right expression.';
}
else if (firstCounter > 0)
{
    console.log('Bad expression.');
    document.getElementById('answer').innerHTML+='Bad expression.';
}
}