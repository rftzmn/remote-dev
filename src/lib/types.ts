export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  date: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: Array<string>;
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};
