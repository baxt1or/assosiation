import { Download } from "lucide-react";

export const metadata = {
  title: "Членство",
};

const Membership = () => {
  return (
    <section className="my-28 p-12 max-w-7xl mx-auto flex flex-col ">
      <h1 className="text-2xl md:text-4xl font-semibold text-[#001561]">
        УСЛОВИЯ ПО ВСТУПЛЕНИЮ В РЯДЫ АССОЦИАЦИИ
      </h1>

      <ul className="list-disc pl-6 mt-4 items-start gap-y-4  text-black font-normal text-sm md:text-lg">
        <li>Полное соглашение с условиями вступления (Положение Устава)</li>
        <li>Свидетельство об аккредитации Производителя (копия документа)</li>
        <li>Профиль компании</li>
        <li>Свидетельствующие документы GMP Производителя</li>
        <li>Принятие Кодекса маркетинговой практики (разработка Ассоциации)</li>
        <li>
          Информация о медицинских представителях (копия диплома, иные
          свидетельства)
        </li>
        <li>Вступительный (ежегодный) членский взнос в размере 11 млн. сум</li>
        <li>Заявление о вступлении в Ассоциацию.</li>
        <li>Собеседование</li>
      </ul>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-y-8">
        <h1 className="flex flex-col items-start text-start text-sm md:text-lg">
          В случае Вашей заинтересованности можете направить заявление по
          адресу:
          <span className="underline">pharm.association@mail.ru</span>
        </h1>

        <a href="./spisok.pdf">
          <Download className="h-6 w-6" />
        </a>
      </div>

      <h1 className="text-center font-semibold text-black text-sm md:text-lg mt-12  items-center justify-center">
        Согласно Уставу, вопрос о вступлении в ряды Ассоциации рассматривается
        членами Правления.
      </h1>
    </section>
  );
};

export default Membership;
