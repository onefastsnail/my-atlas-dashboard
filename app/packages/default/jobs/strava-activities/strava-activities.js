var strava = require('strava-v3');

module.exports = {
  onRun: function (config, dependencies, jobCallback) {

    strava.athlete.listActivities({id:process.env.STRAVA_ATHLETE},function(err,payload,limits) {
        jobCallback(null, {activities:payload});
    });

  }
};