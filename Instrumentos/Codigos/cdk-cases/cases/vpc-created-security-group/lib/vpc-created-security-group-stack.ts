import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class VpcCreatedSecurityGroupStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'TheVPC', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    })

    const mySecurityGroupWithoutInlineRules = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc,
      description: 'Allow TLS inbound traffic',
      securityGroupName: "cdk-case-security_group",
    });

    mySecurityGroupWithoutInlineRules.addIngressRule(ec2.Peer.ipv4(vpc.vpcCidrBlock), ec2.Port.tcp(443));
  }
}
