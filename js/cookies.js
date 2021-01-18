// =======Cookies terms and conditions =============
const cookie_Container = document.querySelector('.cookie-container');
const cookie_btn = document.querySelector('.cookie-btn');

cookie_btn.addEventListener('click', ()  => {
    cookie_Container.classList.remove("active_cookies");

    localStorage.setItem('You Accepted Never Fails Oil and Gas Terms And Condition', 'true');

});

setTimeout(() => {
    if(!localStorage.getItem('You Accepted Never Fails Oil and Gas Terms And Condition')) {

        cookie_Container.classList.add('active_cookies');
    }
   
}, 3000);