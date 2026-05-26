/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Student {
  id: string;
  name: string;
  avatar: string;
  gpa: number;
  classRank: string;
  attendance: number;
  attendanceStatus: string;
  academicProgress: {
    name: string;
    value: number;
  }[];
  financial: {
    currentBalance: number;
    amountDue: number;
    nextPayment: string;
  };
}

export interface ModuleStatus {
  id: string;
  code: string;
  title: string;
  subTitle: string;
  category: "THEORY" | "COMPETENCY" | "PRACTICAL";
  stability: number; // percentage
  iconType: "terminal" | "sliders" | "lightning";
}

export interface ActiveMission {
  id: string;
  title: string;
  moduleCode: string;
  completionDays: number;
  priority: string;
  theoryCount: number;
  competencyCount: number;
  practicalCount: number;
  instructor: string;
  instructorAvatar: string;
  syncedPercentage: number;
  description?: string;
  status: "active" | "completed" | "not-started";
}

export interface FlightPlanItem {
  id: string;
  day: string;
  dateNum: number;
  title: string;
  timeRange: string;
  location: string;
  isActive: boolean;
  isBreak?: boolean;
}

export interface Announcement {
  id: string;
  category: "EVENT" | "ACADEMIC" | "SYSTEM";
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export type PortalMode = "onboarding" | "dashboard" | "missions" | "progress" | "parent";
