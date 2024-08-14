function startCountdown() {
    const targetDateTime = document.getElementById('targetDate').value;

    if (!targetDateTime) {
        alert('Please select a target date and time.');
        return;
    }

    const targetDate = new Date(targetDateTime);
    
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            document.getElementById('countdownDisplay').innerHTML = "<p>Time's up!</p>";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = `Days: ${days}`;
        document.getElementById('hours').textContent = `Hours: ${hours}`;
        document.getElementById('minutes').textContent = `Minutes: ${minutes}`;
        document.getElementById('seconds').textContent = `Seconds: ${seconds}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}