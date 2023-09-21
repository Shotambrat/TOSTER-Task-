// Не судите резко, я просто рандомно взял
const finaleTime = new Date("January 1, 2024 00:00:00").getTime();

const timer = () =>{
    const currentTime = new Date().getTime();
    let difference = finaleTime - currentTime;

    let hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60*60));
    let minutes = Math.floor(difference % (1000*60*60)/ (1000 *60));
    let seconds = Math.floor(difference % (1000*60) / 1000);

    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;   

    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;
}
timer();
// ВЫзываем каждые 1000 мс
setInterval(timer, 1000);


// Реализация свайпеора)
const caruselElem = document.querySelectorAll('.carusel-elem__item');

caruselElem.forEach(el => {

    el.addEventListener('click', (e) => {
        document.querySelector('.carusel__preview-img').src = el.getAttribute('src');
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        el.className += " active";
    })
});


// РЕЙТИНГ система
const stars = document.querySelectorAll(".views__rate img");

stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.src = "/public/images/property-1-fill.png" : star.src = "/public/images/property-1-stroke.png"

        })
        document.querySelector(".views-zvezda p").innerHTML = "(11)";
    })
})