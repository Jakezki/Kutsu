document.addEventListener('DOMContentLoaded', (event) => {
    const rsvpForm = document.getElementById('rsvp-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submit action
        const email = document.getElementById('email').value;
        const attendance = document.getElementById('attendance').value;


        confirmationMessage.textContent = `Thank you for your RSVP, ${email}. We have received your response: ${attendance === 'yes' ? 'Attending' : 'Not attending'}.`;
    });
});
