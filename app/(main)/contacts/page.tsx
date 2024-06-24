import { Mail, MapPin, Phone } from "lucide-react";

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

export const data = {
  numbers: ["+998 71 232 20 49", "+998 90 0474756"],
  email: "pharm.association@mail.ru",
  address: "ул. Амира Темура, 95 А",
};

const ContactsPage = () => {
  return (
    <section className="mt-28 px-12 py-16 max-w-7xl mx-auto">
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

        <div className="space-y-8">
          <div className="flex flex-col gap-y-6">
            {data.numbers.map((number) => (
              <p className="flex items-center gap-2 text-sm" key={number}>
                <Phone className="h-4 w-4" aria-label="Phone icon" />
                {number}
              </p>
            ))}
            <h1 className="flex items-center gap-2 text-sm font-semibold text-black">
              <Mail className="w-4 h-4" aria-label="Mail icon" />
              {data.email}
            </h1>
            <h1 className="flex items-center gap-2 text-sm font-semibold text-black">
              <MapPin className="w-5 h-5" aria-label="Map pin icon" />
              {data.address}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
