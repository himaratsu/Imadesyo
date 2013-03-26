console.log("Kiyoshi Nishihara");
var imagePaths = new Array("images/1.jpeg","images/2.jpg","images/3.jpg","images/4.png","images/5.jpg","images/6.jpg","images/7.jpg");
$(function(){

	setInterval(function(){
		$("img").each(function(i){
			var url = chrome.extension.getURL(imagePaths[i%7]);
			//console.log($(this).width()+","+$(this).height());
			$(this).attr({"src": url,"width": $(this).width(),"height": $(this).height()});
		});
	},1000);
		
});
