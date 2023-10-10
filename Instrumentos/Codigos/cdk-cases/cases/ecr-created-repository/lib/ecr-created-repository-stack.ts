import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr';

export class EcrCreatedRepositoryStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecr.Repository(this, 'Repo', {
      imageScanOnPush: true,
      imageTagMutability: ecr.TagMutability.MUTABLE,
      repositoryName: "cdk-case-ecr"
    });

  }
}
