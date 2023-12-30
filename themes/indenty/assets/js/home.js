const animatedTexts = Array.from(document.querySelectorAll('.layer .animated-texts .animated-text'));

let displayedTextIndex = 0;

const switchText = function(textsArray, index){
    let nextIndex = index + 1;
    if(nextIndex >= textsArray.length) nextIndex = 0;
    textsArray[index].classList.add('hidden');
    textsArray[nextIndex].classList.remove('hidden');
    displayedTextIndex = nextIndex;
}

if(animatedTexts.length > 1){
    const switchTextInterval = window.setInterval(() => switchText(animatedTexts, displayedTextIndex), 4300);
}