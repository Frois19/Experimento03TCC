import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as S3CreatedBucket from '../lib/s3-created-bucket-stack';

test('s3 Buckect Created', () => {
    const app = new cdk.App();
    const stack = new S3CreatedBucket.S3CreatedBucketStack(app, 'MyTestStack', {
        env: {
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);
    expect(template.hasResourceProperties('AWS::S3::Bucket', {
        BucketName: 'cdk-case-s3'
    }));

});