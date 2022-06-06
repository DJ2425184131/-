const auth=require('./auth/index.js');
const inviteCode = require('./invite-code/index.js')

module.exports = (app) => {
    app.use(auth.routes());
    app.use(inviteCode.routes())
};