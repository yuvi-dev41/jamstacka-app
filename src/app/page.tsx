"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RepoForkedIcon,
  RepoIcon,
  StarIcon,
} from "@primer/octicons-react";
import useHome from "./hooks/useHome";

export default function Home() {
  const { currentPage, gitRepos, handlePreviousClick, handleNextClick } =
    useHome();

  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col p-6"
      tabIndex={-1}
    >
      <h1 className="sr-only">Pinned Repositories</h1>
      <div className="flex flex-col gap-2 max-w-screen-lg mx-auto">
        <h2 className="text-[#e6edf3] text-base font-normal">
          Pinned Repositories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gitRepos.map((repo, index) => (
            <div
              key={`${repo.id}-${index}`}
              className="bg-[#0d1117] border border-[#30363d] rounded-md p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <RepoIcon size={16} aria-label="Git Repo" fill="#848d97" />
                <a
                  href={repo.html_url}
                  className="text-sm text-[#2f81f7] font-semibold"
                  aria-label="Git Repo URL"
                >
                  {repo.name}
                </a>
                <span className="px-1.5 py-0.25 border border-[#30363d] rounded-3xl text-xs font-medium text-[#848d97]">
                  {repo.private ? "Private" : "Public"}
                </span>
              </div>
              <p className="text-xs text-[#848d97] min-h-9 mb-2">
                {repo.description}
              </p>
              <div className="flex items-center gap-4">
                {repo.language && (
                  <span className="flex items-center gap-1 text-xs text-[#848d97]">
                    <span className="w-3 h-3 rounded-full bg-[#f1e05a]"></span>
                    {repo.language}
                  </span>
                )}
                <a
                  href={repo.stargazers_url}
                  className="flex items-center gap-1 text-xs text-[#848d97]"
                  aria-label="Git Repo Star URL"
                >
                  <StarIcon size={16} aria-label="Repo Star" fill="#848d97" />
                  {repo.stargazers_count}
                </a>
                <a
                  href={repo.forks_url}
                  className="flex items-center gap-1 text-xs text-[#848d97]"
                  aria-label="Git Repo Fork URL"
                >
                  <RepoForkedIcon
                    size={16}
                    aria-label="Repo Fork"
                    fill="#848d97"
                  />
                  {repo.forks_count}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="flex items-center justify-center h-8 px-2 text-sm text-[#2f81f7] bg-transparent border border-[#2f81f7] hover:bg-[rgba(177,186,196,0.12)] rounded-md cursor-pointer disabled:text-[#484f58] disabled:border-[#484f58]"
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            {currentPage !== 1 && (
              <ChevronLeftIcon
                size={16}
                aria-label="Previous Page"
                fill="#2f81f7"
              />
            )}
            Previous
          </button>
          <button
            className="flex items-center justify-center h-8 px-2 text-sm text-[#2f81f7] bg-transparent border border-[#2f81f7] hover:bg-[rgba(177,186,196,0.12)] rounded-md cursor-pointer"
            onClick={handleNextClick}
          >
            Next
            <ChevronRightIcon size={16} aria-label="Next Page" fill="#2f81f7" />
          </button>
        </div>
      </div>
    </main>
  );
}
