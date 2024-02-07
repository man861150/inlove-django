document.addEventListener("DOMContentLoaded", function() {
    // Check if the dating day is already stored in local storage
    var storedDatingDay = localStorage.getItem('datingDay');

    if (!storedDatingDay) {
        // If not stored, show the popup
        var userDatingDay = prompt("Nhập vào ngày hẹn hò đầu tiên của bạn theo định dạng(DD-MM-YYYY), ví dụ 30-01-2024:");

        // Validate and store the user input
        if (userDatingDay && isValidDate(userDatingDay)) {
            localStorage.setItem('datingDay', userDatingDay);
            displayLoveDays(userDatingDay);
        } else {
            alert("Sai định dạng. Vui lòng thử lại");
        }
    } else {
        // If dating day is already stored, display love days
        displayLoveDays(storedDatingDay);
    }

    // Function to check if the input is a valid date
    function isValidDate(dateString) {
        var parts = dateString.split("-");
        if (parts.length != 3) {
            return false;
        }
        var userDate = new Date(parts[2], parts[1] - 1, parts[0]);

        return userDate && userDate.getDate() == parts[0] && userDate.getMonth() + 1 == parts[1] && userDate.getFullYear() == parts[2];
    }

    // Function to display love days
    function displayLoveDays(datingDay) {
        var today = new Date();

        var parts = datingDay.split("-");

        var datingDate = new Date(parts[2], parts[1] - 1, parts[0]);

        var loveDays = Math.floor((today - datingDate) / (1000 * 60 * 60 * 24));
        document.getElementById('day-counter').innerText = loveDays;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "Love is not just something, It's everything.",
        "The best thing to hold onto in life is each other."
        // Add more quotes as needed
    ];

    var footer = document.getElementById('footer');
    
    for (let i=0; i < quotes.length; i++) {
        var marquee = document.createElement('div');
        marquee.className = 'marquee';

        var textNode = document.createTextNode(quotes[i]);

        marquee.appendChild(textNode);
        footer.appendChild(marquee);
    }
 
});

function toggleMusicPlayer() {
    var playerContainer = document.getElementById('music-player-container');
    playerContainer.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    const numHearts = 20; // Number of hearts you want to generate
    const container = document.querySelector(".heart-decoration");
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
      heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation duration
      container.appendChild(heart);
    }
});
