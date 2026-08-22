import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogs-data";
import { 
  ArrowLeft, Clock, Calendar, Share2, User, CheckCircle2, 
  AlertTriangle, Info, Shield, BookOpen, ChevronRight, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = getRelatedBlogs(blog.slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Layout>
      {/* Header Breadcrumb Banner */}
      <div className="bg-slate-900 text-slate-300 py-6 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" /> Back to Healthcare Insights
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> Share Guide
          </button>
        </div>
      </div>

      {/* Article Hero */}
      <section className="bg-slate-900 py-12 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-md">
              {blog.category}
            </span>
            <span className="flex items-center text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1 text-blue-400" />
              {blog.readTime}
            </span>
            <span className="flex items-center text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {blog.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
            {blog.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 italic">
            {blog.subtitle}
          </p>

          {/* Author info card */}
          <div className="flex items-center gap-4 py-4 border-t border-slate-800">
            <div className="flex items-center -space-x-2">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 shadow-md"
              />
              {blog.author.coAvatar && (
                <img
                  src={blog.author.coAvatar}
                  alt="Co-author"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 shadow-md"
                />
              )}
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{blog.author.name}</h4>
              <p className="text-xs text-blue-400 font-semibold">{blog.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Cover Image */}
      <div className="bg-slate-950 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <img
              src={blog.coverImage}
              alt={blog.heroImageAlt}
              className="w-full h-80 sm:h-[450px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 sm:p-6 text-xs text-slate-300 italic">
              🖼️ {blog.heroImageAlt}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Table of Contents */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 border-b border-slate-100 pb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2 text-sm">
                  {blog.sections.map((section, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      className="block text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 p-2 rounded-lg transition-colors font-medium text-xs leading-snug"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-100">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Healthcare Advisory</h5>
                    <p className="text-xs text-slate-600 mb-3">Consult our senior disaster response analysts for hospital audits.</p>
                    <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                      <Link to="/contact">Schedule Hospital Audit</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content Body */}
            <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-12">
              {blog.sections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="space-y-6 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                    {section.title}
                  </h2>

                  {section.subtitle && (
                    <h3 className="text-lg font-semibold text-blue-700">
                      {section.subtitle}
                    </h3>
                  )}

                  {/* Paragraphs */}
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 text-base leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Bullet points */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-slate-800 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Statistics Cards */}
                  {section.stats && section.stats.length > 0 && (
                    <div className="grid sm:grid-cols-3 gap-4 my-6">
                      {section.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 text-center flex flex-col justify-between">
                          <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-2">
                            {stat.value}
                          </div>
                          <p className="text-xs text-slate-300 leading-snug mb-2 font-medium">
                            {stat.label}
                          </p>
                          {stat.source && (
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                              Source: {stat.source}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div className={`p-5 rounded-xl border flex items-start gap-4 ${
                      section.callout.type === 'warning'
                        ? 'bg-amber-50 border-amber-200 text-amber-950'
                        : section.callout.type === 'tip'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-blue-50 border-blue-200 text-blue-950'
                    }`}>
                      {section.callout.type === 'warning' ? (
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                      ) : (
                        <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      )}
                      <div className="text-sm font-medium leading-relaxed">
                        {section.callout.text}
                      </div>
                    </div>
                  )}

                  {/* Table */}
                  {section.table && (
                    <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                      {section.table.title && (
                        <div className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-3">
                          📊 {section.table.title}
                        </div>
                      )}
                      <table className="w-full text-left text-sm text-slate-700">
                        <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200 text-xs">
                          <tr>
                            {section.table.columns.map((col) => (
                              <th key={col.key} className="p-3.5">{col.header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                              {section.table!.columns.map((col) => (
                                <td key={col.key} className="p-3.5 font-medium text-xs sm:text-sm">
                                  {row[col.key]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Section Image */}
                  {section.image && (
                    <div className="my-8 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <img
                        src={section.image.url}
                        alt={section.image.alt}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                      {section.image.caption && (
                        <div className="bg-slate-100 p-3 text-xs text-slate-600 text-center font-medium italic border-t border-slate-200">
                          {section.image.caption}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Author Bio Box */}
              {blog.author.bio && (
                <div className="my-10 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="flex items-center -space-x-3 shrink-0">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-md"
                    />
                    {blog.author.coAvatar && (
                      <img
                        src={blog.author.coAvatar}
                        alt="Co-author"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-md"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">About the Author</div>
                    <h3 className="text-lg font-bold text-slate-900">{blog.author.name}</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">{blog.author.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{blog.author.bio}</p>
                  </div>
                </div>
              )}

              {/* Tags Footer */}
              <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
                {blog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Healthcare Resilience Guides</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedBlogs.map((rel) => (
                <div key={rel.id} className="flex gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-28 h-28 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors mt-1 line-clamp-2">
                        <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                    </div>
                    <Link to={`/blog/${rel.slug}`} className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">
                      Read Guide <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Strengthen Your Hospital's Operational Resilience</h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Partner with ISI Security to deploy healthcare-aware security guarding, crisis de-escalation protocols, and emergency route management.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-8">
            <Link to="/contact">Contact Healthcare Security Team</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;
