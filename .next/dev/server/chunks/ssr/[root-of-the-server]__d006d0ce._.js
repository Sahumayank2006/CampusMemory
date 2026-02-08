module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for Campus Memory platform
__turbopack_context__.s([
    "achievements",
    ()=>achievements,
    "alerts",
    ()=>alerts,
    "campusPulseData",
    ()=>campusPulseData,
    "colleges",
    ()=>colleges,
    "departmentData",
    ()=>departmentData,
    "monthlyData",
    ()=>monthlyData,
    "patterns",
    ()=>patterns,
    "problemCategories",
    ()=>problemCategories,
    "problems",
    ()=>problems,
    "testimonials",
    ()=>testimonials,
    "wisdomTips",
    ()=>wisdomTips
]);
const colleges = [
    {
        id: "iitd",
        name: "Indian Institute of Technology Delhi",
        shortName: "IIT Delhi",
        city: "New Delhi",
        state: "Delhi",
        type: "IIT",
        established: 1961,
        studentStrength: 13000,
        memoryIndex: 94,
        activeUsers: 3420,
        color: "#1E40AF"
    },
    {
        id: "iitb",
        name: "Indian Institute of Technology Bombay",
        shortName: "IIT Bombay",
        city: "Mumbai",
        state: "Maharashtra",
        type: "IIT",
        established: 1958,
        studentStrength: 12000,
        memoryIndex: 92,
        activeUsers: 3100,
        color: "#1D4ED8"
    },
    {
        id: "iitm",
        name: "Indian Institute of Technology Madras",
        shortName: "IIT Madras",
        city: "Chennai",
        state: "Tamil Nadu",
        type: "IIT",
        established: 1959,
        studentStrength: 11500,
        memoryIndex: 96,
        activeUsers: 3500,
        color: "#7C3AED"
    },
    {
        id: "iitk",
        name: "Indian Institute of Technology Kanpur",
        shortName: "IIT Kanpur",
        city: "Kanpur",
        state: "Uttar Pradesh",
        type: "IIT",
        established: 1959,
        studentStrength: 9800,
        memoryIndex: 88,
        activeUsers: 2700,
        color: "#DC2626"
    },
    {
        id: "iitkgp",
        name: "Indian Institute of Technology Kharagpur",
        shortName: "IIT Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
        type: "IIT",
        established: 1951,
        studentStrength: 12500,
        memoryIndex: 90,
        activeUsers: 3200,
        color: "#10B981"
    },
    {
        id: "nitt",
        name: "National Institute of Technology Trichy",
        shortName: "NIT Trichy",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
        type: "NIT",
        established: 1964,
        studentStrength: 7500,
        memoryIndex: 82,
        activeUsers: 1800,
        color: "#F59E0B"
    },
    {
        id: "nitw",
        name: "National Institute of Technology Warangal",
        shortName: "NIT Warangal",
        city: "Warangal",
        state: "Telangana",
        type: "NIT",
        established: 1959,
        studentStrength: 6800,
        memoryIndex: 79,
        activeUsers: 1500,
        color: "#EF4444"
    },
    {
        id: "nits",
        name: "National Institute of Technology Surathkal",
        shortName: "NIT Surathkal",
        city: "Surathkal",
        state: "Karnataka",
        type: "NIT",
        established: 1960,
        studentStrength: 7200,
        memoryIndex: 81,
        activeUsers: 1700,
        color: "#8B5CF6"
    },
    {
        id: "du",
        name: "University of Delhi",
        shortName: "Delhi University",
        city: "New Delhi",
        state: "Delhi",
        type: "Central",
        established: 1922,
        studentStrength: 132000,
        memoryIndex: 75,
        activeUsers: 8500,
        color: "#1E40AF"
    },
    {
        id: "bhu",
        name: "Banaras Hindu University",
        shortName: "BHU",
        city: "Varanasi",
        state: "Uttar Pradesh",
        type: "Central",
        established: 1916,
        studentStrength: 35000,
        memoryIndex: 72,
        activeUsers: 4200,
        color: "#B91C1C"
    },
    {
        id: "bits",
        name: "BITS Pilani",
        shortName: "BITS Pilani",
        city: "Pilani",
        state: "Rajasthan",
        type: "Private",
        established: 1964,
        studentStrength: 14000,
        memoryIndex: 87,
        activeUsers: 3800,
        color: "#2563EB"
    },
    {
        id: "vit",
        name: "VIT University",
        shortName: "VIT Vellore",
        city: "Vellore",
        state: "Tamil Nadu",
        type: "Private",
        established: 1984,
        studentStrength: 30000,
        memoryIndex: 76,
        activeUsers: 5600,
        color: "#7C3AED"
    },
    {
        id: "srm",
        name: "SRM Institute of Science and Technology",
        shortName: "SRM Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        type: "Private",
        established: 1985,
        studentStrength: 52000,
        memoryIndex: 70,
        activeUsers: 6200,
        color: "#059669"
    },
    {
        id: "mu",
        name: "University of Mumbai",
        shortName: "Mumbai University",
        city: "Mumbai",
        state: "Maharashtra",
        type: "State",
        established: 1857,
        studentStrength: 549000,
        memoryIndex: 68,
        activeUsers: 12000,
        color: "#DC2626"
    },
    {
        id: "au",
        name: "Anna University",
        shortName: "Anna University",
        city: "Chennai",
        state: "Tamil Nadu",
        type: "State",
        established: 1978,
        studentStrength: 300000,
        memoryIndex: 65,
        activeUsers: 9800,
        color: "#F59E0B"
    },
    {
        id: "amity-gwalior",
        name: "Amity University Gwalior",
        shortName: "Amity Gwalior",
        city: "Gwalior",
        state: "Madhya Pradesh",
        type: "Private",
        established: 2010,
        studentStrength: 6500,
        memoryIndex: 0,
        activeUsers: 0,
        color: "#C026D3"
    },
    {
        id: "itm-gwalior",
        name: "ITM University Gwalior",
        shortName: "ITM Gwalior",
        city: "Gwalior",
        state: "Madhya Pradesh",
        type: "Private",
        established: 2011,
        studentStrength: 5600,
        memoryIndex: 58,
        activeUsers: 1450,
        color: "#2563EB"
    },
    {
        id: "jiwaji",
        name: "Jiwaji University",
        shortName: "Jiwaji University",
        city: "Gwalior",
        state: "Madhya Pradesh",
        type: "State",
        established: 1964,
        studentStrength: 25000,
        memoryIndex: 62,
        activeUsers: 3200,
        color: "#DC2626"
    }
];
const problems = [
    {
        id: "p1",
        title: "Library overcrowding during exam week",
        category: "Infrastructure & Logistics",
        subcategory: "Library management",
        description: "Library becomes extremely crowded 2 weeks before end-semester exams. Seats unavailable after 8 AM.",
        severity: "high",
        status: "resolved",
        reportedBy: "Anonymous (CSE, 3rd Year)",
        reportedDate: "2024-11-15",
        resolvedDate: "2025-01-10",
        upvotes: 234,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p2",
        title: "WiFi dead zones in hostel Block C",
        category: "Hostel & Accommodation",
        subcategory: "WiFi/power problems",
        description: "Consistent WiFi connectivity issues in Block C, floors 3-5. Affects 200+ students.",
        severity: "high",
        status: "solving",
        reportedBy: "Anonymous (ECE, 2nd Year)",
        reportedDate: "2024-09-20",
        upvotes: 189,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p3",
        title: "Mess food quality deterioration",
        category: "Hostel & Accommodation",
        subcategory: "Food quality tracking",
        description: "Noticeable decline in food quality since new vendor. Multiple hygiene concerns reported.",
        severity: "critical",
        status: "analyzing",
        reportedBy: "Anonymous (ME, 4th Year)",
        reportedDate: "2025-01-05",
        upvotes: 312,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p4",
        title: "Parking chaos near main gate",
        category: "Infrastructure & Logistics",
        subcategory: "Parking chaos patterns",
        description: "No organized parking system. Two-wheelers blocking pedestrian paths during peak hours.",
        severity: "medium",
        status: "resolved",
        reportedBy: "Anonymous (Civil, 3rd Year)",
        reportedDate: "2024-08-10",
        resolvedDate: "2024-10-15",
        upvotes: 156,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p5",
        title: "Fest budget mismanagement pattern",
        category: "Campus Events & Fests",
        subcategory: "Budget management",
        description: "Recurring issue: cultural fest budget exhausted before day 2. Same pattern for 3 consecutive years.",
        severity: "high",
        status: "prevented",
        reportedBy: "Anonymous (MBA, 2nd Year)",
        reportedDate: "2024-02-20",
        resolvedDate: "2024-09-15",
        upvotes: 278,
        sentiment: "neutral",
        college: "iitd"
    },
    {
        id: "p6",
        title: "Attendance system technical glitches",
        category: "Administration & Policies",
        subcategory: "Attendance system flaws",
        description: "Biometric attendance system fails frequently. Students marked absent despite being present.",
        severity: "high",
        status: "solving",
        reportedBy: "Anonymous (IT, 1st Year)",
        reportedDate: "2025-01-08",
        upvotes: 198,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p7",
        title: "Lab equipment shortage in Physics dept",
        category: "Academic & Timetable",
        subcategory: "Lab timing conflicts",
        description: "Insufficient oscilloscopes and multimeters for batch of 60. Students share in groups of 5-6.",
        severity: "medium",
        status: "reported",
        reportedBy: "Anonymous (Physics, 2nd Year)",
        reportedDate: "2025-01-12",
        upvotes: 87,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p8",
        title: "Certificate issuance delays",
        category: "Administration & Policies",
        subcategory: "Certificate delays",
        description: "Degree certificates taking 6+ months after graduation. Affecting job joining and higher studies.",
        severity: "critical",
        status: "analyzing",
        reportedBy: "Anonymous (EE, Alumni 2024)",
        reportedDate: "2024-12-01",
        upvotes: 445,
        sentiment: "negative",
        college: "iitd"
    },
    {
        id: "p9",
        title: "Shuttle service gaps after 7 PM",
        category: "Infrastructure & Logistics",
        subcategory: "Transport coordination",
        description: "Evening classes end at 7 PM but campus shuttle stops at 6:30 PM. Students walking 2 km back to hostels.",
        severity: "medium",
        status: "reported",
        reportedBy: "Anonymous (MBA, 1st Year)",
        reportedDate: "2025-01-24",
        upvotes: 64,
        sentiment: "negative",
        college: "itm-gwalior"
    },
    {
        id: "p10",
        title: "Central library AC downtime",
        category: "Academic & Timetable",
        subcategory: "Library management",
        description: "Air-conditioning unit fails every alternate afternoon during peak project submissions. Creates uncomfortable study environment.",
        severity: "high",
        status: "solving",
        reportedBy: "Anonymous (Science, 3rd Year)",
        reportedDate: "2025-02-01",
        upvotes: 98,
        sentiment: "negative",
        college: "jiwaji"
    }
];
const patterns = [
    {
        id: "pt1",
        title: "Library overcrowding during exams",
        frequency: 98,
        yearsActive: 8,
        affectedDepartments: [
            "All"
        ],
        seasonalTrend: "Nov-Dec, Apr-May",
        successRate: 67,
        similarCampuses: [
            "IIT Bombay",
            "NIT Trichy",
            "BITS Pilani"
        ],
        severity: "high"
    },
    {
        id: "pt2",
        title: "Fest budget exhaustion",
        frequency: 85,
        yearsActive: 5,
        affectedDepartments: [
            "Student Affairs",
            "Finance"
        ],
        seasonalTrend: "Feb-Mar, Sep-Oct",
        successRate: 45,
        similarCampuses: [
            "IIT Bombay",
            "NIT Warangal",
            "VIT"
        ],
        severity: "medium"
    },
    {
        id: "pt3",
        title: "Hostel WiFi outages",
        frequency: 92,
        yearsActive: 6,
        affectedDepartments: [
            "IT Services",
            "Administration"
        ],
        seasonalTrend: "Year-round, peaks during exams",
        successRate: 30,
        similarCampuses: [
            "IIT Kanpur",
            "NIT Surathkal",
            "BHU"
        ],
        severity: "high"
    },
    {
        id: "pt4",
        title: "Food quality cycles",
        frequency: 76,
        yearsActive: 10,
        affectedDepartments: [
            "Hostel Admin",
            "Health Services"
        ],
        seasonalTrend: "Post-vendor change, monsoon season",
        successRate: 55,
        similarCampuses: [
            "All campuses"
        ],
        severity: "medium"
    },
    {
        id: "pt5",
        title: "Parking congestion patterns",
        frequency: 88,
        yearsActive: 7,
        affectedDepartments: [
            "Security",
            "Infrastructure"
        ],
        seasonalTrend: "Weekdays 8-10 AM, event days",
        successRate: 72,
        similarCampuses: [
            "Delhi University",
            "Mumbai University"
        ],
        severity: "low"
    }
];
const alerts = [
    {
        id: "a1",
        title: "Library overcrowding predicted",
        riskLevel: "red",
        predictedDate: "2025-04-15",
        daysUntil: 68,
        confidence: 94,
        historicalOccurrences: 16,
        description: "End-semester exams approaching. Library capacity expected to exceed 150% by April 15.",
        preventiveActions: [
            "Open additional study halls",
            "Extend library hours to 24/7",
            "Set up temporary reading spaces in auditorium",
            "Deploy seat reservation system"
        ]
    },
    {
        id: "a2",
        title: "Cultural fest budget risk",
        riskLevel: "yellow",
        predictedDate: "2025-03-01",
        daysUntil: 23,
        confidence: 78,
        historicalOccurrences: 5,
        description: "Annual cultural fest in March. Historical pattern shows 60% chance of budget overrun by Day 2.",
        preventiveActions: [
            "Implement milestone-based budget release",
            "Assign financial auditor per event",
            "Create emergency fund (10% of total)",
            "Pre-negotiate vendor rates"
        ]
    },
    {
        id: "a3",
        title: "Monsoon infrastructure issues",
        riskLevel: "yellow",
        predictedDate: "2025-07-01",
        daysUntil: 145,
        confidence: 88,
        historicalOccurrences: 12,
        description: "Monsoon season brings flooding in Ground Floor labs and hostel basements. Pattern: 3-4 incidents per monsoon.",
        preventiveActions: [
            "Pre-monsoon drain cleaning",
            "Relocate sensitive equipment from Ground Floor",
            "Install water level sensors",
            "Prepare emergency response kit"
        ]
    },
    {
        id: "a4",
        title: "New student orientation overwhelm",
        riskLevel: "green",
        predictedDate: "2025-08-01",
        daysUntil: 176,
        confidence: 72,
        historicalOccurrences: 8,
        description: "First-year onboarding creates administrative bottleneck. Wait times exceed 3 hours for document verification.",
        preventiveActions: [
            "Pre-arrival digital document submission",
            "Multi-counter setup",
            "Student volunteer deployment",
            "Staggered reporting schedule"
        ]
    }
];
const wisdomTips = [
    {
        id: "w1",
        content: "Always take Prof. Sharma's elective on Machine Learning - best course in CSE department. He gives real industry problems as assignments.",
        category: "Course selection advice",
        batch: "2023",
        upvotes: 342,
        department: "CSE"
    },
    {
        id: "w2",
        content: "The library has a hidden study room on the 3rd floor behind the reference section. Usually empty even during exams. Thank me later!",
        category: "Campus survival hacks",
        batch: "2022",
        upvotes: 567,
        department: "General"
    },
    {
        id: "w3",
        content: "Start your internship applications in August, not January. Most companies close applications by November for summer internships.",
        category: "Internship guidance",
        batch: "2023",
        upvotes: 445,
        department: "All"
    },
    {
        id: "w4",
        content: "The chai stall near Gate 2 closes at 11 PM but the one inside the campus near the workshop opens at 6 AM. Essential info for night owls.",
        category: "Campus survival hacks",
        batch: "2024",
        upvotes: 789,
        department: "General"
    },
    {
        id: "w5",
        content: "For EE students: Prof. Verma's control systems notes from 2019 are gold. Available in departmental library archives. Ask the librarian specifically.",
        category: "Exam preparation tips",
        batch: "2023",
        upvotes: 234,
        department: "EE"
    },
    {
        id: "w6",
        content: "Register for gym slot in the first week itself. It fills up by Day 3 and you'll have to wait till next semester.",
        category: "Campus survival hacks",
        batch: "2024",
        upvotes: 456,
        department: "General"
    }
];
const achievements = [
    {
        id: "ach1",
        name: "Problem Solver",
        description: "Reported 10 problems that led to solutions",
        icon: "🔧",
        level: "gold",
        category: "Problem Solving",
        earnedBy: 234
    },
    {
        id: "ach2",
        name: "Memory Keeper",
        description: "Contributed 50+ wisdom tips",
        icon: "🧠",
        level: "platinum",
        category: "Wisdom",
        earnedBy: 45
    },
    {
        id: "ach3",
        name: "Prevention Hero",
        description: "Your report prevented a recurring issue",
        icon: "🛡️",
        level: "silver",
        category: "Prevention",
        earnedBy: 567
    },
    {
        id: "ach4",
        name: "Voice of Campus",
        description: "Your contributions were upvoted 1000+ times",
        icon: "📣",
        level: "gold",
        category: "Community",
        earnedBy: 123
    },
    {
        id: "ach5",
        name: "Freshman Guide",
        description: "Helped 100+ juniors with your wisdom",
        icon: "🌟",
        level: "silver",
        category: "Mentorship",
        earnedBy: 345
    },
    {
        id: "ach6",
        name: "Data Detective",
        description: "Identified a hidden pattern across 5+ years",
        icon: "🔍",
        level: "platinum",
        category: "Analytics",
        earnedBy: 28
    }
];
const campusPulseData = {
    satisfaction: 87,
    problemsInResolution: 12,
    wisdomAddedThisWeek: 45,
    preventionStreak: 32,
    mostHelpfulBatch: "2023",
    problemsPreventedToday: 47,
    hoursSavedThisWeek: 1234,
    satisfactionIncrease: 34,
    repeatIssuesReduced: 78
};
const monthlyData = [
    {
        month: "Jan",
        problems: 45,
        resolved: 38,
        prevented: 12
    },
    {
        month: "Feb",
        problems: 52,
        resolved: 42,
        prevented: 15
    },
    {
        month: "Mar",
        problems: 78,
        resolved: 55,
        prevented: 22
    },
    {
        month: "Apr",
        problems: 95,
        resolved: 70,
        prevented: 30
    },
    {
        month: "May",
        problems: 40,
        resolved: 35,
        prevented: 18
    },
    {
        month: "Jun",
        problems: 25,
        resolved: 22,
        prevented: 10
    },
    {
        month: "Jul",
        problems: 55,
        resolved: 40,
        prevented: 20
    },
    {
        month: "Aug",
        problems: 65,
        resolved: 50,
        prevented: 25
    },
    {
        month: "Sep",
        problems: 72,
        resolved: 58,
        prevented: 28
    },
    {
        month: "Oct",
        problems: 60,
        resolved: 48,
        prevented: 22
    },
    {
        month: "Nov",
        problems: 88,
        resolved: 65,
        prevented: 35
    },
    {
        month: "Dec",
        problems: 70,
        resolved: 55,
        prevented: 28
    }
];
const departmentData = [
    {
        department: "CSE",
        issues: 45,
        resolution: 89,
        satisfaction: 82
    },
    {
        department: "ECE",
        issues: 38,
        resolution: 85,
        satisfaction: 78
    },
    {
        department: "ME",
        issues: 32,
        resolution: 92,
        satisfaction: 85
    },
    {
        department: "Civil",
        issues: 28,
        resolution: 88,
        satisfaction: 80
    },
    {
        department: "EE",
        issues: 35,
        resolution: 82,
        satisfaction: 76
    },
    {
        department: "Physics",
        issues: 20,
        resolution: 95,
        satisfaction: 88
    },
    {
        department: "Math",
        issues: 15,
        resolution: 97,
        satisfaction: 92
    },
    {
        department: "Chemistry",
        issues: 22,
        resolution: 90,
        satisfaction: 84
    }
];
const problemCategories = [
    {
        name: "Academic & Timetable",
        icon: "📚",
        color: "#1E40AF",
        count: 156
    },
    {
        name: "Campus Events & Fests",
        icon: "🎪",
        color: "#F59E0B",
        count: 89
    },
    {
        name: "Hostel & Accommodation",
        icon: "🏠",
        color: "#10B981",
        count: 234
    },
    {
        name: "Infrastructure & Logistics",
        icon: "🏗️",
        color: "#8B5CF6",
        count: 178
    },
    {
        name: "Administration & Policies",
        icon: "📋",
        color: "#DC2626",
        count: 145
    },
    {
        name: "Senior-to-Junior Wisdom",
        icon: "🎓",
        color: "#FBBF24",
        count: 312
    }
];
const testimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Dean of Students, IIT Delhi",
        quote: "Campus Memory has transformed how we understand and address student concerns. It's like having decades of institutional wisdom at our fingertips.",
        avatar: "👨‍🏫"
    },
    {
        name: "Priya Sharma",
        role: "Student Council President, NIT Trichy",
        quote: "For the first time, we're not repeating mistakes from previous batches. The pattern detection is incredibly accurate.",
        avatar: "👩‍🎓"
    },
    {
        name: "Prof. Anand Mohan",
        role: "Head of Admin, BHU",
        quote: "The predictive alerts saved us from three potential crises this semester alone. This is what smart education looks like.",
        avatar: "👨‍💼"
    },
    {
        name: "Amit Verma",
        role: "Alumni, BITS Pilani '22",
        quote: "I wish we had this when I was in college. Contributing my experiences now so juniors don't face the same struggles.",
        avatar: "🧑‍💻"
    }
];
}),
"[project]/src/components/ProblemCapture.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemCapture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const categoryIcons = {
    "Academic & Timetable": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 30,
        columnNumber: 27
    }, ("TURBOPACK compile-time value", void 0)),
    "Campus Events & Fests": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 31,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0)),
    "Hostel & Accommodation": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 32,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0)),
    "Infrastructure & Logistics": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 33,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0)),
    "Administration & Policies": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 34,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0)),
    "Senior-to-Junior Wisdom": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
        className: "w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 35,
        columnNumber: 30
    }, ("TURBOPACK compile-time value", void 0))
};
const statusConfig = {
    reported: {
        color: "bg-blue-100 text-blue-700",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 39,
            columnNumber: 57
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Reported"
    },
    analyzing: {
        color: "bg-yellow-100 text-yellow-700",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 40,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Analyzing"
    },
    solving: {
        color: "bg-orange-100 text-orange-700",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-4 h-4 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 41,
            columnNumber: 60
        }, ("TURBOPACK compile-time value", void 0)),
        label: "In Progress"
    },
    resolved: {
        color: "bg-green-100 text-green-700",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 42,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Resolved"
    },
    prevented: {
        color: "bg-purple-100 text-purple-700",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 43,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Prevented"
    }
};
const severityColors = {
    low: "bg-green-400",
    medium: "bg-yellow-400",
    high: "bg-orange-500",
    critical: "bg-red-500"
};
function ProblemCard({ problem }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const status = statusConfig[problem.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover cursor-pointer",
        onClick: ()=>setExpanded(!expanded),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-2.5 h-2.5 rounded-full ${severityColors[problem.severity]}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            status.icon,
                                            status.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1 text-sm text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                problem.upvotes
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-heading font-semibold text-gray-900 mb-2",
                    children: problem.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gray-100 px-2 py-1 rounded-full",
                            children: problem.category
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: problem.reportedDate
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-3 mb-3 leading-relaxed",
                                children: problem.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: problem.reportedBy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    problem.resolvedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-600",
                                        children: [
                                            "Resolved: ",
                                            problem.resolvedDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function ReportForm({ onClose }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sentiment, setSentiment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            onClose();
        }, 2000);
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            -20,
                            -50
                        ],
                        opacity: [
                            1,
                            1,
                            0
                        ],
                        rotate: [
                            0,
                            -5,
                            10
                        ]
                    },
                    transition: {
                        duration: 1.5
                    },
                    className: "text-6xl mb-4",
                    children: "✈️"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-heading text-2xl font-bold text-primary mb-2",
                    children: "Sent to Memory Vault!"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Your experience is now part of campus wisdom. Thank you!"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["problemCategories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedCategory(cat.name),
                                className: `p-3 rounded-xl border-2 text-left text-sm transition-all ${selectedCategory === cat.name ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/30"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-medium text-gray-700 text-xs leading-tight",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.name, true, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Problem Title"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Brief description of the issue...",
                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Detailed Description"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Share your experience in detail. Your words become campus wisdom...",
                        rows: 4,
                        className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "How did this make you feel?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            {
                                emoji: "😊",
                                label: "Positive",
                                value: "positive"
                            },
                            {
                                emoji: "😐",
                                label: "Neutral",
                                value: "neutral"
                            },
                            {
                                emoji: "😠",
                                label: "Frustrated",
                                value: "negative"
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSentiment(s.value),
                                className: `flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${sentiment === s.value ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/30"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: s.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.value, true, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-primary hover:border-primary/30 transition-all",
                        title: "Upload photo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-primary hover:border-primary/30 transition-all",
                        title: "Voice input",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-university-blue text-white rounded-xl font-medium hover:shadow-lg transition-all ripple",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            "Submit to Memory"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 text-center",
                children: "🔒 Anonymous by default. Your identity is always protected."
            }, void 0, false, {
                fileName: "[project]/src/components/ProblemCapture.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
function ProblemCapture({ collegeId } = {}) {
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const relevantProblems = collegeId && collegeId.trim().length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["problems"].filter((p)=>p.college === collegeId) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["problems"];
    const categoriesWithCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["problemCategories"].map((cat)=>({
            ...cat,
            count: collegeId && collegeId.trim().length > 0 ? relevantProblems.filter((p)=>p.category === cat.name).length : cat.count
        }));
    const filteredProblems = activeCategory === "all" ? relevantProblems : relevantProblems.filter((p)=>p.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "problems",
        className: "py-20 px-4 bg-marble-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4",
                            children: "Problem Capture Portal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                            children: [
                                "Your experience matters.",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient",
                                    children: "Share it once, help forever."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 max-w-2xl mx-auto",
                            children: "Every problem reported becomes a permanent part of campus wisdom. Help future batches avoid what you faced."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-3 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory("all"),
                            className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "all" ? "bg-primary text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30"}`,
                            children: "All Issues"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        categoriesWithCount.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(cat.name),
                                className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.name ? "bg-primary text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-70",
                                        children: [
                                            "(",
                                            cat.count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProblemCapture.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.name, true, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setShowForm(true),
                        className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-xl font-heading font-semibold shadow-lg hover:shadow-xl transition-all",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            "Report a Problem",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: filteredProblems.map((problem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemCard, {
                                problem: problem
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, problem.id, false, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this),
                filteredProblems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "mt-6 text-center text-gray-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex flex-col items-center gap-2 rounded-2xl border border-dashed border-primary/30 bg-white px-6 py-8 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "🌱"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-heading text-lg text-gray-700",
                                children: "No shared experiences yet."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 389,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Report the first problem to start building this college's memory."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                lineNumber: 392,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 387,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
                        onClick: ()=>setShowForm(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                scale: 0.9,
                                opacity: 0,
                                y: 50
                            },
                            className: "bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-heading text-2xl font-bold text-gray-900",
                                            children: "📝 Report a Problem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProblemCapture.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowForm(false),
                                            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProblemCapture.tsx",
                                                lineNumber: 424,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProblemCapture.tsx",
                                            lineNumber: 420,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportForm, {
                                    onClose: ()=>setShowForm(false)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProblemCapture.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProblemCapture.tsx",
                            lineNumber: 409,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProblemCapture.tsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProblemCapture.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProblemCapture.tsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProblemCapture.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d006d0ce._.js.map