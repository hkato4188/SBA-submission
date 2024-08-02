const messagesDiv = document.getElementById("messages")
const nameInput = document.getElementById("nameInput")
const messageInput = document.getElementById("messageInput")
const chatSubmit = document.getElementById("chatSubmit")

submitButton.addEventListener('click', () => {
    handleMessageSubmit(nameInput, messageInput);
    console.log('ive been clicked')
});

const addMessageToChat = (name, message) => {
    const messageElement1 = document.createElement('div');
    messageElement1.textContent = `${name}: ${message}`;
    messagesDiv.appendChild(messageElement1);
    console.log(name);
    console.log(message);


};


const handleMessageSubmit = (nameInput, messageInput) => {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        addMessageToChat(name, message);
        nameInput.value = '';
        messageInput.value = '';
    }
};


