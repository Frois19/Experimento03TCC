import * as cdk from 'aws-cdk-lib';
import * as EcrCreatedRepository from '../lib/ecr-created-repository-stack';
import * as assert from '@aws-cdk/assert';
import { matchTemplate } from '@aws-cdk/assert';
import { Template } from 'aws-cdk-lib/assertions';


test('ecr Created Repository', () => {
    const app = new cdk.App();
    const stack = new EcrCreatedRepository.EcrCreatedRepositoryStack(app, 'MyTestStack', {
        env: {
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);
    expect(template.hasResourceProperties('AWS::ECR::Repository', {
        RepositoryName: 'cdk-case-ecr',
        ImageScanningConfiguration: {
            ScanOnPush: true
        },
        ImageTagMutability: "MUTABLE"
    }));
   
});