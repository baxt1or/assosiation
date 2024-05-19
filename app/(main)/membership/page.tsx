import { Download } from 'lucide-react';
import Link from 'next/link';



const Membership = () => {
    return (
        <section className='w-full  pt-28 bg-gray-50 flex p-12'>

            <div className='max-w-7xl mx-auto flex flex-col   '>

                <h1 className='text-4xl font-semibold text-[#001561]'>
                    УСЛОВИЯ ПО ВСТУПЛЕНИЮ В РЯДЫ АССОЦИАЦИИ
                </h1>

                <ul className='list-disc pl-6 mt-4 items-start gap-y-4 text-lg text-black font-normal'>
                    <li>Полное соглашение с условиями вступления (Положение Устава)</li>
                    <li>Свидетельство об аккредитации Производителя (копия документа)</li>
                    <li>Профиль компании</li>
                    <li>Свидетельствующие документы GMP Производителя</li>
                    <li>Принятие Кодекса маркетинговой практики (разработка Ассоциации)</li>
                    <li>Информация о медицинских представителях (копия диплома, иные свидетельства)</li>
                    <li>Вступительный (ежегодный) членский взнос в размере 11 млн. сум</li>
                    <li>Заявление о вступлении в Ассоциацию.</li>
                    <li>Собеседование</li>
                </ul>



                <div className='flex flex-col md:flex-row justify-between items-center mt-6 gap-y-8'>
                    <h1 className='flex flex-col items-start text-start'>
                        В случае Вашей заинтересованности можете направить заявление по адресу:
                        <span className='underline'>
                            pharm.association@mail.ru
                        </span>
                    </h1>


                    <a href="./spisok.pdf">
                        <Download className='h-6 w-6' />
                    </a>



                </div>


                <h1 className='text-center font-semibold text-black text-lg mt-12  items-center justify-center'>
                    Согласно Уставу, вопрос о вступлении в ряды Ассоциации рассматривается членами Правления.
                </h1>
            </div>





        </section>
    );
};

export default Membership;
