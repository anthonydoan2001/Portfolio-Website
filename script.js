function openFileFromTab(fileName, elmnt) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove active state from all tab buttons
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].style.borderTop = "none";
        tablinks[i].style.backgroundColor = "#181818"; // Reset background for inactive tabs
    }

    // Remove active state from all sidebar links
    var sidebarLinks = document.querySelectorAll(".page-sidebar ul li a");
    for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].classList.remove("active");
        sidebarLinks[i].style.backgroundColor = "#181818"; // Reset background for inactive sidebar links
    }

    // Show the selected tab content
    document.getElementById(fileName).style.display = "block";
    document.getElementById(fileName).classList.add("active");

    // Set active state for the clicked tab
    elmnt.classList.add("active");
    elmnt.style.borderTop = "1px solid #007acc";
    elmnt.style.backgroundColor = "#333333";

    // Find and activate the corresponding sidebar link
    for (var i = 0; i < sidebarLinks.length; i++) {
        if (sidebarLinks[i].innerText.trim() === fileName) {
            sidebarLinks[i].classList.add("active");
            sidebarLinks[i].style.backgroundColor = "#333333"; // Set sidebar link to #333333
        }
    }
}


function openFileFromSidebar(fileName, elmnt) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].style.borderTop = "none";
        tablinks[i].style.backgroundColor = "#181818"; // Reset background for inactive tabs
    }

    var sidebarLinks = document.querySelectorAll(".page-sidebar ul li a");
    for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].classList.remove("active");
        sidebarLinks[i].style.backgroundColor = "#181818"; // Reset background for inactive sidebar links
    }

    document.getElementById(fileName).style.display = "block";
    document.getElementById(fileName).classList.add("active");

    elmnt.classList.add("active");
    elmnt.style.backgroundColor = "#007acc";

    setTimeout(function() {
        if (elmnt.classList.contains("active")) {
            elmnt.style.backgroundColor = "#333333";
        }
    }, 3000);

    for (var i = 0; i < tablinks.length; i++) {
        if (tablinks[i].innerText.trim() === fileName) {
            tablinks[i].classList.add("active");
            tablinks[i].style.borderTop = "1px solid #007acc";
            tablinks[i].style.backgroundColor = "#333333"; // Set background to #333333 for the active tab
        }
    }
}

document.getElementById("defaultOpen").click();
