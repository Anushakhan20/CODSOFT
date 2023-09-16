$(document).ready(function() {

  $('#menu').click(function() {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function() {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  //smooth scrolling
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });
});
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
}
document.querySelectorAll('a').forEach(links => {
  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  }
  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  }

});































/* to start the comment, and
let menu = document.querySelector('#menu-bars');
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
}
document.querySelectorAll('a').forEach(links => {
  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  }
  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  }

}); */



