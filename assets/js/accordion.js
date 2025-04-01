function toggleAccordion(button) {
    const accordion = document.getElementById('accordion');
    const items = accordion.querySelectorAll('div.bg-white');

    const clickedItem = button.closest('div.bg-white');

    items.forEach(item => {
        const content = item.querySelector('div.overflow-hidden');
        const icon = item.querySelector('img');

        if (item === clickedItem) {
            const isOpen = !content.classList.contains('max-h-0');
            if (isOpen) {
                content.classList.add('max-h-0');
                content.classList.remove('max-h-96');
                icon.src = "./assets/images/plus.svg";
            } else {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-96');
                icon.src = "./assets/images/minus.svg";
            }
        } else {
            content.classList.add('max-h-0');
            content.classList.remove('max-h-96');
            icon.src = "./assets/images/plus.svg";
        }
    });
}
