//user elements
const documentById = function(id){
    return document.getElementById(id)
}

//counter closure functions
const userCounter = (function(){
    let counter = 0;
    function countup(){
        counter++;
        return counter;  
    }
    countup.reset = () => counter = 0;
  return countup;
})()

const randomCounter = (function(){
    let counter = 0;
    function countup(){
        counter++;
        return counter;
    }
    countup.reset = () => counter = 0;
  return countup
})()

//conclusion
const userWinMessage = function(target, random){
    //random phrases
    const phrases = ["beats", "smashes", "destroys", "obliterates"];
    let RandomPhrase = Math.floor(Math.random()*phrases.length);
    const WinPhrase = phrases[RandomPhrase]

    const WinEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽", "💪","🏋"];
    let randomEmojis = Math.floor(Math.random()*WinEmojis.length);
    const emoji = WinEmojis[randomEmojis]

    const message = `You win!, ${target} ${WinPhrase} ${random}! ${emoji}`
    document.getElementById("message").innerHTML= message;
    // updating userCounter
    const userCounterEl = document.getElementById("userCounterEl");
    return userCounterEl.innerHTML=userCounter()
}
// conclusion messages
const userLoseMessage = function(target, random){
    const LosePhrases = ["beats", "smashes", "destroys", "obliterates"];
    const RandLosePhrase = Math.floor(Math.random()*LosePhrases.length);
    const LosePhrase =  LosePhrases[RandLosePhrase]

    const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽"]
    const randomLoseEmojis = Math.floor(Math.random()*loseEmojis.length);
    const RandomLoseEmoji = loseEmojis[randomLoseEmojis]

    const message = `You lose, ${random} ${LosePhrase} ${target}! ${RandomLoseEmoji}`
    document.getElementById("message").innerHTML= message;
    //updating counter
    const randomCounterEl = document.getElementById("randomCounterEl");
    return randomCounterEl.innerHTML= randomCounter()
}

const drawMessage = function(target, random){
    const tieEmojis = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"];
    const randomTieEmojis = Math.floor(Math.random()*tieEmojis.length);
    const RandomTieEmoji = tieEmojis[randomTieEmojis]

    const message = `${random} matches ${target}. Its a tie! ${RandomTieEmoji}`
    document.getElementById("message").innerHTML= message;
}
// conclusion messages end
const comparisions = function(target, randomChoice){
    if (target === randomChoice){
        return{
            message:drawMessage(randomChoice, target)}
    }
    if(target === 'rock' && randomChoice === 'scissors'){
        return{
            message:userWinMessage(target, randomChoice)}
    }else if(target === 'rock' && randomChoice === 'paper'){
        return{
            message:userLoseMessage(target, randomChoice)}
    }
    if(target === 'paper' && randomChoice === 'rock'){
        return{
            message:userWinMessage(target, randomChoice)}
    }else if(target === 'paper' && randomChoice === 'scissors'){
        return{
            message:userLoseMessage(target, randomChoice)}}

    if(target === 'scissors' && randomChoice === 'paper'){
        return{
            message:userWinMessage(target, randomChoice)}}
    else if(target === 'scissors' && randomChoice === 'rock'){
        return{
            message:userLoseMessage(target, randomChoice)}}
}

const resolve = function(e){

    const UserRock = documentById('user_rock');
    const UserPaper = documentById('user_paper');
    const UserScissors = documentById('user_scissors');

    const rock = documentById('random_rock');
    const paper = documentById('random_paper');
    const scissors = documentById('random_scissors');
    
    // user choice
    const target = e.target.id.split('_')[1];
    //random choice
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*options.length)
    const randomChoice =  options[random]

    randomImagebg(randomChoice, rock, paper, scissors)
    userImagebg(target, UserRock, UserPaper, UserScissors)
    comparisions(target, randomChoice); 
}

const randomImagebg = function(randomChoice, rock, paper, scissors){
    if(randomChoice === 'rock'){
        return {rock:rock.style.backgroundColor="#fa8ce1",
        paper:paper.style.opacity="0.2",
        scissors:scissors.style.opacity="0.2",
        rock:rock.style.opacity=""}
    }else{
        rock.style.backgroundColor=""
        paper.style.opacity=""
        scissors.style.opacity=""
    }

    if(randomChoice === 'paper'){
        return {paper:paper.style.backgroundColor="#fa8ce1",
        rock:rock.style.opacity="0.2",
        scissors:scissors.style.opacity="0.2",
        paper: paper.style.opacity=""}
    }else{
        paper.style.backgroundColor=""
        rock.style.opacity=""
        scissors.style.opacity=""
        paper.style.opacity=""
    }

    if(randomChoice === 'scissors'){
        return{scissors:scissors.style.backgroundColor="#fa8ce1",
        rock:rock.style.opacity="0.2",
        paper:paper.style.opacity="0.2",
        scissors:scissors.style.opacity=""}
    }else{
        scissors.style.backgroundColor=""
        rock.style.opacity=""
        scissors.style.opacity=""
        paper.style.opacity=""
    }
}

const userImagebg = function(userChoice, rock, paper, scissors){
    if(userChoice === 'rock'){
        return {rock:rock.style.backgroundColor="#fa8ce1",
        paper:paper.style.opacity="0.2",
        scissors:scissors.style.opacity="0.2",
        rock:rock.style.opacity=""}
    }else{
        rock.style.backgroundColor=""
        paper.style.opacity=""
        scissors.style.opacity=""
    }

    if(userChoice === 'paper'){
        return {paper:paper.style.backgroundColor="#fa8ce1",
        rock:rock.style.opacity="0.2",
        scissors:scissors.style.opacity="0.2",
        paper: paper.style.opacity=""}
    }else{
        paper.style.backgroundColor=""
        rock.style.opacity=""
        scissors.style.opacity=""
        paper.style.opacity=""
    }

    if(userChoice === 'scissors'){
        return{scissors:scissors.style.backgroundColor="#fa8ce1",
        rock:rock.style.opacity="0.2",
        paper:paper.style.opacity="0.2",
        scissors:scissors.style.opacity=""}
    }else{
        scissors.style.backgroundColor=""
        rock.style.opacity=""
        scissors.style.opacity=""
        paper.style.opacity=""
    }
}

//user buttons loop
const buttons = document.querySelectorAll(".user").forEach(item=>{
    item.addEventListener("click",resolve)
})

const clear = document.querySelector(".main_container").addEventListener("click", (e)=>{
    const rock = document.getElementById('user_rock')
    const paper = document.getElementById('user_paper')
    const scissors = document.getElementById('user_scissors')

    if(e.target !== rock && e.target !== paper && e.target !== scissors){
        return {paper:paper.style.backgroundColor="#f69687",
                scissors:scissors.style.backgroundColor="#aaec9d",
                rock:rock.style.backgroundColor="#c089a5",
                paper:paper.style.opacity="",
                scissors:scissors.style.opacity="",
                rock:rock.style.opacity=""}
    }   
})

const reset = document.getElementById("reset").addEventListener("click",function(){
   userCounter.reset()
   randomCounter.reset()
   const userCounterEl = document.getElementById("userCounterEl");
   const randomCounterEl = document.getElementById("randomCounterEl");
   userCounterEl.innerHTML=0
   randomCounterEl.innerHTML=0

    const rock = document.getElementById('random_rock')
    const paper = document.getElementById('random_paper')
    const scissors = document.getElementById('random_scissors')

    document.getElementById("message").innerHTML='Want to play?';
    return {paper:paper.style.backgroundColor="#f69687",
                scissors:scissors.style.backgroundColor="#aaec9d",
                rock:rock.style.backgroundColor="#c089a5",
                paper:paper.style.opacity="",
                scissors:scissors.style.opacity="",
                rock:rock.style.opacity=""}
})