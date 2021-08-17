const connection = require('../../config/connection');
module.exports=(userId)=>{
    return connection.query(
        `SELECT id,completed,DATETIME,task_description, title,
         due_time  FROM tasks WHERE user_id=${userId} `        
    );
};

