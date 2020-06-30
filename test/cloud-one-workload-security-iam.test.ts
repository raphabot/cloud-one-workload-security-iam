import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CloudOneWorkloadSecurityIam from '../lib/cloud-one-workload-security-iam-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CloudOneWorkloadSecurityIam.CloudOneWorkloadSecurityIamStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
