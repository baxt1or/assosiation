"use client"
import { deleteNews } from '@/actions/news'
import { Trash } from 'lucide-react'


type Props = {
    id: string
}

export const DeleteButton = ({ id }: Props) => {
    return (
        <div>
            <Trash className='w-5 h-5 text-red-500' onClick={() => deleteNews(id)} />
        </div>
    )
}
