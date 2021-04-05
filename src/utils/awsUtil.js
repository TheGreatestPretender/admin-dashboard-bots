const AWS = require('aws-sdk');



AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

//get all possible commands
const getCommands = () => {
    let listOfCommands = {};
    let params = {
        TableName: 'Logger',
    };

    const onScan = (err, data) => {
        if (err) {
            console.error('Unable to get command - ' + JSON.stringify(err, null, 2));
        } else {
            console.log('Scan success!');

            data.Items.forEach(item => {
                
                if (!(item.command in listOfCommands)) {
                    listOfCommands[item.command] = 0;
                };

                listOfCommands[item.command] += 1;
            })
        }
    };

    console.log('Scanning logger table');
    docClient.scan(params, onScan);
    return listOfCommands;
}

module.exports = {
    getCommands,
}
/*   execute(message) {
        let listOfReviews = [];
        let params = {
            TableName: 'XyronReviews',
        };
        
        //function that triggers when command is called
        const onScan = (err, data) => {
            if (err) {
                console.error('Unable to get review - ' + JSON.stringify(err, null, 2));
                message.channel.send('Unable to get review');
            } else {
                console.log('Scan success!');
                //loop through the returned query and add only the 'reviews' value into list of revi
ews
                data.Items.forEach((item) => {
                    listOfReviews.push(item.reviews);
                });
                
                if (typeof data.LastEvaluatedKey != 'undefined') {
                    console.log('Scanning for more...');
                    params.ExclusiveStartKey = data.LastEvaluatedKey;
                    docClient.scan(params, onScan);
                };
                console.log(listOfReviews[Math.floor(Math.random() * listOfReviews.length)]);
                //return a randomized review
                return message.channel.send(listOfReviews[Math.floor(Math.random() * listOfReviews.l
ength)]);
            }
        };

        console.log('scanning reviews table');
        docClient.scan(params, onScan);
    } */