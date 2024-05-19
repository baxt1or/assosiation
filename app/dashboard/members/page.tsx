
import React from 'react'

import { getMembers } from '@/db/queries'
import { createMember } from '@/actions/members'
import { Button } from '@/components/ui/button'
import { DeletMember } from '../_components/delete-member'
import { DialogForm } from '@/components/shared/dialog'
import Link from 'next/link'
import { PenBox } from 'lucide-react'

const NewsDashboard = async () => {

    const data = await getMembers()

    return (
        <div className='mt-24'>
            <div className='max-w-5xl mx-auto flex flex-col gap-y-8'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-4xl text-black font-extrabold'>Компании</h1>


                    <DialogForm
                        label='+ Добавить'
                    >
                        <form action={createMember}>

                            <div className="w-full flex flex-col items-center gap-y-4">
                                <label className='text-center text-4xl font-bold text-black'> Добавить</label>
                                <input type="text" name="title" placeholder="Title" className='p-4 w-full rounded-3xl border-gray-500 border' />
                                <input type="text" name="webLink" placeholder="Website Link" className='p-4 w-full rounded-3xl border-gray-500 border' />
                                <input type="text" name="email" placeholder="Email" className='p-4 w-full rounded-3xl border-gray-500 border' />
                                <input type="text" name="address" placeholder="Address" className='p-4 w-full rounded-3xl border-gray-500 border' />
                                <input type="text" name="phone" placeholder="Phone Number" className='p-4 w-full rounded-3xl border-gray-500 border' />
                                <input type="file" name="imgSrc" />

                                <Button type="submit" className='w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500'>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </DialogForm>



                </div>


                <div className='flex flex-col gap-y-4'>
                    {data.map((member) => (
                        <div
                            key={member.id}
                            className='flex items-center justify-between'
                        >
                            <p className='text-lg text-black font-bold'>
                                {member.title}
                            </p>
                            <div className='flex items-center gap-2'>
                                <DeletMember
                                    id={member.id}
                                />
                                <Link href={`/dashboard/members/edit/${member.id}`}>
                                    <PenBox className='w-5 h-5 text-green-500' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsDashboard