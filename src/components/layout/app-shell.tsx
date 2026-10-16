import { AppHeader } from "@/components/layout/app-header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SidebarNav } from "@/components/layout/sidebar-nav";

/**
 * Responsive shell: desktop gets a fixed sidebar, mobile gets a sticky header
 * and a bottom tab bar (matching the mobile design).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <SidebarNav />
      <div className="lg:pl-64">
        <AppHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-5 lg:px-8 lg:pb-12">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
