import React, { useState } from 'react'
import { useFormik } from 'formik'
import Tour from './Tour'
import Refresh from './Refresh'
const Tours = ({ tours }) => {
  console.log('[tours]', tours)
  const [data, setData] = useState(tours)
  const formik = useFormik({
    initialValues: {
      search: ''
    }
  })
  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    console.log(newTours)
    setData(newTours)
  }
  const refreshData = () => {
    return setData(tours)
  }
  const searchTour = (word) => {
    const tour = tours.filter((tour) => {
      if (tour.name.toLowerCase().includes(word)) {
        console.log(tour)
        return tour
      }
      return false
    })
    setData(tour)
  }
  if (data.length === 0) {
    return <Refresh refreshData={refreshData} />
  }
  return (
    <><h1>Our Tours</h1>
      <div className='line' />
      <section>
        <form
          onChange={() => {
            searchTour(formik.values.search)
          }}
        >
          <input
            type='text'
            className='search'
            id='search'
            onChange={formik.handleChange}
            value={formik.values.search}
          />
        </form>
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </section>
    </>
  )
}

export default Tours
