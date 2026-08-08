🎓 FreeDox — Employer & Placement Drive Management System
Topic V05 — Reusable Master Entity & Accreditation Automation MVP > Developed for FreeDox Hackathon 2026 | St. Aloysius School of Engineering (SOE), Mangaluru
🔗 Quick Links & Badges
🚀 Live Demo: https://placement-gules.vercel.app/
👨‍💻 Developer: Hisham Muhammed
⚡ Deployment Status: ✅ Live on Vercel
🎯 Problem Statement (Topic V05)
Academic institutions are required by NBA / NAAC Accreditation bodies to document all recruiting companies, visiting employers, and placement drives conducted.
The Core ER Challenge:
In conventional manual record-keeping, company details (e.g., sector, website, headquarters) are re-entered every single time a placement drive occurs. This causes:
Data duplication & naming anomalies (e.g., "TCS", "Tata Consultancy Services").
Inaccurate Repeat Recruiter reports required for accreditation.
💡 Engineering Solution & Architecture
Our software resolves data redundancy by establishing a Reusable Master Entity Architecture:
[ COMPANY MASTER ENTITY ] (1)  <------>  (N) [ PLACEMENT DRIVE RECORD ]
  • company_id (Primary Key)                   • drive_id (Primary Key)
  • company_name                               • company_id (Foreign Key)
  • industry_sector                            • academic_year
  • location / website                         • eligibility_cutoff


Key Highlights:
Zero Redundancy: A company is registered once in the Master Directory.
Foreign Key Referencing: Multiple placement drives across academic years (AY 2024-25, AY 2025-26) reference the same company_id.
Automatic Repeat Recruiter Tracking: Companies conducting more than 1 drive are automatically detected and aggregated into NAAC compliance reports.
✨ System Features & Flow
Companies Directory ➔ Company Profile ──> Placement Drives ──> Repeat Recruiters Report
🏢 Master Companies Directory: View, search, and filter 10+ pre-seeded companies across 5 major industry sectors.
💼 Placement Drives Register: View drives filtered by Academic Year (AY 2024-25 / AY 2025-26) and packages offered.
➕ 1-Click Drive Scheduling (Acceptance Test): Schedule new drives by selecting an existing Master Company without re-entering company metadata.
📈 Repeat Recruiter Insights: Automated audit summary highlighting repeat visits, total offers generated, and visit percentages.
🖨️ Accreditation Report Exporter: Direct 1-click printable PDF report formatted specifically for St. Aloysius SOE audits.
🔬 Acceptance Test Verification
A judge or reviewer can test the MVP by following these steps:
Open the Live Web Application.
Click "New Drive" on the top navigation bar.
Select an existing Master Company (e.g., TCS or Bosch Global Software).
Fill in the drive date and CGPA eligibility, then click "Register Placement Drive".
Navigate to "Repeat Recruiters" tab — observe that the drive count and repeat recruiter flag update dynamically without creating duplicate company records!
🛠️ Tech Stack
Frontend Framework: React 18 (Vite)
Styling: Tailwind CSS (Dark Mode & Native Print Styles)
Icons: Lucide React
Deployment: Vercel Continuous Integration
📂 Repository Structure
Placement-/
├── index.html                  # HTML Root Entry
├── package.json                # NPM Dependencies
├── vite.config.js              # Vite Build Configuration
├── README.md                   # Project Documentation
└── src/
    ├── main.jsx                # React Mounting
    └── App.jsx                 # V05 Single-File React MVP


<p align="center"> <b>Developed by Hisham Muhammed | St. Aloysius (Deemed to be University)</b> </p>
