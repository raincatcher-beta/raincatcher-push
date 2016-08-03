'use strict';

var mbaasApi = require('fh-mbaas-api');

var PushManager = function() {
  this.subscription = {};
}

PushManager.prototype.add = function(topicPrefix, topic, payload, mediator) {
  var self = this;
  self.mediator = mediator;

  var pushTopic = mediator.subscribe(topicPrefix + topic, function(object, ts) {
    //Construct the payload
    var message = {
      alert : object[payload.alert],
      topic : 'push:' + topic
    };
    var options = {
      criteria: {
        alias : object[payload.alias]
      }
    };

    mbaasApi.push(message, options,
      function (err, res) {
        if (err) {
          console.log(err.toString());
        } else {
          console.log("status : " + res.status);
        }
    });

  });
  subscription.push(pushTopic);
}



module.exports = PushManager;
