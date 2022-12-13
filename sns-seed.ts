import { sns } from './sns';
import { sqs } from './sqs';

(async () => {
  const topic = await sns.createTopic({
    Name: 'Topic1',
  }).promise()

  console.log('topic', topic);

  //
  // // arn:aws:sqs:sa-east-1:345604415612:test
  const params = {
    Endpoint: 'aws-sqs://first-queue?amazonSQSEndpoint=http://sqs:9324&accessKey=a&secretKey=b',
    Protocol: 'sqs',
    TopicArn: topic.TopicArn as string,
  }

  const subscribe = await sns.subscribe(params).promise()


  console.log('subscribe', subscribe)


})()


