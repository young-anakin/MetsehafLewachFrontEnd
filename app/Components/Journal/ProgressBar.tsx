interface Milestone {
    id: number
    completed: boolean
  }
  
  interface ProgressBarProps {
    milestones: Milestone[]
  }
  
  export default function ProgressBar({ milestones }: ProgressBarProps) {
    const completedMilestones = milestones.filter(m => m.completed).length
    const totalMilestones = milestones.length
    const progress = (completedMilestones / totalMilestones) * 100
  
    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Progress</span>
          <span>{completedMilestones} / {totalMilestones} completed</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }
  
  