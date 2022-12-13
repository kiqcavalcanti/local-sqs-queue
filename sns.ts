import { SNS } from 'aws-sdk'

export const sns = new SNS({
  endpoint: 'http://sns:9911',
  region: 'us-east-2',
  credentials: {
    accessKeyId: 'a',
    secretAccessKey: 'b'
  },
  sslEnabled: false
});