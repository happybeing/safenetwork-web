// TODO; not sure if this is correct since re-organising:
// Must set webpack.config output library to SafenetworkWeb
// import * as SafenetworkWeb from './safenetwork-web'

// SafenetworkFsApi plus RESTful web services:
const SafenetworkWeb = require('./safenetwork-web')

exports = module.exports = SafenetworkWeb
module.exports.SafenetworkWeb = SafenetworkWeb
