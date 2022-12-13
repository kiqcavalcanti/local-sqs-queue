import { sns } from './sns';
import {sqs} from './sqs';

(async () => {

  console.log('queue', await sqs.listQueues().promise());


  const message = await sns.publish({
    Message: 'Testing message',
    Subject: 'Test Subject',
    TopicArn: 'arn:aws:sns:us-east-1:123456789012:Topic1'
  }).promise()
  console.log(message)
})();