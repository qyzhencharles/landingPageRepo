/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




// create new nav item for new section
function createNavItem() {
    sections.forEach(section => {
        let navItem = document.createElement('li');
        let navLink = document.createElement('a');
        // This is used to locate the section
        // When being clicked, scroll to the specific section
        navLink.setAttribute('href', `#${section.id}`);
        navLink.classList.add('menu__link');
        navLink.textContent = section.dataset.nav;
        navItem.appendChild(navLink);
        navBar.appendChild(navItem);
        // Listen for a click event and scroll smoothly to the section
        navLink.addEventListener('click', e => {
            e.preventDefault();
            section.scrollIntoView({behavior:'smooth'});
        })
    })
}

// calculating when section is active
function makeActiveSection() {
    sections.forEach((section)=>{
        const elementOffset = section.getBoundingClientRect();
        if(elementOffset.top <= 150 && elementOffset.bottom >= 150) {
            setActive(section);
        } else {
            removeActive(section);
        }
    })
}

// set section to active
function setActive(section) {
    const id = section.getAttribute('id');
    document.getElementById(`${id}`).classList.add('your-active-class');
}

// disable active on section
function removeActive(section) {
    const id = section.getAttribute('id');
    document.getElementById(`${id}`).classList.remove('your-active-class');
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = document.querySelector('.navbar__menu #navbar__list');
const sections = document.querySelectorAll('section');
// use data attributes to save the header content into the section's attribute
sections.forEach(section => {
    const header = section.querySelector('h2');
    section.setAttribute('data-nav', header.textContent)
})
createNavItem();

document.addEventListener('scroll', makeActiveSection);





// for (let section of sections) {
//     const header = section.querySelector('h2')
//     const item = document.createElement('li');
//     const anchor = document.createElement('a');
//     anchor.classList.add("menu__link");
//     item.textContent = nav.textContent;
//     anchor.appendChild(item);
//     navBar.appendChild(anchor);
// }





// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', setActive);

function setActive() {
    for (let section of sections) {
        section.classList.remove('your-acive-class')
    }
    for (let section of sections) {
        if(isInViewport(section)) {
            document.querySelector(`a[href='#${section.id}']`).classList.add("active");
        } else {
            section.classList.remove('your-active-class');
            document.querySelector(`a[href='#${section.id}']`).classList.remove("active");
        }
    }

}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


