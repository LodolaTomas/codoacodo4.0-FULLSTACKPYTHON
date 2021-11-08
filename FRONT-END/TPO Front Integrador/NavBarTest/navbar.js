
var $navSpan = $('.nav-menu .nav-item > span');
var $navItem = $('.nav-menu .nav-item');
var $header = $('.header-of-page');

/* $navSpan.click(function () {
  var windowWidth = window.innerWidth;
  if (windowWidth > 999) {
    if ($(this).parents('.nav-item').hasClass('active')) {
      $(this).parents('.nav-item').removeClass('active');
      $(this).parents('.nav-item').find('.nav-menu-drop').css('display', 'none');
      $header.removeClass('active');
    } else {
      $navItem.removeClass('active');
      $('.nav-menu-drop').css('display', 'none');
      $(this).parents('.nav-item').addClass('active');
      $(this).parents('.nav-item').find('.nav-menu-drop').css('display', 'block');
      $header.addClass('active');
    }
  } else {
    $(this).find('.iconfont').addClass('icon_broad_back');
    $(this).find('.iconfont').removeClass('icon_broad_pre-copy');
    if ($(this).parents('.nav-item').find('.nav-menu-drop').css('display') === 'block') {
      $(this).parents('.nav-item').find('.nav-menu-drop').slideUp(200);
    } else {
      $navItem.find('.nav-menu-drop').slideUp(200);
      $(this).parents('.nav-item').find('.nav-menu-drop').slideDown(200);
      $(this).find('.iconfont').removeClass('icon_broad_back');
      $(this).find('.iconfont').addClass('icon_broad_pre-copy');
    }
  }
}); */


$header.on("mouseleave", function(){
  $header.addClass('active');
  $navItem.removeClass('active');
  $('.nav-menu-drop').css('display', 'none');
  $('.header-of-page').removeClass('active');
})

$navSpan.on("mouseenter", function(){
  var windowWidth = window.innerWidth;
  if (windowWidth > 999) {
      $navItem.removeClass('active');
      $('.nav-menu-drop').css('display', 'none');
      $(this).parents('.nav-item').addClass('active');
      $(this).parents('.nav-item').find('.nav-menu-drop').css('display', 'block');
      $header.addClass('active');
  }
})
