import { AboutData } from "@/components/AboutData";
import { Phone } from "lucide-react";

export const metadata = {
  title: "Контакты",
};

const contacts = [
  {
    name: "Аскарова Мухаббат Акбаровна",
    position: "Директор Ассоциации",
    number: "+998 97 330 55 05",
  },
  {
    name: "Литвиненко Наталья Геннадьевна",
    position: "Исполнительный директор",
    number: "+998 90 924 07 98",
  },
];

const ContactsPage = async () => {
  return (
    <section className="mt-28 px-12 pb-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#001561] text-center md:text-start">
        Контакты
      </h1>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-32 mt-12 gap-y-8 md:gap-y-0">
        <div className="space-y-8">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="flex flex-col gap-y-2 text-center md:text-left"
            >
              <h1 className="text-md font-bold">{contact.name}</h1>
              <h2 className="text-sm font-semibold text-gray-900">
                {contact.position}
              </h2>
              <p className="flex items-center gap-2 text-sm text-black font-normal justify-center md:justify-start">
                <Phone className="h-4 w-4" aria-label="Phone icon" />
                {contact.number}
              </p>
            </div>
          ))}
        </div>

        <AboutData />
      </div>
    </section>
  );
};

export default ContactsPage;
