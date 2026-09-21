======================================================================
CHISPAZOS.ES – E-COMMERCE WEB APPLICATION
======================================================================

Tech Stack: 
Next.js, TypeScript, Stripe Payment Intents, Upstash Redis 
(Serverless REST), Nodemailer, Tailwind CSS.

Key Features:
• Secure Server-Side Pricing & Checkout: Built a robust API route 
  integrating Stripe payment processing with centralized server-side 
  pricing rules (handling volume-based tier discounts up to 12 units) 
  to prevent frontend payload tampering and financial fraud.

• Real-Time Inventory & Order Management: Utilized Upstash Redis for 
  atomic stock tracking and persistence of orders with automated 
  weight-based shipping tariff calculations.

• Automated Transaction Webhooks: Configured secure Stripe webhook 
  listeners (payment_intent.succeeded) to autonomously update 
  inventory, archive fulfilled order logs, and trigger asynchronous 
  multi-recipient transactional email notifications (customer 
  confirmations and internal admin sales alerts) via Nodemailer and SMTP.

Live Demo: https://www.chispazos.es

If you want more information or have any questions, feel free to 
reach out at estebanforbusiness@gmail.com.
======================================================================
