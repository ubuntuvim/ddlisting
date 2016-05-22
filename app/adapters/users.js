import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

    // firebase: inject.service(),
    // host: 'http://localhost:8080',
    headers: {
        'ContentType': 'application/vnd.api+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    },
    findAll(store, type, sineToken) {

        // var query;
        // if (sineToken) {
        //     query = {since:sineToken};
        // }
        // return this.ajax('http://localhost:8080/users', 'GET', {data: query});
        // console.log('typeKey ==== ' + typeKey);
        // var promise = this.ajax('http://localhost:8080/users', 'GET');
        // console.log('promise === ' + promise);

        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
                type: 'GET',  // method post
                url: 'http://localhost:8080/users', //target url
                // data: JSON.stringify(data), //the JSON.stringify converts data to JSON
                dataType: "jsonp",
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    resolve(response);
                },
                error: function (reason) {
                    reject(reason);
                }
            });
        });

    }
    // ,
    // ajaxOptions: function(url, type, options) {
    //     var hash = this._super(url, type, options);
    //     hash.dataType = "jsonp";
    //     return hash;
    // }
});
