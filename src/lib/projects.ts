export interface Project {
    slug: string
    title: string
    summary: string
    tags: string[]
    featured: boolean
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
    status: 'completed'
  },
  // Add more projects here
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}