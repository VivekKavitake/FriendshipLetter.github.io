document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const receiveButton = document.getElementById('receive-letter');
    const inputContainer = document.getElementById('input-container');
    const letterCover = document.getElementById('letter-cover');
    const letter = document.getElementById('letter');
    const letterContent = document.getElementById('letter-content');
    const receiverName = document.getElementById('receiver-name');
    const friendName = document.getElementById('friend-name');

    receiveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            friendName.textContent = name;
            receiverName.textContent = name;
            inputContainer.classList.add('shrink');
            setTimeout(() => {
                letterCover.classList.remove('hidden');
            }, 500);
        }
    });

    letterCover.addEventListener('click', () => {
        letterCover.classList.add('reveal');
        setTimeout(() => {
            letterCover.classList.add('hidden');
            letter.classList.remove('hidden');
            setTimeout(() => {
                letter.classList.add('visible');
                letterContent.classList.add('visible');
                triggerCelebration(); // Trigger celebration after letter is fully visible
            }, 500); // Adjust this delay to match the letter's animation duration
        }, 500); // Match this delay with the letter cover's animation time
    });

    function triggerCelebration() {
        const celebrationContainer = document.createElement('div');
        celebrationContainer.classList.add('celebration');
        document.body.appendChild(celebrationContainer);

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 1}s`;
            celebrationContainer.appendChild(star);

            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 1}s`;
            celebrationContainer.appendChild(heart);
        }

        setTimeout(() => {
            celebrationContainer.remove();
        }, 2000); // Adjust this timeout to control how long the celebration lasts
    }
});
