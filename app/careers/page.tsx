import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 gradient-text-secondary text-center">
          Careers
        </h1>
        <p className="text-lg text-center text-slate-400 max-w-2xl mx-auto">
            At SmartRoads, we're at the forefront of revolutionizing
            transportation. Join a team that's passionate about innovation,
            collaboration, and impact. Together, we're paving the way for
            smarter, safer roads.
          </p>

        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto my-12">
          <div className="bg-blue-900/30 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">
              Innovative Environment
            </h3>
            <p className="text-slate-300">
              Work with cutting-edge technologies in AI and IoT.
            </p>
          </div>
          <div className="bg-blue-900/30 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">
              Growth Opportunities
            </h3>
            <p className="text-slate-300">
              Continuous learning and career advancement for all our team
              members.
            </p>
          </div>
          <div className="bg-blue-900/30 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">
              Flexible Work
            </h3>
            <p className="text-slate-300">
              Enjoy flexible schedules and remote work options.
            </p>
          </div>
        </section>

        {/* Job Listings Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300">
                AI Developer
              </h3>
              <p className="text-slate-300 mt-2">
                We’re looking for an experienced AI developer with skills in
                computer vision and machine learning.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Apply Now
              </a>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300">
                IoT Engineer
              </h3>
              <p className="text-slate-300 mt-2">
                Join our IoT team to design and implement sensor-based solutions
                for smart roads.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Apply Now
              </a>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300">
                Data Analyst
              </h3>
              <p className="text-slate-300 mt-2">
                We’re seeking a data-driven professional to extract insights
                from road monitoring data.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
