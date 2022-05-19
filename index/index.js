/*function clock(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes;
}
setInterval(clock, 1000);
clock();*/

window.onload = function () {     //Функция, кот. будет открываться при загрузке страницы
    window.setInterval(function ()  {          //чтобы фун-ция вызывалась регулярно
        let date = new Date();

        //создаем 3 переменные, кот. хранят часы, минуты и секунды
        let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();

        //вызываем переменные
        let clock = hours + ':' + minutes;
        document.getElementById('clock').innerHTML = clock;
    }, 1000);
};