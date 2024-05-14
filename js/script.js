window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.header__search-input'),
    searchButton = document.querySelector('.header__search-button'),
    searchLightButton = document.querySelector('.header__search-button-m'),
    searchForm = document.querySelector('.header__search-form');

    // вариант с кликом 
    // searchButton.addEventListener('click', () => {
    //     searchInput.classList.add('header__search-input_active');
    //     event.stopPropagation();
    // });

    searchButton.addEventListener('mouseover', () => {
        searchInput.classList.add('header__search-input_active');
    });
    searchLightButton.addEventListener('mouseover', () => {
        searchInput.classList.add('header__search-input_active');
    });

    document.addEventListener('click', function(event) {
        if (event.target !== searchInput && event.target !== searchButton && event.target !== searchLightButton && event.target !== searchForm ) {
            searchInput.classList.remove('header__search-input_active');
        }
    })

    const menu = document.querySelector('.header__navigation'),
    menuItem = document.querySelectorAll('.header__navigation-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__navigation_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__navigation_active');
        })
    });

})