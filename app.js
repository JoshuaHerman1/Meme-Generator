//yeehaw

const form = document.querySelector('#meme-form');
const memesContainer = document.querySelector('#memes-container');

form.addEventListener('submit', event => {
  event.preventDefault();

  const imgUrl = document.querySelector('#img-url').value;
  const topText = document.querySelector('#top-text').value;
  const bottomText = document.querySelector('#bottom-text').value;

  const meme = document.createElement('div');
  meme.style.backgroundImage = `url(${imgUrl})`;

  const top = document.createElement('h2');
  top.innerText = topText;

  const bottom = document.createElement('h2');
  bottom.innerText = bottomText;

  meme.appendChild(top);
  meme.appendChild(bottom);

  memesContainer.appendChild(meme);

  form.reset();

  meme.addEventListener('click', () => {
    memesContainer.removeChild(meme);
  });
});
