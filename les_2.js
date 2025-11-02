import { makePost } from './post.js';


fetch('data.json')
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            makePost(post);
        });
    })
    .catch((error) => console.error('Fout bij laden van data:', error));
