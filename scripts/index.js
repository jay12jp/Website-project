$(document).ready(function(){

/**
 * This is a search box dropdown menu jquery code
 * @tags When you focus on search button states are displayed
 * The states data is been retrieved from data.js
*/
$("#tags").on("focus",function(){
  var states = Object.keys(stateNames);
  var $dropdown = $('.states-dropdown');
  $dropdown.css('height', '400px');

  states.forEach(function(state){
    var $div = $('<div class="search-box-states"></div>');
    $div.attr('data-state', state);
    $div.text(state);
    $('.states-dropdown').append($div);
  });
});
//Code Ends here

//Scrolling for state-boxes in search box
/**
 * @Scroll This is Scrolling for state-boxes in search box jquery code
*/
$(document).on('click', '.search-box-states', function(){
  var $searchBoxStates = $(this);
  var section = $searchBoxStates.attr('data-state');

  var $section = $('.states-box-images[data-state=' + section + ']');
  var position = $section.position();
  $('html, body').animate({ scrollTop: position.top }, 1000)
});
//Code Ends here

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
//Code Ends Here

/**
  * @Scrollbutton This is a scroll code for all the nav buttons
*/
$('.scroll-btn').click(function(event) {
    var $btn = $(this);
    var section = $btn.attr('data-section');
    var $section = $('#' + section);
    var postion = $section.position();
    var navHeight = $('.navbar').height();

    console.log($section.position());

    $('html, body').animate({ scrollTop: postion.top }, 1000);
  });
//Code Ends Here
//Main Page code Ends here

//CODES FOR NORTH-EAST,MID-WEST,SOUTH,WEST PAGE
/**
  * @Statesimages This is jQuery code, when you click on state tiles
  *               images are displayed
  * MODAL CODE
*/

$('.states-box-images').on('click', function() {
  var $statesBoxImages = $(this);
  var stateName = $statesBoxImages.attr('data-state');
  var stateData = stateNames[stateName];
  stateImagesBox(stateData);
});

  function stateImagesBox(stateData) {
    var $statesImg = $('.stateImages-box img');
    $statesImg.attr('src', stateData.images);
    // When the user clicks on the show modal button, open the modal
    $('.modal-content').addClass('show');
  }

  // When the user clicks the close button
  $('.close').on('click', function() {
    $('.modal-content').removeClass('show');
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).on('click', function(event) {
    var targetIsModal = $(event.target).hasClass('modal-content');
    if (targetIsModal) {
      $('.modal-content').removeClass('show');
    }
  });
//Code Ends Here

//CODE FOR GALLERY PAGE STARTS HERE
/**
  * @Slick This is slick library code, when you click on state tiles
*/
//SLICK CAROUSEL STARTS HERE

$('.Gallery-container').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
});
//SLICK CAROUSEL ENDS HERE

//CODE FOR GALLERY PAGE STARTS HERE
/**
  * @ScreensizeforMobile This is jQuery code, when you see the Website
  *                      on phones
*/

// MOBILE MENU
$('.navbar-mobile-menu').on('click',function(){
  // console.log('click');
  $('.Navbar-link-container').slideToggle();
});

$(window).on('resize',function(){
  // console.log('We resize');
  var screenWidth = $(window).width();
  if (screenWidth > 600) {
  $('.Navbar-link-container').css('display','inherit');
} else {
  $('.Navbar-link-container').css('display','none');
  }

});

});
