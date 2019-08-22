console.log('connected');
$(function(){
    $(document).scroll(function(){
    let $nav = $("#headerNav");
    $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
  })
});

$(function(){
	$(window).scroll(function(){
		let top1 = $(this).scrollTop();
		if(top1>300){
			$(".back-to-top").stop().fadeIn().css("display","block");
		}else{
			$(".back-to-top").stop().fadeOut();
		}
	});

	$(".back-to-top").click(function(){
		$(" body, html").animate({
			scrollTop:0
		},300);
	});
});


const time = document.getElementById('time'),
	  greeting = document.getElementById('greeting')
;
const showAmPm = true;
$(function showTime(){
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes();
	
	const amPm = hour >= 12 ? 'PM' : "AM";

	hour = hour % 12 || 12;

	time.innerHTML = `${hour} <span>: </span>${addZero(min)} <span></span>${showAmPm? amPm:''}`
})

function addZero(n){
	return (parseInt(n,10) < 10 ? "0" : "") + n
}

$(function setGreet(){
	let today = new Date(),
		hour = today.getHours();
	if( hour < 12){
		greeting.textContent = 'Good Morning!'
	}else if( hour < 18 ){
		greeting.textContent = 'Good Afternoon!'
	}else{
		greeting.textContent = 'Good Evening!'
	}
})
