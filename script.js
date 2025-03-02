// Function to toggle the navigation menu in mobile view
function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    links.classList.toggle('active');
  }



  window.onload = function() {
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    
    // Check if the user has closed the popup previously
    if (!localStorage.getItem('popupClosed')) {
        popup.style.display = 'flex'; // Show popup if not closed
    }

    // Add event listener to close the popup when X is clicked
    close.onclick = function() {
        popup.style.display = 'none';
        localStorage.setItem('popupClosed', 'true'); // Mark as closed in local storage
    }
};

  