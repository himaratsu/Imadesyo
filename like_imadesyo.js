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

		$("div.innerWrap textarea").each(function(){
			$(this).attr("placeholder", "いつコメントするのか？...")
			$(this).attr("title", "いつコメントするのか？...")
			$(this).attr("content", "いつコメントするのか？...")
			$(this).html("いつコメントするのか？...");
		});

		$("h5.uiStreamMessage").each(function(){
			var txt3 = $(this).html();
			$(this).html(
				txt3.replace(/いいね/g, "今でしょ")
			);
		});

		$("button.like_link span").each(function(){
			var txt4 = $(this).html();
			$(this).html(
				txt4.replace(/いいね/g, "今でしょ")
			);
		});

	},5000);
});