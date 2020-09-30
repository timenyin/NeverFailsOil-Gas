/*---------About Section ------------------*/
$('button').click(function(){
    $('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
  });

  const button_2 = document.getElementById('button');

  $('button_2').click(function(){
    $('button_2').toggleClass('active_2');
    $('.title_2').toggleClass('active_2');
    $('nav_2').toggleClass('active_2');
  });

  /*--------------Side Bar -------------- */
  const toggleBtn = document.querySelector(".sidebar-toggle");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener('click', () => {
      // console.log(sidebar.classList);
      // if(sidebar.classList.contains('show-sidebar')) {
      //   sidebar.classList.remove('show-sidebar')
      // }else {
      //   sidebar.classList.add('show-sidebar')
      // }
      sidebar.classList.toggle('show-sidebar')
  });

  closeBtn.addEventListener('click', () =>  {
    sidebar.classList.remove('show-sidebar');
  });



/*--------- Form validation -----------*/
function validation () {
var name = document.getElementById('name').value;

var name2 = document.getElementById('name2').value;

var email =  document.getElementById('email').value;

var phone = document.getElementById('phone').value

var message = document.getElementById('message').value

var error_message = document.getElementById('error_message');

var text;

const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

error_message.style.padding = '20px';

if(name.length < 4) {
  text  = 'Please Enter Your Full Name Not Less Than 4 Characters!';
  error_message.innerHTML = text;
  return false;
}

if(name2.length < 4) {
  text  = 'Please Enter Your Full Name Not Less Than 4 Characters!';
  error_message.innerHTML = text;
  return false;
}

if(email.indexOf('@') == -1 || email.length < 5 || email.indexOf('.com') < 3 ) {
  text  = 'Please Enter Valid E-mail Address!';
  error_message.innerHTML = text;
  return false;
}

if(isNaN(phone) || phone.length < 10) {
  text  = 'Please Enter Valid Phone Number!';
  error_message.innerHTML = text;
  return false;
}

if(message.length <= 10) {
  text = 'Please Enter More Than 10 Characters! ';
  error_message.innerHTML = text;
  return false;
}

}








