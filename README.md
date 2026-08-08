<div align="center">
🎓 FreeDox — Employer & Placement Drive Management System
Topic V05 — Reusable Master Entity & Accreditation Automation MVP
Live Demo Banner
GitHub Profile
Vercel Status
<p align="center"> <strong>Organized for FreeDox Hackathon</strong> School of Engineering (SOE) • St. Aloysius (Deemed to be University), Mangaluru </p>
<a href="https://placement-gules.vercel.app/"> <img src="https://img.shields.io/badge/👉_CLICK_HERE_TO_LAUNCH_LIVE_APP-4F46E5?style=for-the-badge&logoColor=white" height="40" alt="Launch App" /> </a>
</div>
⚡ Developer & Profile Analytics
<div align="center">
<!-- GitHub Dynamic Stars & Stats Widgets --> <img src="https://github-readme-stats.vercel.app/api?username=Hisham-Muhammed&show_icons=true&theme=dark&rank_icon=github&border_radius=10" alt="Hisham Muhammed Stats" height="160" /> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hisham-Muhammed&layout=compact&theme=dark&border_radius=10" alt="Top Languages" height="160" />
GitHub Stars
GitHub Followers
</div>
🎯 Problem Statement (Topic V05)
Academic institutions are required by NBA / NAAC Accreditation bodies to document all recruiting companies, visiting employers, and placement drives conducted.
The Core ER Challenge:
In conventional manual record-keeping, company details (e.g., sector, website, headquarters) are re-entered every single time a placement drive occurs. This causes data duplication, inconsistent naming anomalies, and inaccurate Repeat Recruiter reports.
💡 Engineering Solution & Architecture
Our software resolves data redundancy by establishing a Reusable Master Entity Architecture:
[ COMPANY MASTER ENTITY ]  1  <-------->  N  [ PLACEMENT DRIVE RECORD ]
  • company_id (Primary Key)                   • drive_id (Primary Key)
  • company_name                               • company_id (Foreign Key)
  • industry_sector                            • academic_year
  • location / website                         • eligibility_cutoff


Key Highlights:
Zero Redundancy: A company is registered once in the Master Directory.
Foreign Key Referencing: Multiple placement drives across academic years (AY 2024-25, AY 2025-26) reference the same company_id.
Automatic Repeat Recruiter Tracking: Companies conducting more than 1 drive are automatically detected and aggregated into NAAC compliance reports.
✨ Features & User Interface Flow
Companies Directory ──> Company Profile ──> Associated Drives ──> Repeat Recruiters Audit Report


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
Navigate to "Repeat Recruiters" tab — observe that the drive count and repeat recruiter flag update dynamically without any duplicate company record!
🛠️ Tech Stack & Decisions
Frontend: React 18, Vite Engine
Styling: Tailwind CSS (Cyberpunk Dark Mode + Native @media print PDF styles)
Icons: Lucide React
Deployment: Vercel Continuous Deployment
📂 Project Repository Structure
Placement-/
├── index.html                  # Root HTML entry point
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Complete documentation
└── src/
    ├── main.jsx                # React DOM mounting
    └── App.jsx                 # Complete V05 Single-File React MVP


<div align="center">
Designed & Built with ❤️ by Hisham Muhammed for FreeDox Hackathon 2026 School of Engineering (SOE), St. Aloysius (Deemed to be University), Mangaluru
Launch App
</div>
