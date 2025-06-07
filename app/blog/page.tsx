import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "The Future of Smart Road Monitoring",
      summary:
        "Explore how AI and IoT are revolutionizing road quality assessment and traffic management.",
      image: "/Article1.jpg",
      date: "May 25, 2025",
    },
    {
      id: 2,
      title: "AI-Powered Solutions for Road Defect Detection",
      summary:
        "Discover how deep learning models are enhancing road maintenance and ensuring safer travel.",
      image:
        "/Article2.jpg",
      date: "May 18, 2025",
    },
    {
      id: 3,
      title: "Sustainable Transportation: The Road Ahead",
      summary:
        "Learn about eco-friendly initiatives and smart mobility solutions paving the way for the future.",
      image: "/Article3.jpg",
      date: "May 10, 2025",
    },
  ];

  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 gradient-text-secondary text-center">
          Blog
        </h1>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
          Read our latest articles, insights, and updates about road quality
          monitoring and smart transportation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-blue-900/30 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-slate-400 mb-4">{article.date}</p>
                <p className="text-slate-300">{article.summary}</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
