"use strict";

// 記事IDを取得
var path = window.location.pathname;
var itemId = path.substr(-20, 20);

// アイテムページの時だけリクエスト
if (path.match(/items/)) {
    // APIリクエスト
    $.ajax({
        url: "https://qiita.com/api/v1/items/" + itemId,
        success: function(data) {
            $(".StockButton__label").prepend(data.stock_count);
        },
        error: function() {
            console.log("qiitaStock request error")
        },
        dataType: "json",
        timeout: 3000
    });
}
