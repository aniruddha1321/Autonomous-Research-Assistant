import Image from 'next/image';

interface CreateEngineSectionProps {
  setSelectedSection: (section: string) => void;
}

const CreateEngineSection = ({ setSelectedSection }: CreateEngineSectionProps) => {
  const steps = [
    {
      label: (
        <>
          Go to{' '}
          <a 
            href="https://www.firebolt.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#357266] underline font-semibold hover:text-[#16697A] transition-colors"
          >
            Firebolt Console
          </a>{' '}
          and log in with your organization credentials.
        </>
      ),
      imageUrl: "https://i.postimg.cc/sxHn1TWG/Screenshot-2025-09-12-014732.png",
      imageAlt: "Firebolt login screen"
    },
    {
      label: 'Navigate to the Engines section from the sidebar.',
      imageUrl: "https://i.postimg.cc/zGKj1zxg/Screenshot-2025-09-12-014948.png",
      imageAlt: "Engines navigation"
    },
    {
      label: 'Click "Create new engine" to start the setup.',
      imageUrl: "https://i.postimg.cc/tCVdhRQM/Screenshot-2025-09-12-015030.png",
      imageAlt: "Create new engine"
    },
    {
      label: 'Enter a name for your engine (e.g., "demo_engine").',
      imageUrl: null,
      imageAlt: null
    },
    {
      label: 'Open "Advanced settings" if needed and configure options.',
      imageUrl: "https://i.postimg.cc/6pMdK8dT/Screenshot-2025-09-12-015616.png",
      imageAlt: "Advanced settings"
    },
    {
      label: 'Click "Next step" through the setup wizard until you reach confirmation.',
      imageUrl: "https://i.postimg.cc/QC60yfxx/Screenshot-2025-09-12-020655.png",
      imageAlt: "Next step"
    },
    {
      label: 'Review your settings and finalize by creating the engine. Make sure to use sample data',
      imageUrl: "https://i.postimg.cc/vmWXsYHK/Screenshot-2025-09-12-020736.png",
      imageAlt: "Finalize engine creation"
    },
    {
      label: 'Once created, your engine will appear in the list and can be started when needed.',
      imageUrl: null,
      imageAlt: null
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-b from-white to-[#EAF8F1]">
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <button
              onClick={() => setSelectedSection('setup')}
              className="inline-flex items-center text-[#357266] font-semibold hover:text-[#16697A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#357266] focus:ring-offset-2 rounded"
            >
              Home
            </button>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700 font-semibold">Create Engine</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#357266] to-[#16697A] bg-clip-text text-transparent animate-fadeInUp">
        How to Load Data and Create a New Engine in Firebolt
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-gray-700 text-center text-lg leading-relaxed max-w-2xl mx-auto animate-fadeInUp">
        Follow this comprehensive step-by-step guide to create a new engine in Firebolt. 
        Each step includes visual references to help you navigate through the interface effectively.
      </p>

      {/* Prerequisites */}
      <div className="p-6 mb-8 bg-[#EAF8F1] border-2 border-[#7AD2A2] rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <p className="text-[#357266] font-semibold leading-relaxed">
          <strong>Prerequisites:</strong> Ensure you have a Firebolt account and are logged into the platform.
          If you need help setting up your account, refer to the{' '}
          <button
            onClick={() => setSelectedSection('setup')}
            className="text-[#357266] underline font-bold hover:text-[#16697A] focus:outline-none focus:ring-2 focus:ring-[#357266] focus:ring-offset-2 rounded"
          >
            Firebolt Setup
          </button>{' '}
          guide.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#357266]">
          Step-by-Step Account and Engine Creation
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Step Number */}
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <p className="text-lg font-semibold text-gray-800 mb-3 leading-relaxed">
                  {step.label}
                </p>
                
                {step.imageUrl && (
                  <div className="border-2 border-[#7AD2A2] rounded-xl p-4 bg-[#f8fffe] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <img 
                      src={step.imageUrl} 
                      alt={step.imageAlt || ''} 
                      className="max-w-full h-auto block rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-[#EAF8F1] border-2 border-[#7AD2A2] rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <p className="text-[#357266] font-semibold leading-relaxed">
          <strong>Next Steps:</strong> With your engine created, you can now load data and start running queries.
          For MCP Server integration, ensure your service account has access to this engine.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CreateEngineSection;
