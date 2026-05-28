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

// ---------- Mock LMS (course detail) ----------

export type LessonKind = "video" | "reading" | "lab" | "discussion" | "quiz";

export interface CourseLesson {
  id: string;
  kind: LessonKind;
  title: string;
  durationMin: number;
  completed: boolean;
}

export interface CourseModule {
  id: string;
  week: number;
  title: string;
  summary: string;
  lessons: CourseLesson[];
}

export type MaterialKind = "slides" | "reading" | "video" | "notebook" | "dataset" | "template";

export interface CourseMaterial {
  id: string;
  kind: MaterialKind;
  title: string;
  source: string;
  sizeOrLen: string;
}

export type AssignmentStatus = "submitted" | "in_progress" | "not_started" | "graded";

export interface CourseAssignment {
  id: string;
  title: string;
  brief: string;
  dueDate: string;
  weight: number; // percent of grade
  status: AssignmentStatus;
  grade?: string;
}

export interface CourseQuiz {
  id: string;
  title: string;
  questions: number;
  bestScore?: number; // 0-100
  attempts: number;
  attemptsAllowed: number;
}

export interface DiscussionPost {
  id: string;
  author: string;
  role: "STUDENT" | "INSTRUCTOR" | "TA";
  avatar?: string;
  postedAgo: string;
  message: string;
  replies: number;
  likes: number;
}

export interface CourseDetail {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  meetingPattern: string;       // e.g. "Mon & Wed · 09:00–11:30"
  location: string;             // "Room A" / "Online (Zoom)" / "Lab B"
  credits: number;
  termWeeks: number;
  progress: number;             // 0-100
  bannerGradient: string;       // tailwind classes for the hero
  syllabusUrl?: string;
  modules: CourseModule[];
  materials: CourseMaterial[];
  assignments: CourseAssignment[];
  quizzes: CourseQuiz[];
  discussion: DiscussionPost[];
}
