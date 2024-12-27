'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowLeft, X, Calendar } from 'lucide-react'

// Predefined list of tags
const availableTags = [
  'personal', 'work', 'family', 'health', 'fitness', 'travel',
  'food', 'hobby', 'learning', 'goals', 'gratitude', 'reflection'
]

export default function NewJournalEntry() {
const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the entry to your backend
    console.log({ title, content, tags })
    // Then redirect to the journal list or the new entry's page
  }

  return (
    <div className='bg-[#fffbeb]'>

    <div className="min-h-screen  text-amber-900 font-sans w-[1200px] mx-auto">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Lora:wght@400;700&display=swap');

        body {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1b98d' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
        }
      `}</style>

      <main className=" mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/journal" passHref>
            <Button variant="ghost" className="text-amber-800 hover:text-amber-900 hover:bg-amber-100">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Journal
            </Button>
          </Link>
        </div>

        <Card className="bg-white border-amber-200 shadow-lg mb-8">
          <CardContent className="p-6 md:p-10">
            <h1 className="text-4xl md:text-4xl font-bold text-amber-800 font-handwritten mb-1">New Journal Entry</h1>
            <div className="flex items-center text-amber-700 mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <span className="font-handwritten text-lg">{today}</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-semibold text-amber-800 mb-2 font-handwritten">Title</label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Give your entry a title..."
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-lg font-semibold text-amber-800 mb-2 font-handwritten">Your Thoughts</label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-64 border-amber-300 focus:border-amber-500 focus:ring-amber-500 font-serif"
                  placeholder="Write your thoughts here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="tags" className="block text-lg font-semibold text-amber-800 mb-2 font-handwritten">Tags</label>
                <div className="flex items-center mb-2">
                  <Select onValueChange={handleAddTag}>
                    <SelectTrigger className="w-full border-amber-300 focus:border-amber-500 focus:ring-amber-500">
                      <SelectValue placeholder="Select a tag" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 flex items-center font-handwritten">
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 text-amber-600 hover:text-amber-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
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
          </CardContent>
        </Card>
      </main>
    </div>
    </div>

  )
}
