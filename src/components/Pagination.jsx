import React from 'react'

const Pagination = ({totalPosts, postsPerPage, currentPage, setCurrentPage}) => {
  let pages = [];
  const numPages = Math.ceil(totalPosts / postsPerPage)

  for (let i = 1; i <= numPages; i++) {
    pages.push(i)
  }
  return (
    <div className='pagination'>{
      pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination