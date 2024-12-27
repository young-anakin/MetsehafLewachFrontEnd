'use client'
import React from 'react'
import { useState } from 'react'
// import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {  Plus, Pencil, Trash2 } from 'lucide-react'
import Header from '@/app/Components/General/Header'
const initialTags = [
    { id: 1, name: 'personal', entryCount: 15, wordCount: 3750 },
    { id: 2, name: 'work', entryCount: 8, wordCount: 2000 },
    { id: 3, name: 'travel', entryCount: 5, wordCount: 1250 },
    { id: 4, name: 'goals', entryCount: 10, wordCount: 2500 },
    { id: 5, name: 'reflection', entryCount: 20, wordCount: 5000 },
    ]
const page = () => {

    const [tags, setTags] = useState(initialTags)
    const [newTag, setNewTag] = useState('')
    const [editingTag, setEditingTag] = useState<{ id: number, name: string } | null>(null)

    const handleAddTag = () => {
        if (newTag.trim()){
            const newId = Math.max(...tags.map(tag => tag.id)) + 1
            setTags([...tags, {id:newId , name: newTag.trim(), entryCount : 0, wordCount: 0}])
            setNewTag('')
        }
    }

    const handleEditTag = () => {
        if (editingTag) {
            setTags(tags.map(tag => tag.id === editingTag.id ? {...tag, name:editingTag.name} : tag))
            setEditingTag(null)
        }
    }

    const handleDeleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
 
    return (
        <div className='min-h-screen bg-amber-50 text-amber-900 font-sans'>
            <div className='bg-[#FEF3C7] w-full'>
                <div className='w-[1200px] mx-auto'>
                    <Header/>
                </div>
            </div>

            <main className='w-[1200px] mx-auto px-10 py-10'>
                <Card className='bg-white border-amber-200 shadow-lg mb-8'>
                    <CardContent className='p-6'>
                        <h2 className='text-2xl text-amber-800 font-bold text-primary-800 font-handwritten mb-4'>Add New Tag</h2>
                        <div className='flex items-center space-x-2'>
                            <Input
                                type = "text"
                                placeholder='Enter new tag name'
                                value = {newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                className='flex-grow'
                            />
                            <Button onClick={handleAddTag} className='bg-primary-600 border border-amber-200 hover:bg-amber-50 text-amber-800 '>
                                <Plus className = "mr-2 h-4 w-4"/> Add Tag    
                            </Button>    
                        </div>    
                    </CardContent>    
                </Card> 


                <Card className='bg-white border-amber-200 shadow-lg'>
                    <CardContent className='p-6'>
                        <h2 className='text-2xl font-bold text-primary-800 font-handwritten mb-4 text-amber-800'> Your Tags</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='text-amber-600'>Tag Name</TableHead>
                                    <TableHead className='text-amber-600'>Entries</TableHead>
                                    <TableHead className='text-amber-600'>Total Words</TableHead>
                                    <TableHead className='text-amber-600'>Actions</TableHead>

                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {tags.map((tag) => (
                                    <TableRow key = {tag.id}>
                                        <TableCell className= "font-medium">{tag.name}</TableCell>
                                        <TableCell className= "font-medium">{tag.entryCount}</TableCell>
                                        <TableCell className= "font-medium">{tag.wordCount}</TableCell>
                                        <TableCell> 
                                        <div className="flex space-x-2">

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size = "sm" onClick={() => setEditingTag(tag)}>
                                                        <Pencil className='h-4 w-4 text-blue-300'></Pencil>
                                                    </Button>


                                                </DialogTrigger>

                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle className='text-amber-800'>Edit Tag</DialogTitle>
                                                    </DialogHeader>
                                                    <div className='py-4'>
                                                        <Label htmlFor = "tagName" className = "text-right ">Tag Name</Label>
                                                        <Input className='col-span-3' id = "tagName" value = {editingTag?.name || ''} onChange={(e) => setEditingTag(prev => prev ? { ...prev, name: e.target.value } : null)}></Input>

                                                    </div>

                                                    <div className='flex justify-end'>
                                                        <Button onClick={handleEditTag} className='bg-primary-600 text-amber-700 hover:bg-primary-700 '>Save Changes</Button>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <Button variant = "outline" size = 'sm' onClick ={() => handleDeleteTag(tag.id)}>
                                                <Trash2 className='h-4 w-4 text-red-500'/>
                                            </Button>
                                        </div>
                                        </TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>

                </Card>
            </main>
        </div>
    )
}

export default page