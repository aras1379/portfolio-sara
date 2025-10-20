// WORK EXPERIENCE DATA TYPE

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
  pdfUrl?: string;
}