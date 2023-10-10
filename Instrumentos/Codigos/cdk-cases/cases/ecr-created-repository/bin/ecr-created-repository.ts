#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrCreatedRepositoryStack } from '../lib/ecr-created-repository-stack';

const app = new cdk.App();
new EcrCreatedRepositoryStack(app, 'EcrCreatedRepositoryStack', {
  env: {
    region: 'us-east-1'
  }
});