import { SQS } from 'aws-sdk'

export const sqs = new SQS({
  endpoint: 'http://sqs:9324',
  region: 'us-east-2',
  credentials: {
    accessKeyId: 'a',
    secretAccessKey: 'b'
  }
});