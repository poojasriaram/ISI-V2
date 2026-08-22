import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { getAllBlogs, getFeaturedBlog } from "@/data/blogs-data";
import { Search, Clock, ArrowRight, ShieldAlert, HeartPulse, User, Calendar, BookOpen, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "All Healthcare Insights",
  "Disaster Management & Preparedness",
  "Cyber-Physical Security & Resilience",
  "Hospital Workplace Safety & De-escalation"
];

const BlogListingPage = () => {
  const allPosts = getAllBlogs();
  const featuredPost = getFeaturedBlog();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Healthcare Insights");

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All Healthcare Insights" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-900/95 to-slate-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-xs"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600')` }}
        />

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <HeartPulse className="w-4 h-4 text-blue-400" />
              <span>Healthcare Leadership & Security Insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Healthcare Disaster Vulnerability & Security Intelligence
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              Expert guides for hospital leadership, emergency planners, and security professionals on disaster resilience, cyber-physical safety, and workplace de-escalation.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search healthcare disaster guides, cyber risk, or de-escalation..."
                className="pl-12 pr-4 py-6 bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-lg backdrop-blur-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPost && !searchQuery && selectedCategory === "All Healthcare Insights" && (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 uppercase tracking-wider mb-6">
              <ShieldAlert className="w-4 h-4" />
              <span>Featured Healthcare Masterclass</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide rounded-md">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {featuredPost.readTime}
                  </span>
                  <span className="flex items-center text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {featuredPost.publishedAt}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/30 shadow-sm"
                      />
                      {featuredPost.author.coAvatar && (
                        <img
                          src={featuredPost.author.coAvatar}
                          alt="Co-author"
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/30 shadow-sm"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{featuredPost.author.name}</h4>
                      <p className="text-xs text-blue-700 font-medium">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md gap-2">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Link to={`/blog/${featuredPost.slug}`} className="block group overflow-hidden rounded-xl">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.heroImageAlt}
                    className="w-full h-64 sm:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area: Category Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-slate-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid of Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/blog/${post.slug}`} className="relative block group overflow-hidden h-48">
                    <img
                      src={post.coverImage}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                          {post.publishedAt}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {post.author.avatar ? (
                          <div className="flex items-center -space-x-1.5 shrink-0">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm"
                            />
                            {post.author.coAvatar && (
                              <img
                                src={post.author.coAvatar}
                                alt="Co-author"
                                className="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm"
                              />
                            )}
                          </div>
                        ) : (
                          <User className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-slate-800 truncate">
                            {post.author.name}
                          </span>
                          <span className="text-[10px] text-blue-600 font-semibold truncate">
                            {post.author.role}
                          </span>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 gap-1 shrink-0 ml-2"
                      >
                        Read Guide <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-800">No articles found</h3>
              <p className="text-slate-500 text-sm mt-1">Try resetting your search query or category filters.</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Healthcare Insights");
                }}
                className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <HeartPulse className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Need Expert Healthcare Security & Facility Management Consulting?
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Our specialized healthcare security operations team helps multi-specialty hospitals, ICUs, and medical campuses build true operational resilience and disaster readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 rounded-xl shadow-lg">
              <Link to="/contact">Request Healthcare Audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 font-semibold px-8 rounded-xl">
              <Link to="/services/security-services/risk-advisory">Explore Security Advisory</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogListingPage;
