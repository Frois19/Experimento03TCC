#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Ec2CreatedInstanceStack } from '../lib/ec2-created-instance-stack';

const app = new cdk.App();
new Ec2CreatedInstanceStack(app, 'Ec2CreatedInstanceStack', {
    env: {
        account: '914084565013', 
        region: 'us-east-1'
    }
});