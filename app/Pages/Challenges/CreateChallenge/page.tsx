'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ArrowLeft, CalendarIcon } from 'lucide-react'
import Header from '@/app/Components/General/Header'
import Link from 'next/link'

export default function CreateChallenge() {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted')
    router.push('/challenges')
  }

  return (
    <div className='bg-amber-50'>

          <div className='bg-[#FEF3C7] w-full'>
                <div className='w-[1200px] mx-auto'>
                    <Header/>
                </div>
            </div>

            <div className=" w-[1200px] mx-auto my-6 flex justify-between items-center">
                <Link href="/journal" passHref>
                  <Button variant="ghost" className="text-amber-800 hover:text-amber-900 hover:bg-amber-100">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Journal
                  </Button>
                
                </Link>
            </div>

      <div className=" w-[1200px] mx-auto py-8 px-10 my-8 border rounded=lg border-amber-200 shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-8 text-amber-800">Create a New Challenge</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-800">
              Challenge Name
            </label>
            <Input id="name" name="name" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-amber-800">
              Category
            </label>
            <Select name="category" required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mental-health">Mental Health</SelectItem>
                <SelectItem value="travel">Travel Stories</SelectItem>
                <SelectItem value="creative-writing">Creative Writing</SelectItem>
                <SelectItem value="personal-growth">Personal Growth</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-amber-800">
              Description
            </label>
            <Textarea id="description" name="description" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-amber-800">
              Duration (in days)
            </label>
            <Input id="duration" name="duration" type="number" min="1" required className="mt-1" />
          </div>

          <div>
            <label htmlFor="participantLimit" className="block text-sm font-medium text-amber-800">
              Participant Limit (optional)
            </label>
            <Input id="participantLimit" name="participantLimit" type="number" min="1" className="mt-1" />
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-amber-800">
              Start Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* <div className="flex items-center space-x-2">
            <Switch id="allowCoCreators" name="allowCoCreators" />
            <label htmlFor="allowCoCreators" className="text-sm font-medium text-gray-700">
              Allow Co-Creators
            </label>
          </div> */}

          <div className="flex items-center space-x-2">
            <Switch id="isPrivate" name="isPrivate" />
            <label htmlFor="isPrivate" className="text-sm font-medium text-gray-700">
              Make Challenge Private
            </label>
          </div>

          <div className="flex justify-end space-x-4">
                <Link href="/journal" passHref>
                  <Button type="button" variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Save Entry
                </Button>
              </div>
        </form>
      </div>
    </div>
  )
}

