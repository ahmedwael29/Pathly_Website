import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 gradient-text-secondary text-center">
          Pricing
        </h1>
        <p className="text-lg sm:text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12 px-2 sm:px-0">
          Explore our pricing plans designed to fit the needs of individuals,
          businesses, and municipalities.
        </p>

        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-0">
          {/* Basic Plan */}
          <div className="bg-blue-900/30 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Basic</h3>
            <p className="text-slate-400 mb-6 text-sm sm:text-base">
              Perfect for individual users who want to monitor local roads and
              get basic travel time estimates.
            </p>
            <ul className="mb-6 space-y-2 text-slate-300 text-sm sm:text-base">
              <li>✔ Road condition updates</li>
              <li>✔ Travel time estimation</li>
              <li>✔ Basic alerts & notifications</li>
              <li>✘ Community-driven data</li>
            </ul>
            <div className="text-2xl sm:text-2xl font-bold mb-6">
              $9 / month
            </div>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-900/30 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl sm:text-3xl font-semibold mb-4">Pro</h3>
            <p className="text-slate-400 mb-6 text-sm sm:text-base">
              Ideal for businesses and professionals needing detailed analytics
              and priority support.
            </p>
            <ul className="mb-6 space-y-2 text-slate-300 text-sm sm:text-base">
              <li>✔ Everything in Basic</li>
              <li>✔ Advanced analytics dashboard</li>
              <li>✔ Custom alerts & notifications</li>
              <li>✔ Priority customer support</li>
            </ul>
            <div className="text-3xl sm:text-2xl font-bold mb-6">
              $29 / month
            </div>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-blue-900/30 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Enterprise
            </h3>
            <p className="text-slate-400 mb-6 text-sm sm:text-base">
              Designed for municipalities and large organizations requiring full
              access and integration.
            </p>
            <ul className="mb-6 space-y-2 text-slate-300 text-sm sm:text-base">
              <li>✔ Everything in Pro</li>
              <li>✔ Full API access & integrations</li>
              <li>✔ Dedicated account manager</li>
              <li>✔ Custom SLAs and contracts</li>
            </ul>
            <div className="text-3xl sm:text-2xl font-bold mb-6">
              Contact Us
            </div>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
