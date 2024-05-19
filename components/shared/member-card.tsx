import { Link2, Mail, MapPin, Phone, ToyBrick } from 'lucide-react'
import Image from 'next/image'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"



type Props = {
    id: string
    imgSrc: string
    title: string
    phoneNumber: string
    webLink: string
    email: string
    address: string
}

export const MemberCard = ({ imgSrc, title, phoneNumber, email, webLink, address }: Props) => {
    return (
        <div
            className="relative w-auto h-auto border border-gray-500 bg-white rounded-3xl p-4 flex flex-col gap-y-4 shadow-lg hover:translate-y-[-5px] transition-all">
            <Image
                src={`https://vvbrvusffcjmdqsfnemd.supabase.co/storage/v1/object/public/images/${imgSrc}`}
                alt="logo"
                width={100}
                height={100}
                className="w-full h-[100px] object-contain"
            />

            <h1 className="text-center font-semibold text-[#001561] text-sm">
                {title}
            </h1>



            <div className="flex gap-4 items-center justify-evenly mt-4">


                <HoverCard>

                    <HoverCardTrigger>
                        <Mail className='w-4 h-4 text-[#001561]' />
                    </HoverCardTrigger>

                    <HoverCardContent className='p-1 mr-0'>
                        <p className='text-xs text-muted-foreground p-0'>{email}</p>
                    </HoverCardContent>

                </HoverCard>

                <HoverCard>

                    <HoverCardTrigger>
                        <Phone className='w-4 h-4 text-[#001561]' />
                    </HoverCardTrigger>

                    <HoverCardContent className='p-3 mr-0'>
                        <p className='text-xs text-black p-0'>{phoneNumber}</p>
                    </HoverCardContent>

                </HoverCard>

                <HoverCard>

                    <HoverCardTrigger>
                        <MapPin className='w-4 h-4 text-[#001561]' />
                    </HoverCardTrigger>

                    <HoverCardContent className='p-1 mr-0'>
                        <p className='text-xs text-muted-foreground p-0'>{address}</p>
                    </HoverCardContent>

                </HoverCard>


                <HoverCard>

                    <HoverCardTrigger>
                        <Link2 className='w-4 h-4 text-[#001561]' />
                    </HoverCardTrigger>

                    <HoverCardContent className='p-1 mr-0'>
                        <p className='text-xs text-muted-foreground p-0'>{webLink}</p>
                    </HoverCardContent>

                </HoverCard>



            </div>

        </div>
    )
}
