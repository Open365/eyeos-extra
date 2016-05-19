#!/bin/bash
set -e
set -u
grunt unit-test
node src/integration-test/licenseDAO-integration.test.js