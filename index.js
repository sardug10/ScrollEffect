function scrollEffect(){
    var heading = document.querySelector('.heading');
    var content = document.querySelector('.content');
    var headingDist = heading.getBoundingClientRect().top;
    var contDist = content.getBoundingClientRect().top;
    var windowsSize1 = window.innerHeight / 0.8;
    var windowsSize2 = window.innerHeight / 2.1;

    if(headingDist < windowsSize1){
        heading.classList.add('textappear');
    }
    if(contDist < windowsSize2){
        content.classList.add('textappear');
    }
    console.log(headingDist);
}
window.addEventListener('scroll',scrollEffect);