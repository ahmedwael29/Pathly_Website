import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "PATHLY Partners with Local Governments to Improve Road Safety",
      date: "May 10, 2025",
      description:
        "PATHLY has announced new partnerships with multiple municipalities to deploy IoT road sensors aimed at reducing accidents and enhancing travel efficiency.",
    },
    {
      id: 2,
      title: "PATHLY Wins Innovation Award 2025",
      date: "April 22, 2025",
      description:
        "Recognized for its cutting-edge technology, PATHLY received the Innovation Award for Smart Transportation Solutions.",
    },
    {
      id: 3,
      title: "PATHLY Launches Mobile App Version 2.0",
      date: "March 5, 2025",
      description:
        "The latest version of the PATHLY app introduces new features including real-time alerts and improved route planning.",
    },
    {
      id: 4,
      title: "PATHLY Featured in Tech Magazine’s Top Startups",
      date: "February 18, 2025",
      description:
        "Highlighted as one of the most promising startups in the smart transportation sector by Tech Magazine.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 gradient-text-secondary text-center">
          Press
        </h1>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
          Find the latest news, press releases, and media resources about
          PATHLY.
        </p>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map(({ id, title, date, description }) => (
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
