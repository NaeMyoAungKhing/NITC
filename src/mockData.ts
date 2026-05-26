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
      { name: "COMPUTATIONAL LOGIC", value: 12 },
      { name: "TECHNICAL WRITING", value: 8 }
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
      { name: "COMPUTATIONAL LOGIC", value: 15 },
      { name: "TECHNICAL WRITING", value: 10 }
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
    subTitle: "Foundational Logic & Systems Architecture",
    category: "THEORY",
    stability: 75,
    iconType: "terminal"
  },
  {
    id: "m2",
    code: "02",
    title: "COMPETENCY",
    subTitle: "Applied Engineering & Scalable Dev",
    category: "COMPETENCY",
    stability: 40,
    iconType: "sliders"
  },
  {
    id: "m3",
    code: "03",
    title: "PRACTICAL",
    subTitle: "Field Deployment & Mission Integration",
    category: "PRACTICAL",
    stability: 90,
    iconType: "lightning"
  }
];

export const ACTIVE_MISSIONS: ActiveMission[] = [
  {
    id: "mission-1",
    title: "Neural Network Architecture & Deployment",
    moduleCode: "04",
    completionDays: 4,
    priority: "PRIORITY ALPHA",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Xie Zihao (School Principal)",
    instructorAvatar: xie,
    syncedPercentage: 78,
    description: "Synchronize AI neural pathing with hydraulic actuators in Lab 4B.",
    status: "active"
  },
  {
    id: "mission-2",
    title: "Advanced Cloud Security Systems",
    moduleCode: "02",
    completionDays: 7,
    priority: "HIGH PRIORITY",
    theoryCount: 4,
    competencyCount: 4,
    practicalCount: 2,
    instructor: "Nae Myo (Vice School Principal)",
    instructorAvatar: nae,
    syncedPercentage: 42,
    description: "Implementing zero-trust protocols in hybrid environments.",
    status: "active"
  }
];

export const UPCOMING_MODULES = [
  {
    code: "05",
    title: "Quantum Computing Foundations",
    instructor: "Jia Ping (Academic Department)"
  },
  {
    code: "06",
    title: "Ethical AI & Data Privacy Laws",
    instructor: "Nang Yay Seng Naw (Student Affairs)"
  }
];

export const WEEKLY_FLIGHT_PLAN: FlightPlanItem[] = [
  {
    id: "fp-1",
    day: "MON",
    dateNum: 22,
    title: "Quantum Logic",
    timeRange: "09:00 - 11:30",
    location: "HALL A",
    isActive: true
  },
  {
    id: "fp-2",
    day: "TUE",
    dateNum: 23,
    title: "No Operations",
    timeRange: "Mission Break",
    location: "",
    isActive: false,
    isBreak: true
  },
  {
    id: "fp-3",
    day: "WED",
    dateNum: 24,
    title: "Robotics Practical",
    timeRange: "14:00 - 17:00",
    location: "LAB 4B",
    isActive: false
  },
  {
    id: "fp-4",
    day: "THU",
    dateNum: 25,
    title: "Cloud Arch",
    timeRange: "10:00 - 12:30",
    location: "ZOOM",
    isActive: false
  },
  {
    id: "fp-5",
    day: "FRI",
    dateNum: 26,
    title: "Mission Review",
    timeRange: "16:00 - 18:00",
    location: "CAFE",
    isActive: false
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    category: "EVENT",
    title: "Annual Tech Symposium 2024",
    description: "Join us for a showcase of student innovation, robotics trials and neural net benchmarks on Oct 24th.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&auto=format&fit=crop&q=80",
    date: "Oct 24, 2024"
  },
  {
    id: "ann-2",
    category: "ACADEMIC",
    title: "Mid-Term Assessment Windows",
    description: "Final schedules computed for theoretical benchmarks and practical orbital simulations are now available.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&auto=format&fit=crop&q=80",
    date: "Oct 12, 2024"
  }
];

export const CONTACT_PRESETS = [
  { value: "general", label: "General Academic Progress" },
  { value: "financial", label: "Tuition & Statement Inquiries" },
  { value: "curriculum", label: "Curriculum Matrix Alignment" },
  { value: "health", label: "Attendance & Conduct Sync" }
];
