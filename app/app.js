
function handleClick() {
    console.log('Clicked ', new Date())
    // 1 get value from input element
    var input = document.querySelector('#username-input')
    var usernameValue = input.value;

    // 2 get span element and replace innerhtml
    var span = document.querySelector('#username');
    span.innerHTML = usernameValue

    // 3 clear old input
    input.value = '';

}

var btn = document.querySelector('#btn')
btn.addEventListener('click', handleClick)