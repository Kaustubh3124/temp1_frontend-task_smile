// // JavaScript to toggle the search input visibility
// document.getElementById('searchToggle').addEventListener('click', function() {
//     const searchInput = document.getElementById('searchInput');
//     searchInput.classList.toggle('active'); // Toggles 'active' class
//     if (searchInput.classList.contains('active')) {
//         searchInput.focus(); // Focus on the input when active
//     } else {
//         searchInput.value = ''; // Clear input when hiding
//     }
// });

// // Optional: Hide search input when clicking outside the search container
// document.addEventListener('click', function(event) {
//     const searchContainer = document.querySelector('.search-container');
//     const searchInput = document.getElementById('searchInput');
//     // If the click is outside the search container AND the search input is currently active
//     if (!searchContainer.contains(event.target) && searchInput.classList.contains('active')) {
//         searchInput.classList.remove('active');
//         searchInput.value = ''; // Clear the input value when hidden
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinksContainer = document.getElementById('navLinksContainer');
    const body = document.body;

    if (hamburgerMenu && navLinksContainer && body) {
        hamburgerMenu.addEventListener('click', () => {
            // Toggle 'open' class on hamburger icon for animation
            hamburgerMenu.classList.toggle('open');
            // Toggle 'active' class on navigation links container to show/hide
            navLinksContainer.classList.toggle('active');
            // Toggle 'no-scroll' class on body to prevent background scrolling
            body.classList.toggle('no-scroll');
        });
    }

    // Search input toggle functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling up to document and immediately closing
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = ''; // Clear input when hiding
            }
        });

        // Hide search input if clicking outside when active
        document.addEventListener('click', (event) => {
            if (!searchToggle.contains(event.target) && !searchInput.contains(event.target) && searchInput.classList.contains('active')) {
                searchInput.classList.remove('active');
                searchInput.value = ''; // Clear input when hiding
            }
        });

        // Prevent clicking inside the input from closing it
        searchInput.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});