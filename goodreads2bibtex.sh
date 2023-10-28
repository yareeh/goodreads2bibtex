#!/usr/bin/env bash

env TS_NODE_COMPILER_OPTIONS='{"module": "commonjs" }' \
  node -r ts-node/register \
  src/goodreads2bibtex.ts
