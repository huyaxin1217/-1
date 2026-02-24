import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Home, BookOpen, CalendarCheck, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Layout() {
  const location = useLocation();

  // Hide bottom nav on specific pages if needed, but for now keep it consistent
  const showNav = true;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center font-sans text-slate-800">
      {/* Mobile Container */}
      <div className="w-full max-w-md h-[100dvh] bg-white shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-slate-50/50">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        {showNav && (
          <nav className="bg-white border-t border-slate-100 px-6 py-3 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-50">
            <ul className="flex justify-between items-center">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => cn(
                    "flex flex-col items-center gap-1 transition-colors duration-200",
                    isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  <Home size={24} strokeWidth={2} />
                  <span className="text-[10px] font-medium">首页</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/courses" 
                  className={({ isActive }) => cn(
                    "flex flex-col items-center gap-1 transition-colors duration-200",
                    isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  <BookOpen size={24} strokeWidth={2} />
                  <span className="text-[10px] font-medium">课程</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/check-in" 
                  className={({ isActive }) => cn(
                    "flex flex-col items-center gap-1 transition-colors duration-200",
                    isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  <CalendarCheck size={24} strokeWidth={2} />
                  <span className="text-[10px] font-medium">打卡</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/me" 
                  className={({ isActive }) => cn(
                    "flex flex-col items-center gap-1 transition-colors duration-200",
                    isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  <User size={24} strokeWidth={2} />
                  <span className="text-[10px] font-medium">我的</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
