import { cache } from "react";
import db from "./db";

import { unstable_noStore as noStore } from "next/cache";



export const getMembers = cache(async () => {

    noStore()
    const data = await db.member.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return data

})


export const getNews = cache(async () => {
    noStore()
    const data = await db.news.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return data
})

export const getNewsSingle = cache(async (id: string) => {
    noStore()
    const data = await db.news.findUnique({
        where: {
            id: id
        }
    })

    return data
})



export const getRequests = cache(async () => {
    noStore()
    const data = await db.request.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    })

    return data
})

export const getMember = cache(async (id: string) => {
    noStore()
    const data = await db.member.findUnique({
        where: {
            id: id
        }
    })

    return data
})