console.log("Ryosuke Hiramatsu");

$(function(){
    var txt = $('body').html();
    $('body').html(
       txt.replace(/いいね/g,'今でしょ')
    );
});