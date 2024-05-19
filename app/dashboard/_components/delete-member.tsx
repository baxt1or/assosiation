"use client"
import { deleteMember } from '@/actions/members'

import { Trash } from 'lucide-react'


type Props = {
    id: string
}

export const DeletMember = ({ id }: Props) => {
    return (
        <div>
            <Trash className='w-5 h-5 text-red-500' onClick={() => deleteMember(id)} />
        </div>
    )
}
