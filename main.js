const sendIcon = document.querySelector('.chatBox i')
const textarea = document.querySelector('.chatBox textarea')

let message;

const handelText = () => {
    message = textarea.value.trim();
    console.log(message)
}

sendIcon.addEventListener('click', handelText)