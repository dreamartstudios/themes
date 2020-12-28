$(document).ready(function(){
  switchColorTheme();
});

$(window).on('load', function(){
  checkTheme();
});

//change theme function
function checkTheme(){
const currentthemeColor = localStorage.getItem('theme-color');
//get theme
if(currentthemeColor !== null){
  $('body').addClass(currentthemeColor);
  $('#${currentthemeColor}').addClass('active');
}

}


// switch theme function

function switchColorTheme(){
//
$('.theme-option div').click(function(){
  const theme = $(this).attr('id');

  $('.theme-option div').removeClass('active');
  $(this).addClass('active');

  removeThemeClasses();
  $('body').addClass(theme);
  localStorage.setItem('theme-color', theme);
});
}


// remove all previous theme
function removeThemeClasses(){
//
$('body').removeClass(function(index, cssName){
  return (cssName.match(/\btheme-\S+/g) || []).join(' ');
});
}
