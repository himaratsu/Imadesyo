$(function(){
	setInterval(function(){
		$("a.UFILikeLink").each(function(i){
			var txt = $(this).html();
			$(this).html(
				txt.replace(/いいね/g, "今でしょ")
			);
		});

		$("label.uiLinkButton input").each(function(){
			$(this).attr("value", "いつコメントするのか？")
		});

		$("div.UFIImageBlockContent span span").each(function(){
			var txt2 = $(this).html();
			$(this).html(
				txt2.replace(/いいね/g, "今でしょ")
			);
		});
	},5000);
});