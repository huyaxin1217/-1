import React from 'react';
import { AlertTriangle, Phone, FileText, Info, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Warning() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-slate-400 hover:text-slate-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
          <div>
            <h1 className="text-lg font-bold text-slate-800">心理状态预警</h1>
            <p className="text-[10px] text-slate-400 font-medium">基于PHQ-9抑郁量表自动分析</p>
          </div>
        </div>
        <div className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-md">
          PHQ-9
        </div>
      </header>

      <div className="p-6 pb-24 space-y-6 overflow-y-auto">
        {/* Main Warning Card - Level 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-lg shadow-orange-100/50 border border-orange-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center animate-pulse">
                <AlertTriangle size={18} />
              </div>
              <span className="text-orange-500 font-bold text-sm tracking-wide uppercase">预警等级：二级</span>
            </div>

            <h2 className="text-xl font-bold text-slate-800 mb-2">
              检测到“自杀意念”<br/>条目得分 ≥ 1分
            </h2>
            
            <div className="bg-orange-50 rounded-xl p-4 mt-4 border border-orange-100/50">
              <p className="text-sm text-orange-800 font-medium leading-relaxed">
                建议：您的心理状态需要关注，心理疏导员将尽快联系您进行访谈。
              </p>
            </div>
          </div>
        </div>

        {/* Warning Mechanism Explanation */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Info size={16} className="text-indigo-500" />
            预警机制说明
          </h3>
          
          <div className="space-y-3">
            {/* Level 1 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 font-bold text-sm">
                L1
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">一级预警</h4>
                <p className="text-xs text-slate-500 mb-1">PHQ-9总分 ≥ 10分</p>
                <div className="text-xs text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded">
                  推送放松音频
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 ring-1 ring-orange-100 flex gap-4 relative">
              <div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-orange-400 rounded-r"></div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 font-bold text-sm">
                L2
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">二级预警</h4>
                <p className="text-xs text-slate-500 mb-1">第9题得分 ≥ 1分</p>
                <div className="text-xs text-orange-600 bg-orange-50 inline-block px-2 py-0.5 rounded">
                  心理疏导员人工介入
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-sm">
                L3
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">三级预警</h4>
                <p className="text-xs text-slate-500 mb-1">第9题≥2分 且 总分≥15分</p>
                <div className="text-xs text-red-600 bg-red-50 inline-block px-2 py-0.5 rounded">
                  转诊精神心理科医生
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm">
            <FileText size={16} />
            查看详细报告
          </button>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            <Phone size={16} />
            联系心理中心
          </button>
        </div>
      </div>
    </div>
  );
}
