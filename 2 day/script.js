document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('burger');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
    });
}); 