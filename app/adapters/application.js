import WildemberAdapter from 'wildember/adapters/wildember';

export default WildemberAdapter.extend({
    wilddogConfig: {
        syncDomain: "ddlisting-final.wilddog.com",
        syncURL: "https://ddlisting-final.wilddogio.com" //输入节点 URL
    }
});

// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default JSONAPIAdapter.extend({
//     host: 'http://localhost:3000'
// });
