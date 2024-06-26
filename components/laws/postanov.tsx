

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Download, Scale } from "lucide-react"
import { title } from "process"


const posts = [
    {
        title: "О мерах по дальнейшему совершенствованию порядка обеспечения лекарственными средствами отдельных категорий лиц на льготной основе",
        file: " ",
        date: "Постановление от 22 июля 2013 г."
    },
    {
        title: "О внесении изменений и дополнения в Положение о размещении рекламы",
        file: "",
        date: "Постановление от 19 сентября 2013 г."
    },
    {
        title: "О совершенствовании порядка маркирования и таможенного оформления отдельных видов импортируемых потребительских товаров",
        file: "",
        date: "Постановление от 5 февраля 2014 г"
    },
    {
        title: "О мерах по дальнейшему совершенствованию порядка обеспечения лекарственными средствами отдельных категорий лиц на льготной основе",
        file: " ",
        date: "Постановление от 22 июля 2013 г."
    },
    {
        title: "О внесении изменений и дополнения в Положение о размещении рекламы",
        file: "",
        date: "Постановление от 19 сентября 2013 г."
    },
    {
        title: "О совершенствовании порядка маркирования и таможенного оформления отдельных видов импортируемых потребительских товаров",
        file: "",
        date: "Постановление от 5 февраля 2014 г"
    },
    {
        title: "О мерах по дальнейшему совершенствованию порядка обеспечения лекарственными средствами отдельных категорий лиц на льготной основе",
        file: " ",
        date: "Постановление от 22 июля 2013 г."
    },
    {
        title: "О внесении изменений и дополнения в Положение о размещении рекламы",
        file: "",
        date: "Постановление от 19 сентября 2013 г."
    },
    {
        title: "О совершенствовании порядка маркирования и таможенного оформления отдельных видов импортируемых потребительских товаров",
        file: "",
        date: "Постановление от 5 февраля 2014 г"
    },
    {
        title: "О мерах по дальнейшему совершенствованию порядка обеспечения лекарственными средствами отдельных категорий лиц на льготной основе",
        file: " ",
        date: "Постановление от 22 июля 2013 г."
    },
    {
        title: "О внесении изменений и дополнения в Положение о размещении рекламы",
        file: "",
        date: "Постановление от 19 сентября 2013 г."
    },
    {
        title: "О совершенствовании порядка маркирования и таможенного оформления отдельных видов импортируемых потребительских товаров",
        file: "",
        date: "Постановление от 5 февраля 2014 г"
    },
]

export const Postanovleniye = () => {
    return (
        <div className='flex flex-col mt-12 gap-y-4'>
            <h1 className='text-4xl font-semibold text-black'>Постановления Кабинета Министров РУз</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

                {posts.map((post) => (

                    <Accordion
                        key={post.title}
                        type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">

                            <AccordionTrigger className="text-xs font-light text-center pb-4 h-24">
                                {post.title}
                            </AccordionTrigger>

                            <AccordionContent >
                                <div className="flex items-center justify-between p-4">
                                    <p className="text-xs font-normal">{post.date}</p>

                                    <Download className="w-4 h-4" />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}

            </div>
        </div>
    )
}
