# Cloud Resume Challenge - AWS

This project is my implementation of the **Cloud Resume Challenge**, demonstrating a full-stack serverless application hosted on Amazon Web Services (AWS). It showcases my ability to design, deploy, and manage a secure, scalable, and automated cloud infrastructure.

## 🚀 Architecture Overview

The project leverages a modern cloud-native architecture to host a professional resume as a static website.

- **Static Website Hosting:** Hosted on **Amazon S3** with high availability.
- **Content Delivery Network (CDN):** **Amazon CloudFront** ensures fast, global delivery and provides HTTPS termination.
- **DNS & Domain Management:** **Amazon Route 53** manages the custom domain and redirects (non-www to www).
- **Security:** **AWS Certificate Manager (ACM)** provides SSL/TLS certificates for secure communication.

## 🛠️ Technologies Used

- **Cloud Provider:** Amazon Web Services (AWS)
  - S3, CloudFront, Route 53, ACM
- **Frontend:**
  - HTML5, CSS3 (Custom Design)
  - JavaScript (Vanilla)
- **Deployment & Automation:**
  - GitHub Actions (CI/CD)

## 📁 Project Structure

- `index.html`: Landing page with hero section.
- `resume.html`: Professional resume details.
- `style.css`: Custom responsive styling with Material Design principles.
- `script.js`: UI interactions and navigation.
- `assets/`: Image assets and certifications.

## 📊 Deployment Strategy

1.  **S3 Bucket:** Configured for static website hosting.
2.  **ACM Certificate:** Validated via DNS for the custom domain.
3.  **CloudFront Distribution:** Configured with S3 as origin, OAI for security, and ACM certificate.
4.  **Route 53:** A-Records and CNAMEs pointing to the CloudFront distribution.

![CloudFront with S3 web endpoint](https://github.com/user-attachments/assets/795bb2ff-2d6c-4921-9e45-3c746efef8dd)

---
*This project is part of my journey to AWS Solution Associate and Cloud Engineering.*
