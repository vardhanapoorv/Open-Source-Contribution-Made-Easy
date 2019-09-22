/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-09-22 23:25:03 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-22 23:46:04
 */

/*
TODO: Create the GraphQL setup using Apollo-Server. Refer Apollo Docs for help. 
*/

const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@oss-contri-jmuc0.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
, {useNewUrlParser: true}).then(() => {
    app.listen(8000);
}).catch(err => {
    console.log(err);
})
