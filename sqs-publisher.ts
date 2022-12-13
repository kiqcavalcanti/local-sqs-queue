import {sqs} from './sqs';

(async () => {

  console.log('queue', await sqs.listQueues().promise());


  const message = await sqs.sendMessage({
    QueueUrl: 'http://sqs:9324/000000000000/first-queue', MessageBody: 'Test', DelaySeconds: 30
  }).promise()
  console.log(message)
})();