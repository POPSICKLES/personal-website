#!/bin/bash
pwd
cd client && npm install && cd .. && npm install
cd client && npm run build && cd ..