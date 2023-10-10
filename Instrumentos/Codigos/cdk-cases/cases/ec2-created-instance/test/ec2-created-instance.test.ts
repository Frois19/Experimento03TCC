import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as Ec2CreatedInstance from '../lib/ec2-created-instance-stack';

test('EC2 Instance Created', () => {
    const app = new cdk.App();
    const stack = new Ec2CreatedInstance.Ec2CreatedInstanceStack(app, 'MyTestStack', {
        env: {
            account: '914084565013',
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::Instance', 1);
    template.hasResourceProperties('AWS::EC2::Instance', {
        InstanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO).toString(),
        Tags: [
            {
                Key: 'Name',
                Value: 'Cdk-case-ec2'
            },
        ],
    });
});
