#!/bin/bash
set -e
set -u
mocha -u tdd -R spec --reporter=nyan src/test/
mocha -u tdd -R spec --reporter=nyan src/integration-test/