var randomnum = Math.floor(Math.random() * 100)+1;
var guess = 0;
function guessNumber()
{
    var num = document.getElementById('in').value;
    
    if (num > 100 || num < 1 || num ==='')
    {
        document.getElementById('out').innerText = 'Invalid Input';
    }
    else
    {
        guess++;
        var num = parseInt(document.getElementById('in').value);
        if (num === randomnum)
        {
            document.getElementById('out').innerHTML = '<i><b>You guessed the answer correctly in '+ guess + ' guesses!<b></i>';
        }
        else if (num > randomnum)
        {
            document.getElementById('out').innerText = 'Guess a smaller number!';
        }
        else
        {
            document.getElementById('out').innerText = 'Guess a bigger number!';
        }
    }    
}

function replay(){
    document.getElementById('in').value = "";
    document.getElementById('out').innerText = '';
}

