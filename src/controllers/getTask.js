
const {getTaskQuery} = require('../database/queries');
module.exports = (req,res,next)=> {
    getTaskQuery(req.params.id).then(({ rows }) => res.json(rows)).catch(next);
}