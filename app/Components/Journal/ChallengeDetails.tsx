import Image from 'next/image'
import { CalendarDays, Users } from 'lucide-react'

interface ChallengeDetailsProps {
  challenge: {
    name: string
    creator: string
    creatorImage: string
    description: string
    startDate: string
    duration: string
    participants: number
  }
}

export default function ChallengeDetails({ challenge }: ChallengeDetailsProps) {
  return (
    <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 text-white p-8">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 L100 0 Z" fill="white" />
        </svg>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold mb-4">{challenge.name}</h1>
        <p className="text-lg mb-6 max-w-2xl">{challenge.description}</p>
        <div className="flex items-center mb-6">
          <Image
            src={challenge.creatorImage}
            alt={challenge.creator}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">Created by {challenge.creator}</p>
            <p className="text-sm opacity-75">Challenge Master</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" />
            <span>Starts: {new Date(challenge.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span>{challenge.participants} participants</span>
          </div>
          <div>Duration: {challenge.duration}</div>
        </div>
      </div>
    </div>
  )
}

