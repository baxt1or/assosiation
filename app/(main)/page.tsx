import { Companies } from '@/components/companies'

import { Home } from '@/components/home'
import { InfoAbout } from '@/components/info'
import { ListOfMembers } from '@/components/list-members'
import { News } from '@/components/news/news'
import { getMembers } from '@/db/queries'
import { Info } from 'lucide-react'
import React from 'react'

const HomePage = () => {

    return (
        <>

            <Home />
            <Companies />

            <InfoAbout />


            <ListOfMembers />

            <News />

        </>
    )
}

export default HomePage