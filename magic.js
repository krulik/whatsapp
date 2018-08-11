// Quick an dirty script that sends and receives messages from the server in real-time.
// Just kidding. It only duplicates the first message and changes its content.

const historyNode = document.querySelector('.Chat-main');
const inputNode = document.querySelector('#new-msg');

inputNode.addEventListener('keydown', (event) => {
    const shouldPrepend = event.target.dataset.insertMethod === 'prepend';

    // on any key other than Enter, continue as normal
    if (event.keyCode !== 13) return;

    event.preventDefault();

    // on Enter key pressed, clone the first message, change its content and prepend 
    const msgNode = document.querySelector('.Message').cloneNode(true);
    msgNode.querySelector('.Message-content').textContent = event.target.value;

    if (shouldPrepend) {
        historyNode.prepend(msgNode)
    } else {
        historyNode.append(msgNode);    
    }

    event.target.value = '';
});