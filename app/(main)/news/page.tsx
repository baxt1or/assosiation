import { NewsCard } from "@/components/shared/news-card"
import { getNews } from "@/db/queries"


const NewsPage = async () => {

    const newsData = getNews()
    const [news] = await Promise.all([newsData])

    return (
        <section className='w-full h-auto bg-gray-50 pb-8'>
            <div className='max-w-7xl mx-auto flex flex-col gap-y-8 pt-28 p-4'>
                <h1 className='text-4xl font-semibold text-[#001561]'>Новости</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {news.map((post) => (
                        <NewsCard
                            key={post.id}
                            id={post.id}
                            imgSrc={post.imgSrc!}
                            title={post.title}
                            createdAt={post.createdAt}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default NewsPage