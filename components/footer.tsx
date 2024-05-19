import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-[#001561] p-16 max-w-8xl mx-auto ">


            <div className="flex items-center justify-between">


                <div className="flex flex-col items-start gap-y-8">


                    <div className="flex gap-2 items-center max-w-sm">
                        
                        <p className="text-white font-medium text-sm">Ассоциация представительств иностранных фармацевтических компаний и производителей
                            в Республике Узбекистан</p>
                    </div>


                    <div className="flex flex-col gap-y-2">

                        <p className="flex gap-2 text-white font-medium text-sm">
                            <Phone className='w-5 h-5' />
                            <span> 71 232 20 49</span>
                        </p>


                        <p className="flex gap-2 text-white font-medium text-sm">
                            <Phone className='w-5 h-5' />
                            <span>90 0474756</span>
                        </p>

                        <p className="flex gap-2 text-white font-medium text-sm">
                            <Mail className='h-5 w-5' />
                            <span>pharm.association@mail.ru

                            </span>
                        </p>

                        <p className="flex gap-2 text-white font-medium text-sm items-center ">
                            <MapPin className='w-6 h-6 text-white -ml-0.5' />
                            <span>Ориентир:  NEW LEVEL Бизнес-Центр</span>
                        </p>

                    </div>


                </div>


            </div>

        </footer>
    )
}
