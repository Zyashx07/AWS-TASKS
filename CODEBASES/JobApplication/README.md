# Serverless Job Application Portal

## Project Overview

This project is a Serverless Job Application Portal built using AWS services and hosted through Nginx on a Linux VPS. Users can view job details and submit job applications through a web form. Application data is processed by AWS Lambda and stored in Amazon DynamoDB without using a traditional backend server.

## Architecture

User
↓
Nginx (VPS)
↓
Frontend (HTML, CSS, JavaScript)
↓
Amazon API Gateway
↓
AWS Lambda
↓
Amazon DynamoDB

## AWS Services Used

* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB
* Amazon CloudWatch

## Infrastructure Used

* Linux VPS
* Nginx Web Server

## Features

### Job Details Section

Displays:

* Job Title
* Company Name
* Location
* Experience Required
* Skills Required
* Job Description

### Application Form

Users can submit:

* Full Name
* Email Address
* Phone Number
* Qualification
* Years of Experience
* Skills
* Cover Letter

### Serverless Backend

* API Gateway receives requests.
* Lambda validates and processes application data.
* Unique application IDs are generated automatically.
* Application details are stored in DynamoDB.

### Monitoring

* Lambda execution logs are available in CloudWatch.
* Successful and failed requests can be monitored.

## DynamoDB Table

Table Name:

```text
JobApplications
```

Primary Key:

```text
applicationId
```

Stored Fields:

* applicationId
* fullName
* email
* phoneNumber
* qualification
* experience
* skills
* coverLetter
* appliedDate

## Deployment Steps

### 1. Create DynamoDB Table

Create a DynamoDB table named `JobApplications` with `applicationId` as the partition key.

### 2. Create Lambda Function

Create a Lambda function named `SubmitJobApplication` and configure permissions for DynamoDB access.

### 3. Create API Gateway

Create an HTTP API endpoint and integrate it with the Lambda function.

### 4. Develop Frontend

Build the frontend using:

* HTML
* CSS
* JavaScript

### 5. Configure VPS and Nginx

* Launch Linux VPS.
* Install Nginx.
* Upload frontend files.
* Host the application through Nginx.

### 6. Testing

* Open the application using VPS public IP.
* Submit job applications.
* Verify records in DynamoDB.
* Verify logs in CloudWatch.

## Expected Outcome

The application successfully demonstrates a cloud-native serverless architecture where:

* Frontend is hosted on a VPS using Nginx.
* API requests are handled by AWS Lambda.
* Data is stored in DynamoDB.
* CloudWatch provides monitoring and logging.
* No traditional backend server is required.

<img width="1920" height="1020" alt="Screenshot 2026-06-03 112615" src="https://github.com/user-attachments/assets/15df6d60-efc7-4ed3-b6d7-d17fc11c48e9" />

<img width="1920" height="1020" alt="Screenshot 2026-06-03 113257" src="https://github.com/user-attachments/assets/fb523ddd-965a-4642-ac3f-087405f28436" />

<img width="1920" height="1020" alt="Screenshot 2026-06-03 114540" src="https://github.com/user-attachments/assets/c2930f89-f94b-4379-8e82-4a790d348a05" />

<img width="1920" height="1020" alt="Screenshot 2026-06-03 115144" src="https://github.com/user-attachments/assets/66f3e130-bf47-4648-95a3-1191a6f6efed" />



## Author

Yashvanth Ganta

B.Tech Computer Science Engineering (CSE)
