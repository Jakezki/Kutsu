const ilmoittautumislomake = document.getElementById('rsvp-form');
const vahvistusviesti = document.getElementById('confirmation-message');
const ruumis = document.body;
ilmoittautumislomake.addEventListener('submit', (tapahtuma) => {
  tapahtuma.preventDefault();

  const osallistuminen = document.getElementById('attendance').value;

  if (osallistuminen === 'yes') {
    vahvistusviesti.innerHTML = '🎉 Juhlat jatkuvat! Odotamme innolla näkevämme sinut GIF Gaalassa!';
    ruumis.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
  } else if (osallistuminen === 'no') {
    vahvistusviesti.innerHTML = '😔 Kaipaamme sinua GIF Gaalassa!';
    ruumis.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")';
  }

  vahvistusviesti.style.display = 'block';

  ilmoittautumislomake.reset();
});

