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

/*const birthdayDate = new Date('2024-08-05');

function daysUntilBirthdayDate(birthdayDate) {
    const currentDate = new Date();
    const timeUntilBirthdayDate = birthdayDate - currentDate;
    const daysUntilBirthdayDate = Math.floor(timeUntilBirthdayDate / (1000 * 60 * 60 * 24));
    return daysUntilBirthdayDate;
};

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const days = daysUntilBirthdayDate(birthdayDate);
    countdownElement.textContent = `До дня рождения Лейки осталось ${days} дней! Время готовить подарки!`;
};

updateCountdown();
setInterval(updateCountdown, 1000);*/