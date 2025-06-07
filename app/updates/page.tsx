import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function UpdatesPage() {
  const updates = [
    {
      id: 1,
      title: "Improved Real-time Road Condition Detection",
      date: "May 20, 2025",
      description:
        "Enhanced the accuracy and speed of road condition monitoring using advanced IoT sensors and AI algorithms.",
    },
    {
      id: 2,
      title: "New Travel Time Estimation Feature",
      date: "April 15, 2025",
      description:
        "Introduced real-time travel time predictions between stations, helping users plan their routes better.",
    },
    {
      id: 3,
      title: "Mobile App Version 2.1 Released",
      date: "March 30, 2025",
      description:
        "Bug fixes and UI improvements for a smoother user experience on both Android and iOS.",
    },
    {
      id: 4,
      title: "Dashboard Analytics Upgrade",
      date: "February 10, 2025",
      description:
        "Added new charts and export options in the admin dashboard for better data insights.",
    },
    {
      id: 5,
      title: "User Feedback Integration",
      date: "May 25, 2025",
      description:
        "Incorporated user feedback into the system to improve functionality and user experience.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 gradient-text-secondary text-center">
          Updates
        </h1>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
          The latest updates and improvements to the PATHLY
          system.
        </p>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map(({ id, title, date, description }) => (
            <article
              key={id}
              className="bg-blue-900/30 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <time className="block text-sm text-slate-400 mb-4">{date}</time>
              <p className="text-slate-300">{description}</p>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
