import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, ArrowRight, Activity, ChevronRight, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Moon size={18} fill="currentColor" />
          </div>
          <h1 className="text-lg font-bold text-slate-800 tracking-tight">眠中求胜</h1>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
          <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Hero Section */}
        <section className="px-6 py-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 leading-tight">你的睡眠还好吗？</h2>
              <p className="text-indigo-100 text-sm mb-6 opacity-90 leading-relaxed max-w-[80%]">
                3分钟完成PSQI测评，获取专属改善方案。
              </p>
              
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 group w-full justify-center sm:w-auto">
                开始测评
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions / Stats */}
        <section className="px-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                <Activity size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-1">昨晚睡眠</div>
                <div className="text-xl font-bold text-slate-800">7h 20m</div>
              </div>
            </div>
            <Link to="/warning" className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-12 h-12 bg-red-50 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 relative z-10">
                <Zap size={20} />
              </div>
              <div className="relative z-10">
                <div className="text-xs text-slate-400 font-medium mb-1 flex items-center gap-1">
                  心理状态
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                </div>
                <div className="text-xl font-bold text-slate-800">查看预警</div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recommended */}
        <section className="px-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold text-slate-800">推荐课程</h3>
            <Link to="/courses" className="text-xs text-indigo-500 font-medium flex items-center">
              全部 <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <Moon size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 text-sm mb-1">睡眠卫生教育</h4>
              <p className="text-xs text-slate-400">基础认知 · 5分钟</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-indigo-500 border-b-[5px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </section>

        {/* Premium Banner */}
        <section className="px-6 pb-6">
          <Link to="/store" className="block">
            <div className="bg-slate-900 rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-slate-200">
              <div>
                <div className="text-sm font-bold text-amber-400 mb-1">升级干预包</div>
                <div className="text-xs text-slate-400">获取完整CBT-I课程与督导</div>
              </div>
              <div className="bg-amber-400 text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold">
                去查看
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
