const sendButton = document.getElementById('send-comment-button');

async function addComment() {

    event.preventDefault();

    const commentWrapper = document.getElementById('comment-wrapper');
    const textArea = document.getElementById('textarea-comment');

    const div = document.createElement('div');
    const p = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    span1.classList.add('date-container');
    span2.classList.add('nickname-container');
    div.classList.add('message-body-container');

    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const hour = time.getHours();
    const minute = time.getMinutes();

    span1.innerHTML = `${day}.${month + 1}.${year}, ${hour}:${minute}`;
    p.innerHTML = textArea.value;


    if (textArea.value.length < 10) {
        alert('Enter at least 10 symbols!');
        return;
    } else
        span2.innerHTML = prompt('Enter your nickname!');
    commentWrapper.appendChild(div);
    await div.appendChild(p);
    await div.appendChild(span1);
    await div.appendChild(span2);
    textArea.value = '';

}

sendButton.addEventListener('click', addComment);
