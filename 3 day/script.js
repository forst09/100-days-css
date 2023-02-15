document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('burger');
    if (burger) {
        burger.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
}); 