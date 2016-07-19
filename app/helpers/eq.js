import Ember from 'ember';

export function eq(params/*, hash*/) {
    let len = params.lenght;
    let ret = true;
    console.log('len -- ' + len);
    if (len && len > 0) {
        for (var i = 0; i < len-1; i++) {
            console.log('params[i] = ' + params[i]);
            ret = (ret && (params[i] === params[i+1]));
        }
    } else {
        ret = false;
    }
    console.log('----- ret ---- ' + ret);
    return ret;
}

export default Ember.Helper.helper(eq);
