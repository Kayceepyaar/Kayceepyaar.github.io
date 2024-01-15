document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var chatbot = document.querySelector('.chatbot');
    var uparrow = document.querySelector('.fa-chevron-up');
    var downarrow = document.querySelector('.fa-chevron-down');

    button.addEventListener('click', function () {
        if (getComputedStyle(chatbot).display === 'none') {
            chatbot.style.display = 'block';
            uparrow.style.display = 'none';
            downarrow.style.display = 'block';
        } else {
            chatbot.style.display = 'none';
            uparrow.style.display = 'block';
            downarrow.style.display = 'none';
        }
    });
});