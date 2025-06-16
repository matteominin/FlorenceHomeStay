import { useRef, useState, useEffect, useCallback } from 'react';

export const useHorizontalScroll = (loading) => {
    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const updatePagination = useCallback(() => {
        if (!containerRef.current) return;

        const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
        setTotalPages(Math.ceil(scrollWidth / clientWidth));
        setCurrentPage(Math.round(scrollLeft / clientWidth));
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        updatePagination();

        container.addEventListener('scroll', updatePagination);
        window.addEventListener('resize', updatePagination);

        return () => {
            container.removeEventListener('scroll', updatePagination);
            window.removeEventListener('resize', updatePagination);
        };
    }, [updatePagination, loading]);

    const scrollCards = useCallback((direction) => {
        if (!containerRef.current) return;

        const scrollAmount = containerRef.current.clientWidth;
        containerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }, []);

    const scrollToPage = useCallback((pageIndex) => {
        if (!containerRef.current) return;

        containerRef.current.scrollTo({
            left: pageIndex * containerRef.current.clientWidth,
            behavior: 'smooth'
        });
        setCurrentPage(pageIndex);
    }, []);

    return {
        containerRef,
        currentPage,
        totalPages,
        scrollLeft: () => scrollCards('left'),
        scrollRight: () => scrollCards('right'),
        scrollToPage,
    };
};