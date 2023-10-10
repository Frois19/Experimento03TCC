#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { S3CreatedBucketStack } from '../lib/s3-created-bucket-stack';

const app = new cdk.App();
new S3CreatedBucketStack(app, 'S3CreatedBucketStack', {
  env: {
    'region': 'us-east-1'
  }
});