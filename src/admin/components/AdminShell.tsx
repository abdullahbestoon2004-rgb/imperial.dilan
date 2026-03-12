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
                  ? 'bg-[#F7F1E8] text-[#171419] shadow-[0_14px_32px_rgba(0,0,0,0.24)]'
                  : 'bg-transparent text-[#D9CFBF]/70 hover:bg-white/5 hover:text-[#F7F1E8]'
              }`}
            >
              <span className="text-sm font-medium">{item.label}</span>
              {typeof item.badge === 'number' && item.badge > 0 ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    active ? 'bg-[#171419]/10 text-[#171419]' : 'bg-[#C6A66B]/15 text-[#C6A66B]'
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
    <div className="h-full overflow-y-auto border-r border-white/10 bg-[radial-gradient(circle_at_top,_rgba(198,166,107,0.18),_transparent_35%),linear-gradient(180deg,#11151d_0%,#090c12_100%)] p-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C6A66B]/40 bg-[#171419] text-sm font-semibold tracking-[0.3em] text-[#C6A66B]">
          IM
        </div>
        <div>
          <div className="font-['Playfair_Display'] text-2xl text-[#F7F1E8]">Imperial</div>
          <div className="text-xs uppercase tracking-[0.32em] text-[#D9CFBF]/55">Admin Console</div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-3">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#D9CFBF]/45">Navigate</label>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
          <Search className="h-4 w-4 text-[#D9CFBF]/50" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search section"
            className="w-full bg-transparent text-sm text-[#F7F1E8] outline-none placeholder:text-[#D9CFBF]/35"
          />
        </div>
      </div>

      <SidebarNav activeSection={activeSection} filteredNav={filteredNav} onSectionChange={onSectionChange} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#F7F1E8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,166,107,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(82,103,138,0.12),transparent_30%)]" />

      <div className="relative flex min-h-screen">
        <aside className="hidden w-[280px] shrink-0 lg:block">{sidebar}</aside>

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
                    className="rounded-2xl border border-white/10 bg-white/5 p-2 text-[#F7F1E8]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {sidebar}
              </motion.aside>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0A0D12]/85 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#F7F1E8] lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Search className="h-4 w-4 text-[#D9CFBF]/55" />
                  <input
                    value={searchValue}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search products, orders, customers..."
                    className="w-full bg-transparent text-sm text-[#F7F1E8] outline-none placeholder:text-[#D9CFBF]/35"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setNotificationsOpen((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F7F1E8] transition-colors hover:border-[#C6A66B]/40 hover:text-[#C6A66B]"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:inline">Notifications</span>
                    {notifications.length > 0 ? (
                      <span className="rounded-full bg-[#C6A66B]/15 px-2 py-0.5 text-xs text-[#C6A66B]">
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
                        className="absolute right-0 top-[calc(100%+12px)] z-40 w-[320px] rounded-[28px] border border-white/10 bg-[#11151d] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-[#F7F1E8]">Activity</p>
                            <p className="text-xs text-[#D9CFBF]/55">Operational alerts and updates</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {notifications.length === 0 ? (
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#D9CFBF]/60">
                              No pending notifications.
                            </div>
                          ) : (
                            notifications.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => onNotificationDismiss(item.id)}
                                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-[#C6A66B]/35"
                              >
                                <p className="text-sm font-medium text-[#F7F1E8]">{item.title}</p>
                                <p className="mt-1 text-xs leading-5 text-[#D9CFBF]/60">{item.description}</p>
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
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#C6A66B] px-4 py-3 text-sm font-semibold text-[#171419] transition-transform hover:scale-[1.01]"
                >
                  <PackagePlus className="h-4 w-4" />
                  <span>+ Add Product</span>
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F7F1E8] text-sm font-semibold text-[#171419]">
                    AK
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-[#F7F1E8]">Admin</p>
                    <p className="text-xs text-[#D9CFBF]/55">atelier@imperial.com</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="relative flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
