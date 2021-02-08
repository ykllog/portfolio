$(() => {
  $(function () {
    // ハンバーガーメニュー
    $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
    });
    $('#sp-nav').on('click', function() {
      $('body').removeClass('open');
    });
    // トップに戻るリンク
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    // ページ内リンク時スクロール
    $('a[href^="#"]').click(function(){
        var time = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top;
        $("html, body").animate({scrollTop:distance}, time, "swing");
        return false;
    });
  })
});