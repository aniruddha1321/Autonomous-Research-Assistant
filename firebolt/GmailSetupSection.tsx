import { Mail, Key, Shield, Cloud, CheckCircle, AlertCircle, Lightbulb, Lock, AlertTriangle, XCircle, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface GmailSetupSectionProps {
  setSelectedSection: (section: string) => void;
}

const GmailSetupSection = ({ setSelectedSection }: GmailSetupSectionProps) => {
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
              <span className="text-gray-700">Gmail SMTP Setup</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <Mail size={40} color="#ea4335" />
        <h1 className="text-4xl font-bold">Setup Gmail SMTP with App Password</h1>
      </div>

      <p className="mb-8 text-gray-700 text-lg">
        Gmail integration enables your agents to send automated email reports and notifications. This guide covers
        both development (sandbox mode) and production (SMTP with App Password) setup options. Choose the approach that fits your needs.
      </p>

      <div className="p-6 mb-8 bg-blue-50 border border-blue-400 rounded-lg">
        <p className="text-blue-900 mb-3">
          <strong>Two Setup Options:</strong>
        </p>
        <ul className="text-blue-800 space-y-2">
          <li>• <strong>Development Mode (Sandbox):</strong> No Gmail setup required - simulates email sending for testing</li>
          <li>• <strong>Production Mode (SMTP):</strong> Gmail SMTP with App Password for real email sending</li>
        </ul>
      </div>

      {/* Development Mode */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Option 1: Development Mode (Sandbox)</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Perfect for testing and development. No Gmail configuration needed.
        </p>

        <div className="p-6 bg-green-50 border border-green-400 rounded-lg mb-6">
          <div className="flex items-start gap-2 mb-2">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-green-900">Already Configured!</p>
          </div>
          <p className="text-green-800">
            By default, the workshop runs in sandbox mode. Your <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code> file
            should have <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">NODE_ENV=development</code> set, which enables sandbox mode automatically.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">How Sandbox Mode Works</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Email payloads are logged to console instead of being sent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>No Gmail credentials required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Perfect for testing agent logic and report generation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Preview email content in the UI before &quot;sending&quot;</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-slate-800 rounded-lg font-mono text-sm">
          <div className="text-slate-400 mb-2"># .env.local (Development Mode)</div>
          <div className="text-slate-200">
            <span className="text-green-400">NODE_ENV</span>=<span className="text-amber-400">development</span><br />
            <span className="text-slate-500"># No Gmail credentials needed in dev mode</span>
          </div>
        </div>
      </div>

      {/* Production Mode */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Option 2: Production Mode (Gmail SMTP with App Password)</h2>

        <p className="mb-6 text-gray-700 text-lg">
          For real email sending capabilities in production, you&apos;ll need to configure Gmail SMTP using an App Password.
          This is simpler than OAuth2 and works well for personal projects and small applications.
        </p>

        <div className="p-6 mb-6 bg-blue-50 border border-blue-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-blue-900">Why SMTP with App Password?</p>
          </div>
          <ul className="text-blue-800 space-y-1">
            <li>• No Google Cloud Console setup required</li>
            <li>• Simple configuration with just username and password</li>
            <li>• Works immediately after setup</li>
            <li>• Perfect for development and small-scale production</li>
          </ul>
        </div>
      </div>

      {/* Step 1: Enable 2-Step Verification */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 1: Enable 2-Step Verification</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Before you can create an App Password, you must enable 2-Step Verification on your Google Account.
        </p>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">1. Go to Google Account Security</p>
            <p className="text-gray-600 mb-2">Visit: <a href="https://myaccount.google.com/security" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://myaccount.google.com/security</a></p>
            <p className="text-gray-600">Sign in with your Gmail account</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">2. Find 2-Step Verification</p>
            <p className="text-gray-600">Scroll down to &quot;How you sign in to Google&quot; section</p>
            <p className="text-gray-600">Click on &quot;2-Step Verification&quot;</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">3. Enable 2-Step Verification</p>
            <p className="text-gray-600">Click &quot;Get Started&quot; and follow the setup wizard</p>
            <p className="text-gray-600 text-sm mt-1">You&apos;ll need to verify your identity with your phone</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">4. Complete Setup</p>
            <p className="text-gray-600">Follow the prompts to add a phone number and confirm it</p>
            <p className="text-gray-600">Turn on 2-Step Verification</p>
          </li>
        </ul>

        <div className="p-6 bg-amber-50 border border-amber-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Shield size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-amber-900">Security Note:</p>
          </div>
          <p className="text-amber-800">
            2-Step Verification adds an extra layer of security to your Google Account. Even if someone knows your password,
            they won&apos;t be able to sign in without access to your second verification method.
          </p>
        </div>
      </div>

      {/* Step 2: Create App Password */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 2: Generate App Password</h2>

        <p className="mb-6 text-gray-700 text-lg">
          App Passwords are 16-character passcodes that let less secure apps or devices access your Google Account.
        </p>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">1. Navigate to App Passwords</p>
            <p className="text-gray-600 mb-2">Go to: <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">https://myaccount.google.com/apppasswords</a></p>
            <p className="text-gray-600 text-sm">Or from Security page → 2-Step Verification → App passwords (at the bottom)</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">2. Select App and Device</p>
            <p className="text-gray-600 mb-2">Click the &quot;Select app&quot; dropdown and choose &quot;Mail&quot;</p>
            <p className="text-gray-600">Click the &quot;Select device&quot; dropdown and choose &quot;Other (Custom name)&quot;</p>
            <p className="text-gray-600 text-sm mt-1">Enter a name like &quot;Multi-Agent Workshop&quot; or &quot;Firebolt App&quot;</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">3. Generate Password</p>
            <p className="text-gray-600">Click &quot;Generate&quot;</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">4. Copy the App Password</p>
            <p className="text-gray-600 mb-2">You&apos;ll see a 16-character password (e.g., &quot;abcd efgh ijkl mnop&quot;)</p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-amber-400">
              xxxx xxxx xxxx xxxx
            </div>
            <p className="text-gray-600 text-sm mt-2">Copy this password - you won&apos;t be able to see it again!</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">5. Click Done</p>
            <p className="text-gray-600">The app password is now active and ready to use</p>
          </li>
        </ul>

        <div className="p-6 bg-red-50 border border-red-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Lock size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-red-900">Critical Security:</p>
          </div>
          <p className="text-red-800">
            Treat App Passwords like regular passwords - never share them or commit them to version control!
            If compromised, revoke the app password immediately from your Google Account settings.
          </p>
        </div>
      </div>

      {/* Step 3: Configure Environment */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 3: Configure Environment Variables</h2>

        <p className="mb-6 text-gray-700 text-lg">
          Add your Gmail SMTP credentials to your <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">.env.local</code> file:
        </p>

        <div className="mb-6">
          <div className="p-4 bg-slate-800 rounded-lg font-mono text-sm">
            <div className="text-slate-400 mb-3"># .env.local (Production Mode with SMTP)</div>
            <div className="text-slate-200">
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-slate-500"># Gmail SMTP Configuration (Production)</span><br />
              <span className="text-slate-500"># ============================================</span><br />
              <span className="text-green-400">GMAIL_USER</span>=<span className="text-amber-400">your-email@gmail.com</span><br />
              <span className="text-green-400">GMAIL_APP_PASSWORD</span>=<span className="text-amber-400">xxxx xxxx xxxx xxxx</span><br />
              <span className="text-green-400">NODE_ENV</span>=<span className="text-amber-400">production</span><br /><br />
              <span className="text-slate-500"># Optional: SMTP server settings (defaults shown)</span><br />
              <span className="text-green-400">SMTP_HOST</span>=<span className="text-amber-400">smtp.gmail.com</span><br />
              <span className="text-green-400">SMTP_PORT</span>=<span className="text-amber-400">587</span><br />
              <span className="text-green-400">SMTP_SECURE</span>=<span className="text-amber-400">false</span><br /><br />
              <span className="text-slate-500"># Optional: Default sender details</span><br />
              <span className="text-green-400">GMAIL_FROM_NAME</span>=<span className="text-amber-400">&quot;Multi-Agent Workshop&quot;</span><br />
              <span className="text-green-400">GMAIL_FROM_EMAIL</span>=<span className="text-amber-400">your-email@gmail.com</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-gray-700 mb-6">
          <li className="flex items-start gap-2">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Replace <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">your-email@gmail.com</code> with your actual Gmail address</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Replace the app password with the 16-character password from Step 2 (remove spaces)</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Set <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">NODE_ENV=production</code> to enable real email sending</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Restart your development server after updating environment variables</span>
          </li>
        </ul>

        <div className="p-6 bg-blue-50 border border-blue-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <Settings size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-blue-900">SMTP Port Options:</p>
          </div>
          <ul className="text-blue-800 space-y-2">
            <li>• <strong>Port 587 (TLS/STARTTLS):</strong> Recommended - secure, widely supported</li>
            <li>• <strong>Port 465 (SSL):</strong> Alternative - uses implicit SSL/TLS</li>
            <li>• <strong>Port 25:</strong> Not recommended - often blocked by ISPs</li>
          </ul>
          <p className="text-blue-800 mt-3 text-sm">
            For Port 587: Set <code className="bg-slate-800 text-amber-400 px-1 rounded text-xs">SMTP_SECURE=false</code> (uses STARTTLS)<br />
            For Port 465: Set <code className="bg-slate-800 text-amber-400 px-1 rounded text-xs">SMTP_SECURE=true</code> (uses SSL/TLS)
          </p>
        </div>
      </div>

      {/* Step 4: Implementation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 4: Update Gmail Service Implementation</h2>

        <p className="mb-6 text-gray-700 text-lg">
          The workshop includes a Gmail service stub. Here&apos;s how to implement SMTP email sending:
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Install Nodemailer</h3>
            <div className="p-3 bg-slate-800 rounded font-mono text-sm text-slate-200 mb-4">
              npm install nodemailer<br />
              npm install --save-dev @types/nodemailer
            </div>
            <p className="text-gray-600 text-sm">
              Nodemailer is the most popular Node.js library for sending emails via SMTP
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Example Implementation</h3>
            <p className="text-gray-600 mb-3">
              Edit <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">src/lib/services/gmail.ts</code> to add SMTP sending:
            </p>
            <div className="p-4 bg-slate-800 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
{`import nodemailer from 'nodemailer';

class GmailService {
  private transporter;

  constructor() {
    if (process.env.NODE_ENV === 'production') {
      // Production: Use real SMTP
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
    }
  }

  async send(to: string, subject: string, html: string) {
    if (process.env.NODE_ENV === 'development') {
      // Development: Log to console
      console.log('📧 [SANDBOX] Email:', { to, subject, html });
      return { success: true, messageId: 'sandbox-' + Date.now() };
    }

    // Production: Send via SMTP
    const info = await this.transporter.sendMail({
      from: \`"\${process.env.GMAIL_FROM_NAME || 'Workshop'}" <\${process.env.GMAIL_FROM_EMAIL}>\`,
      to,
      subject,
      html,
    });

    return { success: true, messageId: info.messageId };
  }
}

export const gmailService = new GmailService();`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 5: Testing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Step 5: Test Email Sending</h2>

        <ul className="space-y-4 mb-6">
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">1. Start Development Server</p>
            <div className="mt-2 p-3 bg-slate-800 rounded font-mono text-sm text-slate-200">
              npm run dev
            </div>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">2. Navigate to Report Agent</p>
            <p className="text-gray-600">Go to <a href="http://localhost:3000" className="text-blue-600 underline">http://localhost:3000</a> and scroll to &quot;Report Agent&quot; section</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">3. Test Email Send</p>
            <p className="text-gray-600">Click &quot;Generate & Preview Report&quot; to test the full flow</p>
          </li>
          <li className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">4. Verify Email Delivery</p>
            <p className="text-gray-600">Check your inbox for the generated report email</p>
            <p className="text-gray-600 text-sm mt-1">Also check spam/junk folder if not in inbox</p>
          </li>
        </ul>

        <div className="p-6 bg-green-50 border border-green-400 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-green-900">Success Indicators:</p>
          </div>
          <ul className="text-green-800 space-y-1">
            <li>• No SMTP authentication errors in console</li>
            <li>• Email appears in recipient inbox within seconds</li>
            <li>• Email is properly formatted with HTML content</li>
            <li>• Sender shows as your configured Gmail address</li>
            <li>• Message-ID is returned successfully</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Development vs Production Mode</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 p-3 text-left">Feature</th>
                <th className="border border-slate-300 p-3 text-left">Development (Sandbox)</th>
                <th className="border border-slate-300 p-3 text-left">Production (SMTP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Setup Required</td>
                <td className="border border-slate-300 p-3 text-green-700">None - works out of box</td>
                <td className="border border-slate-300 p-3 text-amber-700">2-Step Verification + App Password</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Email Delivery</td>
                <td className="border border-slate-300 p-3">Simulated (logged only)</td>
                <td className="border border-slate-300 p-3 text-green-700">Real delivery to inbox</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Credentials</td>
                <td className="border border-slate-300 p-3 text-green-700">Not required</td>
                <td className="border border-slate-300 p-3">Gmail address + App Password</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Google Cloud Setup</td>
                <td className="border border-slate-300 p-3 text-green-700">Not required</td>
                <td className="border border-slate-300 p-3 text-green-700">Not required</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Testing</td>
                <td className="border border-slate-300 p-3 text-green-700">Perfect for development</td>
                <td className="border border-slate-300 p-3">Required for production</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 font-semibold">Cost</td>
                <td className="border border-slate-300 p-3 text-green-700">Free</td>
                <td className="border border-slate-300 p-3 text-green-700">Free (within Gmail limits)</td>
              </tr>
            </tbody>
          </table>
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
                <h3 className="text-lg font-semibold">Error: &quot;Invalid login: 535-5.7.8 Username and Password not accepted&quot;</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Verify 2-Step Verification is enabled on your Google Account</li>
                <li>• Double-check that you&apos;re using an App Password, not your regular Gmail password</li>
                <li>• Ensure no extra spaces in the app password (remove all spaces)</li>
                <li>• Try generating a new app password</li>
                <li>• Verify the Gmail address is correct</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Error: &quot;Missing credentials for PLAIN&quot;</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Check that <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">GMAIL_USER</code> is set in .env.local</li>
                <li>• Check that <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">GMAIL_APP_PASSWORD</code> is set in .env.local</li>
                <li>• Ensure environment variables have no leading/trailing quotes unless needed</li>
                <li>• Restart your development server after changing .env.local</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Error: &quot;Connection timeout&quot; or &quot;ETIMEDOUT&quot;</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Check your internet connection</li>
                <li>• Verify SMTP port 587 is not blocked by your firewall</li>
                <li>• Try port 465 instead (remember to set <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">SMTP_SECURE=true</code>)</li>
                <li>• Check if your network blocks SMTP connections</li>
                <li>• Try connecting from a different network</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Emails not appearing in inbox</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Check spam/junk folder first</li>
                <li>• Verify <code className="bg-slate-800 text-amber-400 px-2 py-1 rounded text-sm">NODE_ENV=production</code> is set</li>
                <li>• Check console logs for success/error messages</li>
                <li>• Confirm recipient email address is correct</li>
                <li>• Try sending to a different email address to test</li>
                <li>• Check Gmail&apos;s sent folder to see if email was sent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-2 mb-2">
                <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold">Can&apos;t find App Password option</h3>
              </div>
              <p className="text-gray-600 mb-3">Solutions:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Ensure 2-Step Verification is enabled first</li>
                <li>• Wait a few minutes after enabling 2-Step Verification</li>
                <li>• Go directly to: <a href="https://myaccount.google.com/apppasswords" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/apppasswords</a></li>
                <li>• If using a work/school account, this feature may be disabled by admin</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Security Best Practices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={24} className="text-green-500" />
                <h3 className="text-xl font-semibold">Best Practices</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Use environment variables for credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Add .env.local to .gitignore</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Use App Passwords instead of regular passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Revoke unused App Passwords periodically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Enable 2-Step Verification on your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Use descriptive names for App Passwords</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={24} className="text-amber-500" />
                <h3 className="text-xl font-semibold">Avoid These Mistakes</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Never commit credentials to Git</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Don&apos;t share App Passwords publicly</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Don&apos;t use your regular Gmail password</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Don&apos;t hardcode credentials in code</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Don&apos;t expose credentials client-side</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-1" />
                  <span>Don&apos;t reuse App Passwords across apps</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-green-50 border border-green-300 rounded-lg">
        <div className="flex items-start gap-2 mb-4">
          <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
          <strong className="text-green-900">Gmail Setup Complete!</strong>
        </div>
        <p className="text-green-800 mb-4">
          Your Gmail integration is now configured. You can proceed with the workshop to build
          multi-agent systems that can send automated email reports!
        </p>
        <button
          onClick={() => setSelectedSection('setup')}
          className="text-green-600 underline font-semibold hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          → Return to Firebolt Setup
        </button>
      </div>
    </div>
  );
};

export default GmailSetupSection;
