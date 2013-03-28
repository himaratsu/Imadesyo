var timer = 0;
// document.addEventListener('DOMNodeInserted', function() {
  if(timer) return; // timerが初期化されていなければはじく
  // timer = setTimeout(function() {
  	var txt = $('div#globalContainer').html();
  	$('div#globalContainer').html(
  		txt.replace(/コメントする/g, "いつコメントするのか？").replace(/いいね/g, "今でしょ")
  	);
    timer = 0; // 初期化
  // }, 10000);
// }, false);