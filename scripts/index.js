$(document).ready(function(){

// CONTROL MOBILE Menu
$('.mobile-menu').on('click', function() {
  $('.Navbar-link-container').slideToggle();
});

$(window).on('resize', function() {
  var screenWidth = $(window).width();
  if (screenWidth > 600) {
    $('.Navbar-link-container').css('display', 'inherit');
  } else {
    $('.Navbar-link-container').css('display', 'none');
  }
});

// CONTROL MOBILE MENUE ENDS HERE

//SLICK CAROUSEL STARTS HERE

$('.Gallery-container').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
});

//SLICK CA8/ROUSEL ENDS HERE

//SEARCH BOX STARTS HERE

// $("#tags").on("input",function(){
//   console.log($(this).val());
// });

/**
 * this function does blah blah blah
 * @name nameOfFunction
 * @param
*/
/*
*
*/
$("#tags").on("focus",function(){
  // console.log("it focused");
  var states = Object.keys(stateNames);
  // // implement dropdown with states
//overflow hidden try to use that
  var $dropdown = $('.states-dropdown');
  $dropdown.css('height', '400px');

  states.forEach(function(state){
    var $div = $('<div class="search-box-states"></div>');
    $div.attr('data-state', state);
    $div.text(state);
    $('.states-dropdown').append($div);
  });
  // $dropdown.append(states);
  // console.log(states);
});

//Scrolling for state-boxes in search box
$(document).on('click', '.search-box-states', function(){
  var $searchBoxStates = $(this);
  var section = $searchBoxStates.attr('data-state');

  var $section = $('.states-box-images[data-state=' + section + ']');
  var position = $section.position();
  $('html, body').animate({ scrollTop: position.top }, 1000)
});

$(document).on("click", function(event){
  var $target = $(event.target);
  console.log($target);
  var isDropdown = $target.hasClass('search-box-states');
  var isTextbox = $target.hasClass('search-txt');
  if (!isDropdown && !isTextbox) {
    var $dropdown = $('.states-dropdown');
    $dropdown.css('height', '0px');
    $dropdown.empty();
  }

});



//SEARCH BOX ENDS HERE
/**
  * @Scroll Section starts here
*/
$('.scroll-btn').click(function(event) {
    var $btn = $(this);
    var section = $btn.attr('data-section');
    var $section = $('#' + section);
    var postion = $section.position();
    var navHeight = $('.navbar').height();
    console.log($section.position());

    $('html, body').animate({ scrollTop: postion.top - navHeight }, 1000);
  });

//Calling states box images
// for(var i in stateNames) {
//   var states = stateNames[i];
//   var $statesBoxImages = $('.states-box-images');
//   $('.states-box-images').click(function(){
//     var statesImg = $('<img>');
//     $statesImg.attr('src', states.images);
//     $statesBoxImages.append($statesImg);
//   });
// }
$('.states-box-images').on('click', function() {
  var $statesBoxImages = $(this);
  var stateName = $statesBoxImages.attr('data-state');
  var stateData = stateNames[stateName];
  stateImagesBox(stateData);
});

  function stateImagesBox(stateData) {
    var $statesImg = $('.stateImages-box img');
    $statesImg.attr('src', stateData.images);
    $('.modal-content').addClass('show');
  }

// });


});
