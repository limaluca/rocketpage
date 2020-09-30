// selecting an object (a class) called .modalOverlay
const modalOverlay = document.querySelector('.modalOverlay');

// selecting every object named .card using querySelectorALL
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        const videoId = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${videoId}`
    })
}

// building closing overlay function
document.querySelector('.closeModal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})