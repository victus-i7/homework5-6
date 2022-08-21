"use strict";
const t = document.querySelector('#Masofa');
const mers = document.querySelector('#mers');
const bmw = document.querySelector('#bmw');
const audi = document.querySelector('#audi');
const air_plane = document.querySelector('#air_plane');
const mersQoldiq = t.value / 3.6;
const bmwQoldiq = t.value / 20.1;
const audiQoldiq = t.value / 70;
const air_planeQoldiq = t.value / 800;

function min(value) {
    const a = value * 60;
    const b = a % 60 / 60;
    const c = value - b;
    const d = b * 60;
    return Math.round(c) + ' Soat ' + ' / ' + Math.round(d) + 'Minut';
}


function vaqt() {
    mers.textContent = min(t.value / 3.6);
    bmw.textContent = min(t.value / 20.1);
    audi.textContent = min(t.value / 70);
    air_plane.textContent = min(t.value / 800);
}