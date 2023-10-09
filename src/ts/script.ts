function showElement(event: MouseEvent) {
    const dropdowns = document.querySelectorAll(".navigation-info") as NodeListOf<HTMLElement>;
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
    }

    const openDropdown = (event.target as HTMLElement).nextElementSibling;
    if (openDropdown) {
        openDropdown.classList.add("show");
    }
}

const btns = document.querySelectorAll('.dropbtn') as NodeListOf<HTMLElement>;
btns.forEach(el => {
    el.addEventListener("click", showElement)
});

window.addEventListener("click", (event: MouseEvent) => {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".navigation-info") as NodeListOf<HTMLElement>;
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});