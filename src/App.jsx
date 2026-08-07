import React, { useState, useMemo } from 'react';
import { 
  Building2, Briefcase, Calendar, Award, BarChart3, Plus, Search, Filter, 
  CheckCircle2, RefreshCw, Printer, ShieldCheck, FileSpreadsheet, Eye, 
  ExternalLink, Layers, ArrowUpRight, ChevronRight, Sparkles, AlertCircle, 
  MapPin, Globe, Users, TrendingUp, BookOpen, Trash2, Edit3, Check, Copy, Tag
} from 'lucide-react';

// DUMMY DATASET (Guaranteed 10 Companies, 5 Industries, 16 Drives across 2 Academic Years)
const INITIAL_COMPANIES = [
  { id: 'COMP-001', name: 'TCS (Tata Consultancy Services)', industry: 'IT & Software', location: 'Bengaluru, KA', website: 'https://tcs.com', tier: 'Tier 1' },
  { id: 'COMP-002', name: 'Infosys', industry: 'IT & Software', location: 'Mysuru / Mangaluru, KA', website: 'https://infosys.com', tier: 'Tier 1' },
  { id: 'COMP-003', name: 'Bosch Global Software', industry: 'Automotive & Embedded Systems', location: 'Bengaluru, KA', website: 'https://bosch.com', tier: 'Tier 1' },
  { id: 'COMP-004', name: 'L&T Technology Services', industry: 'Core Engineering', location: 'Mumbai, MH', website: 'https://ltts.com', tier: 'Tier 2' },
  { id: 'COMP-005', name: 'Cognizant (CTS)', industry: 'IT & Software', location: 'Chennai, TN', website: 'https://cognizant.com', tier: 'Tier 2' },
  { id: 'COMP-006', name: 'Federal Bank', industry: 'BFSI & Fintech', location: 'Kochi, KL', website: 'https://federalbank.co.in', tier: 'Tier 2' },
  { id: 'COMP-007', name: 'Deloitte India', industry: 'Consulting & Analytics', location: 'Hyderabad, TS', website: 'https://deloitte.com', tier: 'Tier 1' },
  { id: 'COMP-008', name: 'Tech Mahindra', industry: 'IT & Software', location: 'Pune, MH', website: 'https://techmahindra.com', tier: 'Tier 2' },
  { id: 'COMP-009', name: 'Wipro Limited', industry: 'IT & Software', location: 'Bengaluru, KA', website: 'https://wipro.com', tier: 'Tier 2' },
  { id: 'COMP-010', name: 'Texas Instruments', industry: 'Semiconductor & Hardware', location: 'Bengaluru, KA', website: 'https://ti.com', tier: 'Tier 1' }
];

const INITIAL_DRIVES = [
  // AY 2024-25 Drives
  { id: 'DRV-101', companyId: 'COMP-001', academicYear: 'AY 2024-25', driveDate: '2024-09-15', eligibilityCGPA: 6.5, status: 'Completed', ctcLpa: '4.5 - 7.0 LPA', offersCount: 28, branches: ['CSE', 'ECE'] },
  { id: 'DRV-102', companyId: 'COMP-002', academicYear: 'AY 2024-25', driveDate: '2024-10-10', eligibilityCGPA: 6.0, status: 'Completed', ctcLpa: '3.8 - 6.2 LPA', offersCount: 22, branches: ['CSE', 'ECE', 'MECH'] },
  { id: 'DRV-103', companyId: 'COMP-003', academicYear: 'AY 2024-25', driveDate: '2024-11-05', eligibilityCGPA: 7.0, status: 'Completed', ctcLpa: '6.5 - 9.0 LPA', offersCount: 12, branches: ['CSE', 'ECE'] },
  { id: 'DRV-104', companyId: 'COMP-004', academicYear: 'AY 2024-25', driveDate: '2024-12-02', eligibilityCGPA: 6.5, status: 'Completed', ctcLpa: '5.0 LPA', offersCount: 8, branches: ['MECH', 'ECE'] },
  { id: 'DRV-105', companyId: 'COMP-005', academicYear: 'AY 2024-25', driveDate: '2025-01-20', eligibilityCGPA: 6.0, status: 'Completed', ctcLpa: '4.0 LPA', offersCount: 19, branches: ['CSE'] },
  { id: 'DRV-106', companyId: 'COMP-006', academicYear: 'AY 2024-25', driveDate: '2025-02-14', eligibilityCGPA: 6.5, status: 'Completed', ctcLpa: '5.8 LPA', offersCount: 6, branches: ['CSE', 'ECE', 'MECH'] },
  { id: 'DRV-107', companyId: 'COMP-007', academicYear: 'AY 2024-25', driveDate: '2025-03-01', eligibilityCGPA: 7.5, status: 'Completed', ctcLpa: '8.5 LPA', offersCount: 7, branches: ['CSE'] },

  // AY 2025-26 Drives (Repeat recruiters visiting again)
  { id: 'DRV-201', companyId: 'COMP-001', academicYear: 'AY 2025-26', driveDate: '2025-09-12', eligibilityCGPA: 6.5, status: 'Completed', ctcLpa: '4.8 - 7.5 LPA', offersCount: 31, branches: ['CSE', 'ECE'] },
  { id: 'DRV-202', companyId: 'COMP-002', academicYear: 'AY 2025-26', driveDate: '2025-10-08', eligibilityCGPA: 6.0, status: 'Completed', ctcLpa: '4.0 - 6.5 LPA', offersCount: 25, branches: ['CSE', 'ECE'] },
  { id: 'DRV-203', companyId: 'COMP-003', academicYear: 'AY 2025-26', driveDate: '2025-11-14', eligibilityCGPA: 7.0, status: 'Completed', ctcLpa: '7.0 - 10.0 LPA', offersCount: 15, branches: ['CSE', 'ECE'] },
  { id: 'DRV-204', companyId: 'COMP-005', academicYear: 'AY 2025-26', driveDate: '2025-12-05', eligibilityCGPA: 6.0, status: 'Completed', ctcLpa: '4.2 LPA', offersCount: 21, branches: ['CSE'] },
  { id: 'DRV-205', companyId: 'COMP-007', academicYear: 'AY 2025-26', driveDate: '2026-01-18', eligibilityCGPA: 7.5, status: 'Completed', ctcLpa: '9.0 LPA', offersCount: 9, branches: ['CSE'] },
  { id: 'DRV-206', companyId: 'COMP-008', academicYear: 'AY 2025-26', driveDate: '2026-02-10', eligibilityCGPA: 6.0, status: 'Completed', ctcLpa: '4.2 LPA', offersCount: 14, branches: ['CSE', 'ECE'] },
  { id: 'DRV-207', companyId: 'COMP-009', academicYear: 'AY 2025-26', driveDate: '2026-03-05', eligibilityCGPA: 6.0, status: 'Scheduled', ctcLpa: '4.5 LPA', offersCount: 0, branches: ['CSE', 'ECE', 'MECH'] },
  { id: 'DRV-208', companyId: 'COMP-010', academicYear: 'AY 2025-26', driveDate: '2026-04-12', eligibilityCGPA: 7.8, status: 'Scheduled', ctcLpa: '12.0 LPA', offersCount: 0, branches: ['CSE', 'ECE'] },
  { id: 'DRV-209', companyId: 'COMP-006', academicYear: 'AY 2025-26', driveDate: '2026-05-02', eligibilityCGPA: 6.5, status: 'Scheduled', ctcLpa: '6.2 LPA', offersCount: 0, branches: ['CSE', 'ECE'] }
];

export default function App() {
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);
  const [drives, setDrives] = useState(INITIAL_DRIVES);

  // UI Flow & Active View State
  const [activeTab, setActiveTab] = useState('companies'); // 'companies', 'drives', 'reports', 'add-drive', 'add-company'
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedAY, setSelectedAY] = useState('All');

  // Form State: Add New Drive against Existing Master Company
  const [newDriveCompanyId, setNewDriveCompanyId] = useState(INITIAL_COMPANIES[0].id);
  const [newDriveAY, setNewDriveAY] = useState('AY 2025-26');
  const [newDriveDate, setNewDriveDate] = useState('2026-08-20');
  const [newDriveCGPA, setNewDriveCGPA] = useState(6.5);
  const [newDriveStatus, setNewDriveStatus] = useState('Scheduled');
  const [newDriveCTC, setNewDriveCTC] = useState('5.0 - 8.0 LPA');

  // Form State: Add New Company
  const [newCompName, setNewCompName] = useState('');
  const [newCompIndustry, setNewCompIndustry] = useState('IT & Software');
  const [newCompLocation, setNewCompLocation] = useState('Mangaluru, KA');
  const [newCompWebsite, setNewCompWebsite] = useState('https://company.com');
  const [newCompTier, setNewCompTier] = useState('Tier 2');

  // List of Industries
  const industries = ['All', ...Array.from(new Set(companies.map(c => c.industry)))];
  const academicYears = ['All', 'AY 2024-25', 'AY 2025-26'];

  // REPEAT RECRUITERS REPORT LOGIC (Companies visiting more than once)
  const repeatRecruitersReport = useMemo(() => {
    return companies.map(comp => {
      const compDrives = drives.filter(d => d.companyId === comp.id);
      const ayList = Array.from(new Set(compDrives.map(d => d.academicYear)));
      const totalOffers = compDrives.reduce((acc, cur) => acc + cur.offersCount, 0);

      return {
        company: comp,
        driveCount: compDrives.length,
        drives: compDrives,
        academicYears: ayList,
        totalOffers: totalOffers,
        isRepeat: compDrives.length > 1
      };
    }).filter(item => item.isRepeat);
  }, [companies, drives]);

  // Handle Adding New Drive (Validates Acceptance Test: References existing Master Company)
  const handleAddDrive = (e) => {
    e.preventDefault();
    if (!newDriveCompanyId) return;

    const newDriveObj = {
      id: `DRV-${Date.now().toString().slice(-3)}`,
      companyId: newDriveCompanyId,
      academicYear: newDriveAY,
      driveDate: newDriveDate,
      eligibilityCGPA: Number(newDriveCGPA),
      status: newDriveStatus,
      ctcLpa: newDriveCTC,
      offersCount: 0,
      branches: ['CSE', 'ECE']
    };

    setDrives([newDriveObj, ...drives]);
    setActiveTab('drives');
  };

  // Handle Adding New Company
  const handleAddCompany = (e) => {
    e.preventDefault();
    if (!newCompName) return;

    const newCompObj = {
      id: `COMP-${String(companies.length + 1).padStart(3, '0')}`,
      name: newCompName,
      industry: newCompIndustry,
      location: newCompLocation,
      website: newCompWebsite,
      tier: newCompTier
    };

    setCompanies([...companies, newCompObj]);
    setNewCompName('');
    setActiveTab('companies');
  };

  // Filtered Companies & Drives
  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInd = selectedIndustry === 'All' || c.industry === selectedIndustry;
    return matchesSearch && matchesInd;
  });

  const filteredDrives = drives.filter(d => {
    const comp = companies.find(c => c.id === d.companyId);
    const compName = comp ? comp.name.toLowerCase() : '';
    const matchesSearch = compName.includes(searchQuery.toLowerCase()) || d.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAY = selectedAY === 'All' || d.academicYear === selectedAY;
    return matchesSearch && matchesAY;
  });

  const selectedCompanyDetail = companies.find(c => c.id === selectedCompanyId);
  const selectedCompanyDrives = drives.filter(d => d.companyId === selectedCompanyId);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white print:bg-white print:text-black">
      
      {/* Print Specific CSS for Accreditation Audits */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .no-print { display: none !important; }
          .print-card { border: 1px solid #000 !important; box-shadow: none !important; width: 100% !important; padding: 0 !important; }
          table { border-collapse: collapse !important; width: 100% !important; }
          th, td { border: 1px solid black !important; padding: 6px !important; text-align: left !important; font-size: 11px !important; }
        }
      `}</style>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                  FreeDox V05
                </span>
                <span className="ml-2 text-[10px] text-indigo-400 bg-indigo-950/80 border border-indigo-800/80 px-2 py-0.5 rounded-full font-mono">
                  Placement & Employer Master
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex space-x-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('companies')}
                className={`px-3.5 py-1.5 rounded-lg transition ${
                  activeTab === 'companies'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Companies ({companies.length})
              </button>

              <button
                onClick={() => setActiveTab('drives')}
                className={`px-3.5 py-1.5 rounded-lg transition ${
                  activeTab === 'drives'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Placement Drives ({drives.length})
              </button>

              <button
                onClick={() => setActiveTab('reports')}
                className={`px-3.5 py-1.5 rounded-lg transition ${
                  activeTab === 'reports'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Repeat Recruiters ({repeatRecruitersReport.length})
              </button>
            </nav>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('add-drive')}
                className="flex items-center space-x-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-600/20"
              >
                <Plus className="w-4 h-4" />
                <span>New Drive</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Export Audit PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 no-print shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Topic V05 — Employer & Placement Drive Records</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Placement Drive & Master Company Directory
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Prevents company data duplication by establishing a Master Company entity referenced across multiple placement drives for NBA/NAAC accreditation compliance.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Drives</div>
                <div className="text-lg font-black text-indigo-400">{drives.length}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Repeat Recruiters</div>
                <div className="text-lg font-black text-purple-400">{repeatRecruitersReport.length}</div>
              </div>
            </div>
          </div>
        </section>

        {/* VIEW 1: COMPANIES MASTER DIRECTORY */}
        {activeTab === 'companies' && (
          <div className="space-y-6 animate-fadeIn no-print">
            
            {/* Search & Industry Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center space-x-3 text-xs flex-1">
                <div className="relative flex-1 max-w-xs">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search company or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-indigo-500"
                  >
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('add-company')}
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Register New Master Company</span>
              </button>
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCompanies.map((comp) => {
                const compDrives = drives.filter(d => d.companyId === comp.id);
                const isRepeat = compDrives.length > 1;

                return (
                  <div
                    key={comp.id}
                    className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 rounded-2xl p-5 space-y-4 transition shadow-lg group relative"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                          {comp.id}
                        </span>
                        <h3 className="font-bold text-base text-white mt-1.5 group-hover:text-indigo-300 transition">
                          {comp.name}
                        </h3>
                      </div>

                      {isRepeat && (
                        <span className="text-[10px] font-bold text-purple-300 bg-purple-950 border border-purple-800 px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <RefreshCw className="w-3 h-3" />
                          <span>Repeat Recruiter</span>
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{comp.industry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <span>{comp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <a href={comp.website} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                          {comp.website}
                        </a>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Total Drives Conducted: <strong className="text-indigo-300 font-mono">{compDrives.length}</strong></span>
                      
                      <button
                        onClick={() => {
                          setSelectedCompanyId(comp.id);
                          setActiveTab('profile');
                        }}
                        className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
                      >
                        <span>View Profile</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: COMPANY PROFILE & ASSOCIATED DRIVES (UI Flow: Company -> Profile -> Drives) */}
        {activeTab === 'profile' && selectedCompanyDetail && (
          <div className="space-y-6 animate-fadeIn no-print">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <button
                    onClick={() => setActiveTab('companies')}
                    className="text-xs text-indigo-400 hover:underline mb-2 block"
                  >
                    ← Back to Master Companies Directory
                  </button>
                  <span className="text-xs font-mono text-slate-400">{selectedCompanyDetail.id}</span>
                  <h2 className="text-2xl font-extrabold text-white mt-0.5">{selectedCompanyDetail.name}</h2>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setNewDriveCompanyId(selectedCompanyDetail.id);
                      setActiveTab('add-drive');
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-bold transition shadow flex items-center space-x-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Schedule New Drive for {selectedCompanyDetail.name}</span>
                  </button>
                </div>
              </div>

              {/* Master Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block">Industry Sector</span>
                  <span className="font-bold text-slate-200">{selectedCompanyDetail.industry}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Headquarters / Office</span>
                  <span className="font-bold text-slate-200">{selectedCompanyDetail.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Recruitment Tier</span>
                  <span className="font-bold text-indigo-300">{selectedCompanyDetail.tier}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Drives Registered</span>
                  <span className="font-bold text-purple-300">{selectedCompanyDrives.length} Drives</span>
                </div>
              </div>

              {/* Associated Placement Drives Table */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  <span>Associated Placement Drives (Referencing Master ID: {selectedCompanyDetail.id})</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono bg-slate-950">
                        <th className="py-2.5 px-3">Drive ID</th>
                        <th className="py-2.5 px-3">Academic Year</th>
                        <th className="py-2.5 px-3">Drive Date</th>
                        <th className="py-2.5 px-3">Cutoff CGPA</th>
                        <th className="py-2.5 px-3">Offered Package</th>
                        <th className="py-2.5 px-3">Offers Count</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-200">
                      {selectedCompanyDrives.map(d => (
                        <tr key={d.id} className="hover:bg-slate-950/60 transition">
                          <td className="py-2.5 px-3 font-mono font-bold text-indigo-400">{d.id}</td>
                          <td className="py-2.5 px-3 font-mono">{d.academicYear}</td>
                          <td className="py-2.5 px-3">{d.driveDate}</td>
                          <td className="py-2.5 px-3 font-mono">≥ {d.eligibilityCGPA} CGPA</td>
                          <td className="py-2.5 px-3 font-bold text-emerald-400">{d.ctcLpa}</td>
                          <td className="py-2.5 px-3 font-mono font-bold text-purple-300">{d.offersCount}</td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              d.status === 'Completed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                            }`}>
                              {d.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 3: PLACEMENT DRIVES MASTER DIRECTORY */}
        {activeTab === 'drives' && (
          <div className="space-y-6 animate-fadeIn no-print">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80">
              <div className="flex items-center space-x-3 text-xs flex-1">
                <div className="relative flex-1 max-w-xs">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search drive or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={selectedAY}
                    onChange={(e) => setSelectedAY(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-indigo-500"
                  >
                    {academicYears.map(ay => (
                      <option key={ay} value={ay}>{ay}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('add-drive')}
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Schedule New Drive</span>
              </button>
            </div>

            {/* Drives Grid */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono bg-slate-950">
                      <th className="py-3 px-3">Drive ID</th>
                      <th className="py-3 px-3">Recruiting Company</th>
                      <th className="py-3 px-3">Academic Year</th>
                      <th className="py-3 px-3">Drive Date</th>
                      <th className="py-3 px-3">Cutoff Eligibility</th>
                      <th className="py-3 px-3">Package (CTC)</th>
                      <th className="py-3 px-3">Offers</th>
                      <th className="py-3 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    {filteredDrives.map((d) => {
                      const comp = companies.find(c => c.id === d.companyId);

                      return (
                        <tr key={d.id} className="hover:bg-slate-950/60 transition">
                          <td className="py-3 px-3 font-mono font-bold text-indigo-400">{d.id}</td>
                          <td className="py-3 px-3 font-bold text-slate-100">
                            {comp ? comp.name : 'Unknown'}
                            <span className="block text-[10px] text-slate-500 font-mono">Master Ref: {d.companyId}</span>
                          </td>
                          <td className="py-3 px-3 font-mono">{d.academicYear}</td>
                          <td className="py-3 px-3">{d.driveDate}</td>
                          <td className="py-3 px-3 font-mono">≥ {d.eligibilityCGPA} CGPA</td>
                          <td className="py-3 px-3 font-bold text-emerald-400">{d.ctcLpa}</td>
                          <td className="py-3 px-3 font-mono font-bold text-purple-300">{d.offersCount}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              d.status === 'Completed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                            }`}>
                              {d.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: REPEAT RECRUITERS & ACCREDITATION REPORT */}
        {activeTab === 'reports' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 no-print">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                    <span>Repeat Recruiters Report (NBA / NAAC Compliance Output)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Automatically identifies companies visiting SOE for recruitment across multiple academic years.
                  </p>
                </div>

                <button
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Audit Report</span>
                </button>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Total Master Companies</span>
                  <span className="text-xl font-bold text-white">{companies.length}</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Repeat Recruiter Rate</span>
                  <span className="text-xl font-bold text-purple-400">
                    {Math.round((repeatRecruitersReport.length / companies.length) * 100)}%
                  </span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block">Offers Generated by Repeat Companies</span>
                  <span className="text-xl font-bold text-emerald-400">
                    {repeatRecruitersReport.reduce((acc, c) => acc + c.totalOffers, 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Printable Report Document for NAAC/NBA Audits */}
            <div className="bg-white text-black p-8 rounded-2xl border shadow-2xl print-card font-sans space-y-6 text-slate-900">
              <div className="text-center space-y-1">
                <div className="font-black text-xl tracking-wider uppercase">ST ALOYSIUS (DEEMED TO BE UNIVERSITY)</div>
                <div className="text-xs font-bold uppercase text-slate-700">SCHOOL OF ENGINEERING (SOE) • MANGALURU</div>
                <div className="text-xs font-semibold text-slate-600 border-b-2 border-slate-900 pb-2 pt-1">
                  OFFICIAL PLACEMENT & REPEAT RECRUITERS AUDIT REPORT
                </div>
              </div>

              {/* Repeat Recruiters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-2 border-slate-900 text-xs font-medium border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 bg-slate-100 print:bg-transparent font-bold">
                      <th className="p-2 border-r border-slate-900">Master Comp ID</th>
                      <th className="p-2 border-r border-slate-900">Company Name</th>
                      <th className="p-2 border-r border-slate-900">Industry Sector</th>
                      <th className="p-2 border-r border-slate-900 text-center">Drive Count</th>
                      <th className="p-2 border-r border-slate-900">Academic Years Visited</th>
                      <th className="p-2 text-center">Total Offers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900">
                    {repeatRecruitersReport.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-900">
                        <td className="p-2 border-r border-slate-900 font-mono font-bold">{item.company.id}</td>
                        <td className="p-2 border-r border-slate-900 font-bold">{item.company.name}</td>
                        <td className="p-2 border-r border-slate-900">{item.company.industry}</td>
                        <td className="p-2 border-r border-slate-900 text-center font-bold">{item.driveCount} Drives</td>
                        <td className="p-2 border-r border-slate-900 font-mono">{item.academicYears.join(', ')}</td>
                        <td className="p-2 text-center font-bold font-mono text-emerald-800">{item.totalOffers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-12 grid grid-cols-3 gap-8 text-xs text-center">
                <div className="border-t border-slate-900 pt-1 font-bold">Placement Officer</div>
                <div className="border-t border-slate-900 pt-1 font-bold">HOD - CSE</div>
                <div className="border-t border-slate-900 pt-1 font-bold">Dean SOE</div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 5: SCHEDULE NEW DRIVE FORM (References Master Company Entity) */}
        {activeTab === 'add-drive' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn no-print">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-indigo-400" />
                  <span>Schedule New Placement Drive</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Demonstrates the Acceptance Test: References existing Master Company Entity without re-entering company metadata.
                </p>
              </div>

              <form onSubmit={handleAddDrive} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Select Recruiting Company (Master Entity)</label>
                  <select
                    value={newDriveCompanyId}
                    onChange={(e) => setNewDriveCompanyId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold text-xs focus:outline-none focus:border-indigo-500"
                  >
                    {companies.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.id} - {c.industry})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Academic Year</label>
                    <select
                      value={newDriveAY}
                      onChange={(e) => setNewDriveAY(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    >
                      <option value="AY 2024-25">AY 2024-25</option>
                      <option value="AY 2025-26">AY 2025-26</option>
                      <option value="AY 2026-27">AY 2026-27</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Drive Date</label>
                    <input
                      type="date"
                      value={newDriveDate}
                      onChange={(e) => setNewDriveDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Eligibility Cutoff (CGPA)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={newDriveCGPA}
                      onChange={(e) => setNewDriveCGPA(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Offered Package (CTC)</label>
                    <input
                      type="text"
                      placeholder="e.g. 6.0 LPA"
                      value={newDriveCTC}
                      onChange={(e) => setNewDriveCTC(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Drive Status</label>
                  <select
                    value={newDriveStatus}
                    onChange={(e) => setNewDriveStatus(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition"
                  >
                    Register Placement Drive
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* VIEW 6: REGISTER MASTER COMPANY FORM */}
        {activeTab === 'add-company' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn no-print">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-indigo-400" />
                  <span>Register New Master Company Entity</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Adds a reusable company master profile to prevent data re-entry.
                </p>
              </div>

              <form onSubmit={handleAddCompany} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Company Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amazon Web Services (AWS)"
                    value={newCompName}
                    onChange={(e) => setNewCompName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Industry Sector</label>
                    <input
                      type="text"
                      placeholder="e.g. Cloud Computing / IT"
                      value={newCompIndustry}
                      onChange={(e) => setNewCompIndustry(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Office Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru, KA"
                      value={newCompLocation}
                      onChange={(e) => setNewCompLocation(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Company Website</label>
                    <input
                      type="text"
                      placeholder="https://company.com"
                      value={newCompWebsite}
                      onChange={(e) => setNewCompWebsite(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Recruitment Tier</label>
                    <select
                      value={newCompTier}
                      onChange={(e) => setNewCompTier(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    >
                      <option value="Tier 1">Tier 1 (Dream Package)</option>
                      <option value="Tier 2">Tier 2 (Standard)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition"
                  >
                    Save Master Company Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-6 text-center text-xs text-slate-500 no-print">
        <p>FreeDox Hackathon Topic V05 MVP • School of Engineering, St. Aloysius (Deemed to be University)</p>
      </footer>
    </div>
  );
}


