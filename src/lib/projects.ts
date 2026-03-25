export interface Project {
    slug: string
    title: string
    summary: string
    tags: string[]
    featured: boolean
    draft?: boolean   // if true, project is hidden from the site but kept in the codebase
    // date: string
    github?: string
    demo?: string
    status: 'completed' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    slug: 'strain-informatics-platform',
    title: 'Fungal Strain Maintenance and Informatics Platform',
    summary: 'Built comprehensive strain management system supporting 700+ fungal lines, integrating genomic data, growth metrics, and production outcomes for commercial biomanufacturing.',
    tags: ['Python', 'Data Architecture', 'Bioinformatics', 'Mycology/Bacterial Culturing Protocols'],
    featured: true,
    status: 'completed'
  },
  {
    slug: 'bioreactor-ml-pipeline',
    title: 'Bioreactor ML Pipeline',
    summary: 'Developed machine learning pipeline that distilling hundreds of bioreactor parameters into ranked importance features, accelerating data analysis, predictive power and decision-making.',
    tags: ['Machine Learning', 'Python', 'Data Engineering', 'Bioprocess'],
    featured: true,
    draft: true,
    status: 'completed'
  },
  {
    slug: 'heart-failure-ml-prediction',
    title: 'AI-Based Heart Failure Risk Prediction',
    summary: 'Graduate capstone project integrating polygenic risk scores, clinical phenotypes, and proteomic data to predict heart failure risk using five ML models — demonstrating that multi-omics integration significantly outperforms genetic risk scores alone.',
    tags: ['Machine Learning', 'Python', 'Genomics', 'Proteomics', 'Bioinformatics'],
    featured: true,
    status: 'completed'
  },
  {
    slug: 'transposable-element-analysis',
    title: 'Transposable Element Analysis in Pleurotus ostreatus',
    summary: 'End-to-end bioinformatics pipeline characterizing transposable element structure, expression, and function in oyster mushroom — integrating RNA-seq alignment, ORF prediction, differential expression, and BLAST-based functional annotation.',
    tags: ['Python', 'R', 'RNA-seq', 'Genomics', 'Mycology'],
    featured: false,
    status: 'completed'
  },
  {
    slug: 'deg-pipeline',
    title: 'Differential Gene Expression Pipeline',
    summary: 'Reproducible RNA-seq DEG pipeline comparing healthy vs. wild-type fungal samples — covering BAM processing, coverage-based ROI discovery, featureCounts quantification, and DESeq2 statistical analysis with full visualization outputs.',
    tags: ['R', 'Python', 'Bash', 'RNA-seq', 'DESeq2', 'Bioinformatics'],
    featured: false,
    status: 'completed'
  },
  // Add more projects here

  
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}