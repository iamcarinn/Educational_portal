function addComment() {
    alert("привет");

    //добавление блока комментария
    let feed = document.getElementsByClassName('comments__feed');
    let div = document.createElement('div');
    div.className = "feed__message";
    feed.appendChild(div);

    //добавление линии
    let line = document.createElement('hr');
    div.appendChild(line);

    //добавление div с классом header
    let header = document.createElement('div');
    header.className = "header";
    div.appendChild(header);


    //добавление в header divов с классами message__owner и message__date
    let owner = document.createElement('div');
    owner.className = 'message__owner';
    header.appendChild(owner);
    let date = document.createElement('div');
    date.className = 'message__date';
    header.appendChild(date);

    //добавление img в owner
    let imgowner = document.createElement('img');
    imgowner.className = 'owner__img';
    imgowner.src = 'img_3.png';
    imgowner.alt = 'profile picture';
    owner.appendChild(imgowner);

    //добавление div в owner с именем автора
    let name = document.createElement('div');
    name.className = 'owner__name';
    name.innerText = "Имя автора </br> сообщения";
    owner.appendChild(name);


    //добавление div в date с классом date__day
    let now = new Date();
    let outputday = String(now.getDate()).padStart(2, '0') + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + now.getFullYear();
    let day = document.createElement('div');
    day.className = 'date__day';
    day.innerText = outputday;
    date.appendChild(day);

    //добавление div в date с классом date__time
    let outputtime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    let time = document.createElement('div');
    time.className = 'date__day';
    time.innerText = outputtime;
    date.appendChild(time);


    //добавление div с классом message__text
    let message = document.createElement('div');
    message.className = "message__text";
    let text = document.getElementsByClassName("new__message");
    message.innerText = text.value;

    div.appendChild(message);
}
