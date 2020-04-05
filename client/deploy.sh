#!/bin/bash

aws s3 rm s3://www.kabuto.work/ --recursive
aws s3 cp build s3://www.kabuto.work/ --recursive