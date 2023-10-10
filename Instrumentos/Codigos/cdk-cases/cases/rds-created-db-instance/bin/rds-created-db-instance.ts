#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RdsCreatedDbInstanceStack } from '../lib/rds-created-db-instance-stack';

const app = new cdk.App();
new RdsCreatedDbInstanceStack(app, 'RdsCreatedDbInstanceStack', {
  env: {
    account: '914084565013', 
    region: 'us-east-1'
  }
});