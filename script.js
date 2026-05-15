// Approximate board exam date (you can change this later)
const examDate = new Date("February 15, 2027 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = examDate - now;

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        `⏳ ${days} Days Left`;

    document.getElementById("date").innerHTML =
        `📅 Today: ${new Date().toDateString()}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);