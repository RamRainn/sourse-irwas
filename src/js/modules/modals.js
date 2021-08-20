const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block"; // показывает модальное окно
                document.body.style.overflow = "hidden"; 
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none"; // закрытие модального окна
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => { 
            if (e.target === modal) { // закрытие через подложку
                modal.style.display = "none"; 
                document.body.style.overflow = "";
            }
        });
    } 
    function showModalByTime(selector, time) { // открытие через три секунды 
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');   
    bindModal('.phone_link', '.popup', '.popup .popup_close');   
    // showModalByTime('.popup', 60000);

};

export default modals;