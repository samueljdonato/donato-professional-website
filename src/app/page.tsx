export default function Home() {
  return (
    <main className="min-h-screen px-1 py-4 sm:px-2 lg:px-3">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sam Donato
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bioinformatics Scientist, Data Scientist, and Mycologist
        </p>
        
<div className="prose prose-lg">
  <ul className="list-disc pl-6 space-y-4">
    <li>
      Bioinformatics scientist building data-driven systems that translate biological complexity into actionable outputs, tools, and solutions.
    </li>
    <li>
      Experienced designing and deploying large-scale fungal strain programs — from data architecture and informatics platforms to culturing protocols supporting commercial-scale production.
    </li>
    <li>
      Built ML and automation pipelines across biotech projects, distilling hundreds of parameters into key features to accelerate analysis and decision-making.
    </li>
    <li>
      Proficient in Python, R, and SQL with expertise in statistical analysis, machine learning, genomic analysis, and data visualization.
    </li>
    <li>
      Open to consulting in bioinformatics, mycology, data science, and research informatics.
    </li>
  </ul>
</div>
        
        <nav className="mt-12 flex gap-6">
          <a href="/writings" className="text-blue-600 hover:underline">
            Writings
          </a>
          <a href="/projects" className="text-blue-600 hover:underline">
            Projects
          </a>
          <a 
            href="https://github.com/samueljdonato" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </nav>

        {/* CONSULTING SERVICES SECTION */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Donato Consulting Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Bioinformatics & Data Science
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Genomic data analysis and pipeline development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Machine learning model development for biological systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Multi-omics integration and visualization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated data processing and quality control systems
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mycology & Strain Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Fungal strain selection and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Strain banking and resource management systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Growth condition optimization and scale-up strategies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Contamination prevention and quality assurance protocols
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Research Informatics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Laboratory information management systems (LIMS) design
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Research data architecture and database development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated reporting and dashboard creation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Data governance and standardization frameworks
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Technical Advisory
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Biotechnology startup technical assessments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Research strategy and experimental design consultation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Grant application technical writing support
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Technology stack evaluation and recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>




        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:samueljdonato@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              samueljdonato@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/sam-donato-478584155/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/samueljdonato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Sam Donato GitHub
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}