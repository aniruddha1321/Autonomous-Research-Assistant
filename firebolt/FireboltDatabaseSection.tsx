interface FireboltDatabaseSectionProps {
  setSelectedSection: (section: string) => void;
}

const FireboltDatabaseSection = ({ setSelectedSection }: FireboltDatabaseSectionProps) => {
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
              <span className="text-gray-700 font-semibold">Create Database & Load Data</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#357266] to-[#16697A] bg-clip-text text-transparent animate-fadeInUp">
        Create Database and Load Sample Data
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-gray-700 text-center text-lg leading-relaxed max-w-2xl mx-auto animate-fadeInUp">
        Learn how to create a Firebolt database, set up an engine, create tables, and load sample e-commerce data for analytics.
      </p>

      {/* Prerequisites */}
      <div className="p-6 mb-8 bg-[#EAF8F1] border-2 border-[#7AD2A2] rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <p className="text-[#357266] font-semibold leading-relaxed">
          <strong>Prerequisites:</strong> Ensure you have created a Firebolt account and have access to the SQL Editor.
          If you need help, refer to the{' '}
          <button
            onClick={() => setSelectedSection('setup')}
            className="text-[#357266] underline font-bold hover:text-[#16697A] focus:outline-none focus:ring-2 focus:ring-[#357266] focus:ring-offset-2 rounded"
          >
            Firebolt Setup
          </button>{' '}
          guide.
        </p>
      </div>

      {/* Step 1: Understanding Firebolt Architecture */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            1
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Understanding Firebolt Architecture
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              In Firebolt, <strong>storage is tied to a database</strong>, and <strong>compute is done through an engine</strong>. 
              This separation allows you to scale storage and compute independently.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Create Database and Engine */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            2
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Create a Database + Engine
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Open the <strong>Develop → SQL Editor</strong> and run the following commands:
            </p>

            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">CREATE DATABASE</span> <span className="text-yellow-300">ecommercedb</span>{'\n'}
                <span className="text-slate-400">  WITH DESCRIPTION = </span><span className="text-green-400">&apos;E-Commerce Analytics Primer&apos;</span>;<br /><br />

                <span className="text-blue-400">CREATE ENGINE</span> <span className="text-yellow-300">ecommerceEngine</span>;<br /><br />

                <span className="text-blue-400">START ENGINE</span> <span className="text-yellow-300">ecommerceEngine</span>;<br /><br />

                <span className="text-blue-400">USE ENGINE</span> <span className="text-yellow-300">ecommerceEngine</span>;<br />
                <span className="text-blue-400">USE</span> <span className="text-yellow-300">ecommercedb</span>;
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-900 font-medium">
                <strong>What this does:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-blue-800">
                <li>Creates a new database named <code className="bg-blue-100 px-1 rounded">ecommercedb</code></li>
                <li>Creates a single-node engine named <code className="bg-blue-100 px-1 rounded">ecommerceEngine</code></li>
                <li>Starts the engine</li>
                <li>Selects it for running queries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Create the E-Commerce Fact Table */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            3
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Create the E-Commerce Fact Table
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Run the following SQL to create the table schema:
            </p>

            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">CREATE FACT TABLE IF NOT EXISTS</span> <span className="text-yellow-300">ecommerce</span> ({'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">event_time</span>     <span className="text-green-300">TIMESTAMPTZ</span> <span className="text-orange-400">NOT NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">event_type</span>     <span className="text-green-300">TEXT</span> <span className="text-orange-400">NOT NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">product_id</span>     <span className="text-green-300">BIGINT</span> <span className="text-orange-400">NOT NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">category_id</span>    <span className="text-green-300">TEXT</span> <span className="text-orange-400">NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">category_code</span>  <span className="text-green-300">TEXT</span> <span className="text-orange-400">NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">brand</span>          <span className="text-green-300">TEXT</span> <span className="text-orange-400">NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">price</span>          <span className="text-green-300">NUMERIC(38, 9)</span> <span className="text-orange-400">NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">user_id</span>        <span className="text-green-300">TEXT</span> <span className="text-orange-400">NULL</span>,{'\n'}
                <span className="text-slate-400">  </span><span className="text-purple-300">user_session</span>   <span className="text-green-300">TEXT</span> <span className="text-orange-400">NULL</span>{'\n'}
                );
              </pre>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-900 font-medium">
                <strong>Note:</strong> This table is created <strong>WITHOUT indexes</strong> because you will optimize it later using <code className="bg-amber-100 px-1 rounded">recommend_ddl</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Load Sample Data */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            4
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Load the Sample E-Commerce Dataset
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Firebolt will ingest data from public sample parquet files stored in S3. Run the following in the SQL editor:
            </p>

            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">COPY INTO</span> <span className="text-yellow-300">ecommerce</span> {'\n'}
                <span className="text-blue-400">FROM</span> <span className="text-green-400">&apos;s3://firebolt-sample-datasets-public-us-east-1/ecommerce_primer/parquet/&apos;</span>{'\n'}
                <span className="text-blue-400">WITH</span>{'\n'}
                <span className="text-slate-400">    </span><span className="text-purple-300">PATTERN</span> = <span className="text-green-400">&apos;*.gz.parquet&apos;</span>{'\n'}
                <span className="text-slate-400">    </span><span className="text-purple-300">cross_region_request_mode</span> = <span className="text-green-400">&apos;auto&apos;</span>{'\n'}
                <span className="text-blue-400">TYPE</span> = <span className="text-orange-400">PARQUET</span>;
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-green-900 font-medium">
                <strong>What this does:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-green-800">
                <li>Reads 7 months of parquet files (≈32GB raw / ≈49GB uncompressed)</li>
                <li>Loads data into your <code className="bg-green-100 px-1 rounded">ecommerce</code> table</li>
                <li>Uses Parquet schema inference for automatic column mapping</li>
              </ul>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              After the load completes, verify the data by running:
            </p>

            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">SHOW TABLES</span>;
              </pre>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              You should see output similar to:
            </p>

            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">table_name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">rows_loaded</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">compressed_size</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">ecommerce</td>
                    <td className="px-6 py-4 text-sm text-gray-900">~412M</td>
                    <td className="px-6 py-4 text-sm text-gray-900">~21GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Explore Compressed Ratio (Optional but Recommended) */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            5
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              (Optional but Recommended) Explore Compressed Ratio
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Run the following query to see Firebolt&apos;s columnar compression benefits:
            </p>

            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">SELECT</span> <span className="text-purple-300">table_name</span>, <span className="text-purple-300">uncompressed_bytes</span>, <span className="text-purple-300">compressed_bytes</span>{'\n'}
                <span className="text-blue-400">FROM</span> <span className="text-yellow-300">information_schema.tables</span>{'\n'}
                <span className="text-blue-400">WHERE</span> <span className="text-purple-300">table_name</span> = <span className="text-green-400">&apos;ecommerce&apos;</span>;
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <p className="text-purple-900 font-medium">
                <strong>Why this matters:</strong> This query demonstrates Firebolt&apos;s efficient columnar storage compression, showing how much space is saved compared to the raw uncompressed data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 6: Verify the Data */}
      <div className="mb-12">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#357266] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            6
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Verify the Data
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Run simple test queries to verify your data is properly loaded:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Count Events</h3>
            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">SELECT</span> <span className="text-purple-300">event_type</span>, <span className="text-orange-400">COUNT</span>(*) {'\n'}
                <span className="text-blue-400">FROM</span> <span className="text-yellow-300">ecommerce</span>{'\n'}
                <span className="text-blue-400">GROUP BY</span> <span className="text-purple-300">event_type</span>;
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Count Months</h3>
            <div className="bg-slate-800 rounded-lg p-6 mb-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-200">
                <span className="text-blue-400">SELECT</span> <span className="text-orange-400">MIN</span>(<span className="text-purple-300">event_time</span>), <span className="text-orange-400">MAX</span>(<span className="text-purple-300">event_time</span>) <span className="text-blue-400">FROM</span> <span className="text-yellow-300">ecommerce</span>;
              </pre>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
              <p className="text-teal-900 font-medium">
                <strong>Success!</strong> You now have the full dataset loaded and ready for analysis & Gemini orchestration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-[#EAF8F1] border-2 border-[#7AD2A2] rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7AD2A2] to-[#357266]" />
        <p className="text-[#357266] font-semibold leading-relaxed">
          <strong>Next Steps:</strong> With your database created and data loaded, you can now create a service account for MCP Server integration 
          and start running analytical queries. Consider using <code className="bg-[#d4f1e3] px-1 rounded">recommend_ddl</code> to optimize your table with indexes.
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

export default FireboltDatabaseSection;
