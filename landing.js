let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(num){
    showDivs(slideIndex += num);
}




function showDivs(num){
    const slides = document.getElementsByClassName('slideShow');
    console.log(slides);
    if (num > slides.length){
        slideIndex = 1;
    }
    if (num < 1){
        slideIndex = slides.length;
    }
    for (let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        console.log('for loop i --->' + i);
    }
    slides[slideIndex-1].style.display = 'block';
}


