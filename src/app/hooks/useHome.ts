"use client";

import { useEffect, useState } from "react";

const RECORDS_PER_PAGE = 10;
const useHome = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [gitRepos, setGitRepos] = useState<any[]>([]);

    useEffect(() => {
        const fetchGithubRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/orgs/github/repos?sort=name&per_page=${RECORDS_PER_PAGE}&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch github repo data!");
                }
                const repos = await response.json();
                setGitRepos(repos);
            } catch (error) {
                console.error("Error fetching github repo data:", error);
            }
        };

        fetchGithubRepos();
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
            mainContent.focus();
        }
    }, [currentPage]);

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return {
        currentPage,
        gitRepos,
        handlePreviousClick,
        handleNextClick
    }
}

export default useHome;