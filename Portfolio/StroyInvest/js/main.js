$('.direction-blocks').slick({
				arrows: false,
				dots: true,
				slidesToShow: 4,
				autoplay: true,
				slidesToScroll: 1,
				responsive: [ 
				{ breakpoint: 1200, settings: { slidesToShow: 3, } },
    {breakpoint: 992, settings: { slidesToShow: 2,} },
    { breakpoint: 480,  settings: { slidesToShow: 1,}}
                ]
			});

var elem = document.querySelector('.calc-range');
var init = new Powerange(elem, { min: 100000, max: 3000000,start: 100000, hideRange: true, step: 100000});

var per, month, result, total, monthly;
var money = +$('.calc-range').val();



$('input[name="programs"]').on('change',  function(event) {
	month = +$(this).attr('data-month');
	per = +$(this).attr('data-per');
 result = Math.round(per / 12 * month * money);
 total = result + money;
 monthly = parseInt(result / month);
$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
$('#month').text(month);
});

$('.calc-range').on('change', function(event) {
	$('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
 var radio = $('input[name="programs"]:checked');
	month = +radio.attr('data-month');
	per = +radio.attr('data-per');
	money = +$(this).val();
 result = Math.round(per / 12 * month * money);
 total = result + money;
 monthly = parseInt(result / month);
$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

});

 				 

if(window.screen.width < 768) {
	$( document ).ready(function(){
	  	  $( ".top-nav_btn" ).click(function(){ 
	    $( ".top-nav_menu" ).slideToggle(); 
	  });
	});

		
	$( document ).ready(function(){
	  	  $( ".left-sidebar_btn" ).click(function(){ 
	    $( ".left-sidebar_menu" ).slideToggle();
	    $(".icon-down-open").toggleClass("rotate");
 

	  });
	});
};

