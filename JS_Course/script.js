const button = document.getElementById('demo');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    button.textContent = 'Clicked';
    window.alert('You pressed');
});

message.addEventListener('click', function(){
    message.textContent = 'Good job';
    window.alert('Nice');
    window.print();
});