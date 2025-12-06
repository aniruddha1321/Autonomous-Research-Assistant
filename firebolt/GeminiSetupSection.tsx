import { Sparkles, Key, Shield, CheckCircle, Lightbulb, Lock, Info, AlertTriangle, XCircle, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface GeminiSetupSectionProps {
  setSelectedSection: (section: string) => void;
}

const GeminiSetupSection = ({ setSelectedSection }: GeminiSetupSectionProps) => {
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
              <span className="text-gray-700">Gemini API Setup</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <Sparkles size={40} color="#4285f4" />
        <h1 className="text-4xl font-bold">Setup Gemini API</h1>
      </div>

      <p className="mb-8 text-gray-700 text-lg">
        Google&apos;s Gemini API powers the AI capabilities in this workshop. You&apos;ll need an API key to enable
        natural language processing, SQL generation, and intelligent report creation. This guide walks you through
        creating and configuring your Gemini API key.
      </p>

      <div className="p-6 mb-8 bg-blue-50 border border-blue-400 rounded-lg">
        <p className="text-blue-900">
          <strong>Free Tier Available:</strong> Google provides a generous free tier with 15 requests per minute (RPM).
          This is perfect for development and testing. Our code includes automatic rate limiting to stay within these bounds.
        </p>
      </div>

      {/* Step 1 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 1: Navigate to Google AI Studio</h2>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Open Google AI Studio</p>
            <p className="text-gray-600 mb-2">Go to: <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://aistudio.google.com</a></p>
            <p className="text-gray-600">You&apos;ll need a Google account to proceed</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Sign In</p>
            <p className="text-gray-600">Use your Google account credentials to log in</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Accept Terms of Service</p>
            <p className="text-gray-600">Review and accept the Google AI Studio terms if prompted</p>
          </li>
        </ul>

        <div className="p-6 bg-slate-100 border border-slate-300 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-slate-800">Quick Tip:</p>
          </div>
          <p className="text-slate-700">
            Google AI Studio is the fastest way to get started with Gemini. For production deployments,
            you may want to use Google Cloud Console instead, which offers more advanced features like
            billing controls and quota management.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 2: Create Your API Key</h2>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Click on &quot;Get API Key&quot;</p>
            <p className="text-gray-600">Look for the &quot;Get API key&quot; or &quot;API keys&quot; button in the left sidebar or top navigation</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Choose Project</p>
            <p className="text-gray-600">You can either:</p>
            <ul className="ml-6 mt-2 space-y-1 text-gray-600">
              <li>• Create a new Google Cloud project (recommended for new users)</li>
              <li>• Select an existing project if you have one</li>
            </ul>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Generate API Key</p>
            <p className="text-gray-600">Click &quot;Create API Key&quot; and the system will generate a unique key for you</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">4. Copy Your API Key</p>
            <p className="text-gray-600">Copy the generated key immediately - it will look something like:</p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-amber-400">
              AIzaSyB1234567890abcdefghijklmnopqrstuv
            </div>
          </li>
        </ul>

        <div className="p-6 bg-red-50 border border-red-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Lock size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-red-900">Security Warning:</p>
          </div>
          <p className="text-red-800">
            Never commit your API key to version control! Always use environment variables.
            Never share your API key publicly or include it in client-side code.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 3: Select Your Gemini Model</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Google offers several Gemini models. For this workshop, we recommend:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="border-2 border-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={24} color="#4285f4" />
                <h3 className="text-xl font-semibold">Gemini 2.0 Flash</h3>
              </div>
              <div className="mb-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">RECOMMENDED</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                The latest and fastest model, perfect for real-time demos and production use.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Fastest response times</li>
                <li>✓ Excellent for SQL generation</li>
                <li>✓ Best multimodal capabilities</li>
                <li>✓ Free tier: 15 RPM</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={24} color="#9ca3af" />
                <h3 className="text-xl font-semibold">Gemini 1.5 Flash</h3>
              </div>
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">FALLBACK</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Previous generation model, still fast and efficient.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Fast and reliable</li>
                <li>✓ Good for SQL tasks</li>
                <li>✓ Proven stability</li>
                <li>✓ Free tier: 15 RPM</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-slate-100 border border-slate-300 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-slate-800">Model Selection:</p>
          </div>
          <p className="text-slate-700">
            The workshop code is configured to use <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">gemini-2.0-flash-exp</code> by default.
            You can change this in the <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">src/lib/services/gemini.ts</code> file.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 4: Configure Environment Variables</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Add your API key to the project&apos;s environment configuration:
        </p>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Locate or Create .env.local File</p>
            <p className="text-gray-600">In your project root directory, create a file named <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code></p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-slate-200">
              <span className="text-slate-500"># Windows PowerShell</span><br />
              New-Item -Path .env.local -ItemType File<br /><br />
              <span className="text-slate-500"># Or create manually in VS Code</span>
            </div>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Add Your Gemini API Key</p>
            <p className="text-gray-600 mb-2">Open <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code> and add:</p>
            <div className="mt-2 p-4 bg-slate-800 rounded font-mono text-sm text-slate-200">
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-slate-500"># Required: Gemini API Configuration</span><br />
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-green-400">GEMINI_API_KEY</span>=<span className="text-amber-400">your_api_key_here</span><br /><br />
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-slate-500"># Application Configuration</span><br />
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-green-400">NEXT_PUBLIC_APP_URL</span>=<span className="text-amber-400">http://localhost:3000</span><br />
              <span className="text-green-400">NODE_ENV</span>=<span className="text-amber-400">development</span>
            </div>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Replace Placeholder</p>
            <p className="text-gray-600">Replace <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">your_api_key_here</code> with the actual API key you copied from Google AI Studio</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">4. Restart Development Server</p>
            <p className="text-gray-600">If your server is running, restart it to load the new environment variables:</p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-slate-200">
              <span className="text-slate-500"># Stop the server (Ctrl+C), then:</span><br />
              npm run dev
            </div>
          </li>
        </ul>

        <div className="p-6 bg-amber-50 border border-amber-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-amber-900">Important Notes:</p>
          </div>
          <ul className="text-amber-800 space-y-1">
            <li>• The <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code> file is already in <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.gitignore</code> - never commit it!</li>
            <li>• Environment variables are only loaded when the server starts</li>
            <li>• No spaces around the <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">=</code> sign in .env files</li>
          </ul>
        </div>
      </div>

      {/* Step 5 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 5: Test Your Gemini Setup</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Verify that your Gemini API is working correctly:
        </p>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">1. Start the Development Server</p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-slate-200">
              npm run dev
            </div>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">2. Navigate to Main Page</p>
            <p className="text-gray-600">Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">http://localhost:3000</a> in your browser</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">3. Test the Orchestrator Agent</p>
            <p className="text-gray-600">Scroll to the &quot;Orchestrator Agent&quot; section and click &quot;Try Multi-Step Flow&quot;</p>
          </li>
          <li className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">4. Verify Results</p>
            <p className="text-gray-600">You should see:</p>
            <ul className="ml-6 mt-2 space-y-1 text-gray-600">
              <li>✓ Intent classification from Gemini</li>
              <li>✓ Sub-agent routing decisions</li>
              <li>✓ AI-generated responses</li>
              <li>✓ No API key errors</li>
            </ul>
          </li>
        </ul>

        <div className="p-6 bg-green-50 border border-green-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-green-900">Success Indicators:</p>
          </div>
          <ul className="text-green-800 space-y-1">
            <li>• No &quot;GEMINI_API_KEY is not defined&quot; errors in console</li>
            <li>• Responses are generated quickly (usually under 2 seconds)</li>
            <li>• Intent classification shows proper routing logic</li>
            <li>• SQL queries are generated for analytics requests</li>
          </ul>
        </div>
      </div>

      {/* Rate Limits */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Understanding Rate Limits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Free Tier Limits</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>15 RPM</strong> - Requests per minute</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>1,500 RPD</strong> - Requests per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>1 million TPM</strong> - Tokens per minute</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Built-in Protection</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Shield size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Automatic rate limiting in code</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Request queuing system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Exponential backoff on errors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-slate-100 border border-slate-300 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-slate-800">Rate Limiting Implementation:</p>
          </div>
          <p className="text-slate-700 mb-3">
            Our <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">src/lib/services/gemini.ts</code> file includes
            automatic rate limiting to prevent hitting quota limits. You can configure this if needed.
          </p>
          <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-slate-200">
            <span className="text-slate-500">// Max requests per minute</span><br />
            <span className="text-purple-400">const</span> <span className="text-blue-400">MAX_RPM</span> = <span className="text-amber-400">15</span>;
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Troubleshooting</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Error: &quot;GEMINI_API_KEY is not defined&quot;</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Ensure <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code> exists in project root</li>
                <li>• Check that the variable name is exactly <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">GEMINI_API_KEY</code></li>
                <li>• No spaces around the = sign</li>
                <li>• Restart the development server after adding env vars</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Error: 429 (Rate Limit Exceeded)</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Wait 60 seconds before making more requests</li>
                <li>• The code includes automatic retry logic</li>
                <li>• Consider upgrading to paid tier for higher limits</li>
                <li>• Check the rate limiting configuration in gemini.ts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Error: 400 (Invalid API Key)</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Verify you copied the complete API key</li>
                <li>• Check for extra spaces or line breaks</li>
                <li>• Regenerate a new API key in Google AI Studio</li>
                <li>• Ensure the API key is active (not deleted)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
        <div className="flex items-start gap-2 mb-4">
          <CheckCircle size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <strong className="text-blue-900">Gemini Setup Complete!</strong>
        </div>
        <p className="text-blue-800 mb-4">
          Your Gemini API is now configured and ready to power the AI agents in this workshop.
          Next, set up Gmail SMTP to enable email sending capabilities.
        </p>
        <button
          onClick={() => setSelectedSection('gmail-setup')}
          className="text-blue-600 underline font-semibold hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          → Continue to Gmail Setup
        </button>
      </div>
    </div>
  );
};

export default GeminiSetupSection;
