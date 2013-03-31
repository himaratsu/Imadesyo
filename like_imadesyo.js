$(function(){
	setInterval(function(){
		$("a.UFILikeLink").each(function(i){
			var txt = $(this).html();
			$(this).html(
				txt.replace(/いいね/g, "今でしょ")
			);
		});
	},5000);
});