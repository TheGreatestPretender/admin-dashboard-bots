const AWS = require('aws-sdk');



AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'Logger'
};

//an array of command objects
let commands = [];
const getCommandName = () => {

    const onScan = (err, data) => {
        if (err) {
            console.error('Unable to get command names - ' + JSON.stringify(err, null, 2));
        } else {
            console.log('Successful get! - ');
            //console.dir(data);
            
            //for each entry, if there is an object within the commands array that has the same property as dbentry.command:
            // then => increment count + 1
            // else => create new object with dbentry.command and set the count to 1
            data.Items.forEach(dbEntry => {
                /* forEach(index => {
                    if (!index.includes((dbEntry.command))
                }) */
                if (!commands.includes(dbEntry.command)) {
                    commands.push(dbEntry.command);
                }
            });
        }
    };
    docClient.scan(params, onScan);
    return commands;
}

module.exports = {
    getCommandName: getCommandName
};