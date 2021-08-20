const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);


        function hideTabContent() {
            content.forEach(item => {
                item.style.display = 'none'; // скрытие
            });

            tab.forEach(item => {
                item.classList.remove(activeClass); // убираем класс активности
            });
        }

        function showTabContent(i = 0) {
            content[i].style.display = 'block'; // показывается 
            tab[i].classList.add(activeClass); // добавляем класс активности
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {

            const target = e.target;
            if (target && 
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
             target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });


};

export default tabs;