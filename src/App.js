import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Footer from './components/LAYOUT/Footer/Footer'
import Header from './components/LAYOUT/Header/Header'
import Main from './components/LAYOUT/Main/Main'

function App() {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState('true')
  const [error] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const url = 'https://rickandmortyapi.com/api/character/?page=4'

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        const myRepo = response.data
        setData(myRepo.results)
        console.log(myRepo.results)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <>
      <Header />
      <Main data={data} />

      <Footer />
    </>
  )
}

export default App
