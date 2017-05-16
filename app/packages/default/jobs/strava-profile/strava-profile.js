var strava = require('strava-v3');

module.exports = {
  onRun: function (config, dependencies, jobCallback) {

    strava.athletes.get({id:process.env.STRAVA_ATHLETE},function(err,payload,limits) {
        jobCallback(null, {athlete:payload});
    });

  }
};