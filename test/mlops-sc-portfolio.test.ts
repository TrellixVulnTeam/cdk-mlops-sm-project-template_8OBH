import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MLOpsProjectTemplate from '../lib/mlops-sc-portfolio-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MLOpsProjectTemplate.MLOpsServiceCataloguePortfolioStack(app, 'MyTestStack', {
      constraintRole: '',
      accessRole: '',
    });
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
