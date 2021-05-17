const complimentButton = document.getElementById('btn-compliment');
const complimentDiv = document.querySelector('.compliment');
const slideList = document.querySelectorAll('.swiper-slide');
const confirmButton = document.querySelector('#confirm');

complimentButton.addEventListener('click', () => {
    complimentButton.style.display = 'none';
    complimentDiv.style.display = 'block';
    if (window.screen.width <= 1000) {
        window.scrollTo(0, document.body.scrollHeight);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 12
        });
    }
});

slideList.forEach(slide => {
    slide.addEventListener('click', () => {
        slide.classList.toggle('active');
    });
});

confirmButton.addEventListener('click', () => window.alert('Avaliação enviada com sucesso!'));