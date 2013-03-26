console.log("Kiyoshi Nishihara");
$(function(){

	setInterval(function(){
		var url = chrome.extension.getURL('images/560x373.jpeg');
		$("img").attr("src",url);
	},1000);
		
});
