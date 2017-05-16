widget = {

  onData: function (el, data) {

    var $content = $('.content', el);
    $content.empty();

    if (data.activities.length > 0) {
      data.activities.forEach(function (activity) {
        $content.append(
            '<div><h3>'+activity.name+'</h3><ul><li>Distance: '+Math.round(activity.distance / 1000)+'km</li></ul></div>'
        );
      });

    } else {
      $content.append(
          "<h2>No activities found.<h2>"
      );
    }
  }
};