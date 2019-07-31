var menu = document.querySelector('.main_menu');
var count = 1;
var btn = document.querySelector('.humberger-btn').onclick = function(){
    if(count==1){
        menu.style.display = 'block';
        count = 2;
    }
    else if(count == 2){
        menu.style.display = 'none';

        count = 1;
    }
}
