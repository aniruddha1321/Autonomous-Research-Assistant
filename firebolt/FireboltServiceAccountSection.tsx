import { Card } from '@/components/ui/card';
import { Key, Shield, Database, Settings } from 'lucide-react';

interface FireboltServiceAccountSectionProps {
  setSelectedSection: (section: string) => void;
}

const FireboltServiceAccountSection = ({ setSelectedSection }: FireboltServiceAccountSectionProps) => {
  const imageContainerClass = "border-2 border-[#7AD2A2] rounded-lg p-6 bg-[#f8fffe] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1";
  
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px'
  };

  const steps = [
    {
      label: 'Click Configure',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/MpsLnPy4/Screenshot-2025-09-13-001307.png" 
            alt="Configure button" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Click "Service accounts"',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/WbNS0mbP/Screenshot-2025-09-13-001351.png" 
            alt="Service accounts button" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Click "Create new service account"',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/0jcYV321/Screenshot-2025-09-13-001418.png" 
            alt="Create new service account button" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Type "demo_account" and enter a description',
      content: null,
    },
    {
      label: 'Select "Associate a user" and toggle "Is organisational admin"',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/26HyMfvG/Screenshot-2025-09-13-001558.png" 
            alt="Associate user and organisational admin toggle" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Enter the username and set role as "account_admin"',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/nVgcD21X/Screenshot-2025-09-13-001640.png" 
            alt="Username and role fields" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Select Default database as "demo_data" and default engine as "demo_engine" then click create service account',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/05018CBg/Screenshot-2025-09-13-002026.png" 
            alt="Database and engine selection" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
    {
      label: 'Copy service ID, generate secret key and then press done',
      content: (
        <div className={imageContainerClass}>
          <img 
            src="https://i.postimg.cc/P5L78b25/Screenshot-2025-09-13-002101.png" 
            alt="Service ID and secret key generation" 
            style={imageStyle}
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 min-h-screen bg-gradient-to-b from-white to-[#EAF8F1]">
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <button
              onClick={() => setSelectedSection('home')}
              className="inline-flex items-center text-[#357266] hover:text-[#16697A] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#357266] focus:ring-offset-2 rounded"
            >
              Home
            </button>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700 font-semibold">Create Service Account</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8 animate-fadeInUp">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#357266] to-[#16697A] bg-clip-text text-transparent"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Create a New Service Account in Firebolt
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Follow this comprehensive step-by-step guide to create a new service account in Firebolt 
          with the necessary permissions for database and engine access.
        </p>
      </div>

      {/* Prerequisites Card */}
      <Card className="p-6 mb-8 bg-[#EAF8F1] border-2 border-[#7AD2A2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-[#357266] flex-shrink-0 mt-1" />
          <div>
            <p className="text-[#357266] font-semibold leading-relaxed">
              <strong>Prerequisites:</strong> Ensure you have a Firebolt account with administrative access 
              to the DevRelSquad workspace. You&apos;ll need permissions to create service accounts and assign roles.
              If you need help setting up your account, refer to the{' '}
              <button
                onClick={() => setSelectedSection('setup')}
                className="text-[#357266] underline font-bold hover:text-[#16697A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#357266] focus:ring-offset-2 rounded"
              >
                Firebolt Setup
              </button>{' '}
              guide.
            </p>
          </div>
        </div>
      </Card>

      {/* Steps Section */}
      <div className="mb-8">
        <h2 
          className="text-3xl font-semibold mb-8 text-center text-[#357266]"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Step-by-Step Service Account Creation
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg -mt-2"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">
                  {step.label}
                </h3>
                
                {step.content && (
                  <div className="mt-3">
                    {step.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn Card */}
      <Card className="p-6 bg-[#EAF8F1] border-2 border-[#7AD2A2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <div className="flex items-start gap-3">
          <Key className="w-6 h-6 text-[#357266] flex-shrink-0 mt-1" />
          <div>
            <p className="text-[#357266] font-semibold leading-relaxed">
              <strong>What You&apos;ll Learn:</strong> Service account creation, permission management, 
              role assignment, and credential generation. With your service account created, you can now 
              use it for automated database operations and integrate with MCP Server for seamless data workflows.
            </p>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      
    </div>
  );
};

export default FireboltServiceAccountSection;
