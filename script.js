const optionsMachine = ['rock','paper','scissors','lizard','spock']
let result = document.querySelector('.result')
let pointHuman = document.querySelector('.point-human')
let pointMachine = document.querySelector('.point-machine')
let playsHuman = document.querySelector('.plays-human')
let playsMachine = document.querySelector('.plays-machine')
let info = document.querySelector('.info')
let placarHuman = 0
let placarMachine = 0



function playHuman(human){
    console.log(human)    
    play(human, playMachine())
    if(human === 'rock'){
        playsHuman.innerHTML = '&#x1F44A;'
    } else if (human === 'paper'){
        playsHuman.innerHTML = '&#x1F590;'
    } else if(human === 'scissors'){
        playsHuman.innerHTML = '&#x270C;'
    } else if(human === 'lizard'){
        playsHuman.innerHTML = '&#x1F98E;'
    } else{
        playsHuman.innerHTML = '&#x1F596;'
    }
    setTimeout( () => {
        playsHuman.innerHTML = '&#x2753;'
        playsMachine.innerHTML = '&#x2753;'

    }, 2000)
    
}

function playMachine(){
    let random = Math.floor(Math.random() * 5)
    let result = optionsMachine[random]
    console.log(result)
    if(result === 'rock'){
        playsMachine.innerHTML = '&#x1F44A;'
    } else if (result === 'paper'){
        playsMachine.innerHTML = '&#x1F590;'
    } else if(result === 'scissors'){
        playsMachine.innerHTML = '&#x270C;'
    } else if(result === 'lizard'){
        playsMachine.innerHTML = '&#x1F98E;'
    } else{
        playsMachine.innerHTML = '&#x1F596;'
    }
    return result
}

function play(human,machine){
    if(human === machine){
        result.innerHTML = 'Empatou'
    } else if(
        (human === 'rock' && (machine === 'scissors' || machine === 'lizard')) || 
        (human === 'paper' && (machine === 'rock' || machine === 'spock')) ||
        (human === 'scissors' && (machine === 'paper' || machine === 'lizard')) ||
        (human === 'lizard' && (machine === 'paper' || machine === 'spock')) ||
        (human === 'spock' && (machine === 'scissors' || machine === 'rock'))){
            placarHuman++
            pointHuman.innerHTML = placarHuman 
            result.innerHTML = 'Você ganhou!!'
        } else{
            placarMachine++
            pointMachine.innerHTML = placarMachine
            result.innerHTML = 'Você perdeu!!'
        }
}

function changeImgHuman(human){
    if(human === 'rock'){
        playsHuman.innerHTML = '&#x1F44A;'
    } else if (human === 'paper'){
        playsHuman.innerHTML = '&#x1F590;'
    } else if(human === 'scissors'){
        playsHuman.innerHTML = '&#x270C;'
    } else if(human === 'lizard'){
        playsHuman.innerHTML = '&#x1F98E;'
    } else{
        playsHuman.innerHTML = '&#x1F596;'
    }

}

function changeImgMachine(machine){
    if(machine === 'rock'){
        playsMachine.innerHTML = '&#x1F44A;'
    } else if (machine === 'paper'){
        playsMachine.innerHTML = '&#x1F590;'
    } else if(machine === 'scissors'){
        playsMachine.innerHTML = '&#x270C;'
    } else if(machine === 'lizard'){
        playsMachine.innerHTML = '&#x1F98E;'
    } else{
        playsMachine.innerHTML = '&#x1F596;'
    }

}
