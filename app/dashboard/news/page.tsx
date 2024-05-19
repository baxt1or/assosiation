import { PenBox, PlusCircle, Trash } from 'lucide-react'
import React from 'react'

import { createNews, deleteNews } from '@/actions/news'
import { Button } from '@/components/ui/button'
import { getNews } from '@/db/queries'
import { DeleteButton } from '../_components/delete-button'
import { DialogForm } from '@/components/shared/dialog'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

const NewsPage = async () => {

    const newsData = getNews()
    const [data] = await Promise.all([newsData])
    return (
        <div className='max-w-5xl mx-auto mt-12 p-2'>
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-4xl font-extrabold'>Новости </h1>

                <DialogForm
                    label='+ Добавить'
                >
                    <form action={createNews}>

                        <div className="w-full flex flex-col items-center gap-y-12">
                            <input type="text" name="title" placeholder="Title" className='p-4 w-full rounded-3xl' />

                            <Textarea name="content" placeholder="Content" className='p-4 w-full rounded-3xl' />

                            <label className="border rounded-2xl border-gray-500 aspect-square w-[200px] h-[200px] ">
                                <input type="file" name="imgSrc" />
                                <span className='text-black font-medium text-sm text-center p-12'>Select a file</span>
                            </label>

                            <Button type="submit" className='w-full font-bold text-lg bg-[#001561] text-white hover:bg-gray-500'>
                                Save
                            </Button>
                        </div>
                    </form>
                </DialogForm>
            </div>


            <div className='flex flex-col mt-6 gap-y-4'>

                {data.map((news) => (
                    <div
                        key={news.id}
                        className='flex items-center justify-between p-2'>
                        <p className='text-sm tracking-tighter text-black text-normal'>
                            {news.title}
                        </p>



                        <div className='flex items-center gap-2'>
                            <DeleteButton id={news.id} />
                            <Link href={`/dashboard/news/edit/${news.id}`}>
                                <PenBox className='w-5 h-5 text-green-500' />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NewsPage