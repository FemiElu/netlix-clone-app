import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId='1'title='Up Coming' fetchURL={requests.requestHorror}/>
    <Row rowId='2'title='Up Coming' fetchURL={requests.requestTrending}/>
    <Row rowId='3'title='Up Coming' fetchURL={requests.requestPopular}/>
    <Row rowId='4'title='Up Coming' fetchURL={requests.requestTopRated}/>
    <Row rowId='5'title='Up Coming' fetchURL={requests.requestUpcoming}/>

    </>
  )
}

export default Home