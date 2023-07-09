const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input-word").value;
    fetch(`${url} ${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `  <div class="flex justify-between mt-20 text-center word">
            <h3 class="text-3xl text-dark font-semibold">${inpWord}</h3>
            <button onclick="playSound()"  class="text-2xl text-purple-500"><ion-icon name="volume-high"></ion-icon></button>
        </div>

        <div class="details flex gap-3 text-gray-500 m-2.5 text-sm">
            <p> ${data[0].meanings[0].partOfSpeech} </p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning text-base text-gray-500">
       ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example  text-gray-500 font-serif border-l-4 border-purple-500 pl-5 mt-5">
        ${data[0].meanings[0].definitions[0].example || " "}
        </p> `

            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
            sound.addEventListener('click', ()=>{
                sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);  
            })
        })
        .catch(() => {
            result.innerHTML = `<h3 class="text-center"> Couldn't Find The Word </h3>`
        })
})

function playSound() {
  sound.play()
}
// if(create_sound !== undefined){
//     create_sound.then(()=>{
//         console.log('playing')
//     }).catch(()=>{
//         console.log(e.message)
//     })
//   }