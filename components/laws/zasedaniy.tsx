import { Download, Scale } from 'lucide-react'
import React from 'react'


const zaves = [
    {
        title: "Протокол №4 от 9 февраля 2017 г.",
        file: "",
    },
    {
        title: "Протокол №11",
        file: "",

    },
    {
        title: "Приложение к протоколу №11",
        file: "",
    },
]

export const Zasedaniy = () => {
    return (
        <div className='flex flex-col mt-12 gap-y-4'>
            <h1 className='text-4xl font-semibold text-black'>Протоколы заседаний Республиканской комиссии по контролю за обеспечением лечебных учреждений и населения лекарственными средствами и изделиями медицинского назначения</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

                {zaves.map((book) => (
                    <div
                        key={book.title}
                        className='w-auto h-auto border border-gray-200 rounded-3xl shadow-sm bg-white p-4'>

                        <div className='flex  items-center justify-between'>

                            <div className='flex items-center gap-4'>
                                <Scale className='w-12 h-12 text-[#001561]' />
                                <div className='flex flex-col gap-y-1'>
                                    <p className='text-sm font-normal text-black tracking-tighter'>{book.title}</p>

                                </div>

                            </div>

                            <Download className='h-6 w-6' />

                        </div>

                    </div>
                ))}

            </div>
        </div>

    )
}
