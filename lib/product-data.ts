import { 
  FlaskConical, 
  Beaker, 
  ShieldCheck, 
  ClipboardCheck, 
  Award, 
  Search,
  Zap,
  Droplets,
  Microscope
} from 'lucide-react';

export interface ProductItem {
  name: string;
  grade: string;
  desc: string;
  sku: string;
  cas?: string;
}

export interface ProductData {
  id: string;
  title: string;
  icon: any;
  heroImg: string;
  longDesc: string;
  catalog: ProductItem[];
  specs: { label: string; value: string }[];
  grades: { name: string; full: string; desc: string }[];
}

export const productsData: Record<string, ProductData> = {
  'chemicals': {
    id: 'chemicals',
    title: 'Laboratory Chemicals',
    icon: Microscope,
    heroImg: '/products/chemicals.png',
    longDesc: 'Our laboratory chemicals are engineered for absolute purity and consistency. We provide a comprehensive range of analytical reagents, HPLC solvents, and specialized synthesis chemicals from world-class manufacturing partners.',
    catalog: [
      { name: 'Sulfuric Acid 98%', grade: 'AR/GR Grade', desc: 'High purity analytical reagent grade for complex laboratory synthesis.', sku: 'CH-4429', cas: '7664-93-9' },
      { name: 'Methanol', grade: 'HPLC Grade', desc: 'Purified for high-performance liquid chromatography and spectroscopy.', sku: 'SL-8812', cas: '67-56-1' },
      { name: 'Acetonitrile', grade: 'Solvents', desc: 'Ultrapure solvent for critical organic synthesis and pharmaceutical apps.', sku: 'CH-1055', cas: '75-05-8' },
      { name: 'Sodium Hydroxide Pellets', grade: 'AR/ACS', desc: 'Consistent purity for precise titration and base catalysis.', sku: 'CH-2210', cas: '1310-73-2' },
      { name: 'Hydrochloric Acid', grade: 'Electronic Grade', desc: 'Ultra-low metal content for semiconductor and advanced labs.', sku: 'CH-9001', cas: '7647-01-0' }
    ],
    specs: [
      { label: 'Standard Compliance', value: 'ISO 9001:2015, USP, BP' },
      { label: 'Purity Levels', value: '99.0% to 99.999%' },
      { label: 'Trace Metals', value: '< 1 ppb (Electronic Grade)' },
      { label: 'Shelf Life', value: '2-5 Years (Standard Storage)' }
    ],
    grades: [
      { name: 'AR Grade', full: 'Analytical Reagent', desc: 'High purity chemicals for laboratory research and analysis.' },
      { name: 'GR Grade', full: 'Guaranteed Reagent', desc: 'Highest purity standards for critical quantitative analysis.' },
      { name: 'HPLC Grade', full: 'High Performance Liquid Chromatography', desc: 'Solvents filtered to 0.2 microns with extremely low UV absorbance.' }
    ]
  },
  'glassware': {
    id: 'glassware',
    title: 'Precision Glassware',
    icon: FlaskConical,
    heroImg: '/products/glassware.png',
    longDesc: 'Crafted from premium Borosilicate 3.3 glass, our glassware offers superior thermal shock resistance, chemical durability, and individual calibration for unmatched volumetric accuracy.',
    catalog: [
      { name: 'Erlenmeyer Flasks', grade: 'Borosilicate 3.3', desc: 'Heat resistant with heavy-duty rims for safe sample storage.', sku: 'GW-201' },
      { name: 'Volumetric Pipettes', grade: 'Calibrated Class A', desc: 'Individually calibrated to deliver precise volumes with certified compliance.', sku: 'GW-505' },
      { name: 'Graduated Beakers', grade: 'Low-Form', desc: 'Reinforced uniform walls and dual scale graduations for easy reading.', sku: 'GW-112' },
      { name: 'Volumetric Flasks', grade: 'Class A with Batch Cert', desc: 'Highest precision for solution preparation and standard titration.', sku: 'GW-404' },
      { name: 'Condensers', grade: 'Spiral/Liebig', desc: 'High-efficiency cooling surface for distillation and reflux.', sku: 'GW-880' }
    ],
    specs: [
      { label: 'Material', value: 'Borosilicate 3.3 (Linear Expansion: 3.3)' },
      { label: 'Calibration', value: 'Class A (DIN EN ISO 1042 / 4788)' },
      { label: 'Thermal Resistance', value: 'Up to 500°C (Operation) / 525°C (Annealing)' },
      { label: 'Chemical Resistance', value: 'Class HGB 1 (Acid) / A1 (Alkali)' }
    ],
    grades: [
      { name: 'Class A', full: 'Individual Calibration', desc: 'Highest accuracy level, often supplied with a batch or individual certificate.' },
      { name: 'Class B', full: 'General Laboratory', desc: 'Standard accuracy for teaching and non-critical laboratory work.' },
      { name: 'USP Compliant', full: 'United States Pharmacopeia', desc: 'Glassware meeting strict tolerance and neutrality standards for pharma.' }
    ]
  }
};
