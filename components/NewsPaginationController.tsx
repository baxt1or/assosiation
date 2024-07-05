"use client";
import { useState } from "react";
import { News } from "@prisma/client";
import { Hook } from "./Pagination";
import { NewsCard } from "./NewsCard";

export const NewsPaginationController = ({ data }: { data: News[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {currentPosts.map((post) => (
          <NewsCard
            key={post.id}
            id={post.id}
            imgSrc={post.imgSrc!}
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
          />
        ))}
      </div>

      <Hook
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
