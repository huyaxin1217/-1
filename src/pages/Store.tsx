import React from 'react';
import { Check, ShieldCheck, MessageCircle, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Store() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100 flex items-center">
        <Link to="/" className="mr-4 text-slate-400 hover:text-slate-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>
        <h1 className="text-lg font-bold text-slate-800">干预包选购</h1>
      </header>

      <div className="p-6 space-y-6 pb-24">
        {/* Standard Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl">
            入门首选
          </div>
          
          <h2 className="text-xl font-bold text-slate-800 mb-1">标准版</h2>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-2xl font-bold text-indigo-600">¥49.9</span>
            <span className="text-sm text-slate-400">/ 6周</span>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Headphones size={12} />
              </div>
              <span className="text-sm text-slate-600">CBT-I 系统课程 (6周)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={12} />
              </div>
              <span className="text-sm text-slate-600">耳穴贴工具包 (实物邮寄)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={12} />
              </div>
              <span className="text-sm text-slate-600">专业睡眠日记记录</span>
            </li>
          </ul>

          <button className="w-full bg-white border-2 border-indigo-600 text-indigo-600 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
            立即购买
          </button>
        </div>

        {/* Premium Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl">
            最受欢迎
          </div>
          
          <h2 className="text-xl font-bold mb-1">尊享版</h2>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-2xl font-bold text-white">¥99</span>
            <span className="text-sm text-indigo-200">/ 6周</span>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check size={12} />
              </div>
              <span className="text-sm text-indigo-50">包含标准版全部内容</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={12} />
              </div>
              <span className="text-sm text-white font-medium">个性化中医配穴方案</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle size={12} />
              </div>
              <span className="text-sm text-white font-medium">1对1 线上督导服务</span>
            </li>
          </ul>

          <button className="w-full bg-amber-400 text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg">
            立即购买
          </button>
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-4">
          购买即视为同意《用户服务协议》与《隐私政策》
        </p>
      </div>
    </div>
  );
}
