const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const body = document.body;
rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const attendance = document.getElementById('attendance').value;

  if (attendance === 'yes') {
    confirmationMessage.innerHTML = '🎉 Party on! We look forward to seeing you at the GIF Gala!';
    body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
  } else if (attendance === 'no') {
    confirmationMessage.innerHTML = '😔 We will miss you at the GIF Gala!';
    body.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")';
  }

  confirmationMessage.style.display = 'block';

  rsvpForm.reset();
});
