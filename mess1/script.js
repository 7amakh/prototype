// script.js

document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const listItems = document.querySelectorAll('aside li');

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});