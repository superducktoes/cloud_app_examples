# cloud_app_examples
Examples from deploying an app across EC2, container, and serverless. Notes are below for deploying.
Simple App
# sudo yum install -y gcc-c++ make
# curl -sL https://rpm.nodesource.com/setup_15.x | sudo -E bash -
# sudo yum install -y nodejs
# cd simpleapp
# npm start

Docker Container
# cd container_app
# docker build -t superducktoes/node-app-hostup:v1.0 .
# docker run -p 10000:3000 -d superducktoes/node-app-hostup:v1.0

Serverless
# npm install -g serverless
# sls config credentials --provider aws --key AWS_PUBLIC_KEY --secret AWS_SECRET_KEY
# cd serverless-nodejs-app
# sls deploy