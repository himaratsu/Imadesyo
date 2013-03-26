console.log("Ryosuke Hiramatsu");

$(function(){
	setInterval(function(){
    	var txt = $('div#contentArea').html();
    	$('div#contentArea').html(
    	   txt.replace(/いいね/g,'今でしょ')
    	);
    }, 10000);
});