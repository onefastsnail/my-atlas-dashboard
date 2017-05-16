widget = {

  onData: function (el, data) {

    //console.log(data);

    var $content = $('.content', el);
    $content.empty();

    var node;

    for (var key in data.athlete) {
        node = $("<p></p>").text(JSON.stringify(data.athlete[key]));
        $content.append(node);
    }

    // if (data.title) {
    //   $('h2', el).text(data.title);
    // }

    // if (data.quotes.length > 0) {
    //   data.quotes.forEach(function (quote) {
    //     $content.append(
    //         "<blockquote>" + quote.quote + "<cite>" + quote.author + "</cite></blockquote>"
    //     );
    //   });

    // } else {
    //   $content.append(
    //       "<blockquote>NO QUOTES FOUND<blockquote>"
    //   );
    // }
  }
};