export function makePost(data) {
    const parent = document.querySelector('#article__list');

    const articleElement = document.createElement('article');
    articleElement.className = 'articleTile';


    if (data.image) {
        const imgEl = document.createElement('img');
        imgEl.src = data.image;
        imgEl.alt = `Foto van ${data.user}`;
        imgEl.className = 'post-image';
        articleElement.appendChild(imgEl);
    }


    const titleEl = document.createElement('div');
    titleEl.className = 'post-caption';
    titleEl.innerText = `${data.user}: ${data.text}`;
    articleElement.appendChild(titleEl);

    const actionsEl = document.createElement('div');
    actionsEl.className = 'post-actions';

    const likeBtn = document.createElement('button');
    likeBtn.className = 'action-btn like-btn';
    likeBtn.innerText = '❤️';

    const likesCounter = document.createElement('span');
    likesCounter.className = 'likes-count';
    likesCounter.innerText = data.likes;

    likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('liked')) {
            likeBtn.classList.remove('liked');
            data.likes--;
        } else {
            likeBtn.classList.add('liked');
            data.likes++;
        }
        likesCounter.innerText = data.likes;
    });

    const leftActions = document.createElement('div');
    leftActions.className = 'left-actions';
    leftActions.appendChild(likeBtn);
    leftActions.appendChild(likesCounter);

    actionsEl.appendChild(leftActions);
    articleElement.appendChild(actionsEl);


    const footerEl = document.createElement('footer');
    footerEl.className = 'post-footer';

    const commentsEl = document.createElement('div');
    commentsEl.className = 'post-comments';
    commentsEl.innerText = `💬 Reacties: ${data.comments}`;

    footerEl.appendChild(commentsEl);
    articleElement.appendChild(footerEl);


    parent.appendChild(articleElement);
}

