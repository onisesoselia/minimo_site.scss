var main_menu = document.querySelector('.main_menu');
var close_menu = document.querySelector('.close_menu');
var open_menu = document.querySelector('.open_menu');


open_menu.addEventListener('click',show);
close_menu.addEventListener('click',close);


function show(){
    main_menu.style.display = 'flex';
    main_menu.style.top = '0';
}
function close(){
    main_menu.style.top = '-200%';
}