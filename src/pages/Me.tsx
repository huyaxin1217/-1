import React from 'react';
import { User, Settings, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Me() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white pb-6 pt-12 px-6 rounded-b-[2rem] shadow-sm mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md">
            <img src="https://picsum.photos/seed/user/200/200" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">用户8823</h2>
            <p className="text-sm text-slate-400">坚持打卡第 3 天</p>
          </div>
        </div>
        
        <div className="flex justify-between gap-4">
          <div className="flex-1 bg-indigo-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-indigo-600">12</div>
            <div className="text-xs text-indigo-400">连续打卡</div>
          </div>
          <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-purple-600">2</div>
            <div className="text-xs text-purple-400">完成课程</div>
          </div>
          <div className="flex-1 bg-orange-50 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-orange-600">85</div>
            <div className="text-xs text-orange-400">平均得分</div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-3">
        <Link to="/store" className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
              <CreditCard size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700">我的订阅 / 升级</span>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
        </Link>
        
        <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
              <Settings size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700">设置</span>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>

        <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
              <HelpCircle size={18} />
            </div>
            <span className="text-sm font-medium text-slate-700">帮助与反馈</span>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
        
        <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-slate-100 mt-6 group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
              <LogOut size={18} />
            </div>
            <span className="text-sm font-medium text-red-500">退出登录</span>
          </div>
        </div>
      </div>
    </div>
  );
}
