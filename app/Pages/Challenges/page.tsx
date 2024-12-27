import React from 'react'
import { ChallengeCard } from "@/components/JournalComponents/ChallengeCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, TrendingUp, Sparkles, Award } from 'lucide-react'
import Header from '@/app/Components/General/Header'
import Link from 'next/link'

const challenges = [
  {
    title: "30 Days of Gratitude",
    description: "Write about one thing you're grateful for each day for a month.",
    category: "Mental Health",
    duration: "30 days",
    participantCount: 1520,
    creatorName: "MindfulMary",
    creatorAvatar: "/placeholder.svg?height=32&width=32",
    isBookmarked: true,
    progress: 40,
  },
  {
    title: "Travel Memory Lane",
    description: "Share your favorite travel memories from past adventures.",
    category: "Travel Stories",
    duration: "7 days",
    participantCount: 873,
    participantLimit: 1000,
    creatorName: "WanderlustWill",
    creatorAvatar: "/placeholder.svg?height=32&width=32",
    isBookmarked: false,
  },
  {
    title: "Flash Fiction Challenge",
    description: "Write a complete story in exactly 100 words each day.",
    category: "Creative Writing",
    duration: "14 days",
    participantCount: 2104,
    creatorName: "WordsmithWendy",
    creatorAvatar: "/placeholder.svg?height=32&width=32",
    isBookmarked: false,
    progress: 75,
  },
  // Add more challenge objects here...
]

const page = () => {
  return (
    <div className='bg-amber-50'>   
            <div className='bg-[#FEF3C7] w-full'>
                <div className='w-[1200px] mx-auto'>
                    <Header/>
                </div>
            </div>
            
            <div className='w-[1200px] mx-auto py-10 '>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-3xl font-bold text-amber-700'>Journal Challenge</h2>
                    <Link href = "/Pages/Challenges/CreateChallenge" >
                        <Button className='bg-amber-600 hover:bg-amber-700 duration-300'>
                            <PlusCircle className='mr-2 h-4 w-4'/>Create Challenge
                        </Button>
                    </Link>
                </div>

                <div className='flex space-x-4 mb-6'>
                    <Input placeholder='Search challenges ...' className='max-w-sm'/>
                    <Select>
                        <SelectTrigger className='w-[180ox]'>
                            <SelectValue placeholder= "Category"/>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value = "mental-health">Mental Health</SelectItem>
                            <SelectItem value = "travel">Travel Stories</SelectItem>
                            <SelectItem value = "creative-writing">Creative Writing</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1-day">1 Day</SelectItem>
                            <SelectItem value="7-days">7 Days</SelectItem>
                            <SelectItem value="30-days">30 Days</SelectItem>
                            <SelectItem value = "365-days">365 Days</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Tabs defaultValue='all' className='mb-8'>
                    <TabsList>
                        <TabsTrigger value = "all">All Challenges</TabsTrigger>
                        <TabsTrigger value = "trending">
                            <TrendingUp className='mr-2 h-4 w-4'/>
                            Trending
                        </TabsTrigger>

                        <TabsTrigger value = "new">
                            <Sparkles className='mr-2 h-4 w-4'/>
                            New & Noteworthy
                        </TabsTrigger>

                        <TabsTrigger value = "featured">
                            <Award className='mr-2 h-4 w-4'></Award>Featured
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value = "all">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {challenges.map((challenge, index) =>(
                                <ChallengeCard key={index} {...challenge} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>


    </div>
  )
}

export default page