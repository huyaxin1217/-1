import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { day: '周一', hours: 6.5 },
  { day: '周二', hours: 7.2 },
  { day: '周三', hours: 5.8 },
  { day: '周四', hours: 7.5 },
  { day: '周五', hours: 8.0 },
  { day: '周六', hours: 6.0 },
  { day: '周日', hours: 7.2 },
];

export default function CheckIn() {
  const [rating, setRating] = useState(4);
  const [sleepTime, setSleepTime] = useState("23:30");
  const [wakeTime, setWakeTime] = useState("07:30");

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100">
        <h1 className="text-lg font-bold text-slate-800 text-center">睡眠日记</h1>
      </header>

      <div className="p-6 pb-24">
        {/* Date Selector */}
        <div className="flex items-center justify-between mb-8 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
          <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <Calendar size={18} className="text-indigo-500" />
            <span>2023年10月24日</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">入睡时间</label>
              <div className="relative">
                <input 
                  type="time" 
                  value={sleepTime}
                  onChange={(e) => setSleepTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-center"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">起床时间</label>
              <div className="relative">
                <input 
                  type="time" 
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-lg font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-center"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center">睡眠质量</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform active:scale-90"
                >
                  <Star 
                    size={32} 
                    fill={star <= rating ? "#F59E0B" : "none"} 
                    className={star <= rating ? "text-amber-500" : "text-slate-200"}
                    strokeWidth={star <= rating ? 0 : 2}
                  />
                </button>
              ))}
            </div>
            <div className="text-center text-sm font-medium text-amber-500">
              {rating === 5 ? "非常好" : rating === 4 ? "良好" : rating === 3 ? "一般" : "较差"}
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
            保存记录
          </button>
        </div>

        {/* History Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-6">本周睡眠时长</h3>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9', radius: 4 }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="hours" radius={[4, 4, 4, 4]} barSize={12}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.hours >= 7 ? '#6366f1' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
