import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as SnsCreatedTopic from '../lib/sns-created-topic-stack';

test('sns Created Topic', () => {
    const app = new cdk.App();
    const stack = new SnsCreatedTopic.SnsCreatedTopicStack(app, 'MyTestStack', {
        env: {
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);
    expect(template.hasResourceProperties('AWS::SNS::Topic', {
        DisplayName: 'cdk-case-sns',
    }));
});

