
const score={
    Win:0,
    Lose:0,
    Tie:0
};

updateScore();

function playerMove(move){
    let computer=computerMove();
    let result='';
    if(move==='Rock')
    {
        if(computer==='Rock')
        {
            result='Tie';
        }
        else if(computer==='Paper')
        {
            result='Lose';
        }

        else{
            result='Win';
        }
    }
    if(move==='Paper')
    {
        if(computer==='Rock')
        {
            result='Win';
        }
        else if(computer==='Paper')
        {
            result='Tie';
        }
        else{
            result='Lose';
        }
    }
    if(move==='scissors')
    {
        if(computer==='Rock')
        {
            result='Lose';
        }
        else if(computer==='Paper')
        {
            result='Win';
        }
        else{
            result='Tie';
        }
    }

    

    if(result==='Win')
    {
        score.Win+=1;
    }
    else if(result==='Lose'){
        score.Lose+=1;
    }
    else{
        score.Tie+=1;
    }
    updateScore();
    document.querySelector(".js-move").innerHTML=`You picked  <img src="img/${move}-emoji.png" class="icon-result">.Computer picked  <img src="img/${computer}-emoji.png" class="icon-result">`;
    document.querySelector(".result").innerHTML=`${result}`;
        
 //   alert(`You picked  ${move}.Computer picked ${computer}.${result}
//Wins = ${score.Win}, Loss =  ${score.Lose}, Tie = ${score.Tie}`);
}
    
    function updateScore(){
        document.querySelector(".score").innerHTML=`Wins = ${score.Win}, Loss =  ${score.Lose}, Tie = ${score.Tie}`;
    } 
function computerMove(){
    let random=Math.random();
    let computer='';

    if(random>= 0 && random<1/3)
    {
        computer='Rock';
    }
    else if(random>= 1/3 && random <=2/3)
    {
        computer='paper';
    }
    else{
        computer='scissors';
    }
    return computer;
}
