export type ProjectStatus = 'live' | 'upcoming' | 'closed';

export interface Project {
  id: string;
  project_name: string;
  location: string;
  status: ProjectStatus;
  price_range: string;
  plot_sizes: string[];
  approval: string;
  description: string;
  highlights: string[];
  map_link: string;
  images: string[];
  video_url?: string;
  created_at: string;
  expected_launch?: string;
  delivered_date?: string;
  rera_number?: string;
  documents?: {
    rera_certificate?: string;
    dtcp_license?: string;
    floor_plan_2bhk?: string;
    floor_plan_3bhk?: string;
    price_list?: string;
    brochure?: string;
  };
}

export interface Lead {
  id: string;
  name: string;
  mobile: string;
  requirement?: string;
  budget?: string;
  purpose?: string;
  project_id?: string;
  project_name?: string;
  lead_status: 'new' | 'contacted' | 'qualified' | 'converted';
  source_page: string;
  created_at: string;
}