import { 
  Landmark, 
  Sprout, 
  Droplets, 
  FlaskConical, 
  Microscope, 
  GraduationCap,
  ClipboardCheck,
  Truck,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Laptop
} from 'lucide-react';

export interface Step {
  title: string;
  desc: string;
  icon: any;
}

export interface IndustryData {
  id: string;
  title: string;
  icon: any;
  heroImg: string;
  longDesc: string;
  features: string[];
  steps: Step[];
  stats: { label: string; value: string }[];
}

export const industriesData: Record<string, IndustryData> = {
  'government-labs': {
    id: 'government-labs',
    title: 'Government Labs',
    icon: Landmark,
    heroImg: '/solutions/government-labs.png',
    longDesc: 'We provide end-to-end diagnostic solutions tailored for state and central government laboratories, ensuring compliance with national health standards and GeM procurement guidelines.',
    features: [
      'GeM-compliant procurement workflows',
      'National Health Mission (NHM) aligned solutions',
      'Robust supply chain for remote locations',
      '24/7 technical support for critical diagnostic hubs'
    ],
    steps: [
      { title: 'Requirement Analysis', desc: 'Detailed assessment of lab capacity and diagnostic goals.', icon: ClipboardCheck },
      { title: 'Procurement & Logistics', desc: 'Streamlined GeM-based ordering and Pan-India delivery.', icon: Truck },
      { title: 'Installation & Training', desc: 'On-site setup and professional training for lab technicians.', icon: Settings },
      { title: 'Quality Assurance', desc: 'Rigorous testing to ensure 100% diagnostic accuracy.', icon: ShieldCheck }
    ],
    stats: [
      { label: 'Govt Labs Served', value: '500+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Pan-India Reach', value: '28 States' }
    ]
  },
  'agriculture-soil': {
    id: 'agriculture-soil',
    title: 'Agriculture & Soil',
    icon: Sprout,
    heroImg: '/solutions/agriculture-soil.png',
    longDesc: 'Our specialized equipment and reagents empower soil health laboratories to provide accurate nutritional analysis, helping farmers optimize crop yields across India.',
    features: [
      'Automated soil nutrient testing systems',
      'High-precision NPK analysis reagents',
      'Portable soil testing kits for field use',
      'Advanced moisture and pH monitoring tools'
    ],
    steps: [
      { title: 'Site Selection', desc: 'Identifying key locations for soil testing hubs.', icon: Landmark },
      { title: 'Equipment Deployment', desc: 'Setup of specialized soil analysis instruments.', icon: Settings },
      { title: 'Method Validation', desc: 'Ensuring analysis protocols meet agricultural standards.', icon: CheckCircle2 },
      { title: 'Farmer Training', desc: 'Teaching local staff how to interpret and explain results.', icon: GraduationCap }
    ],
    stats: [
      { label: 'Soil Labs Equipped', value: '120+' },
      { label: 'Farmers Impacted', value: '1M+' },
      { label: 'Analysis Accuracy', value: '99.8%' }
    ]
  },
  'environmental-testing': {
    id: 'environmental-testing',
    title: 'Environmental Testing',
    icon: Droplets,
    heroImg: '/solutions/environmental-testing.png',
    longDesc: 'Providing advanced solutions for water quality monitoring and air pollution analysis, helping regulatory bodies maintain environmental safety standards.',
    features: [
      'Real-time water quality monitoring stations',
      'Air particulate matter analysis tools',
      'Chemical oxygen demand (COD) testing kits',
      'Microbial analysis reagents for wastewater'
    ],
    steps: [
      { title: 'Environmental Audit', desc: 'Assessing local pollution levels and monitoring needs.', icon: Microscope },
      { title: 'Sensor Deployment', desc: 'Installation of high-precision monitoring sensors.', icon: Settings },
      { title: 'Data Integration', desc: 'Setting up centralized dashboards for real-time reporting.', icon: Laptop },
      { title: 'Advisory Support', desc: 'Providing technical data for policy decision making.', icon: ShieldCheck }
    ],
    stats: [
      { label: 'Pollutants Tracked', value: '50+' },
      { label: 'Cities Covered', value: '80+' },
      { label: 'Monitoring Uptime', value: '99.9%' }
    ]
  },
  'pharmaceutical-qc': {
    id: 'pharmaceutical-qc',
    title: 'Pharmaceutical QC',
    icon: FlaskConical,
    heroImg: '/solutions/pharmaceutical-qc.png',
    longDesc: 'Empowering pharmaceutical manufacturers with high-purity solvents and glassware that meet the most stringent USP, BP, and IP standards.',
    features: [
      'Ultra-pure HPLC and Spectroscopy grade solvents',
      'Certified Class-A volumetric glassware',
      'Stability testing chamber solutions',
      'LIMS-ready diagnostic equipment'
    ],
    steps: [
      { title: 'Validation Plan', desc: 'Developing DQ/IQ/OQ/PQ protocols for new equipment.', icon: ClipboardCheck },
      { title: 'Precision Setup', desc: 'Installation in clean-room environments.', icon: Settings },
      { title: 'Batch Testing', desc: 'Rigorous quality control for every item delivered.', icon: ShieldCheck },
      { title: 'Compliance Audit', desc: 'Final documentation and certification for audits.', icon: CheckCircle2 }
    ],
    stats: [
      { label: 'Pharma Clients', value: '200+' },
      { label: 'Purity Standard', value: '99.99%' },
      { label: 'Audit Success', value: '100%' }
    ]
  },
  'research-biotech': {
    id: 'research-biotech',
    title: 'Research & Biotech',
    icon: Microscope,
    heroImg: '/solutions/research-biotech.png',
    longDesc: 'Supporting the next generation of scientific breakthroughs with specialized reagents, genomic tools, and advanced laboratory infrastructure.',
    features: [
      'Next-Gen Sequencing (NGS) reagents',
      'Cell culture and molecular biology kits',
      'High-speed centrifugation systems',
      'Cryogenic storage and logistics'
    ],
    steps: [
      { title: 'Research Scoping', desc: 'Collaborating with PIs to define lab requirements.', icon: FlaskConical },
      { title: 'Custom Synthesis', desc: 'Providing tailor-made reagents for unique experiments.', icon: Settings },
      { title: 'Tech Integration', desc: 'Connecting digital lab tools for seamless data flow.', icon: Microscope },
      { title: 'Ongoing Support', desc: 'Sustained supply of critical consumables.', icon: Truck }
    ],
    stats: [
      { label: 'Research Papers', value: '1000+' },
      { label: 'Scientists Funded', value: '500+' },
      { label: 'Lab Efficiency', value: '+45%' }
    ]
  },
  'universities': {
    id: 'universities',
    title: 'Universities',
    icon: GraduationCap,
    heroImg: '/solutions/universities.png',
    longDesc: 'Equipping academic institutions with durable, high-quality scientific tools that withstand the rigors of student use while maintaining educational excellence.',
    features: [
      'Standardized lab glassware for large batches',
      'Durable analytical weighing scales',
      'Affordable educational reagent kits',
      'Safety equipment and fume hood solutions'
    ],
    steps: [
      { title: 'Curriculum Alignment', desc: 'Matching equipment with academic syllabi.', icon: GraduationCap },
      { title: 'Scale Installation', desc: 'Setting up multi-user lab environments.', icon: Settings },
      { title: 'Safety Training', desc: 'Ensuring students and staff follow best practices.', icon: ShieldCheck },
      { title: 'Maintenance Program', desc: 'Scheduled service for long-term durability.', icon: Settings }
    ],
    stats: [
      { label: 'Institutions', value: '350+' },
      { label: 'Students Daily', value: '50k+' },
      { label: 'Tool Longevity', value: '10 Yrs' }
    ]
  }
};
