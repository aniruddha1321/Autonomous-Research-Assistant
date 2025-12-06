import { Database, Shield, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FireboltSetupSectionProps {
  setSelectedSection: (section: string) => void;
}

const FireboltSetupSection = ({ setSelectedSection }: FireboltSetupSectionProps) => {
  return (
    <div>
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <button
              onClick={() => setSelectedSection('home')}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Home
            </button>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Firebolt Setup</span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Setup Firebolt Account</h1>

      <p className="mb-8 text-gray-700 text-lg">
        Before using the Firebolt MCP Server, you need to create a Firebolt account, set up a database with sample data,
        and create an engine. This guide walks you through the complete setup process.
      </p>

      <div className="p-6 mb-8 bg-amber-50 border border-amber-400 rounded-lg">
        <p className="text-amber-900">
          <strong>Prerequisites:</strong> You&apos;ll need a valid email address to create your Firebolt account.
          The setup process is free and includes access to sample datasets.
        </p>
      </div>

      {/* Step 1 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 1: Create Your Firebolt Account</h2>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Navigate to Firebolt Website</p>
            <p className="text-gray-600">Go to https://www.firebolt.io/</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Click Login</p>
            <p className="text-gray-600">Find and click the &apos;Login&apos; button on the homepage</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Switch to Firebolt Tab</p>
            <p className="text-gray-600">Make sure you&apos;re on the Firebolt login page</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">4. Enter Organization Details</p>
            <p className="text-gray-600">Fill in the &apos;Organization&apos; field with your organization name</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">5. Continue Login Process</p>
            <p className="text-gray-600">Click &apos;Continue to log in&apos; and then &apos;Log in&apos;</p>
          </li>
        </ul>
      </div>

      {/* Step 2 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 2: Create a New Engine</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Engines in Firebolt are compute resources that execute your queries. For detailed instructions on creating your first engine, 
          please refer to our comprehensive guide.
        </p>

        <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-blue-900 mb-4">
            <strong>Detailed Guide Available:</strong> We have a step-by-step guide with screenshots to help you create your engine.
          </p>
          <button
            onClick={() => setSelectedSection('create-engine')}
            className="text-blue-600 underline font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            → Go to Create Engine Guide
          </button>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 3: Create Database Section</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Firebolt provides sample datasets that are perfect for testing and learning. For detailed instructions on creating a database and loading sample data, 
          please refer to our comprehensive guide.
        </p>

        <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-blue-900 mb-4">
            <strong>Detailed Guide Available:</strong> We have a step-by-step guide with screenshots to help you create a database and load sample data.
          </p>
          <button
            onClick={() => setSelectedSection('firebolt-database')}
            className="text-blue-600 underline font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            → Go to Firebolt Database Guide
          </button>
        </div>
      </div>

      {/* Step 4 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 4: Create Service Account for MCP</h2>

        <p className="mb-6 text-gray-700 text-lg">
          To use the MCP Server, you&apos;ll need to create a service account with appropriate credentials. For detailed instructions on creating a service account, 
          please refer to our comprehensive guide.
        </p>

        <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-blue-900 mb-4">
            <strong>Detailed Guide Available:</strong> We have a step-by-step guide with screenshots to help you create a service account with the proper permissions.
          </p>
          <button
            onClick={() => setSelectedSection('firebolt-service-account')}
            className="text-blue-600 underline font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            → Go to Service Account Guide
          </button>
        </div>
      </div>

      {/* Step 5 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 5: Test Your Setup</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Before proceeding with MCP Server setup, verify that your Firebolt environment is working correctly:
        </p>

        <div className="p-6 bg-slate-800 rounded-lg mb-6 font-mono text-sm">
          <pre className="text-slate-200">
            <span className="text-slate-500">-- Test query to verify your setup</span>{'\n'}
            <span className="text-amber-500">SELECT</span> <span className="text-amber-500">COUNT</span>(*) <span className="text-amber-500">AS</span> total_rows{'\n'}
            <span className="text-amber-500">FROM</span> your_sample_table{'\n'}
            <span className="text-amber-500">LIMIT</span> 10;
          </pre>
        </div>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Start Your Engine</p>
            <p className="text-gray-600">Ensure your demo_engine is running</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Connect to Database</p>
            <p className="text-gray-600">Use the Firebolt SQL workspace to connect to your database</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Run Test Query</p>
            <p className="text-gray-600">Execute a simple SELECT query on your sample data</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">4. Verify Results</p>
            <p className="text-gray-600">Confirm that data is loaded and queries execute successfully</p>
          </li>
        </ul>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Database size={24} color="#ff6b35" className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Engine Created</h3>
            <p className="text-gray-600 text-sm">
              Your Firebolt engine is ready to process queries and handle data operations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Shield size={24} color="#10b981" className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Service Account Ready</h3>
            <p className="text-gray-600 text-sm">
              Authentication credentials are configured for MCP Server integration
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Layers size={24} color="#f59e0b" className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">Sample Data Loaded</h3>
            <p className="text-gray-600 text-sm">
              Test datasets are available for immediate querying and analysis
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
        <p className="text-blue-900">
          <strong>Next Steps:</strong> With your Firebolt environment set up, you can now proceed to install and configure
          the MCP Server. Your service account credentials will be used to authenticate the MCP Server with Firebolt.
        </p>
      </div>
    </div>
  );
};

export default FireboltSetupSection;
