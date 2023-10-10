#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcCreatedStack } from '../lib/vpc-created-stack';

const app = new cdk.App();
new VpcCreatedStack(app, 'VpcCreatedStack', {
  env: {
    region: 'us-east-1'
  }
});