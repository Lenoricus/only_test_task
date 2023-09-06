function showElement(button) {
    let infoElements = document.getElementsByClassName("navigation-info");

    for (let i = 0; i < infoElements.length; i++) {
        infoElements[i].classList.remove("show");
    }

    let infoElement = button.nextElementSibling;
    infoElement.classList.add("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("navigation-info");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
