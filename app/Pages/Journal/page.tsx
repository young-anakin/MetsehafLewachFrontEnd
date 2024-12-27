// import { Header } from '@nestjs/common'
'use client'
import Header from '@/app/Components/General/Header'
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PenTool, BookOpen, Tag, Award, Users, Settings} from 'lucide-react'


// import JournalEntries from '@/app/Pages/JournalEntries'
const page = () => {
    const userStats = {
        totalEntries: 127,
        currentStreak: 15,
        longestStreak: 30,
        tagsUsed: 42,
        wordsWritten: 25480,
      }
    
      const dailyPrompt = "What small act of kindness were you once shown that you'll never forget?"
    
      const recentActivity = [
        { type: 'entry', title: 'Reflections on Growth', time: '2 hours ago' },
        { type: 'badge', title: 'Consistent Writer', time: '1 day ago' },
        { type: 'challenge', title: 'Summer Memories', time: '3 days ago' },
        { type: 'entry', title: 'Future Aspirations', time: '4 days ago' },
        { type: 'tag', title: 'Added new tag: Inspiration', time: '5 days ago' },
      ]
  return (
    <div className='bg-amber-50 text-amber-900'>
              {/* <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Lora:wght@400;700&display=swap');

                    body {
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1b98d' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E");
                    background-attachment: fixed;
                    }
                `}</style> */}
            
            <div className='bg-[#FEF3C7] w-full'>
                <div className='w-[1200px] mx-auto'>
                    <Header/>
                </div>
            </div>
            <main className='px-8 w-[1200px] mx-auto font-poppins h-full text-white   min-h-screen py-10 '>
                <h2 className='text-[#92400E]  text-3xl font-semibold'>Welcome back, ClutchTheKid</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 my-8'>
                        <Card className='bg-white border-amber-200 shadow col-span-1 lg:col-span-3'>
                            <CardContent className='p-6'>
                                <h3 className='text-2xl font-bold text-amber-800 font-handwritten mb-4'>Your Journaling Journey</h3>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                                    <div className='text-center'>
                                        <p className='text-3xl font-bold text-amber-600'>{userStats.totalEntries}</p>
                                        <p className='text-sm text-amber-700 font-serif'>Total Entries</p>
                                    </div>

                                    <div className='text-center'>
                                        <p className='text-3xl font-bold text-amber-600'>{userStats.currentStreak}</p>
                                        <p className='text-sm text-amber-700 font-serif'>Day Streak</p>
                                    </div>

                                    <div className='text-center'>
                                        <p className='text-3xl font-bold text-amber-600'>{userStats.longestStreak}</p>
                                        <p className='text-sm text-amber-700 font-serif'>Longest Streak</p>
                                    </div>

                                    <div className='text-center'>
                                        <p className='text-3xl font-bold text-amber-600'>{userStats.tagsUsed}</p>
                                        <p className='text-sm text-amber-700 font-serif'>Tags Used</p>
                                    </div>

                                    <div className='text-center'>
                                        <p className='text-3xl font-bold text-amber-600'>{userStats.wordsWritten.toLocaleString()}</p>
                                        <p className='text-sm text-amber-700 font-serif'>Words Written</p>
                                    </div>

                                    <div className="text-center flex items-center justify-center">
                                        <Link href="/stats" className="text-amber-600 hover:text-amber-700 font-semibold font-handwritten duration-300">
                                            View Full Stats →
                                        </Link>
                                    </div>

                                </div>

                            </CardContent>

                        </Card>
                        
                        <Card className='bg-white border-amber-200 shadow'>
                            <CardContent className='p-6'>
                                <h3 className='text-2xl font-bold text-amber-800 font-handwritten mb-4'>Today&apos;s Prompts</h3>
                                <p className='text-amber-700 font-serif mb-4'>{dailyPrompt}</p>
                                <Link href = "/journal/new" passHref>
                                    <Button className='w-full bg-amber-600 hover:bg-amber-700 duration-300 text-white'>
                                        Write about this
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>



                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <Link href={'/Pages/JournalEntries'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <PenTool className='h-12 w-12 text-amber-600 mb-4'/>
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>New Journal Entry</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Capture your thoughts and experiences</p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/Pages/PastEntries'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <BookOpen className="h-12 w-12 text-amber-600 mb-4" />
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>Past Entries</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Revisit your journey and reflections</p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/Pages/Tags'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <Tag className="h-12 w-12 text-amber-600 mb-4" />
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>Tags</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Organize and explore your entries</p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/Pages/Challenges'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <Award  className='h-12 w-12 text-amber-600 mb-4'/>
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>Achievements and Badges</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Track your progress and milestones</p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/Pages/Challenges'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <Users  className='h-12 w-12 text-amber-600 mb-4'/>
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>Community Challenges</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Join writing prompts and shared experiences</p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/journal/new'} passHref>
                            <Card className='bg-white hover:bg-amber-50 transition-colors duration-200 border-amber-200 shadow hover:shadow-md cursor-pointer'>
                                <CardContent className='p-6 flex flex-col items-center text-center'>
                                    <Settings className='h-12 w-12 text-amber-600 mb-4'/>
                                    <h3 className='text-xl font-bold text-amber-800 font-handwritten mb-2'>Settings</h3>
                                    <p className='text-amber-700 font-serif text-sm'>Customize your journaling experience</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-amber-800 font-handwritten mb-4">Recent Activity</h3>
                        <Card className="bg-white border-amber-200 shadow">
                            <CardContent className="p-6">
                            <ul className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                <li key={index} className="flex items-center text-amber-700 font-serif">
                                    {activity.type === 'entry' && <PenTool className="h-5 w-5 mr-3 text-amber-600" />}
                                    {activity.type === 'badge' && <Award className="h-5 w-5 mr-3 text-amber-600" />}
                                    {activity.type === 'challenge' && <Users className="h-5 w-5 mr-3 text-amber-600" />}
                                    {activity.type === 'tag' && <Tag className="h-5 w-5 mr-3 text-amber-600" />}
                                    <span className="flex-grow">{activity.title}</span>
                                    <span className="text-sm text-amber-500">{activity.time}</span>
                                </li>
                                ))}
                            </ul>
                            </CardContent>
                        </Card>
                    </div>


            </main>
    </div>
  )
}

export default page