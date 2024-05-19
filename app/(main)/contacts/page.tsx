import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactsPage = () => {
    return (
        <section className='w-full bg-gray-50 h-full pt-28'>
            <div className='max-w-7xl mx-auto flex flex-col gap-y-8 p-4'>

                <div className='flex flex-col  gap-y-4'>
                    <h1 className='text-4xl font-semibold text-[#001561]'>КОНТАКТЫ</h1>

                    <p
                        className='text-md font-normal text-black'
                    >Если вы относитесь к одной из следующих категорий: клиент, ищущий работу, профессионал в области здравоохранения или медиа, или инвестор, вы можете найти наилучший способ связаться с нами из предложенных вариантов ниже</p>
                </div>



                <div className='flex flex-col md:flex-row items-center justify-between mt-12 gap-y-8 '>
                    <div className='flex flex-col gap-y-4'>
                        <div className=''>
                            <p>Директор Ассоциации - Аскарова Мухаббат Акбаровна</p>

                            <p className='flex items-center gap-4'>
                                <Phone />
                                +998 97 330 55 05
                            </p>
                        </div>

                        <div>
                            <p>Исполнительный директор - Литвиненко Наталья Геннадьевна</p>

                            <p className='flex items-center gap-4'>
                                <Phone />
                                +998 90 924 07 98
                            </p>
                        </div>
                    </div>



                    <div className='flex flex-col gap-y-4 '>
                        <p className="flex gap-2  font-medium text-sm">
                            <Phone className='w-5 h-5' />
                            <span> 71 232 20 49</span>
                        </p>


                        <p className="flex gap-2  font-medium text-sm">
                            <Phone className='w-5 h-5' />
                            <span>90 0474756</span>
                        </p>
                    </div>



                    <p className='flex items-center'>
                        <Mail className='w-5 h-5 mr-2' />
                        <span>pharm.association@mail.ru</span>
                    </p>


                </div>
                <Button className='w-full flex mt-12 ' variant='secondary'>
                    <MapPin className='w-5 h-5 mr-2' />

                    <span>Адрес: 16, Nukus Street, Tashkent, Uzbekistan</span>
                </Button>

            </div>
        </section>
    )
}

export default ContactsPage