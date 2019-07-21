var isAndroid = /android/i.test(navigator.userAgent.toLowerCase()),
	isiPad = /ipad/i.test(navigator.userAgent.toLowerCase()),
	isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase()),
	isiPod = /ipod/i.test(navigator.userAgent.toLowerCase()),
	isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()),
	isWebOS = /webos/i.test(navigator.userAgent.toLowerCase()),
	isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());


$(function(){
	$('#videoButton').click(function(){
		$('.video-container').toggleClass("on");
	})

	$('#selectCountry').click(function(){
		$('.country-options').toggleClass('on');
	})
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 992,
		anchors:['intro', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'footer']
	});
	$(".download-action").click( function(event) {
        ga('send', 'event', {
            eventCategory: 'download_landing',
            eventAction: 'download_app',
            eventLabel: event.target.href,
            transport: 'beacon'
        });
	});
});