var strava = require('strava-v3');

module.exports = {
  onRun: function (config, dependencies, jobCallback) {

    strava.athletes.get({id:2559253},function(err,payload,limits) {
        jobCallback(null, {athlete:payload});
    });

  }
};