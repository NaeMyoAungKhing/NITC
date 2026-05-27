/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Student, ModuleStatus, ActiveMission, FlightPlanItem, Announcement } from "./types";

// Real NITC faculty headshots (New School Design Group, "Team members").
import xie from "./assets/team/xie.png";
import nae from "./assets/team/nae.png";

export const STUDENTS: Student[] = [
  {
    id: "archer",
    name: "Archer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    gpa: 3.92,
    classRank: "TOP 5% OF CLASS",
    attendance: 98,
    attendanceStatus: "CONSISTENT PARTICIPANT",
    academicProgress: [
      { name: "BUSINESS DATA ANALYSIS", value: 12 },
      { name: "BUSINESS LANGUAGE", value: 8 }
    ],
    financial: {
      currentBalance: 2450.00,
      amountDue: 850.00,
      nextPayment: "OCT 15"
    }
  },
  {
    id: "lyra",
    name: "Lyra",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    gpa: 3.84,
    classRank: "TOP 12% OF CLASS",
    attendance: 95,
    attendanceStatus: "HIGHLY ENGAGED",
    academicProgress: [
      { name: "BUSINESS DATA ANALYSIS", value: 15 },
      { name: "BUSINESS LANGUAGE", value: 10 }
    ],
    financial: {
      currentBalance: 1200.00,
      amountDue: 400.00,
      nextPayment: "NOV 01"
    }
  }
];

export const INSTALLED_MODULES: ModuleStatus[] = [
  {
    id: "m1",
    code: "01",
    title: "THEORY",
    subTitle: "Computational Maths, IT & Business Foundations",
    category: "THEORY",
    stability: 75,
    iconType: "terminal"
  },
  {
    id: "m2",
    code: "02",
    title: "COMPETENCY",
    subTitle: "Business Language, Data Analysis & AI",
    category: "COMPETENCY",
    stability: 40,
    iconType: "sliders"
  },
  {
    id: "m3",
    code: "03",
    title: "PRACTICAL",
    subTitle: "Web & Mobile App Development",
    category: "PRACTICAL",
    stability: 90,
    iconType: "lightning"
  }
];

export const ACTIVE_MISSIONS: ActiveMission[] = [
  {
    id: "mission-1",
    title: "AI for Business Applications",
    moduleCode: "04",
    completionDays: 4,
    priority: "CORE COURSE",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Xie Zihao (School Principal)",
    instructorAvatar: xie,
    syncedPercentage: 78,
    description: "Use AI tools to solve a real business problem and build a working solution.",
    status: "active"
  },
  {
    id: "mission-2",
    title: "Basic Business Data Analysis",
    moduleCode: "02",
    completionDays: 7,
    priority: "IN PROGRESS",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Nae Myo (Vice School Principal)",
    instructorAvatar: nae,
    syncedPercentage: 42,
    description: "Turn business datasets into clear, actionable insights.",
    status: "active"
  }
];

export const UPCOMING_MODULES = [
  {
    code: "05",
    title: "Digital Marketing",
    instructor: "Jia Ping (Academic Department)"
  },
  {
    code: "06",
    title: "Global Business Strategy",
    instructor: "Nang Yay Seng Naw (Student Affairs)"
  }
];

export const WEEKLY_FLIGHT_PLAN: FlightPlanItem[] = [
  {
    id: "fp-1",
    day: "MON",
    dateNum: 22,
    title: "Computational Maths",
    timeRange: "09:00 - 11:30",
    location: "ROOM A",
    isActive: true
  },
  {
    id: "fp-2",
    day: "TUE",
    dateNum: 23,
    title: "Self-Study",
    timeRange: "Free Period",
    location: "",
    isActive: false,
    isBreak: true
  },
  {
    id: "fp-3",
    day: "WED",
    dateNum: 24,
    title: "Mobile App Development",
    timeRange: "14:00 - 17:00",
    location: "LAB B",
    isActive: false
  },
  {
    id: "fp-4",
    day: "THU",
    dateNum: 25,
    title: "Digital Business Leadership",
    timeRange: "10:00 - 12:30",
    location: "ONLINE",
    isActive: false
  },
  {
    id: "fp-5",
    day: "FRI",
    dateNum: 26,
    title: "Branding Workshop",
    timeRange: "16:00 - 18:00",
    location: "STUDIO",
    isActive: false
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    category: "EVENT",
    title: "Annual Innovation Showcase",
    description: "A showcase of student startup projects and industry-partner collaborations.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&auto=format&fit=crop&q=80",
    date: "Term 1"
  },
  {
    id: "ann-2",
    category: "ACADEMIC",
    title: "Mid-Term Assessment Window",
    description: "Schedules for theory and practical assessments are now available.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&auto=format&fit=crop&q=80",
    date: "Term 1"
  }
];

export const CONTACT_PRESETS = [
  { value: "general", label: "General Academic Progress" },
  { value: "financial", label: "Tuition & Fees" },
  { value: "curriculum", label: "Curriculum & Courses" },
  { value: "health", label: "Attendance & Conduct" }
];
