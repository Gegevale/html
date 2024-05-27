let wordList = [];
let word = "";
let wordSize = 6; //tamanho de cada palavra
let attempts = 6;
let l = 0; //linha atual
let c = 0; //coluna atual 

let endGame = false;

window.onload = function (){
    wordList = ["mitose", "meiose", "celula", "genoma", "ciclos"] //Inicializando lista de palavras
    let rand_index = Math.floor(Math.random() * wordList.length) 
    //gera numero aleatorio
    word = wordList[rand_index]
    console.log(word)//Imprime a palavra escolhida
    document.addEventListener("keyup", (e) => {
        console.log(e)
        processInput(e)
    })
}

function processInput(e){
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        if(c < wordSize){
            let currTile = document.getElementById(l.toString() + '-' + c.toString())
            if (currTile.innerText == ""){
                currTile.innerText = e.code[3]
                c = c + 1
            }
        }  
    } else if (e.code == "Backspace") {
        if (c > 0 && c <= wordSize) {
            c = c - 1
            let currTile = document.getElementById(l.toString() + '-' + c.toString());
        currTile.innerText = ""
        }
    } else if (e.code == "Enter" || e.code == "NumpadEnter"){
        update()
    }

    if(!endGame && l == attempts){
        endGame = true;
        document.getElementById("answer").innerText = word.toUpperCase()
        setTimeout(function (){
            window.location.reload();
        }, 5000)
    }
}

function update(){
    let guess = ""
    for (let c = 0; c < wordSize; c++){
        let currTile = document.getElementById(l.toString() + '-' + c.toString())
        let letter = currTile.innerText
        guess = guess + letter
    }

    guess = guess.toLowerCase()
    console.log(guess)

    let correct = 0;

    let letterCount = {}
    for(let i = 0; i < word.length; i++){
        let letter = word[i];

        if (letterCount[letter]){
            letterCount[letter] += 1
        }else{
            letterCount[letter] = 1
        }
    }
    console.log(letterCount);

    for (let c = 0; c < wordSize; c++){
        let currTile = document.getElementById(l.toString()+'-'+c.toString())
        let letter = currTile.innerText;
        letter = letter.toLowerCase();

        if(word[c] == letter){
            currTile.classList.add("correct")
            correct = correct + 1 
            letterCount[letter] = letterCount[letter] -1
        }

        if(correct == wordSize){
            endGame = true;
            setTimeout(function (){
                window.location.reload();
            }, 5000)
        }

    }

    for (let c = 0; c < wordSize; c++){
        let currTile = document.getElementById(l.toString()+'-'+c.toString())
        let letter = currTile.innerText;
        letter = letter.toLowerCase();

        if (!currTile.classList.contains("correct")){ 
            if(word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present")
                letterCount[letter] = letterCount[letter] - 1
            } else{
                currTile.classList.add("absent")
            } 
        }
    }

    l = l+1//novalinha
    c = 0//volta para a coluna inicial
}