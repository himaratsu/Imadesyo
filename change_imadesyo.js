console.log("Kiyoshi Nishihara");
var imagePaths = new Array("images/1.jpeg","images/2.jpg","images/3.jpg","images/4.png","images/5.jpg","images/6.jpg","images/7.jpg");
$(function(){

	$("img").each(function(i){
		if($(this).attr("data") != "imadesyo"){
			var url = chrome.extension.getURL(imagePaths[i%7]);
			//console.log($(this).width()+","+$(this).height());
			$(this).attr({"src":url, "width":$(this).width(), "height":$(this).height(), "data":"imadesyo"});
		}
	});
	setInterval(function(){
		$("img").each(function(i){
			if($(this).attr("data") != "imadesyo"){
				var url = chrome.extension.getURL(imagePaths[i%7]);
				//console.log($(this).width()+","+$(this).height());
				$(this).attr({"src":url, "width":$(this).width(), "height":$(this).height(), "data":"imadesyo"});
			}
		});
	},5000);
		
});
