function toggleTheme(event) {
      event.stopPropagation();
      document.body.classList.toggle('dark');
    }

    function showMessage(event) {
      event.stopPropagation();
      document.getElementById('message').style.display = 'block';
      createHearts();
    }

    function createHearts() {
      for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = (Math.random() * 30 + 60) + 'vh';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }
    }

    function shootConfetti(event) {
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = event.clientX + 'px';
        confetti.style.top = event.clientY + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
      }
    }

    function createStars() {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * -100 + 'vh';
        star.style.animationDuration = (Math.random() * 5 + 5) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(star);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('themeToggle').addEventListener('click', toggleTheme);
      document.getElementById('openBtn').addEventListener('click', showMessage);
      document.body.addEventListener('click', shootConfetti);
      createStars();
    });
