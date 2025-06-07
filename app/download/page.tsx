import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text-secondary text-center">
          Download
        </h1>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
          Download the PATHLY app for your device and start contributing to
          better roads today.
        </p>

        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-2 sm:px-0">
          {/* iOS */}
          <div className="bg-blue-900/30 rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/App_Store.png"
              alt="iOS"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-2xl font-semibold mb-4">iOS</h3>
            <p className="text-slate-300 mb-6">
              Available on the App Store for iPhone and iPad.
            </p>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Download on App Store
            </button>
          </div>

          {/* Android */}
          <div className="bg-blue-900/30 rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/Google_Play.png"
              alt="Android"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-2xl font-semibold mb-4">Android</h3>
            <p className="text-slate-300 mb-6">
              Get the app on Google Play for Android devices.
            </p>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Download on Google Play
            </button>
          </div>

          {/* Desktop */}
          <div className="bg-blue-900/30 rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/Desktop.png"
              alt="Desktop"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-2xl font-semibold mb-4">Desktop</h3>
            <p className="text-slate-300 mb-6">
              Download desktop version for Windows and Mac.
            </p>
            <button className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Download for Desktop
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
