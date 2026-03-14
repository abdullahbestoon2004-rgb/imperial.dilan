import { Bell, Menu, PackagePlus, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { AdminNotification, AdminSectionId } from '../types';

export interface NavItem {
  id: AdminSectionId;
  label: string;
  badge?: number;
}

interface AdminShellProps {
  activeSection: AdminSectionId;
  onSectionChange: (section: AdminSectionId) => void;
  navItems: NavItem[];
  children: React.ReactNode;
  onQuickAdd: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  notifications: AdminNotification[];
  onNotificationDismiss: (id: string) => void;
}

function SidebarNav({
  activeSection,
  filteredNav,
  onSectionChange,
}: {
  activeSection: AdminSectionId;
  filteredNav: NavItem[];
  onSectionChange: (section: AdminSectionId) => void;
}) {
  return (
    <nav className="space-y-2">
      <AnimatePresence mode="popLayout">
        {filteredNav.map((item) => {
          const active = item.id === activeSection;
          return (
            <motion.button
              key={item.id}
              layout
              type="button"
              onClick={() => onSectionChange(item.id)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                active
                  ? 'bg-[#F6F3EE] text-[#2F2F2F] shadow-[0_14px_32px_rgba(0,0,0,0.24)]'
                  : 'bg-transparent text-[#E8E1D8]/70 hover:bg-white/5 hover:text-[#F6F3EE]'
              }`}
            >
              <span className="text-sm font-medium">{item.label}</span>
              {typeof item.badge === 'number' && item.badge > 0 ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    active ? 'bg-[#2F2F2F]/10 text-[#2F2F2F]' : 'bg-[#2D332B]/15 text-[#2D332B]'
                  }`}
                >
                  {item.badge}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </AnimatePresence>
    </nav>
  );
}

export function AdminShell({
  activeSection,
  onSectionChange,
  navItems,
  children,
  onQuickAdd,
  searchValue,
  onSearchChange,
  notifications,
  onNotificationDismiss,
}: AdminShellProps) {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const filteredNav = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return navItems;
    return navItems.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [navItems, query]);

  const sidebar = (
    <div className="h-full overflow-y-auto border-r border-white/15 bg-[#4B5563] p-5">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[#6B7280] text-sm font-semibold tracking-[0.3em] text-[#E5E7EB]">
          IM
        </div>
        <div>
          <div className="font-['Playfair_Display'] text-2xl text-[#F6F3EE]">Imperial</div>
          <div className="text-xs uppercase tracking-[0.32em] text-[#E8E1D8]/65">Admin Console</div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-3">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#E8E1D8]/45">Navigate</label>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
          <Search className="h-4 w-4 text-[#E8E1D8]/50" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search section"
            className="w-full bg-transparent text-sm text-[#F6F3EE] outline-none placeholder:text-[#E8E1D8]/35"
          />
        </div>
      </div>

      <SidebarNav activeSection={activeSection} filteredNav={filteredNav} onSectionChange={onSectionChange} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#D1D5DB] px-3 py-4 text-[#F6F3EE] sm:px-5 sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1180px] overflow-hidden rounded-[26px] border border-[#9CA3AF] bg-[#6B7280] shadow-[0_24px_60px_rgba(55,65,81,0.35)] saturate-0">
        <aside className="hidden w-[240px] shrink-0 lg:block">{sidebar}</aside>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            >
              <motion.aside
                initial={{ x: -32, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -32, opacity: 0 }}
                className="h-full w-[86vw] max-w-[320px]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex justify-end p-4">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-2 text-[#F6F3EE]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {sidebar}
              </motion.aside>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#6B7280]/90 px-4 py-3 backdrop-blur-xl sm:px-5 lg:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#F6F3EE] lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Search className="h-4 w-4 text-[#E8E1D8]/55" />
                  <input
                    value={searchValue}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search products, orders, customers..."
                    className="w-full bg-transparent text-sm text-[#F6F3EE] outline-none placeholder:text-[#E8E1D8]/35"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setNotificationsOpen((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F6F3EE] transition-colors hover:border-[#2D332B]/40 hover:text-[#2D332B]"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:inline">Notifications</span>
                    {notifications.length > 0 ? (
                      <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs text-[#F3F4F6]">
                        {notifications.length}
                      </span>
                    ) : null}
                  </button>

                  <AnimatePresence>
                    {notificationsOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        className="absolute right-0 top-[calc(100%+12px)] z-40 w-[320px] rounded-[24px] border border-white/15 bg-[#6B7280] p-4 shadow-[0_20px_50px_rgba(55,65,81,0.4)]"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-[#F6F3EE]">Activity</p>
                            <p className="text-xs text-[#E8E1D8]/55">Operational alerts and updates</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {notifications.length === 0 ? (
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#E8E1D8]/60">
                              No pending notifications.
                            </div>
                          ) : (
                            notifications.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => onNotificationDismiss(item.id)}
                                className="w-full rounded-2xl border border-white/15 bg-white/[0.05] p-4 text-left transition hover:border-white/30"
                              >
                                <p className="text-sm font-medium text-[#F6F3EE]">{item.title}</p>
                                <p className="mt-1 text-xs leading-5 text-[#E8E1D8]/60">{item.description}</p>
                              </button>
                            ))
                          )}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={onQuickAdd}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#4B5563] px-4 py-3 text-sm font-semibold text-[#F3F4F6] transition-transform hover:scale-[1.01] hover:bg-[#374151]"
                >
                  <PackagePlus className="h-4 w-4" />
                  <span>+ Add Product</span>
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D1D5DB] text-sm font-semibold text-[#374151]">
                    AK
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-[#F6F3EE]">Admin</p>
                    <p className="text-xs text-[#E8E1D8]/55">atelier@imperial.com</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="relative flex-1 px-4 py-5 sm:px-5 lg:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
