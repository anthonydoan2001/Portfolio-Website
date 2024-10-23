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

    // Set active state for the clicked tab (if from a tab click)
    if (elmnt) {
        elmnt.classList.add("active");
        elmnt.style.borderTop = "1px solid #007acc";
        elmnt.style.backgroundColor = "#333333"; // Set background for active tab
    }

    // Find and activate the corresponding sidebar link
    for (var i = 0; i < sidebarLinks.length; i++) {
        if (sidebarLinks[i].innerText.trim() === fileName) {
            sidebarLinks[i].classList.add("active");
            sidebarLinks[i].style.backgroundColor = "#333333"; // Change sidebar link background to #333333
        }
    }

    // Scroll to the active tab
    scrollToActiveTab();
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
    elmnt.style.backgroundColor = "#333333"; // Change sidebar link background to #333333

    for (var i = 0; i < tablinks.length; i++) {
        if (tablinks[i].innerText.trim() === fileName) {
            tablinks[i].classList.add("active");
            tablinks[i].style.borderTop = "1px solid #007acc";
            tablinks[i].style.backgroundColor = "#333333"; // Change tab background to #333333 for the active tab
        }
    }

    // Scroll to the active tab
    scrollToActiveTab();
}

// Button click handler for View Work and Contact Me
function handleButtonClick(targetTab) {
    var tablinks = document.querySelectorAll('.tablink');
    var sidebarLinks = document.querySelectorAll('.page-sidebar ul li a');

    // Find the correct tab and sidebar link, then activate them
    for (var i = 0; i < tablinks.length; i++) {
        if (tablinks[i].innerText.trim() === targetTab) {
            openFileFromTab(targetTab, tablinks[i]); // Activate the tab
            break;
        }
    }

    for (var i = 0; i < sidebarLinks.length; i++) {
        if (sidebarLinks[i].innerText.trim() === targetTab) {
            openFileFromSidebar(targetTab, sidebarLinks[i]); // Activate the sidebar link
            break;
        }
    }
}

function scrollToActiveTab() {
  var activeTab = document.querySelector('.tablink.active');
  if (activeTab) {
    var tabButtons = document.querySelector('.tab-buttons');
    var activeTabRect = activeTab.getBoundingClientRect();
    var tabButtonsRect = tabButtons.getBoundingClientRect();

    if (activeTabRect.left < tabButtonsRect.left || activeTabRect.right > tabButtonsRect.right) {
      tabButtons.scrollLeft = activeTab.offsetLeft - tabButtons.offsetLeft;
    }
  }
}

function initializeTabs() {
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
  document.getElementById("home.jsx").style.display = "block";
}

// Call this function after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  initializeTabs();
  document.getElementById("defaultOpen").click();
});
