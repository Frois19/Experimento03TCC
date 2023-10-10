#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SnsCreatedTopicStack } from '../lib/sns-created-topic-stack';

const app = new cdk.App();
new SnsCreatedTopicStack(app, 'SnsCreatedTopicStack', {
  env: {
    region: 'us-east-1'
  }
});