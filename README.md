🎓 Employer & Placement Drive Management System

<p align="center">
  <img src="https://img.shields.io/badge/Status-MVP-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Academic-Project-blue?style=for-the-badge" alt="Academic Project">
  <img src="https://img.shields.io/badge/Placement-Management-purple?style=for-the-badge" alt="Placement Management">
</p><p align="center">
  <b>A centralized system for managing employers, placement drives, student participation, and recruitment insights.</b>
</p><p align="center">
  <a href="https://placement-gules.vercel.app/">🌐 Live Demo</a>
  •
  <a href="https://github.com/Hisham-Muhammed">👨‍💻 GitHub Profile</a>
</p>---

📌 Overview

The Employer & Placement Drive Management System is a web-based application designed to help educational institutions manage and track companies, placement drives, student participation, and recruitment history in a centralized system.

The system addresses a common institutional requirement:

«Companies should be stored once as reusable master records and referenced by multiple placement drives.»

Instead of entering the same company information every time a company conducts a recruitment drive, the system maintains a centralized Company Master and allows multiple placement drives to reference it.

This makes the data more consistent, searchable, and suitable for generating accreditation and placement reports.

---

🎯 Problem Statement

Educational institutions frequently conduct placement drives with companies across multiple academic years.

Without a centralized system, the same company information may be entered repeatedly:

TCS
 ├── 2024 Placement Drive
 ├── 2025 Placement Drive
 └── 2026 Placement Drive

This can lead to:

- ❌ Duplicate company records
- ❌ Inconsistent company information
- ❌ Difficulty identifying repeat recruiters
- ❌ Difficult year-wise reporting
- ❌ Repeated data entry
- ❌ Poor data maintainability

💡 Our Solution

The system separates the Company from the Placement Drive.

                    ┌─────────────────┐
                    │     COMPANY     │
                    │─────────────────│
                    │ Company ID      │
                    │ Name            │
                    │ Industry        │
                    │ Location        │
                    └────────┬────────┘
                             │
                 ┌───────────┼───────────┐
                 │           │           │
                 ▼           ▼           ▼
          ┌────────────┐ ┌────────────┐ ┌────────────┐
          │   Drive 1  │ │   Drive 2  │ │   Drive 3  │
          │   2024-25  │ │   2025-26  │ │   2026-27  │
          └────────────┘ └────────────┘ └────────────┘

A company is created once and can be associated with any number of placement drives.

---

✨ Key Features

🏢 Company Management

- Create company records
- Store industry/sector
- Store company location
- View complete company profiles
- Search companies
- Filter companies
- Update company information

📅 Placement Drive Management

- Create placement drives
- Associate drives with existing companies
- Academic-year tracking
- Eligibility criteria
- Drive status
- View drive history
- Update drive information

👨‍🎓 Participation Management

Track student participation in placement drives and analyze recruitment activity.

🔎 Search & Filtering

Find relevant information using:

- Company
- Academic year
- Industry
- Drive status
- Placement drive

📊 Reports & Insights

The system provides insights such as:

- Companies by year
- Placement drives by year
- Industry-wise participation
- Repeat recruiters
- Recruitment activity

---

🧭 Application Flow

Companies
    │
    ▼
Company Profile
    │
    ▼
Placement Drives
    │
    ▼
Participation

Example

Google
  │
  ├── 2024-25 Drive
  │      └── Student Participation
  │
  ├── 2025-26 Drive
  │      └── Student Participation
  │
  └── 2026-27 Drive
         └── Student Participation

The company information is not duplicated across these drives.

---

🗃️ Core Data Model

The system is designed around reusable entities.

Company

Field| Description
Company ID| Unique identifier
Company Name| Employer name
Industry| Industry / sector
Location| Company location

Placement Drive

Field| Description
Drive ID| Unique drive identifier
Company ID| Reference to existing company
Academic Year| Academic year
Eligibility Criteria| Student eligibility
Drive Status| Current drive status

Participation

Field| Description
Participation ID| Unique participation identifier
Drive ID| Placement drive
Student ID| Participating student
Status| Participation/result status

---

🔗 ER Design

The most important design decision is the relationship between Company and Placement Drive.

┌────────────────────┐
│      COMPANY       │
├────────────────────┤
│ PK company_id      │
│ company_name       │
│ industry           │
│ location           │
└─────────┬──────────┘
          │
          │ 1
          │
          │ N
┌─────────▼──────────┐
│  PLACEMENT DRIVE   │
├────────────────────┤
│ PK drive_id        │
│ FK company_id      │
│ academic_year     │
│ eligibility        │
│ status             │
└─────────┬──────────┘
          │
          │ 1
          │
          │ N
┌─────────▼──────────┐
│   PARTICIPATION    │
├────────────────────┤
│ PK participation_id│
│ FK drive_id        │
│ FK student_id      │
│ participation_status│
└────────────────────┘

♻️ How duplication is prevented

The "company_id" acts as the reusable reference.

Instead of:

Drive 1 → TCS, IT, Mumbai
Drive 2 → TCS, IT, Mumbai
Drive 3 → TCS, IT, Mumbai

We store:

Company
------
ID: 01
Name: TCS
Industry: IT
Location: Mumbai

        ↓
       company_id

Drive 1 → 01
Drive 2 → 01
Drive 3 → 01

Therefore, company details are stored only once.

This follows a normalized relational design and makes repeat recruiter identification straightforward.

---

📊 Reports & Insights

The system supports important institutional insights.

🗓️ Companies by Academic Year

Identify companies that participated in recruitment during a particular academic year.

📅 Drives by Year

Track the total number of placement drives conducted each year.

🏭 Industry-wise Participation

Analyze recruitment participation across industries such as:

IT / Software
Finance
Consulting
Manufacturing
Healthcare
E-Commerce

🔁 Repeat Recruiters

Identify companies that conducted placement drives multiple times.

Example:

Company       Drives
─────────────────────
TCS              3
Infosys          2
Accenture        2
Deloitte         1

This helps institutions understand long-term recruiter relationships.

---

🧪 Dummy Dataset

The MVP includes a representative dataset containing:

- ✅ 10+ companies
- ✅ 4+ industries
- ✅ 15+ placement drives
- ✅ 2+ academic years
- ✅ Repeat recruiters
- ✅ Student participation records

This allows the reporting and filtering functionality to be demonstrated realistically.

---

✅ Acceptance Test

The system satisfies the core acceptance scenario:

Scenario

A company already exists in the database.

Company: TCS
Industry: IT
Location: Mumbai

The institution wants to add another placement drive.

Expected behavior

The user selects:

Existing Company → TCS

and enters only the new drive information:

Academic Year: 2026-27
Eligibility: B.Tech CSE
Status: Completed

The system creates the new drive without requiring the user to enter:

Company Name
Industry
Location

again.

Repeat Recruiter Test

If TCS has multiple placement drives:

TCS → Drive 1
TCS → Drive 2
TCS → Drive 3

the Repeat Recruiter Report identifies TCS as a repeat recruiter.

---

🛠️ Technology Stack

«Update this section if your final implementation uses different technologies.»

Technology| Purpose
HTML / CSS / JavaScript| Frontend
React| User Interface
Vercel| Deployment
Git & GitHub| Version Control

Architecture

┌─────────────────────────────┐
│          Frontend           │
│      Web Application        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      Application Logic      │
│ CRUD / Search / Filtering   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Data Management       │
│ Companies / Drives / Users  │
└─────────────────────────────┘

---

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/Hisham-Muhammed/<repository-name>.git

2. Navigate to the Project

cd <repository-name>

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

The application will be available locally.

---

🌐 Live Demo

Try the deployed application:

"🚀 Open Employer & Placement Drive Management System" (https://placement-gules.vercel.app/)

---

📸 Screenshots

Add screenshots of the main application screens here.

Dashboard

Add dashboard screenshot here

Companies

Add companies page screenshot here

Company Profile

Add company profile screenshot here

Placement Drives

Add placement drives screenshot here

Reports

Add reports/insights screenshot here

---

📁 Project Structure

📦 employer-placement-management
│
├── 📁 src
│   ├── 📁 components
│   ├── 📁 pages
│   ├── 📁 services
│   ├── 📁 data
│   └── 📁 ...
│
├── 📁 public
│
├── 📄 README.md
├── 📄 package.json
└── 📄 docs
    └── technology-decision.md

«Modify the structure above to match the actual repository structure.»

---

🧠 Design Decisions

The major architectural decision is to treat Company as a master entity.

Why?

A company can conduct multiple placement drives across different academic years.

Therefore:

Company 1 ──────────── N Placement Drives

rather than storing company information inside every drive.

Benefits

- Reduced data duplication
- Better data consistency
- Easier updates
- Cleaner database design
- Easier reporting
- Simple repeat-recruiter detection
- Better scalability

---

📈 Future Enhancements

Possible improvements include:

- 🔐 Role-based authentication
- 👨‍💼 Placement officer dashboard
- 👨‍🎓 Student portal
- 📧 Email notifications
- 📄 Placement report export
- 📊 Advanced analytics dashboard
- 📥 Excel/CSV import
- 📤 PDF report generation
- 🔔 Drive reminders
- 🏆 Placement statistics
- ☁️ Cloud database integration

---

🎓 Institutional Use Cases

This system can support placement departments with:

Accreditation Documentation

Maintain structured records of employers and recruitment activities.

Placement Analysis

Analyze recruitment trends across academic years.

Recruiter Relationship Tracking

Identify companies that repeatedly recruit from the institution.

Department-wise Analysis

Compare placement activity across academic programs and departments.

Annual Reports

Generate structured placement statistics for institutional reporting.

---

🏆 Project Objectives

Objective| Status
Company Master Entity| ✅
Placement Drive Management| ✅
Company Search| ✅
Drive Search & Filtering| ✅
Academic Year Tracking| ✅
Eligibility Criteria| ✅
Drive Status| ✅
Repeat Recruiter Detection| ✅
Industry-wise Insights| ✅
CRUD Operations| ✅
ER Design| ✅
Live Deployment| ✅

---

👨‍💻 Developer

Muhammed Hisham M H

B.Tech Computer Science & Engineering Student

<p align="center"><a href="https://github.com/Hisham-Muhammed">
<img src="https://img.shields.io/badge/GitHub-Hisham--Muhammed-181717?style=for-the-badge&logo=github" />
</a></p>---

🔗 Project Links

🌐 Live Website
https://placement-gules.vercel.app/

💻 GitHub Profile
https://github.com/Hisham-Muhammed

---

⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐.

---

<p align="center">
  <b>Built to simplify placement data management and turn recruitment records into useful institutional insights.</b>
</p><p align="center">
  Made with ❤️ for institutional placement management.
</p>
