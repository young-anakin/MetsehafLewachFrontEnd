import { Check } from 'lucide-react'

interface Milestone {
  id: number
  name: string
  duration: string
  completed: boolean
}

interface MilestoneListProps {
  milestones: Milestone[]
  toggleMilestone: (id: number) => void
}

export default function MilestoneList({ milestones, toggleMilestone }: MilestoneListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Milestones</h2>
      <ul className="space-y-4">
        {milestones.map(milestone => (
          <li key={milestone.id} className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={milestone.completed}
                onChange={() => toggleMilestone(milestone.id)}
                className="sr-only"
              />
              <span className={`w-6 h-6 mr-4 flex-shrink-0 border-2 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${milestone.completed ? 'bg-amber-600 border-amber-600' : 'border-gray-300 group-hover:border-amber-500'}`}>
                {milestone.completed && <Check className="w-4 h-4 text-white" />}
              </span>
              <div className="flex-grow">
                <span className={`text-lg font-medium ${milestone.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {milestone.name}
                </span>
                <p className="text-sm text-gray-500 mt-1">{milestone.duration}</p>
              </div>
              {milestone.completed && (
                <span className="ml-2 text-xs bg-amber-100 text-amber-800 py-1 px-2 rounded-full">
                  Completed
                </span>
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

