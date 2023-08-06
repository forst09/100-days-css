'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('#menuBtn');
    const searchBtn = document.querySelector('#searchBtn');
    function addActive(btn, element, element2) {
        if (btn) {
            btn.addEventListener('click', function () {
                document.querySelector(`${element}`).classList.toggle('active');
                if (element2) {
                    document.querySelector(`${element2}`).classList.toggle('moved');
                }
            })
        }
    }
    addActive(menuBtn, '.menu', '.notifications');
    addActive(searchBtn, '.notifications__search-input');

});