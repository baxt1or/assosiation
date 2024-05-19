
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'


type Props = {
    id: string
    title: string
    imgSrc: string
    createdAt: Date
}
export const NewsCard = ({ id, title, imgSrc, createdAt }: Props) => {
    return (
        <div
            className=" w-auto h-auto rounded-lg shadow-md ring-0 ring-slate-900/5 p-4 bg-white"
        >
            <div className='w-wull h-[200px] relative'>
                <Image
                    src={`https://vvbrvusffcjmdqsfnemd.supabase.co/storage/v1/object/public/images/${imgSrc}`}
                    alt='image'
                    fill
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>

            <div className='space-y-2 px-2'>
                <h1 className="text-xl font-semibold text-[#001561] mt-6 ">
                    {title}
                </h1>

                <div className='flex items-center justify-between'>
                    <p className='text-xs text-muted-foreground'>01.01.2024</p>
                    <Link

                        href={`/news/${id}`}
                        className={cn(buttonVariants({ variant: "secondary" }), 'bg-white text-neutral-700 font-normal border border-gray-300')}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}
