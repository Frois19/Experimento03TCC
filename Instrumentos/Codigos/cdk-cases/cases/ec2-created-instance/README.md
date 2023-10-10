# EC2 Instance 

Example in documentation using [EC2 instance](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.Instance.html#example): 

```typescript
declare const vpc: ec2.IVpc;
const lb = new elb.LoadBalancer(this, 'LB', {
  vpc,
  internetFacing: true,
});

// instance to add as the target for load balancer.
const instance = new ec2.Instance(this, 'targetInstance', {
  vpc: vpc,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO),
  machineImage: new ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 }),
});
lb.addTarget(new elb.InstanceTarget(instance));
```
For AWS Free Tier is required change InstanceType:

```typescript
ec2.InstanceClass.T2
```

Into the method using CDK is necessary passed vpc, for this using to default account 
Example in documentation using [exists VPC](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2-readme.html#importing-an-existing-vpc)

```typescript
const vpc = ec2.Vpc.fromLookup(stack, 'VPC', {
  // This imports the default VPC but you can also
  // specify a 'vpcName' or 'tags'.
  isDefault: true,
});
```

In addiont, using [virtualization type](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ec2.AmazonLinuxVirt.html) to define proprerty to AMI:

```typescript
virtualization: ec2.AmazonLinuxVirt.HVM
```

Only using personalized instanceName for control and organization into AWS console