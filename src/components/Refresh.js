import React from 'react'

const Refresh = ({ refreshData }) => {
  return (
    <main className='page'>
      <h1>no tours left</h1>
      <div className='line' />
      <button onClick={() => refreshData()} className='loadbtn'>
        Refresh
      </button>
    </main>
  )
}

export default Refresh
