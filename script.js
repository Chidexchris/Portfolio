var btn = document.querySelector('.btn');
var navLinks = document.querySelector('.nav-links'); // Fixed variable name

btn.addEventListener('click', function () { // Fixed spelling
    navLinks.classList.toggle('active');
});

// Select all navigation links
var navLink = document.querySelectorAll('.nav-links li a'); 

// Loop through each link and add event listener
for (var i = 0; i < navLink.length; i++) { // Fixed loop syntax
    navLink[i].addEventListener('click', function () { // Fixed spelling
        navLinks.classList.remove('active'); 
    });
}
