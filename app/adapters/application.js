import WildemberAdapter from 'wildember/adapters/wildember';

export default WildemberAdapter.extend({
    wilddogConfig: {
        syncDomain: "<app-id>.wilddog.com",
        syncURL: "https://<app-id>.wilddogio.com" //输入节点 URL
    }
});

// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default JSONAPIAdapter.extend({
//     host: 'http://localhost:3000'
// });
