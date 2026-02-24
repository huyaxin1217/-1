import React from 'react';
import { Play, Lock, Headphones, Moon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const courses = [
  {
    id: 1,
    title: "睡眠卫生教育",
    duration: "5分钟",
    type: "认知",
    locked: false,
    icon: Moon,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 2,
    title: "放松训练-身体扫描",
    duration: "12分钟",
    type: "放松",
    locked: false,
    icon: Headphones,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "刺激控制疗法",
    duration: "8分钟",
    type: "行为",
    locked: true,
    icon: Clock,
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 4,
    title: "睡眠限制疗法",
    duration: "10分钟",
    type: "行为",
    locked: true,
    icon: ActivityIcon, // Will define below or import
    color: "bg-emerald-100 text-emerald-600"
  }
];

function ActivityIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export default function Courses() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100">
        <h1 className="text-lg font-bold text-slate-800 text-center">CBT-I课程</h1>
      </header>

      <div className="p-6 space-y-4">
        {courses.map((course, index) => (
          <div 
            key={course.id}
            className={cn(
              "bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-all",
              !course.locked && "hover:shadow-md cursor-pointer active:scale-[0.98]",
              course.locked && "opacity-80 grayscale-[0.3]"
            )}
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", course.color)}>
              <course.icon size={24} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-800 text-sm mb-1 truncate">{course.title}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium">{course.type}</span>
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="shrink-0">
              {course.locked ? (
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <Lock size={16} />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl text-center border border-indigo-100 border-dashed">
          <p className="text-sm text-indigo-800 font-medium mb-2">解锁更多课程</p>
          <p className="text-xs text-indigo-600/70 mb-4">完成当前课程或升级干预包解锁后续内容</p>
          <button className="text-xs font-bold text-indigo-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-100">
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
}
