// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { listMonorepoPackageNames } from './monorepo-packages';

describe('listMonorepoPackageNames', () => {
    it('returns the pinned set of package names', () => {
        expect(listMonorepoPackageNames()).toMatchInlineSnapshot(`
Array [
  "api-contracts",
  "azure-services",
  "common",
  "integration-tests",
  "logger",
  "resource-deployment",
  "service-library",
  "storage-documents",
  "storage-web-api",
]
`);
    });
});
