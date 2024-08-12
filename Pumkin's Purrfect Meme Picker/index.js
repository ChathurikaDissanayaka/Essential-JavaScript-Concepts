import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn =  document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio')
    
    for(let radioItem of radioArray){
        radioItem.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function getMatchingCatsArray(){
    const isGif = gifsOnlyOption.checked

    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value

        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            return cat.emotionTags.includes(selectedEmotion)
        })
        
        return console.log(matchingCatsArray) 
    }
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>
        ` 
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




