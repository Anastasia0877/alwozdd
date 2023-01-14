// select
$(document).ready(function() {
    $('#lang').niceSelect();
  });

// burger-menu
$('.menu-icon').on('click', function(){
  $('.menu-icon, .menu').toggleClass("active");
  // $('body').toggleClass("overlay");
})

$(document).click(function(e) {
  if (!$(e.target).hasClass("active") &&
      $(e.target).parents(".site-nav").length === 0) {
        $('.menu-icon, .menu').removeClass("active");
        // $('body').removeClass("overlay");
  }
});
$('.menu-item').on('click', function(){
  $('.menu-icon, .menu').removeClass("active");
  // $('body').removeClass("overlay");
})  

// open modal-window
const modalcall = $("[data-modal]");
const modalclose = $("[data-close]");
modalcall.on("click", function(event){
  event.preventDefault();
  let $this = $(this);
let modalId =$this.data('modal'); 

$(modalId).addClass('show');
});
modalclose.on("click", function(event){
  event.preventDefault();
  let $this = $(this);
let modalParent =$this.parents('.modal'); 

modalParent.removeClass('show');
});



// case-slider
  $(document).ready(function(){
    $('.cases-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding:"0",
    slidesToScroll: 1,
    appendArrows:".cases-slider__arrow",
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
    });
  });
//tabs 
  $(function() {
    var tab = $('#tabs .tabs-items > div'); 
    tab.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
   
    // Клики по якорным ссылкам.
    $('.tabs-target').click(function(){
      $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
    });
    
    // Отрытие вкладки из хеша URL
    if(window.location.hash){
      $('#tabs-nav a[href=' + window.location.hash + ']').click();
      window.scrollTo(0, $("#" . window.location.hash).offset().top);
    }
  });

  // new-slider
    $(document).ready(function(){
    $('.news-slider').slick({
      dots:false,
      arrows:true,
    appendArrows:".news-slider__arrow"
    });
  });
  // article-slider
  $(document).ready(function(){
    $('.article-slider').slick({
      dots:false,
      arrows:true,
    appendArrows:".article-slider__arrow"
    });
  });
  
  $(document).ready(function(){
    $('.youtube-slider').slick({
      dots:false,
      arrows:true,
      slidesToShow:3,
      slidesToScroll:3,
    appendArrows:".youtube-slider__arrow",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
        
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
        
      }
    ]
    });
  });

  // accordion
  $(function() {
	
    //BEGIN
    $(".accordion__title").on("click", function(e) {
  
      e.preventDefault();
      var $this = $(this);
  
      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }
  
      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
    
  });


  // account-tabs
  $(function() {
	var tab = $('#account-tabs .account__tabs-items > div'); 
	tab.hide().filter(':first').show(); 
  $('#account-tabs .account__tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#account-tabs .account__tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#account-tabs .account__tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('#account__tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});


// loading file
$('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.input-file').find('.input-file-text').html(file.name);
});