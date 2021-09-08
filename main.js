



  //////////// 一番目以外のコンテンツは非表示
  $(".menu-box:not(:first-of-type)").css("display", "none");

  //////////// タブの制御
  $('.tab').click( function() { // タブメニューをhoverしたら
    var index = $('.tab').index(this); // hoverしたタブ番号を取得
    $('.tab').removeClass('current'); // タブ現在地クラスを削除し、
    $(this).addClass('current'); // hoverしたタブにタブ現在地クラスを付与

    //////////// コンテンツの制御
    $('.menu-box').hide().eq(index).show(); // hoverしてないコンテンツは非表示、hoverした番号は表示
  });
