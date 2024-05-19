import React from 'react'


import image from '@/public/icon.png'
import { Book, Download, Scale, Scale3D } from 'lucide-react'
import { Postanovleniye } from '@/components/laws/postanov'
import { Zasedaniy } from '@/components/laws/zasedaniy'

const laws = [
    {
        title: "О защите прав потребителя",
        file: "./zashite.pdf"
    },
    {
        title: "О лекарственных средствах и фармацевтической деятельности",
        file: "./drugs.pdf"
    },
    {
        title: "Об охране здоровья граждан",
        file: "./oxrane.pdf"
    },
    {
        title: "О рекламе",
        file: "./reklama.pdf"
    },
]


const books = [
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },

    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },

    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },

    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
    {
        title: "О последовательном продолжении осуществляемых в системе здравоохранения реформ и создании необходимых условий для повышения потенциала медицинских работников",
        file: "",
        date: "Указ 05.05.2021"
    },
]




const LawsPage = () => {
    return (
        <section className='w-full pb-6 bg-gray-50 pt-16'>
            <div className='max-w-7xl mx-auto flex flex-col gap-y-8 p-6'>

                <div className='flex flex-col mt-12 gap-y-4'>
                    <h1 className='text-4xl font-semibold text-black'> Законы Республики Узбекистан</h1>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                        {laws.map((law) => (
                            <div
                                key={law.title}
                                className='w-auto  h-auto border border-gray-200 rounded-3xl shadow-sm bg-white p-4'>

                                <div className='flex  items-center justify-between'>

                                    <div className='flex items-center gap-2'>
                                        <Book className='w-12 h-12 text-[#001561]' />
                                        <p className='text-xs font-normal text-black'>{law.title}</p>
                                    </div>


                                    <a href={law.file}>
                                        <Download className='h-5 w-5' />
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>



                <div className='flex flex-col mt-12 gap-y-4'>
                    <h1 className='text-4xl font-semibold text-black'>Указы, постановления и распоряжения Президента РУз</h1>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

                        {books.map((book) => (
                            <div
                                key={book.title}
                                className='w-auto h-auto border border-gray-200 rounded-3xl shadow-sm bg-white p-4'>

                                <div className='flex  items-center justify-between'>

                                    <div className='flex items-center gap-4'>
                                        <Scale className='w-12 h-12 text-[#001561]' />
                                        <div className='flex flex-col gap-y-1'>
                                            <p className='text-xs font-normal text-black tracking-tighter'>{book.title}</p>
                                            <p className='text-xs font-normal text-black'>{book.date}</p>
                                        </div>

                                    </div>

                                    <Download className='h-12 w-12' />

                                </div>

                            </div>
                        ))}

                    </div>
                </div>



                <Postanovleniye />


                <Zasedaniy />



            </div>
        </section>
    )
}

export default LawsPage