import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as VpcCreated from '../lib/vpc-created-stack';


test('VPC Created', () => {
    const app = new cdk.App();
    const stack = new VpcCreated.VpcCreatedStack(app, 'MyTestStack', {
        env: {
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);

    expect(template.hasResourceProperties('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/16',
      Tags: [{ Key: 'Name', Value: 'cdk-case-vpc' }]
    }))
  
});
