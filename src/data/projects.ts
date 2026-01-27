// /data/projects.ts
import { Project } from '@/types';

// ✅ ALL PROJECTS IN ONE PLACE
export const PROJECTS_DATABASE = {
  
  // 🟢 LIVE PROJECTS (Booking Open)
  live: [
    {
      id: 'green-valley-phase-2',
      project_name: 'DDJAY Green Valley Phase 2(Floors)',
      location: 'Sector 6, Sohna, Gurugram',
      status: 'live' as const,
      price_range: '₹1.12-1.47 Crore',
      plot_sizes: ['125 sq yd', '155 sq yd'],
      approval: 'TCP Approved, RERA: RERA GRG-PROJ.2095.2025',
      description: 'Deen Dayal Jan Awas Yojna (DDJAY) approved Low-Rise Floors. Luxury Floors in a DDJAY approved 2BHK and 3BHK colony with all modern amenities. Located in fast-growing Sohna with excellent connectivity.',
      highlights: [
        '✅ TCP & RERA Approved',
        '🛡️ 24/7 Security and CCTV Camera',
        '🛣️ Wide Roads (60 ft)',
        '⚡ Underground Electricity',
        '🌳 Green Parks',
        '🏛️ Community Hall',
        '📍 Near Sohna Elevated Highway',
        '🏦 Upto 80% Loan Available',
      ],
      map_link: 'https://maps.app.goo.gl/xf6mq3NRpAen7bp99',
      
      // ✅ Images DIRECTLY from your folder
      images: [
        '/assets/projects/green-valley-phase-2/images/main-banner-1.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-2.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-3.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-7.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-8.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-9.webp',
        '/assets/projects/green-valley-phase-2/images/gallery4.jpeg',
        '/assets/projects/green-valley-phase-2/images/site-image-3.webp',
      ],
      
      video_url: '',
      rera_number: 'RERA-GRG PROJ-2095.2025',
      
      // ✅ Documents DIRECTLY from your folder
      documents: {
        rera_certificate: '/assets/projects/green-valley-phase-2/documents/LNRera.pdf',
        dtcp_license: '/assets/projects/green-valley-phase-2/documents/license.pdf',
        sohna_master_plan: '/assets/projects/green-valley-phase-2/documents/SOHNA_FDP_2031.pdf',
        layout_plan: '/assets/projects/green-valley-phase-2/documents/LAYOUT-PLAN.pdf',
        floor_plan_2bhk: '/assets/projects/green-valley-phase-2/documents/2bhk-layout.pdf',
        floor_plan_3bhk: '/assets/projects/green-valley-phase-2/documents/COMBIND-UNIT-PLAN.pdf',
        price_list: '/assets/projects/green-valley-phase-2/documents/LID-Floor_Pricelist.pdf',
        brochure: '/assets/projects/green-valley-phase-2/documents/Sector_5_6_7_8,_9_10_Sohna (2).pdf',
      },
      
      created_at: '2024-01-15T10:00:00Z',
    },
    
    {
      id: 'sunrise-residency',
      project_name: 'Sunrise Residency Plots',
      location: 'Sector 15, Sohna, Gurugram',
      status: 'live' as const,
      price_range: '₹95-1.25 Lakh/sq yd',
      plot_sizes: ['100 sq yd', '120 sq yd', '150 sq yd'],
      approval: 'TCP Approved, RERA: RERA-GRG-PROJ-2023.1234',
      description: 'Premium residential plots in Sohna with all modern amenities.',
      highlights: [
        '✅ Fully Approved Layout',
        '🛡️ Gated Community',
        '🛣️ 40 ft Wide Roads',
        '⚡ 24/7 Power Backup',
        '🌳 Landscape Garden',
        '🏋️‍♂️ Club House',
        '📍 Near Sohna Road',
        '🏦 75% Bank Loan'
      ],
      map_link: 'https://maps.google.com/?q=28.4294,77.3074',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      rera_number: 'RERA-GRG-PROJ-2023.1234',
      documents: {},
      created_at: '2024-02-01T10:00:00Z',
    },
  ],
  
  // 🔵 UPCOMING PROJECTS (Coming Soon)
  upcoming: [
    {
      id: 'jhajjar7',
      project_name: 'Coming Soon: DDJAY Jhajjar Sector 7 Plots',
      location: 'Sector 7, Jhajjar, Haryana',
      status: 'upcoming' as const,
      price_range: '₹55-65 Lakh/sq yd',
      plot_sizes: ['104 sq yd to 157 sq yd'],
      approval: 'TCP Approved, RERA: Coming Soon',
      description: 'Premium residential plots with modern infrastructure and amenities. Pre-launch registration open with special discounts.',
      highlights: [
        '✅ Gated Community',
        '🛡️ 24/7 Security and CCTV Camera',
        '🛣️ Solar Street Lights',
        '⚡ Parking Spaces',
        '🌳 CCTV Surveillance',
        '🏛️ Club House',
        '📍 Jogging Track',
        '🏦 Bank Loan Facility',
        '✅ Pre-launch Registration Open soon'
      ],
      map_link: 'https://maps.google.com/?q=28.4100,77.3200',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      expected_launch: 'March 2026',
      rera_number: 'XXXXXXXXXXXX',
      documents: {},
      created_at: '2024-02-20T10:00:00Z',
    },
    
    {
      id: 'jhajjar27',
      project_name: 'Coming Soon: DDJAY Jhajjar Sector 27 Plots',
      location: 'Sector 27, Jhajjar, Haryana',
      status: 'upcoming' as const,
      price_range: '₹52-70 Lakh/sq yd',
      plot_sizes: ['140 sq yd', '165 sq yd', '200 sq yd'],
      approval: 'TCP Approved (Under Process), RERA: Applied',
      description: 'Premium residential plots with modern infrastructure and amenities. Pre-launch registration open with special discounts.',
      highlights: [
        '✅ Expanded Club House',
        '🛡️ Larger Green Areas',
        '🛣️ Smart Security Systems',
        '⚡ Underground Electricity',
        '🌳 Wider Roads',
        '🏛️ Advanced Drainage System',
        '📍 Near National Highway',
        '🏦 Easy Bank Loans',
        '✅ Pre-launch Registration Open soon'
      ],
      map_link: 'https://maps.google.com/?q=28.4120,77.3220',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      expected_launch: 'May 2026',
      rera_number: 'XXXXXXXXXXXX',
      documents: {},
      created_at: '2024-05-10T10:00:00Z',
    },
    {
      id: 'Pataudi1',
      project_name: 'Coming Soon: DDJAY Pataudi Sector 1 Plots',
      location: 'Sector 1, Pataudi, Haryana',
      status: 'upcoming' as const,
      price_range: '₹79-90 Lakh/sq yd',
      plot_sizes: ['125 to 150 sq yd'],
      approval: 'TCP Approved, RERA: Coming Soon',
      description: 'Premium residential plots with modern infrastructure and amenities. Pre-launch registration open with special discounts.',
      highlights: [
        '✅ Gated Community',
        '🛡️ 24/7 Security and CCTV Camera',
        '🛣️ Solar Street Lights',
        '⚡ Underground Electricity',
        '🌳 Wider Roads',
        '🏛️ Advanced Drainage System',
        '📍 Near National Highway',
        '🏦 Easy Bank Loans',
        '✅ Pre-launch Registration Open soon'
      ],
      map_link: 'https://maps.google.com/?q=28.4050,77.3100',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      expected_launch: 'June 2026',
      rera_number: 'XXXXXXXXXXXX',
      documents: {},
      created_at: '2024-06-01T10:00:00Z', 
    }
  ],
  
  // 🔴 CLOSED PROJECTS (Success Stories)
  closed: [
    {
      id: 'palm-drive1',
      project_name: 'Palm Drive Phase 1',
      location: 'Pataudi Bypass on NH 352W, Gurugram',
      status: 'closed' as const,
      price_range: '₹79 Lakh per sq yd',
      plot_sizes: ['104 to 120 sq yd'],
      approval: 'TCP Approved, RERA: ',
      description: 'Successfully delivered project with 100% occupancy. Residents enjoying premium amenities and peaceful living.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 50%'
      ],
      map_link: 'https://maps.google.com/?q=28.4050,77.3100',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      delivered_date: 'December 2023',
      rera_number: 'RERA-GRG-PROJ-1890-2023',
      documents: {},
      created_at: '2023-11-10T10:00:00Z',
    },
    
    {
      id: 'royal-palms-phase-1',
      project_name: 'Royal Palms Phase 1',
      location: 'Sector 5, Sohna, Gurugram',
      status: 'closed' as const,
      price_range: '₹65-85 Lakh',
      plot_sizes: ['90 sq yd', '110 sq yd'],
      approval: 'TCP Approved, RERA: RERA-GRG-PROJ-1500-2022',
      description: 'First phase of Royal Palms successfully delivered. Now residents enjoying premium community living.',
      highlights: [
        '✅ 100% Sold Out',
        '🛡️ Happy Residents',
        '🛣️ Regular Maintenance',
        '⚡ Community Events',
        '🌳 Security 24/7',
        '🏛️ Price Doubled in 3 Years'
      ],
      map_link: 'https://maps.google.com/?q=28.4080,77.3150',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      delivered_date: 'August 2022',
      rera_number: 'RERA-GRG-PROJ-1500-2022',
      documents: {},
      created_at: '2022-08-15T10:00:00Z',
    }
  ]
};

// ✅ HELPER FUNCTIONS (Easy to use)
export const getAllProjects = (): Project[] => {
  return [
    ...PROJECTS_DATABASE.live,
    ...PROJECTS_DATABASE.upcoming,
    ...PROJECTS_DATABASE.closed
  ];
};

export const getProjectsByStatus = (status: 'live' | 'upcoming' | 'closed'): Project[] => {
  return PROJECTS_DATABASE[status];
};

export const getProjectById = (id: string): Project | undefined => {
  return getAllProjects().find(project => project.id === id);
};

// ✅ STATS FUNCTIONS (For HomePage counters)
export const getProjectsStats = () => {
  return {
    live: PROJECTS_DATABASE.live.length,
    upcoming: PROJECTS_DATABASE.upcoming.length,
    closed: PROJECTS_DATABASE.closed.length,
    total: getAllProjects().length
  };
};