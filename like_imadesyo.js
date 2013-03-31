$(function(){

	like2imadesyo();

	setInterval(function(){
		$("a.UFILikeLink").each(function(i){
			if($(this).attr("data") != "imadesyo"){
				var txt = $(this).html();
				$(this).html(
					txt.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("label.uiLinkButton input").each(function(){
			if($(this).attr("data") != "imadesyo"){
				$(this).attr("value", "いつコメントするのか？")
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.UFIImageBlockContent span span").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt2 = $(this).html();
				$(this).html(
					txt2.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.innerWrap textarea").each(function(){
			if($(this).attr("data") != "imadesyo"){
				$(this).attr("placeholder", "いつコメントするのか？...")
				$(this).attr("title", "いつコメントするのか？...")
				$(this).attr("content", "いつコメントするのか？...")
				$(this).html("いつコメントするのか？...");
				$(this).attr("data", "imadesyo");
			}
		});

		$("h5.uiStreamMessage").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt3 = $(this).html();
				$(this).html(
					txt3.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("button.like_link span").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt4 = $(this).html();
				$(this).html(
					txt4.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("title", "今でしょ")
				$(this).attr("data", "imadesyo");
			}
		});

		$("a.uiIconText").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt5 = $(this).html();
				$(this).html(
					txt5.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("span.uiButtonText").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt6 = $(this).html();
				$(this).html(
					txt6.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.uiStreamAttachments").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt7 = $(this).html();
				$(this).html(
					txt7.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.fbEmuMainBody").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt8 = $(this).html();
				$(this).html(
					txt8.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

	},5000);
});



function like2imadesyo() {
	$("a.UFILikeLink").each(function(i){
			if($(this).attr("data") != "imadesyo"){
				var txt = $(this).html();
				$(this).html(
					txt.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("label.uiLinkButton input").each(function(){
			if($(this).attr("data") != "imadesyo"){
				$(this).attr("value", "いつコメントするのか？")
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.UFIImageBlockContent span span").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt2 = $(this).html();
				$(this).html(
					txt2.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.innerWrap textarea").each(function(){
			if($(this).attr("data") != "imadesyo"){
				$(this).attr("placeholder", "いつコメントするのか？...")
				$(this).attr("title", "いつコメントするのか？...")
				$(this).attr("content", "いつコメントするのか？...")
				$(this).html("いつコメントするのか？...");
				$(this).attr("data", "imadesyo");
			}
		});

		$("h5.uiStreamMessage").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt3 = $(this).html();
				$(this).html(
					txt3.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("button.like_link span").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt4 = $(this).html();
				$(this).html(
					txt4.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("title", "今でしょ")
				$(this).attr("data", "imadesyo");
			}
		});

		$("a.uiIconText").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt5 = $(this).html();
				$(this).html(
					txt5.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("span.uiButtonText").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt6 = $(this).html();
				$(this).html(
					txt6.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.uiStreamAttachments").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt7 = $(this).html();
				$(this).html(
					txt7.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});

		$("div.fbEmuMainBody").each(function(){
			if($(this).attr("data") != "imadesyo"){
				var txt8 = $(this).html();
				$(this).html(
					txt8.replace(/いいね/g, "今でしょ")
				);
				$(this).attr("data", "imadesyo");
			}
		});
}