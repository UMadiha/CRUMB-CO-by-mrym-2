/* =========================================
   CRUMB & CO. BY MRYM
   Main JavaScript
========================================= */


// 1. GET HTML ELEMENTS

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const siteSearch = document.getElementById("siteSearch");
const searchSubmit = document.getElementById("searchSubmit");
const searchMessage = document.getElementById("searchMessage");

const accountButton = document.getElementById("accountButton");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const continueShopping = document.getElementById("continueShopping");

const currentYear = document.getElementById("currentYear");


// 2. UPDATE FOOTER YEAR

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 3. MOBILE NAVIGATION

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close mobile menu after clicking a navigation link

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


// 4. SEARCH PANEL

if (searchButton && searchPanel) {

    searchButton.addEventListener("click", function () {

        const isHidden = searchPanel.hidden;

        searchPanel.hidden = !isHidden;

        if (isHidden && siteSearch) {
            siteSearch.focus();
        }

    });

}


// Search form behaviour

function performSearch() {

    const query = siteSearch.value.trim().toLowerCase();

    if (!query) {

        searchMessage.textContent =
            "Please enter a product name to search.";

        return;

    }


    const categories = {

        "cookie": "#cookies",
        "cookies": "#cookies",

        "cake": "#cakes",
        "cakes": "#cakes",

        "pastry": "#pastries",
        "pastries": "#pastries"

    };


    let destination = null;

    for (const keyword in categories) {

        if (query.includes(keyword)) {

            destination = categories[keyword];

            break;

        }

    }


    if (destination) {

        searchMessage.textContent =
            "Taking you to " + query + "...";

        window.location.hash = destination;

    } else {

        searchMessage.textContent =
            "No matching category found. Try cookies, cakes or pastries.";

    }

}


if (searchSubmit) {

    searchSubmit.addEventListener("click", performSearch);

}


if (siteSearch) {

    siteSearch.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            performSearch();

        }

    });

}


// 5. CUSTOMER ACCOUNT BUTTON

if (accountButton) {

    accountButton.addEventListener("click", function () {

        alert(
            "Welcome to Crumb & Co. by MRYM!\n\n" +
            "Customer accounts will be available in a future update."
        );

    });

}


// 6. SHOPPING CART PANEL

if (cartButton && cartPanel) {

    cartButton.addEventListener("click", function () {

        cartPanel.hidden = !cartPanel.hidden;

    });

}


if (closeCart && cartPanel) {

    closeCart.addEventListener("click", function () {

        cartPanel.hidden = true;

    });

}


if (continueShopping && cartPanel) {

    continueShopping.addEventListener("click", function () {

        cartPanel.hidden = true;

    });

}


// 7. CART COUNT HELPER

// We can use this function when we add real products later.

let totalCartItems = 0;

function updateCartCount(quantity) {

    totalCartItems = Math.max(
        0,
        totalCartItems + quantity
    );

    if (cartCount) {

        cartCount.textContent = totalCartItems;

    }

}


// Example for future use:
// updateCartCount(1);


// 8. CLOSE PANELS WITH ESCAPE

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (searchPanel) {
            searchPanel.hidden = true;
        }

        if (cartPanel) {
            cartPanel.hidden = true;
        }

        if (mainNav && menuToggle) {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    }

});


// 9. WELCOME MESSAGE IN CONSOLE

console.log(
    "Crumb & Co. by MRYM loaded successfully! ♡"
);