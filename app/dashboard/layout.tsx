

import { DashboardSidebar } from './_components/sidebar'

type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <DashboardSidebar />

            <div className='pl-[200px]'>
                {children}
            </div>

        </>
    )
}

export default DashboardLayout