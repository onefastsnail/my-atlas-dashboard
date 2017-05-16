widget = {

  onData: function (el, data) {

    //console.log(data);

    var $content = $('.content', el);
    $content.empty();

    if (data.athlete) {
      $('h2', el).text(data.athlete.firstname+' '+data.athlete.lastname);
      $content.prepend('<img src="'+data.athlete.profile+'" />')
    }

  }
};