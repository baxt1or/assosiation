
import { Button, buttonVariants } from './ui/button'
import { DialogForm } from './shared/dialog'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FormRequest } from './shared/form'

export const Home = () => {
    return (

        <section className='w-full h-screen relative'>
            <video src="/dos.mp4" className="w-full h-full object-cover" autoPlay loop muted id="myVideo" />

            <div className='max-w-[1400px] mx-auto pl-4 '>
                <div
                    className="absolute h-full top-0 flex flex-col gap-y-4 justify-center items-start  md:pl-20  md:w-1/2"
                >

                    <h1 className="text-center md:text-left text-[#001561] font-extrabold text-4xl">Ассоциация представительств иностранных фармацевтических компаний и производителей в Республике Узбекистан</h1>

                    <div className='flex items-center gap-4'>


                        <Link
                            href={'/news'}
                            className={cn(buttonVariants({ size: "lg", variant: 'secondary' }), 'px-12 py-8 text-[#001561] font-semibold text-lg')}
                        >
                            Новости
                        </Link>


                        <DialogForm
                            label='Оставить заявку'
                            className='px-12 py-8 bg-[#001561] text-white font-semibold text-lg hover:bg-gray-500'
                        >
                            <FormRequest />
                        </DialogForm>
                    </div>


                </div>
            </div>


        </section>


    )
}


