function revealMessage() {
    document.getElementById("surprise").classList.add("show");
    document.getElementById("time-together").classList.add("show");
    updateTimeTogether();
    document.querySelector(".hearts-container").classList.add("show"); // Activate hearts animation
    
}

function updateTimeTogether() {
    const startDate = new Date("2021-07-04T00:00:00"); // Your special date
    const now = new Date();

    let diff = now - startDate;

    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    let seconds = Math.floor(diff / 1000);

    document.getElementById("time-together").innerHTML =
        `We've been together for: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds ❤️`;

    setTimeout(updateTimeTogether, 1000);
}