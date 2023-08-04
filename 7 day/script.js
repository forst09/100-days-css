'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('#menuBtn');
    const searchBtn = document.querySelector('#searchBtn');
    function addActive(btn, element) {
        if (btn) {
            btn.addEventListener('click', function () {
                if (document.querySelector(`${element}`).classList.contains('active')) {
                    document.querySelector(`${element}`).classList.remove('active');
                }
                else {
                    document.querySelector(`${element}`).classList.add('active');
                }
            })
        }
    }
    addActive(menuBtn, '.menu');
    addActive(searchBtn, '.notifications__search-input');

});