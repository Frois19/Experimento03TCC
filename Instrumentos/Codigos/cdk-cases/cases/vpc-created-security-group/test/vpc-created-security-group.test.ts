import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as VpcCreatedSecurityGroup from '../lib/vpc-created-security-group-stack';


test('VPC Created Security Group', () => {
    const app = new cdk.App();
    const stack = new VpcCreatedSecurityGroup.VpcCreatedSecurityGroupStack(app, 'MyTestStack', {
        env: {
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);

    // Verifique se a VPC foi criada corretamente
    expect(template.hasResourceProperties('AWS::EC2::VPC', {
        CidrBlock: '10.0.0.0/16',
    }));

    // Verifique se o grupo de segurança foi criado corretamente
    expect(template.hasResourceProperties('AWS::EC2::SecurityGroup', {
        GroupDescription: 'Allow TLS inbound traffic',
        GroupName: 'cdk-case-security_group',
        SecurityGroupIngress: [{
            IpProtocol: 'tcp',
            FromPort: 443,
            ToPort: 443,
        }]
    }));

});

