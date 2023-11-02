function daysUntilNewYear() {
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    const timeUntilNewYear = nextYear - currentDate;
    const daysUntilNewYear = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));
    return daysUntilNewYear;
};

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const days = daysUntilNewYear();
    countdownElement.textContent = `До Нового года осталось ${days} дней!`;
};

updateCountdown();
setInterval(updateCountdown, 1000);