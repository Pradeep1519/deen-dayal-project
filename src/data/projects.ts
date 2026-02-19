import { Project } from '@/types';

// ✅ ALL PROJECTS IN ONE PLACE
export const PROJECTS_DATABASE = {
  
  // 🟢 LIVE PROJECTS (Booking Open)
  live: [
    // ✅ NEW: South City Phase 3 (Sector 36, Jhajjar)
    {
      id: 'south-city-phase-3',
      project_name: 'South City Phase 3 - Plots',
      location: 'Sector 36, Jhajjar, Haryana',
      status: 'live' as const,
      price_range: '₹42,500 per sq yd',
      plot_sizes: ['114 sq yd', '125 sq yd', '150 sq yd', '175 sq yd'],
      approval: 'TCP Approved, RERA: HRERA-PKL-JJR-789-2026',
      description: 'South City Phase 3 - Premium residential plots in Sector 36, Jhajjar. South City Phase 1 & 2 already delivered and fully developed. Now Phase 3 launching with special registration offer. Excellent connectivity and modern amenities.',
      highlights: [
        '✅ RERA Approved',
        '🛡️ 24/7 Security',
        '🛣️ Wide Roads',
        '⚡ Underground Electricity',
        '🌳 Green Parks & Landscaped Gardens',
        '🏛️ Community Hall',
        '📍 Near Main Highway',
        '🏦 Upto 80% Loan Available',
        '✅ South City 1 & 2 Already Delivered',
        '📅 Last Date: 15 March 2026',
        '🎯 Allotment: 1 April 2026 (Draw Basis)'
      ],
      map_link: 'https://maps.google.com/?q=28.4300,77.2900',
      images: [
        '/assets/projects/south-city3/images/picregis1.jpeg',
        '/assets/projects/south-city3/images/picregis2.jpeg',
        '/assets/projects/south-city3/images/s1.png',
        '/assets/projects/south-city3/images/s2.webp',
        '/assets/projects/south-city3/images/s3.webp',
        '/assets/projects/south-city3/images/s4.webp',
        '/assets/projects/south-city3/images/s5.webp',
        '/assets/projects/south-city3/images/s6.webp',
        '/assets/projects/south-city3/images/s7.webp',
        '/assets/projects/south-city3/images/s8.webp',
        '/assets/projects/south-city3/images/s9.webp',
        '/assets/projects/south-city3/images/s10.webp',
        '/assets/projects/south-city3/images/s11.webp',
        '/assets/projects/south-city3/images/s12.webp',
      ],
      video_url: '',
      rera_number: 'HRERA-PKL-JJR-XXX-XXXX',
      documents: {
        rera_certificate: '/assets/projects/south-city3/documents/rera.pdf',
        dtcp_license: '/assets/projects/south-city3/documents/license.pdf',
        layout_plan: '/assets/projects/south-city3/documents/layout.pdf',
        price_list: '/assets/projects/south-city3/documents/price-list.pdf',
        brochure: '/assets/projects/south-city3/documents/brochure.pdf',
      },
      created_at: '2026-02-19T10:00:00Z',
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Plot Amenities',
          documentsTitle: 'Project Documents',
          highlightsTitle: 'Why Choose South City Phase 3?',
          descriptionTitle: 'Project Overview'
        },
        customAmenities: [
          { name: 'Gated Community', icon: 'shield' },
          { name: '24/7 Security', icon: 'lock' },
          { name: 'Wide Roads', icon: 'road' },
          { name: 'Underground Electricity', icon: 'zap' },
          { name: 'Green Parks', icon: 'leaf' },
          { name: 'Community Hall', icon: 'building' },
          { name: 'Bank Loan Facility', icon: 'bank' },
          { name: 'Drainage System', icon: 'droplets' }
        ],
        customSections: [
          {
            id: 'key-dates',
            title: 'Important Dates',
            content: [
              'Registration Start: ₹31,000/-',
              'Last Date to Apply: 15 March 2026',
              'Allotment Date: 1 April 2026 (Draw Basis)',
              'Possession: Within 24 months'
            ]
          },
          {
            id: 'price-details',
            title: 'Price Details',
            content: [
              'Rate: ₹42,500 per sq yd',
              'Smallest Plot: 114 sq yd (Starting ₹48.45 Lakh)',
              'Registration Amount: ₹31,000/-',
              'EOI: As per scheme',
              '100% Refundable if unsuccessful'
            ]
          }
        ],
        documentNames: {
          layout_plan: 'South City Phase 3 Layout Plan',
          price_list: 'Price List & Payment Plan',
          brochure: 'Project Brochure'
        }
      }
    },
    
    // ✅ NEW: Ganga Valley Floors (Sector 78, Gurugram)
    {
      id: 'ganga-valley-floors',
      project_name: 'Ganga Valley - Luxury Floors',
      location: 'Sector 78, Gurugram (Near NH-8)',
      status: 'live' as const,
      price_range: '₹2 Cr+',
      plot_sizes: ['3BHK Only'],
      approval: 'RERA Approved, TCP Approved',
      description: 'Ganga Valley presents premium 3BHK luxury floors in Sector 78, Gurugram. Located near NH-8 with excellent connectivity to Delhi, Gurugram, and Manesar. Pre-launch offer with special registration price.',
      highlights: [
        '✅ RERA Approved',
        '🛡️ 24/7 Security',
        '🛣️ Near NH-8 (Excellent Connectivity)',
        '⚡ Power Backup',
        '🌳 Green Surroundings',
        '🏛️ Modern Architecture',
        '📍 Sector 78, Gurugram',
        '🏦 Upto 80% Loan Available',
        '🔥 Pre-launch Special Offer',
        '📅 Last Date: 19 Feb 2026',
        '🎯 Allotment: 21 Feb 2026'
      ],
      map_link: 'https://maps.google.com/?q=28.4500,77.1000',
      images: [
        '/assets/projects/ganga-valley-floor78/images/p1.webp',
        '/assets/projects/ganga-valley-floor78/images/p2.webp',
        '/assets/projects/ganga-valley-floor78/images/p3.webp',
        '/assets/projects/ganga-valley-floor78/images/p4.webp',
        '/assets/projects/ganga-valley-floor78/images/p5.jpg',
        '/assets/projects/ganga-valley-floor78/images/p6.webp',
        '/assets/projects/ganga-valley-floor78/images/p7.jpg',
        '/assets/projects/ganga-valley-floor78/images/p8.jpg',
        '/assets/projects/ganga-valley-floor78/images/p9.jpg',
      ],
      video_url: '',
      rera_number: 'RERA_GRG-PROJ_2037-2025',
      documents: {
        rera_certificate: '/assets/projects/ganga-valley-floor78/documents/HRERA.pdf',
        dtcp_license: '/assets/projects/ganga-valley-floor78/documents/License.pdf',
        layout_plan: '/assets/projects/ganga-valley-floor78/documents/sp.pdf',
        floor_plan_3bhk: '/assets/projects/ganga-valley-floor78/documents/flp.pdf',
        price_list: '/assets/projects/ganga-valley-floor78/documents/Pricelist.pdf',
        brochure: '/assets/projects/ganga-valley-floor78/documents/brochur.pdf',
      },
      created_at: '2026-02-19T10:00:00Z',
      
      customConfig: {
        projectType: 'floors',
        sections: {
          amenitiesTitle: 'Floor Amenities',
          documentsTitle: 'Project Documents',
          highlightsTitle: 'Why Choose Ganga Valley?',
          descriptionTitle: 'Project Overview'
        },
        customAmenities: [
          { name: 'Lift Access', icon: 'building' },
          { name: 'Modular Kitchen', icon: 'home' },
          { name: 'Parking', icon: 'car' },
          { name: 'Power Backup', icon: 'zap' },
          { name: '24/7 Security', icon: 'shield' },
          { name: 'Water Supply', icon: 'droplets' },
          { name: 'NH-8 Connectivity', icon: 'road' },
          { name: 'Modern Architecture', icon: 'palette'},
          { name: 'Green Surroundings', icon: 'leaf' },
          { name: 'Bank Loan Facility', icon: 'bank' },
          { name: 'Community Hall', icon: 'building' },
          { name: 'Free Office Space in Basement', icon: 'briefcase' }
        ],
        customSections: [
          {
            id: 'key-dates',
            title: 'Important Dates',
            content: [
              'Registration Amount: ₹49,000/-',
              'Last Date to Apply: 19 February 2026',
              'Allotment Date: 21 February 2026',
              'Possession: Within 2 Years'
            ]
          },
          {
            id: 'floor-specs',
            title: 'Floor Specifications',
            content: [
              'Type: Only 3BHK Luxury Floors',
              'Starting Price: ₹2 Cr+',
              'Carpet Area: As per plan',
              'Modern Fittings & Finishes',
              'Vaastu Compliant Design'
            ]
          }
        ],
        documentNames: {
          floor_plan_3bhk: '3BHK Floor Plan',
          price_list: 'Price List (Pre-launch Offer)',
          brochure: 'Project Brochure'
        }
      }
    }
  ],
  
  // 🔵 UPCOMING PROJECTS (Coming Soon)
  upcoming: [
    {
      id: 'jhajjar7',
      project_name: 'Coming Soon: DDJAY Jhajjar Sector 7 Plots',
      location: 'Sector 7, Jhajjar, Haryana',
      status: 'upcoming' as const,
      price_range: '₹55-70 sq yd',
      plot_sizes: ['104 sq yd to 157 sq yd'],
      approval: 'TCP Approved, RERA: RERA Recieved',
      description: 'Discover thoughtfully planned residential plots under Deen Dayal Jan Awas Yojana in Sector 7, Jhajjar, strategically located on NH-352 (Rohtak–Rewari National Highway). This upcoming township offers the perfect blend of modern infrastructure, excellent connectivity, and future-ready living.',
      highlights: [
        '✅ Gated Community',
        '🛡️ 24/7 Security and CCTV Camera',
        '🛣️ Solar Street Lights',
        '⚡ Parking Spaces',
        '🌳 CCTV Surveillance',
        '🏛️ Club House',
        '📍 Jogging Track',
        '🏦 Bank Loan Facility',
        '✅ Pre-launch Registration Open'
      ],
      map_link: 'https://maps.google.com/?q=28.4100,77.3200',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      ],
      video_url: '',
      expected_launch: 'February 2026',
      rera_number: 'XXXXXXXXXXXX',
      documents: {},
      created_at: '2024-02-20T10:00:00Z',
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Planned Amenities',
          documentsTitle: 'Upcoming Documents'
        },
        customAmenities: [
          { name: 'Gated Community', icon: 'shield' },
          { name: 'Solar Lights', icon: 'sun' },
          { name: 'CCTV', icon: 'video' },
          { name: 'Jogging Track', icon: 'trending-up' },
          { name: 'Parking', icon: 'car' },
          { name: 'Club House', icon: 'building' },
          { name: 'Green Parks', icon: 'leaf' },
          { name: 'Bank Loans', icon: 'bank' },
          { name: '24/7 Security', icon: 'lock' },
          { name: 'Underground Electricity', icon: 'zap' },
          { name: 'Wide Roads', icon: 'road' ,}
        ],
        customSections: [
          {
            id: 'pre-launch',
            title: 'Pre-launch Benefits',
            content: [
              'Early Bird Discount',
              'Priority Allotment',
              'Flexible Payment Plans',
              'Special Financing Options'
            ]
          }
        ]
      }
    },
    
    {
      id: 'jhajjar27',
      project_name: 'Coming Soon: DDJAY Jhajjar Sector 27 Plots',
      location: 'Sector 27, Jhajjar, Haryana',
      status: 'upcoming' as const,
      price_range: '₹52-70 sq yd',
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
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Premium Amenities'
        }
      }
    },
    
    {
      id: 'Pataudi1',
      project_name: 'Coming Soon: DDJAY Pataudi Sector 1 Plots',
      location: 'Sector 1, Pataudi, Haryana',
      status: 'upcoming' as const,
      price_range: '₹79-90 sq yd',
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
      
      customConfig: {
        projectType: 'plots',
        hideSections: {
          highlights: true
        }
      }
    }
  ],
  
  // 🔴 CLOSED PROJECTS (Success Stories)
  closed: [
    // ✅ MOVED: Green Valley Phase 2 from live to closed
    {
      id: 'green-valley-phase-2',
      project_name: 'DDJAY Green Valley Phase 2 (Floors)',
      location: 'Sector 6, Sohna, Gurugram',
      status: 'closed' as const,
      price_range: '₹1.12-1.47 Crore',
      plot_sizes: ['125 sq yd', '155 sq yd'],
      approval: 'TCP Approved, RERA: RERA GRG-PROJ.2095.2025',
      description: 'Deen Dayal Jan Awas Yojna (DDJAY) approved Low-Rise Floors. Successfully delivered project with luxury 2BHK and 3BHK floors. Located in fast-growing Sohna with excellent connectivity.',
      highlights: [
        '✅ Successfully Delivered',
        '🛡️ 24/7 Security and CCTV Camera',
        '🛣️ Wide Roads (60 ft)',
        '⚡ Underground Electricity',
        '🌳 Green Parks',
        '🏛️ Community Hall',
        '📍 Near Sohna Elevated Highway',
        '💯 Happy Residents',
        '📈 Price Appreciated'
      ],
      map_link: 'https://maps.app.goo.gl/xf6mq3NRpAen7bp99',
      images: [
        '/assets/projects/green-valley-phase-2/images/main-banner-1.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-2.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-3.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-7.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-8.webp',
        '/assets/projects/green-valley-phase-2/images/gallery-9.webp',
        '/assets/projects/green-valley-phase-2/images/gallery4.jpeg',
        '/assets/projects/green-valley-phase-2/images/site-images-3.webp',
      ],
      video_url: 'https://www.youtube.com/live/xiv0JV6YvSw?si=xphGxXfS3C_Bul25',
      delivered_date: 'December 2025',
      rera_number: 'RERA-GRG PROJ-2095.2025',
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
      
      customConfig: {
        projectType: 'floors',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          documentsTitle: 'Project Documents',
          highlightsTitle: 'Project Highlights',
          descriptionTitle: 'Success Story'
        },
        customAmenities: [
          { name: 'Lift Access', icon: 'building' },
          { name: 'Modular Kitchen', icon: 'home' },
          { name: 'Parking Space', icon: 'car' },
          { name: 'Power Backup', icon: 'zap' },
          { name: 'Water Supply', icon: 'droplets' },
          { name: 'Green Park', icon: 'leaf' },
          { name: '24/7 Security', icon: 'shield' },
          { name: 'Club House', icon: 'palette' }
        ],
        customSections: [
          {
            id: 'success-story',
            title: 'Success Story',
            content: [
              'Project Successfully Delivered',
              '100% Occupancy Achieved',
              'Premium Community Living',
              'Excellent Appreciation Potential'
            ]
          }
        ],
        documentNames: {
          floor_plan_2bhk: '2BHK Floor Plan',
          floor_plan_3bhk: '3BHK Combined Unit Plan',
          price_list: 'Floor Price List'
        }
      }
    },
    
    {
      id: 'palm-drive2',
      project_name: 'Palm Drive Phase 2',
      location: 'Pataudi Bypass on NH 352W, Gurugram',
      status: 'closed' as const,
      price_range: '₹87500 Lakh per sq yd',
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
        '📍 Price Appreciated 39%'
      ],
      map_link: 'https://maps.google.com/?q=28.4050,77.3100',
      images: [
        './assets/projects/palm-drive-2/images/brochure-palm-2-drive-2.webp',
        './assets/projects/palm-drive-2/images/layout.jpeg',
        './assets/projects/palm-drive-2/images/location.jpeg',
      ],
      video_url: '',
      delivered_date: 'October 2027',
      rera_number: 'RERA-GRG-PROJ-2062-2025',
      documents: {
        rera_certificate: '/assets/projects/palm-drive-2/documents/RERA-certificate-palm-drive-2.pdf',
        dtcp_license: '/assets/projects/palm-drive-2/documents/palm-drive-2-License.pdf',
        layout_plan: '/assets/projects/palm-drive-2/documents/palm-drive-2-siteplan.pdf',
        price_list: '/assets/projects/palm-drive-2/documents/palmdrive-2-pricelist.pdf',
        brochure: '/assets/projects/palm-drive-2/documents/palm-drive-2-brochure.pdf',
      },
      created_at: '2023-11-10T10:00:00Z',
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹72,000/sq yd',
              'Current Value: ₹1,00,000/sq yd',
              'Appreciation: 39% in 6 months',
              'Rental Yield: 4-5% annually'
            ]
          }
        ]
      }
    },
    
    {
      id: 'palm-floor',
      project_name: 'Palm Floors',
      location: 'Sector 2,3, Pataudi, Greater Gurugram',
      status: 'closed' as const,
      price_range: '₹89-97 Lakh',
      plot_sizes: ['90 sq yd', '110 sq yd'],
      approval: 'TCP Approved, RERA: RERA-GRG-PROJ-2019-2025',
      description: 'First phase of Palm Floors successfully delivered. Now residents enjoying premium community living.',
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
        './assets/projects/palm-floor/images/pf-banner-image.webp',
        './assets/projects/palm-floor/images/specification.png',
        './assets/projects/palm-floor/images/map-location.webp',
        './assets/projects/palm-floor/images/3bhk-floor-plan.webp',
      ],
      video_url: '',
      delivered_date: 'August 2028',
      rera_number: 'RERA-GRG-PROJ-1500-2025',
      documents: {
        rera_certificate: '/assets/projects/palm-floor/documents/rera-certificate-palm-floors.pdf',
        dtcp_license: '/assets/projects/palm-floor/documents/project-licence.pdf',
        layout_plan: '/assets/projects/palm-floor/documents/floor-plan--alm-floors.pdf',
        price_list: '/assets/projects/palm-floor/documents/Palm-dloors-picelist.pdf',
        brochure: '/assets/projects/palm-floor/documents/palm-floors-brochure.pdf',
      },
      created_at: '2022-08-15T10:00:00Z',
      
      customConfig: {
        projectType: 'floors',
        sections: {
          amenitiesTitle: 'Floor Facilities',
          descriptionTitle: 'Completed Project'
        },
        customSections: [
          {
            id: 'price-growth',
            title: 'Price Growth',
            content: [
              'Launch Price: ₹45 Lakh',
              'Current Value: ₹95 Lakh',
              'Growth: 111% in 3 years',
              'Community Satisfaction: High'
            ]
          }
        ]
      }
    },
    {
      id: 'saras-city2',
      project_name: 'Saras City Plots Phase 2',
      location: 'Sector 21, Jhajjar, Haryana',
      status: 'closed' as const,
      price_range: '₹52500 Lakh/sq yd',
      plot_sizes: ['142 to 177 sq yd'],
      approval: 'TCP Approved, RERA: HRERA-PKL-JJR-695-2025',
      description: 'Successfully delivered premium residential plots with modern amenities. Residents enjoying peaceful living and excellent connectivity.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 45%',
        '🏆 Awarded Best Residential Plot Project 2025'
      ],
      map_link: 'https://maps.google.com/?q=28.4500,77.3000',
      images: [
        './assets/projects/saras-city2/images/pic1.jpeg',
        './assets/projects/saras-city2/images/pic2.jpeg',
        './assets/projects/saras-city2/images/pic3.jpeg',
        './assets/projects/saras-city2/images/pic4.jpeg',
        './assets/projects/saras-city2/images/pic5.jpeg',
        './assets/projects/saras-city2/images/pic6.jpeg',
        './assets/projects/saras-city2/images/pic7.jpeg',
        './assets/projects/saras-city2/images/pic8.jpeg',
        './assets/projects/saras-city2/images/pic9.jpeg',
        './assets/projects/saras-city2/images/pic10.jpeg',
      ],
      video_url: '',
      delivered_date: 'Ready to Move',
      rera_number: 'HRERA-PKL-JJR-695-2025',
      documents: {
        rera_certificate: '/assets/projects/saras-city2/documents/RERA.pdf',
        dtcp_license: '/assets/projects/saras-city2/documents/License.pdf',
        layout_plan: '/assets/projects/saras-city2/documents/Layout-Plan.pdf',
        price_list: '/assets/projects/saras-city2/documents/Price-List.pdf',
        brochure: '/assets/projects/saras-city2/documents/Brochure.pdf',
      },
      created_at: '2023-05-20T10:00:00Z',
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Project Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹36,000/sq yd',
              'Current Value: ₹52,500/sq yd',
              'Appreciation: 44% in 11 months',
              'Rental Yield: 5-6% annually'
            ]
          }
        ]
      }
    },
    {
      id: 'south-city1',
      project_name: 'South City Plots Phase 1',
      location: 'Sector 36, Jhajjar, Haryana',
      status: 'closed' as const,
      price_range: '₹48500 Lakh/sq yd',
      plot_sizes: ['115 to 178 sq yd'],
      approval: 'TCP Approved, RERA: HRERA-PKL-JJR-572-2024',
      description: 'Successfully delivered premium residential plots with modern amenities. Residents enjoying peaceful living and excellent connectivity.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 20%'
      ],
      map_link: 'https://maps.google.com/?q=28.4300,77.2900',
      images: [
        './assets/projects/south-city1/images/main.webp',
        './assets/projects/south-city1/images/pic1.webp',
        './assets/projects/south-city1/images/pic2.webp',
        './assets/projects/south-city1/images/pic3.webp',
        './assets/projects/south-city1/images/pic4.webp',
      ],
      video_url: '',
      delivered_date: 'Ready to Move',
      rera_number: 'HRERA-PKL-JJR-572-2024',
      documents: {
        rera_certificate: '/assets/projects/south-city1/documents/RERA-South-City-1.pdf',
        dtcp_license: '/assets/projects/south-city1/documents/licence.pdf',
        layout_plan: '/assets/projects/south-city1/documents/LAYOUT.pdf',
        price_list: '/assets/projects/south-city1/documents/SC1-Price-List.pdf',
        brochure: '/assets/projects/south-city1/documents/brochure-sc-one.pdf',
      },
      created_at: '2022-11-25T10:00:00Z',
      
      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Project Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹32,000/sq yd',
              'Current Value: ₹48,500/sq yd',
              'Appreciation: 51% in 1 year',
              'Rental Yield: 4-5% annually'
            ]
          }
        ]
      }
    },
    {
      id: 'south-city2',
      project_name: 'South City Plots Phase 2',
      location: 'Sector 37, Jhajjar, Haryana',
      status: 'closed' as const,
      price_range: '₹35000 Lakh/sq yd',
      plot_sizes: ['90 to 179 sq yd'],
      approval: 'TCP Approved, RERA: HRERA-PKL-JJR-637-2024',
      description: 'Successfully delivered premium residential plots with modern amenities. Residents enjoying peaceful living and excellent connectivity.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 20%'
      ],
      map_link: 'https://maps.google.com/?q=28.4300,77.2900',
      images: [
        './assets/projects/south-city2/images/pic1.webp',
        './assets/projects/south-city2/images/pic1.webp',
        './assets/projects/south-city2/images/pic2.webp',
        './assets/projects/south-city2/images/pic3.webp',
        './assets/projects/south-city2/images/pic4.webp',
        './assets/projects/south-city2/images/pic5.webp',
      ],
      video_url: '',
      delivered_date: 'Ready to Move',
      rera_number: 'HRERA-PKL-JJR-637-2024',
      documents: {
        rera_certificate: '/assets/projects/south-city2/documents/rera.pdf',
        dtcp_license: '/assets/projects/south-city2/documents/rera.pdf',
        layout_plan: '/assets/projects/south-city2/documents/LAYOUT.pdf',
        price_list: '/assets/projects/south-city2/documents/price-list2.pdf',
        brochure: '/assets/projects/south-city2/documents/brochure-sc-one.pdf'
      },
      created_at: '2023-05-15T10:00:00Z',

      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Project Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹35,000/sq yd',
              'Current Value: ₹48,500/sq yd',
              'Appreciation Rate (1 year): 38.6%',
              'Rental Yield (Annual): 4-5%'
            ]
          }
        ]
      }
    },
    {
      id: 'mayur-city',
      project_name: 'Mayur City',
      location: 'Sector 27, Jhajjar, Haryana',
      status: 'closed' as const,
      price_range: '₹48500 Lakh/sq yd',
      plot_sizes: ['127 to 172 sq yd'],
      approval: 'TCP Approved, RERA: HRERA-PKL-JJR-678-2025',
      description: 'Successfully delivered premium residential plots with modern amenities. Residents enjoying peaceful living and excellent connectivity.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 20%'
      ],
      map_link: 'https://maps.google.com/?q=28.4300,77.2900',
      images: [
        './assets/projects/mayur-city/images/Layout-Plan.webp',
        './assets/projects/mayur-city/images/pic1.webp',
        './assets/projects/mayur-city/images/pic2.webp',
        './assets/projects/mayur-city/images/pic3.webp',
        './assets/projects/mayur-city/images/pic4.webp',
        './assets/projects/mayur-city/images/pic5.webp',
        './assets/projects/mayur-city/images/pic6.webp',
        './assets/projects/mayur-city/images/pic7.jpeg',
        './assets/projects/mayur-city/images/pic8.jpeg',
        './assets/projects/mayur-city/images/pic9.jpeg',
        './assets/projects/mayur-city/images/pic10.jpeg',
      ],
      video_url: '',
      delivered_date: 'Ready to Move',
      rera_number: 'HRERA-PKL-JJR-637-2024',
      documents: {
        rera_certificate: '/assets/projects/mayur-city/documents/RERA.pdf',
        dtcp_license: '/assets/projects/mayur-city/documents/licence.pdf',
        layout_plan: '/assets/projects/mayur-city/documents/LAYOUT.pdf',
        price_list: '/assets/projects/mayur-city/documents/payment-plan.pdf',
        brochure: '/assets/projects/mayur-city/documents/brochure-sc-one.pdf'
      },
      created_at: '2023-05-15T10:00:00Z',

      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Project Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹37,000/sq yd',
              'Current Value (approx): ₹48,500/sq yd',
              'Appreciation Rate (1 year): 38.6%',
              'Rental Yield (Annual): 4-5%'
            ]
          }
        ]
    
      }
    },
    {
      id: 'Golden Gate Residency',
      project_name: 'Golden Gate Residency',
      location: 'Sector 03, Farukh Nagar, Gurugram',
      status: 'closed' as const,
      price_range: 'Starting at ₹69 Lakh',
      plot_sizes: ['118 to 142 sq yd'],
      approval: 'TCP Approved, RERA: HARERA/GGM/RPIN/648',
      description: 'Successfully delivered premium residential plots with modern amenities. Residents enjoying peaceful living and excellent connectivity.',
      highlights: [
        '✅ Fully Developed',
        '🛡️ All Amenities Operational',
        '🛣️ 100% Power Backup',
        '⚡ Landscaped Gardens',
        '🌳 Residents Living',
        '🏛️ Maintenance Free',
        '📍 Price Appreciated 25%',
      ],
      map_link: 'https://maps.google.com/?q=28.4000,77.1000',
      images: [
        './assets/projects/golden-gate-resi/images/pic1.jpeg',
        './assets/projects/golden-gate-resi/images/pic2.jpeg',
        './assets/projects/golden-gate-resi/images/pic3.jpeg',
        './assets/projects/golden-gate-resi/images/pic4.jpeg',
        './assets/projects/golden-gate-resi/images/pic5.jpeg',
      ],
      video_url: '',
      delivered_date: 'Ready to Move',
      rera_number: 'HARERA/GGM/RPIN/648',
      documents: {
        rera_certificate: '/assets/projects/golden-gate-resi/documents/RERA.pdf',
        dtcp_license: '/assets/projects/golden-gate-resi/documents/license.pdf',
        layout_plan: '/assets/projects/golden-gate-resi/documents/gg_layout.pdf',
        price_list: '/assets/projects/golden-gate-resi/documents/Yashvi-Homes-Price-List.pdf',
        brochure: '/assets/projects/golden-gate-resi/documents/gg_brochure.pdf',
      },
      created_at: '2022-10-10T10:00:00Z',

      customConfig: {
        projectType: 'plots',
        sections: {
          amenitiesTitle: 'Delivered Amenities',
          descriptionTitle: 'Project Success Story'
        },
        customSections: [
          {
            id: 'appreciation',
            title: 'Price Appreciation',
            content: [
              'Launch Price: ₹55,000/sq yd',
              'Current Value: ₹69,000/sq yd',
              'Appreciation: 25% in 1 year',
              'Rental Yield: 4-5% annually'
            ]
          }
        ]
      }
    }
  ]
};

// ✅ HELPER FUNCTIONS (REMEMBER TO UPDATE!)
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

export const getProjectsStats = () => {
  return {
    live: PROJECTS_DATABASE.live.length,
    upcoming: PROJECTS_DATABASE.upcoming.length,
    closed: PROJECTS_DATABASE.closed.length,
    total: getAllProjects().length
  };
};