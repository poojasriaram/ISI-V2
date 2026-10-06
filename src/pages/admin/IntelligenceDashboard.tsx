import React, { useState, useEffect, useMemo } from 'react';
import {
  Shield,
  Activity,
  Users,
  Compass,
  Globe2,
  Clock,
  Network,
  FileSpreadsheet,
  Download,
  Filter,
  RefreshCw,
  LogOut,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Eye,
  MousePointer,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Lock,
  Server,
  Zap,
  Radio,
  FileText
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

// Theme Colors
const COLORS = {
  navy: '#0A192F',
  blue: '#3B82F6',
  indigo: '#6366F1',
  emerald: '#10B981',
  amber: '#F59E0B',
  rose: '#F43F5E',
  cyan: '#06B6D4',
  purple: '#8B5CF6',
  slateDark: '#0F172A',
  slateBorder: '#1E293B',
  slateMuted: '#94A3B8'
};

const PIE_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4'];

export const IntelligenceDashboard: React.FC = () => {
  // Auth State
  const [authToken, setAuthToken] = useState<string | null>(() => {
    return sessionStorage.getItem('isi_admin_token') || null;
  });
  const [currentUser, setCurrentUser] = useState<{ username: string; role: string } | null>(() => {
    const saved = sessionStorage.getItem('isi_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Login form state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Filters State
  const [timeRange, setTimeRange] = useState('30d');
  const [reportingTimezone, setReportingTimezone] = useState('Asia/Kolkata');
  const [channelFilter, setChannelFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'sessions' | 'traffic' | 'geo' | 'time' | 'ip' | 'reports'>('overview');

  // Data State
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<any | null>(null);

  // Auto-fetch when filters or token change
  useEffect(() => {
    if (!authToken) return;
    fetchStats();
  }, [authToken, timeRange, reportingTimezone, channelFilter, countryFilter]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch('/api/analytics/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed');
      }

      setAuthToken(data.token);
      setCurrentUser(data.user);
      sessionStorage.setItem('isi_admin_token', data.token);
      sessionStorage.setItem('isi_admin_user', JSON.stringify(data.user));
    } catch (err: any) {
      setLoginError(err.message || 'Invalid credentials');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
    setCurrentUser(null);
    sessionStorage.removeItem('isi_admin_token');
    sessionStorage.removeItem('isi_admin_user');
  };

  const fetchStats = async () => {
    if (!authToken) return;
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        timeRange,
        timezone: reportingTimezone
      });
      if (channelFilter) params.append('channel', channelFilter);
      if (countryFilter) params.append('country', countryFilter);

      const res = await fetch(`/api/analytics/stats?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      if (res.status === 401) {
        handleLogout();
        throw new Error('Session expired. Please log in again.');
      }

      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to load analytics');

      setStats(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch analytics telemetry');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (!authToken) return;
    window.open('/api/analytics/export', '_blank');
  };

  // If not authenticated, render secure enterprise login view
  if (!authToken) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-2xl">
              <Shield className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">ISI Security</h1>
              <p className="text-xs text-blue-400 font-medium">Enterprise Intelligence Suite</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-100 mb-1">Administrator Sign In</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Restricted portal for authorized corporate security intelligence, visitor traffic audits, and regional telemetry.
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-400" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Admin Username</label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="e.g. isi_admin"
                required
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Security Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Access Intelligence Dashboard</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
            <p className="text-[11px] text-slate-500">
              Default access for testing: <code className="text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">isi_admin</code> / <code className="text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">isisecurity@2026</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Status */}
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-xl">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg tracking-tight">ISI Security</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-900/70 text-blue-300 border border-blue-700/60">
                  Advanced Website Intelligence
                </span>
                <span className="hidden lg:inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium ml-2 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Telemetry
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Session • Traffic • Geo • Time Zone • IP & Network Intelligence
              </p>
            </div>
          </div>

          {/* Global Header Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Reporting Timezone Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 text-xs">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <select
                value={reportingTimezone}
                onChange={(e) => setReportingTimezone(e.target.value)}
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer text-xs"
              >
                <option value="Asia/Kolkata" className="bg-slate-900">IST (UTC+5:30) [India]</option>
                <option value="UTC" className="bg-slate-900">UTC (Universal)</option>
                <option value="Asia/Dubai" className="bg-slate-900">GST (Dubai)</option>
                <option value="Asia/Singapore" className="bg-slate-900">SGT (Singapore)</option>
                <option value="America/New_York" className="bg-slate-900">EST (New York)</option>
                <option value="Europe/London" className="bg-slate-900">GMT (London)</option>
              </select>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
              {['today', '7d', '30d', '90d'].map((r) => (
                <button
                  key={r}
                  onClick={() => setTimeRange(r)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    timeRange === r ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r === 'today' ? 'Today' : r.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Export CSV */}
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-medium transition-colors"
              title="Export filtered intelligence data as CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            {/* Refresh Button */}
            <button
              onClick={fetchStats}
              disabled={isLoading}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-xs transition-colors"
              title="Refresh Telemetry"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            {/* User Profile & Logout */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <span className="text-xs text-slate-400 hidden xl:inline">
                {currentUser?.username} (<span className="text-blue-400 font-semibold">{currentUser?.role}</span>)
              </span>
              <button
                onClick={handleLogout}
                className="p-2 bg-slate-800/80 hover:bg-red-950/50 hover:text-red-400 text-slate-400 border border-slate-700/80 rounded-xl text-xs transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Module Navigation Tabs */}
        <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-800/60 overflow-x-auto scrollbar-none text-xs">
          {[
            { id: 'overview', label: 'Executive Overview', icon: Activity },
            { id: 'sessions', label: '1. Session Intelligence', icon: Users },
            { id: 'traffic', label: '2. Traffic Intelligence', icon: Compass },
            { id: 'geo', label: '3. Geo Intelligence', icon: Globe2 },
            { id: 'time', label: '4. Time Zone Intelligence', icon: Clock },
            { id: 'ip', label: '5. IP & Network Intelligence', icon: Network },
            { id: 'reports', label: 'Reports & Exports', icon: FileSpreadsheet }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6">
        {error && (
          <div className="p-4 rounded-2xl bg-red-950/60 border border-red-800/80 text-red-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={fetchStats}
              className="px-3 py-1 bg-red-900/60 hover:bg-red-800 rounded-lg text-xs font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB A: EXECUTIVE OVERVIEW
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'overview' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top KPI Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
              <KpiCard
                title="Total Visitors"
                value={stats.executive.totalVisitors.toLocaleString()}
                change="+14.2%"
                isPositive={true}
                icon={Users}
                color="blue"
              />
              <KpiCard
                title="Total Sessions"
                value={stats.executive.totalSessions.toLocaleString()}
                change="+18.5%"
                isPositive={true}
                icon={Activity}
                color="indigo"
              />
              <KpiCard
                title="Active Sessions"
                value={stats.executive.activeSessions.toLocaleString()}
                subtitle="in last 15 min"
                icon={Radio}
                color="emerald"
                isLive={true}
              />
              <KpiCard
                title="Avg Duration"
                value={`${Math.floor(stats.executive.avgSessionDuration / 60)}m ${stats.executive.avgSessionDuration % 60}s`}
                change="+24s"
                isPositive={true}
                icon={Clock}
                color="cyan"
              />
              <KpiCard
                title="Bounce Rate"
                value={`${stats.executive.bounceRate}%`}
                change="-3.8%"
                isPositive={true}
                icon={TrendingUp}
                color="amber"
              />
              <KpiCard
                title="Total Inquiries"
                value={stats.executive.totalInquiries.toLocaleString()}
                change="+28%"
                isPositive={true}
                icon={CheckCircle}
                color="purple"
              />
              <KpiCard
                title="Conversion Rate"
                value={`${stats.executive.conversionRate}%`}
                change="+1.4%"
                isPositive={true}
                icon={Zap}
                color="rose"
              />
            </div>

            {/* Traffic Trend Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-semibold text-white text-base">Website Traffic & Engagement Trends</h3>
                  <p className="text-xs text-slate-400">Daily breakdown of visitor sessions, unique users, and inquiry submissions</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Sessions
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Visitors
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Inquiries
                  </span>
                </div>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.executive.trafficTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.blue} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={COLORS.blue} stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.emerald} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={COLORS.emerald} stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                    <XAxis dataKey="date" stroke="#64748B" fontSize={11} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="sessions" stroke={COLORS.blue} strokeWidth={2} fillOpacity={1} fill="url(#colorSessions)" name="Sessions" />
                    <Area type="monotone" dataKey="visitors" stroke={COLORS.emerald} strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" name="Visitors" />
                    <Area type="monotone" dataKey="inquiries" stroke={COLORS.amber} strokeWidth={2} fillOpacity={0} name="Inquiries" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Two Column Grid: Top Pages & Marketing Channels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performing Pages */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Top Visited Pages</h3>
                <p className="text-xs text-slate-400 mb-4">Pages generating the highest engagement and dwell time</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                        <th className="pb-2.5">Page Path</th>
                        <th className="pb-2.5 text-right">Views</th>
                        <th className="pb-2.5 text-right">Avg Dwell</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {stats.executive.topPages.map((page: any, idx: number) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-2.5 font-medium text-slate-200 truncate max-w-xs">{page.page_path}</td>
                          <td className="py-2.5 text-right text-blue-400 font-semibold">{page.views.toLocaleString()}</td>
                          <td className="py-2.5 text-right text-slate-400">{Math.round(page.avg_dwell || 0)}s</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing Channels */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Traffic Channels</h3>
                <p className="text-xs text-slate-400 mb-4">Distribution of inbound visitor acquisition channels</p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats.traffic.channelBreakdown}
                        dataKey="sessions"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={50}
                        paddingAngle={4}
                        label={({ name, percentage }) => `${name} (${percentage}%)`}
                        labelLine={false}
                        fontSize={11}
                      >
                        {stats.traffic.channelBreakdown.map((_: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 1: SESSION INTELLIGENCE
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'sessions' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Funnel Overview */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Visitor Conversion Funnel</h3>
              <p className="text-xs text-slate-400 mb-6">User progression from service discovery to contact submission</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <FunnelStep
                  step="1. Service Page Visits"
                  count={stats.sessions.funnel.serviceViews}
                  description="Initial exploration of guarding & FM"
                  color="blue"
                />
                <FunnelStep
                  step="2. Contact Views"
                  count={stats.sessions.funnel.contactViews}
                  description="Navigated to inquiry or contact page"
                  color="indigo"
                />
                <FunnelStep
                  step="3. Form Starts"
                  count={stats.sessions.funnel.formStarts}
                  description="Engaged with form input fields"
                  color="amber"
                />
                <FunnelStep
                  step="4. Inquiries Converted"
                  count={stats.sessions.funnel.conversions}
                  description="Successfully completed inquiry"
                  color="emerald"
                />
              </div>
            </div>

            {/* Entry vs Exit Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Landing (Entry) Pages</h3>
                <p className="text-xs text-slate-400 mb-4">First point of entry for website visitors</p>
                <div className="space-y-2.5">
                  {stats.sessions.entryPages.map((entry: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-400">#{i + 1}</span>
                        <span className="text-xs font-medium text-slate-200">{entry.entry_page}</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-400">{entry.count} sessions</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Exit Pages</h3>
                <p className="text-xs text-slate-400 mb-4">Last page visited before closing session</p>
                <div className="space-y-2.5">
                  {stats.sessions.exitPages.map((exit: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-400">#{i + 1}</span>
                        <span className="text-xs font-medium text-slate-200">{exit.exit_page}</span>
                      </div>
                      <span className="text-xs font-semibold text-amber-400">{exit.count} exits</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Session Duration Distribution */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Session Duration Distribution</h3>
              <p className="text-xs text-slate-400 mb-4">Time visitors actively spend browsing ISI Security capabilities</p>
              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { bucket: '< 10s', count: stats.sessions.durationBuckets.under10s },
                      { bucket: '10-30s', count: stats.sessions.durationBuckets.s10_30 },
                      { bucket: '30-60s', count: stats.sessions.durationBuckets.s30_60 },
                      { bucket: '1-3m', count: stats.sessions.durationBuckets.m1_3 },
                      { bucket: '> 3m', count: stats.sessions.durationBuckets.over3m }
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                    <XAxis dataKey="bucket" stroke="#64748B" fontSize={11} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" fill={COLORS.blue} radius={[6, 6, 0, 0]} name="Sessions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Visitor Sessions Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white text-base">Recent Visitor Journeys</h3>
                  <p className="text-xs text-slate-400">Anonymous session sequences with channel attribution and outcomes</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                      <th className="pb-3">Session</th>
                      <th className="pb-3">Channel</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Entry & Exit</th>
                      <th className="pb-3 text-center">Duration</th>
                      <th className="pb-3 text-center">Pages</th>
                      <th className="pb-3 text-right">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {stats.sessions.recentSessions.map((sess: any, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 font-mono text-[11px] text-slate-300">
                          {sess.session_id.substring(0, 16)}...
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60">
                            {sess.traffic_channel}
                          </span>
                        </td>
                        <td className="py-3 text-slate-300">
                          {sess.city}, {sess.region}
                        </td>
                        <td className="py-3 text-slate-400 text-[11px]">
                          <span className="text-slate-200 font-medium">{sess.entry_page}</span> → {sess.exit_page}
                        </td>
                        <td className="py-3 text-center text-slate-300 font-medium">
                          {sess.duration_seconds}s
                        </td>
                        <td className="py-3 text-center font-semibold text-blue-400">
                          {sess.page_views}
                        </td>
                        <td className="py-3 text-right">
                          {sess.is_converted ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/60">
                              <CheckCircle className="w-3 h-3" /> {sess.lead_type || 'Lead'}
                            </span>
                          ) : sess.is_bounce ? (
                            <span className="text-[11px] text-slate-500 font-medium">Bounce</span>
                          ) : (
                            <span className="text-[11px] text-blue-400 font-medium">Engaged</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 2: TRAFFIC INTELLIGENCE
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'traffic' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Channel Performance Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Acquisition Channels Breakdown</h3>
              <p className="text-xs text-slate-400 mb-4">Traffic volume and business inquiries generated by channel</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                      <th className="pb-3">Channel</th>
                      <th className="pb-3 text-right">Sessions</th>
                      <th className="pb-3 text-right">% of Traffic</th>
                      <th className="pb-3 text-right">Inquiries</th>
                      <th className="pb-3 text-right">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {stats.traffic.channelBreakdown.map((ch: any, idx: number) => {
                      const conv = ch.sessions > 0 ? ((ch.inquiries / ch.sessions) * 100).toFixed(1) : '0';
                      return (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 font-semibold text-slate-200 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }} />
                            {ch.name}
                          </td>
                          <td className="py-3 text-right font-medium text-slate-200">{ch.sessions}</td>
                          <td className="py-3 text-right text-slate-400">{ch.percentage}%</td>
                          <td className="py-3 text-right font-bold text-emerald-400">{ch.inquiries}</td>
                          <td className="py-3 text-right font-semibold text-blue-400">{conv}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* UTM Campaign Performance */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Marketing Campaigns (UTM Attribution)</h3>
              <p className="text-xs text-slate-400 mb-4">Track performance of paid ads, LinkedIn executive outreach, and email bulletins</p>
              {stats.traffic.campaignPerformance.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-4">No tagged UTM campaigns recorded in this time range.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                        <th className="pb-3">Campaign</th>
                        <th className="pb-3">Source / Channel</th>
                        <th className="pb-3 text-right">Clicks / Sessions</th>
                        <th className="pb-3 text-right">Avg Dwell</th>
                        <th className="pb-3 text-right">Inquiries</th>
                        <th className="pb-3 text-right">Conv. Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {stats.traffic.campaignPerformance.map((camp: any, idx: number) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 font-semibold text-blue-400">{camp.campaign}</td>
                          <td className="py-3 text-slate-300">{camp.source} ({camp.channel})</td>
                          <td className="py-3 text-right text-slate-200">{camp.clicks}</td>
                          <td className="py-3 text-right text-slate-400">{camp.avg_duration}s</td>
                          <td className="py-3 text-right font-bold text-emerald-400">{camp.conversions}</td>
                          <td className="py-3 text-right font-semibold text-amber-400">{camp.conversion_rate}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Referring Domains */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Top Referring Domains</h3>
              <p className="text-xs text-slate-400 mb-4">Third-party publications, security portals, and partner sites sending traffic</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {stats.traffic.referralDomains.map((ref: any, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300 truncate max-w-[180px]">{ref.domain}</span>
                    <span className="text-xs font-bold text-blue-400">{ref.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 3: GEO INTELLIGENCE
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'geo' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Indian States Breakdown */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Regional Distribution Across India</h3>
              <p className="text-xs text-slate-400 mb-4">State-by-state visitor volume and enterprise security inquiries</p>
              <div className="h-64 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.geo.indianStates} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                    <XAxis type="number" stroke="#64748B" fontSize={11} tickLine={false} />
                    <YAxis dataKey="state" type="category" stroke="#64748B" fontSize={11} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="sessions" fill={COLORS.blue} radius={[0, 4, 4, 0]} name="Sessions" />
                    <Bar dataKey="inquiries" fill={COLORS.emerald} radius={[0, 4, 4, 0]} name="Inquiries" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                      <th className="pb-3">State / Region</th>
                      <th className="pb-3 text-right">Sessions</th>
                      <th className="pb-3 text-right">Inquiries</th>
                      <th className="pb-3 text-right">Regional Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {stats.geo.indianStates.map((st: any, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-2.5 font-medium text-slate-200">{st.state}</td>
                        <td className="py-2.5 text-right font-semibold text-blue-400">{st.sessions}</td>
                        <td className="py-2.5 text-right font-bold text-emerald-400">{st.inquiries}</td>
                        <td className="py-2.5 text-right font-semibold text-amber-400">{st.conversion_rate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Two Column Grid: Top Cities & International Markets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Cities */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Top Metros & Cities</h3>
                <p className="text-xs text-slate-400 mb-4">Metropolitan hubs with primary facility management demand</p>
                <div className="space-y-2">
                  {stats.geo.topCities.map((city: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div>
                        <span className="text-xs font-semibold text-white">{city.city}</span>
                        <span className="text-[11px] text-slate-400 ml-2">({city.region})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-blue-400 font-medium">{city.sessions} visits</span>
                        <span className="text-xs text-emerald-400 font-bold">{city.inquiries} leads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* International Markets */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Global Footprint</h3>
                <p className="text-xs text-slate-400 mb-4">Inbound interest from international corporate headquarters</p>
                <div className="space-y-2">
                  {stats.geo.topCountries.map((c: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-semibold text-white">{c.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-blue-400 font-medium">{c.sessions} sessions</span>
                        <span className="text-xs text-emerald-400 font-bold">{c.inquiries} leads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 4: TIME ZONE INTELLIGENCE
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'time' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Peak Engagement Badges */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white text-base">Peak Activity Analysis</h3>
                <p className="text-xs text-slate-400">
                  Calculated against reporting timezone: <span className="text-blue-400 font-medium">{reportingTimezone}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-300 font-medium">Busiest Visitor Windows:</span>
                {stats.time.peakHours.map((h: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-amber-950/80 border border-amber-800/60 text-amber-300 font-bold rounded-xl text-xs">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Activity by Hour Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Hourly Activity Profile (00:00 - 23:00)</h3>
              <p className="text-xs text-slate-400 mb-4">Traffic velocity distribution by hour of the day</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.time.hoursArray}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                    <XAxis dataKey="hour" stroke="#64748B" fontSize={10} tickLine={false} interval={1} />
                    <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="events" fill={COLORS.indigo} radius={[4, 4, 0, 0]} name="Events / Views" />
                    <Bar dataKey="inquiries" fill={COLORS.emerald} radius={[4, 4, 0, 0]} name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Weekly 7x24 Heatmap */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">7×24 Weekly Activity Heatmap</h3>
              <p className="text-xs text-slate-400 mb-4">Intensity matrix showing peak weekday vs weekend engagement times</p>
              
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[700px]">
                  <div className="grid grid-cols-25 gap-1 text-[10px] text-slate-400 mb-1">
                    <div className="w-14">Day</div>
                    {Array(24).fill(0).map((_, h) => (
                      <div key={h} className="text-center font-mono">{h}</div>
                    ))}
                  </div>

                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="grid grid-cols-25 gap-1 items-center py-1">
                      <div className="text-[11px] font-medium text-slate-300 w-14 truncate">{day.slice(0, 3)}</div>
                      {Array(24).fill(0).map((_, h) => {
                        const cell = stats.time.heatmapMatrix.find((c: any) => c.day === day && c.hour === h) || { count: 0 };
                        // Color intensity based on count
                        let bgClass = 'bg-slate-900 border-slate-800';
                        if (cell.count > 15) bgClass = 'bg-blue-500 text-white font-bold';
                        else if (cell.count > 8) bgClass = 'bg-blue-600/70 text-blue-100';
                        else if (cell.count > 3) bgClass = 'bg-blue-800/50 text-blue-200';
                        else if (cell.count > 0) bgClass = 'bg-blue-950/60 text-blue-300';

                        return (
                          <div
                            key={h}
                            title={`${day} at ${h}:00 — ${cell.count} interactions`}
                            className={`h-6 rounded flex items-center justify-center text-[10px] border border-slate-800/60 transition-all hover:scale-110 cursor-pointer ${bgClass}`}
                          >
                            {cell.count > 0 ? cell.count : ''}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 5: IP & NETWORK INTELLIGENCE
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'ip' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Network Infrastructure Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <KpiCard
                title="Commercial / Mobile"
                value={`${Math.round(((stats.ip.infraStats.totalEvents - stats.ip.infraStats.hosting) / Math.max(stats.ip.infraStats.totalEvents, 1)) * 100)}%`}
                subtitle="Legitimate enterprise visitors"
                icon={Users}
                color="emerald"
              />
              <KpiCard
                title="Datacenter / Hosting"
                value={`${stats.ip.infraStats.hosting} reqs`}
                subtitle="AWS, Azure, Cloudflare"
                icon={Server}
                color="indigo"
              />
              <KpiCard
                title="VPN & Proxy Traffic"
                value={`${stats.ip.infraStats.vpnProxy} signals`}
                subtitle="Masked egress / tunnels"
                icon={Network}
                color="amber"
              />
              <KpiCard
                title="Automated / Bot Traffic"
                value={`${stats.ip.infraStats.bot} reqs`}
                subtitle="Search crawlers & tools"
                icon={Zap}
                color="rose"
              />
            </div>

            {/* ASN & Network Organizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Autonomous System Numbers (ASN)</h3>
                <p className="text-xs text-slate-400 mb-4">Originating carrier and backbone networks</p>
                <div className="space-y-2.5">
                  {stats.ip.asnBreakdown.map((asn: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div>
                        <span className="text-xs font-semibold text-blue-400">{asn.asn}</span>
                        <p className="text-[11px] text-slate-400">{asn.org}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-200">{asn.requests} reqs</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="font-semibold text-white text-base mb-1">Internet Service Providers (ISPs)</h3>
                <p className="text-xs text-slate-400 mb-4">Top telecom and corporate broadband providers</p>
                <div className="space-y-2.5">
                  {stats.ip.ispBreakdown.map((isp: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-xs font-medium text-slate-200">{isp.isp}</span>
                      <span className="text-xs font-bold text-indigo-400">{isp.requests} reqs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Events Log */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
              <h3 className="font-semibold text-white text-base mb-1">Security & Abuse Telemetry Log</h3>
              <p className="text-xs text-slate-400 mb-4">Audited rate limit warnings, brute-force probes, and abnormal bursts</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-medium">
                      <th className="pb-3">Timestamp (UTC)</th>
                      <th className="pb-3">Severity</th>
                      <th className="pb-3">Event Type</th>
                      <th className="pb-3">Origin IP</th>
                      <th className="pb-3">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {stats.ip.securityEvents.map((sec: any) => (
                      <tr key={sec.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-2.5 font-mono text-[11px] text-slate-400">{sec.timestamp_utc.slice(0, 19).replace('T', ' ')}</td>
                        <td className="py-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sec.severity === 'CRITICAL' ? 'bg-red-950 text-red-400 border border-red-800' :
                            sec.severity === 'HIGH' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                            sec.severity === 'WARNING' ? 'bg-yellow-950 text-yellow-300 border border-yellow-800' :
                            'bg-blue-950 text-blue-300 border border-blue-800'
                          }`}>
                            {sec.severity}
                          </span>
                        </td>
                        <td className="py-2.5 font-medium text-slate-200">{sec.event_type}</td>
                        <td className="py-2.5 font-mono text-slate-300">{sec.ip_address}</td>
                        <td className="py-2.5 text-slate-400 max-w-sm truncate">{sec.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            TAB 6: REPORTS & EXPORTS
           ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'reports' && stats && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Management Intelligence Exports</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Download sanitized, structured CSV reports for executive briefings and CRM synchronization.
                  </p>
                </div>
                <button
                  onClick={handleExportCSV}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 cursor-pointer w-fit"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full CSV Intelligence</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" /> Executive Digest
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Aggregate totals of sessions ({stats.executive.totalSessions}), visitors ({stats.executive.totalVisitors}), and inquiries ({stats.executive.totalInquiries}) across marketing channels.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-emerald-400" /> Geographic Attribution
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Geographic mapping covering Tamil Nadu ({stats.geo.indianStates[0]?.sessions || 0} visits), Karnataka, Maharashtra, and foreign hubs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-400" /> Privacy & DPDP Notice
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    All telemetry adheres to Indian DPDP requirements. Client IP addresses are securely processed and non-sensitive identifiers are maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// ─── KPI Card Helper Component ───────────────────────────────────────────────
interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  isPositive?: boolean;
  icon: any;
  color: 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'cyan' | 'purple';
  isLive?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  change,
  isPositive,
  icon: Icon,
  color,
  isLive
}) => {
  const colorMap = {
    blue: 'bg-blue-600/10 text-blue-400 border-blue-500/20',
    indigo: 'bg-indigo-600/10 text-indigo-400 border-indigo-500/20',
    emerald: 'bg-emerald-600/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-600/10 text-amber-400 border-amber-500/20',
    rose: 'bg-rose-600/10 text-rose-400 border-rose-500/20',
    cyan: 'bg-cyan-600/10 text-cyan-400 border-cyan-500/20',
    purple: 'bg-purple-600/10 text-purple-400 border-purple-500/20'
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-slate-400 truncate">{title}</span>
        <div className={`p-1.5 rounded-lg border ${colorMap[color]}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-white tracking-tight">{value}</span>
          {isLive && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          )}
        </div>

        {change && (
          <div className="flex items-center gap-1 mt-1 text-[11px]">
            {isPositive ? (
              <span className="text-emerald-400 font-semibold flex items-center">
                <ArrowUpRight className="w-3 h-3" /> {change}
              </span>
            ) : (
              <span className="text-rose-400 font-semibold flex items-center">
                <ArrowDownRight className="w-3 h-3" /> {change}
              </span>
            )}
            <span className="text-slate-500">vs prev</span>
          </div>
        )}

        {subtitle && !change && (
          <p className="text-[10px] text-slate-400 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

// ─── Funnel Step Helper Component ───────────────────────────────────────────
const FunnelStep: React.FC<{ step: string; count: number; description: string; color: string }> = ({
  step,
  count,
  description,
  color
}) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
      <p className="text-xs font-semibold text-slate-400 mb-1">{step}</p>
      <div className="text-2xl font-bold text-white mb-1">{count.toLocaleString()}</div>
      <p className="text-[11px] text-slate-500 leading-tight">{description}</p>
    </div>
  );
};

// ─── Custom Tooltip for Recharts ────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-2.5 rounded-xl shadow-2xl text-xs text-white">
        <p className="font-semibold text-slate-300 mb-1">{label}</p>
        {payload.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between gap-4 py-0.5">
            <span className="flex items-center gap-1.5" style={{ color: item.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              {item.name}:
            </span>
            <span className="font-bold">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default IntelligenceDashboard;
