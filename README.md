Accreditation
​<p align="center">
A production-ready management platform built to model reusable company master profiles, schedule campus placement drives without data redundancy, and generate automated audit reports.
</p>
​Key Features • ER Architecture • Tech Stack • Quick Start • Acceptance Test
​</div>
​📌 Business & Accreditation Requirement
​Educational institutions are required by accreditation bodies (NAAC / NBA) to maintain comprehensive records of employer recruitment visits and student placement drives.
​🔴 The Challenge
​Traditional placement management systems re-enter company details (location, industry, contact info) for every new drive. This causes:
​Data Duplication: The same employer exists under multiple variations across academic years.
​Inaccurate Audit Reports: Calculating "Repeat Recruiters" or "Industry-wise Participation" becomes error-prone.
​🟢 The Solution (Module V05 Architecture)
​This module decouples Company Master Profiles from time-bound Placement Drives:
​Company Master: Reusable master record capturing generic corporate entity details.
​Placement Drive: Transactional record linking back to the Master Company via Foreign Key (company_id).
​✨ Key Features
​🏢 Company Master Registry: Centralized directory with industry classifications and locations.
​📅 Placement Drive Scheduler: Link drives to Academic Years with custom CGPA criteria and real-time status updates (Scheduled, In-Progress, Completed, Cancelled).
​🔁 Repeat Recruiter Engine: Automatically tracks and reports companies visiting campus across multiple academic years.
​📊 Dynamic Analytical Dashboards:
​Drives conducted by Academic Year
​Industry-wise recruiter breakdown
​Repeat recruiter frequency reports
​🔍 Real-Time Filtering: Instant parametric search by industry, academic year, and drive status.
​📐 ER Architecture & Schema Design
​ER Diagram (Mermaid)
