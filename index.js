const input = document.querySelector('input');
const btn = document.querySelector('button');
const dictionary = document.querySelector('.dictionary-app');




async function dictionaryFn(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())

    return res[0]
}

    btn.addEventListener('click' , createCard)

    async function createCard(){
        const data = await dictionaryFn(input.value)
        console.log(data)

        let speechArray = []
        for(let i=0; i<data.meanings.length-1; i++){
            speechArray.push(data.meanings[i].speechArray)
        }

    dictionary.innerHTML = `
            <div class="card">
                    <div class="property">
                    <span>Word:</span>
                    <span>${data.word}</span>
                    </div> 
                   <div class="property">
                    <span>Audio:</span>
                    <audio controls src="${data.phonetics[0].audio}"></audio>
                   </div>
                   <div class="property">
                    <span>Definition:</span>
                    <span>${data.meanings[0].definitions[0].definition}</span>
                   </div>
                   <div class="property">
                    <span>Example:</span>
                    <span>${data.meanings[1].definitions[0].example}</span>
                   </div>
    
    </div>
    `
}