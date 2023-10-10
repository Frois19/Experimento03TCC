import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as RdsCreatedDbInstance from '../lib/rds-created-db-instance-stack';


test('rds Created Instance', () => {
    const app = new cdk.App();
    const stack = new RdsCreatedDbInstance.RdsCreatedDbInstanceStack(app, 'MyTestStack', {
        env: {
            account: '914084565013', 
            region: 'us-east-1'
        }
    });

    const template = Template.fromStack(stack);
    expect(template.hasResourceProperties('AWS::RDS::DBInstance', {
        Engine: 'mysql',
        EngineVersion: '5.7',
        DBInstanceClass: 'db.t2.micro',
        MasterUsername: 'dbuser123',
        MasterUserPassword: '100nha@db',
        AllocatedStorage: '10',
    }));
});

