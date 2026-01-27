export type ProjectStatus = 'live' | 'upcoming' | 'closed';
export type ProjectType = 'residential' | 'commercial' | 'floors' | 'plots';

export interface ProjectSectionConfig {
  // Section titles customization
  amenitiesTitle?: string;
  documentsTitle?: string;
  highlightsTitle?: string;
  descriptionTitle?: string;
  locationTitle?: string;
}

export interface CustomAmenity {
  name: string;
  icon: string; // car, home, building, etc.
  description?: string;
}

export interface CustomSection {
  id: string;
  title: string;
  content: string[];
  icon?: string;
  type?: 'list' | 'table' | 'text';
}

export interface ProjectCustomConfig {
  // Project type
  projectType: ProjectType;
  
  // Section titles
  sections?: ProjectSectionConfig;
  
  // Custom amenities list
  customAmenities?: CustomAmenity[];
  
  // Additional custom sections
  customSections?: CustomSection[];
  
  // Document names customization
  documentNames?: Record<string, string>;
  
  // Hide/show sections
  hideSections?: {
    amenities?: boolean;
    highlights?: boolean;
    location?: boolean;
  };
}

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
    sohna_master_plan?: string;
    layout_plan?: string;
    [key: string]: string | undefined;
  };
  
  // ✅ NEW: Project-specific configuration
  customConfig?: ProjectCustomConfig;
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