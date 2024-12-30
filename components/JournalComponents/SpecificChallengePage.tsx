'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CalendarDays, Users, Check } from 'lucide-react'

const SpecificChallengePage = () => {
  const challengeData = {
    name: "30 Days of Mindfulness",
    creator: "MindfulMary",
    creatorImage: "/placeholder.svg?height=100&width=100",
    description: "Embark on a transformative journey to cultivate mindfulness in your daily life. This challenge will guide you through various practices to enhance your mental well-being and overall life satisfaction.",
    startDate: "2024-01-01",
    duration: "30 days",
    participants: 1520,
    milestones: [
      { id: 1, name: "Write a gratitude journal", duration: "3 days", completed: false },
      { id: 2, name: "Practice 10-minute meditation", duration: "5 days", completed: false },
      { id: 3, name: "Perform a random act of kindness", duration: "1 day", completed: false },
      { id: 4, name: "Try a new healthy recipe", duration: "2 days", completed: false },
      { id: 5, name: "Take a nature walk", duration: "1 day", completed: false },
    ]
  }

  const [milestones, setMilestones] = useState(challengeData.milestones)

  const toggleMilestone = (id: number) => {
    setMilestones(milestones.map(milestone =>
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    ))
  }

  const ProgressBar = ({ milestones }) => {
    const completedMilestones = milestones.filter(m => m.completed).length
    const totalMilestones = milestones.length
    const progress = (completedMilestones / totalMilestones) * 100

    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-amber-800">
          <span>Progress</span>
          <span>{completedMilestones} / {totalMilestones} completed</span>
        </div>
        <div className="h-4 bg-amber-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }

  const Countdown = ({ startDate }) => {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())

    function calculateTimeLeft() {
      const difference = +new Date(startDate) - +new Date()
      let timeLeft = {}

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      return timeLeft
    }

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)

      return () => clearTimeout(timer)
    })

    const timeComponents = Object.keys(timeLeft).map(interval => {
      if (!timeLeft[interval]) {
        return null
      }

      return (
        <div key={interval} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-amber-800">{timeLeft[interval]}</span>
          <span className="text-xs uppercase text-amber-600">{interval}</span>
        </div>
      )
    })

    return (
      <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold mb-4 text-amber-800">Challenge Starts In</h2>
        <div className="flex justify-center space-x-4">
          {timeComponents.length ? timeComponents : <span className="text-amber-800">Challenge has started!</span>}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 text-white p-8">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 L100 0 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-4">{challengeData.name}</h1>
          <p className="text-lg mb-6 max-w-2xl">{challengeData.description}</p>
          <div className="flex items-center mb-6">
            <Image
              src={challengeData.creatorImage}
              alt={challengeData.creator}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Created by {challengeData.creator}</p>
              <p className="text-sm opacity-75">Challenge Master</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <CalendarDays className="w-5 h-5 mr-2" />
              <span>Starts: {new Date(challengeData.startDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{challengeData.participants} participants</span>
            </div>
            <div>Duration: {challengeData.duration}</div>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-8">
        <ProgressBar milestones={milestones} />
        <Countdown startDate={challengeData.startDate} />
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-amber-800">Milestones</h2>
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
      </div>
    </div>
  )
}

export default SpecificChallengePage

