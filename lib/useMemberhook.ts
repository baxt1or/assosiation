import { useState, useEffect } from "react";
import {
  getMembers,
  getMemberses,
  Member,
  MembersResponse,
} from "@/db/queries";

export const useMembers = (initialPage = 1, itemsPerPage = 10) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const { data, total }: MembersResponse = await getMemberses(
          currentPage,
          itemsPerPage
        );
        setMembers(data);
        setTotalPages(Math.ceil(total / itemsPerPage));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [currentPage, itemsPerPage]);

  return { members, currentPage, totalPages, loading, error, setCurrentPage };
};
