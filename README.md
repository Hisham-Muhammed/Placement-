<div align="center">
​<!-- Header Banner / Logo -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=220&section=header&text=V05%20-%20Employer%20%26%20Placement%20Drive&fontSize=38&animation=fadeIn&fontColor=ffffff" width="100%" alt="Header Banner"/>
​<p align="center">
<b>A Next-Gen Institutional Placement & Employer Management Ecosystem</b>
</p>
​<!-- Badges -->
<p align="center">
<a href="https://github.com/Hisham-Muhammed"><img src="https://img.shields.io/github/stars/Hisham-Muhammed/V05-Placement-Registry?style=for-the-badge&color=7c3aed&logo=github" alt="Stars"></a>
<a href="https://github.com/Hisham-Muhammed"><img src="https://img.shields.io/github/forks/Hisham-Muhammed/V05-Placement-Registry?style=for-the-badge&color=2563eb&logo=github" alt="Forks"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge" alt="License"></a>
<a href="https://github.com/Hisham-Muhammed"><img src="https://img.shields.io/badge/Accreditation-NAAC%20%2F%20NBA-f59e0b?style=for-the-badge&logo=shield" alt="Accreditation"></a>
</p>
​<p align="center">
<a href="#-quick-deploy">⚡ Quick Deploy</a> •
<a href="#-features">✨ Features</a> •
<a href="#-er-architecture">📐 Architecture</a> •
<a href="#-installation">🚀 Setup</a> •
<a href="#-developers">👨‍💻 Developers</a>
</p>
​</div>
​📌 Business & Accreditation Requirement
​Institutions must document visiting recruiters and placement drives while avoiding data duplication across multiple academic years.
​🛑 The Problem
​Traditional systems duplicate company records every time a drive is created. This corrupts audit reports, distorts repeat recruiter metrics, and fails NAAC / NBA criteria.
​🚀 The Solution
​This platform implements a Reusable Master Entity Architecture. Company records are stored once and referenced by multiple placement drives using Foreign Keys (company_id).
​⚡ Quick Deploy
​Deploy or test the project instantly with a single click:
​<p align="center">
<a href="https://replit.com">
<img src="https://img.shields.io/badge/Run%20on-Replit-ff4154?style=for-the-badge&logo=replit&logoColor=white" alt="Run on Replit"/>
</a>
  
<a href="https://heroku.com">
<img src="https://img.shields.io/badge/Deploy%20to-Heroku-7952b3?style=for-the-badge&logo=heroku&logoColor=white" alt="Deploy to Heroku"/>
</a>
  
<a href="https://vercel.com">
<img src="https://img.shields.io/badge/Deploy%20to-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deploy to Vercel"/>
</a>
</p>
​✨ Features
​🏢 Company Master Registry: Centralized catalog storing company metadata, location, and sector.
​📅 Placement Drive Scheduling: Connect drives to Academic Years with custom eligibility criteria and dynamic statuses (Scheduled, In-Progress, Completed, Cancelled).
​🔁 Repeat Recruiter Analytics: Automated engine tracking companies visiting campus across multiple years.
​📊 Real-time Dashboards: Visual charts for industry breakdown and yearly drive distribution.
​📐 ER Architecture & Schema Design
