import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Bookmark, Users, Calendar } from 'lucide-react'
import Link from "next/link"

interface ChallengeCardProps {
  title: string
  description: string
  category: string
  duration: string
  participantCount: number
  participantLimit?: number
  creatorName: string
  creatorAvatar: string
  isBookmarked: boolean
  progress?: number
}

export function ChallengeCard({
  title,
  description,
  category,
  duration,
  participantCount,
  participantLimit,
  creatorName,
  creatorAvatar,
  isBookmarked,
  progress
}: ChallengeCardProps) {
  return (
    <Link href="/Pages/SpecificChallenge">
      <Card className="w-full max-w-sm min-h-[400px] flex flex-col">
        <CardHeader className="relative">
          <div className="flex justify-between items-start">
            <Badge variant="secondary">{category}</Badge>
            <Button variant="ghost" size="icon" className={isBookmarked ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}>
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
          <CardTitle className="text-lg mt-2 text-[#92400E]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-amber-600 mb-4">{description}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Users className="h-4 w-4" />
            <span>{participantCount} participants</span>
            {participantLimit && <span>/ {participantLimit} max</span>}
          </div>
          {progress !== undefined && (
            <div className="space-y-1">
              <div className="text-sm font-medium text-amber-600">Your progress</div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={creatorAvatar} alt={creatorName} />
              <AvatarFallback>{creatorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-amber-900">
              Created by <span className="font-semibold text-[#92400E]">{creatorName}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
