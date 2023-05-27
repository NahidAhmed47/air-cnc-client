import React from 'react'
import Container from '../../components/shared/Container'
import Header from '../../components/rooms/Header'
import RoomInfo from '../../components/rooms/RoomInfo'
import RoomReservation from '../../components/rooms/RoomReservation'

const RoomDetails = () => {
  return (
    <Container>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <Header />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <RoomInfo />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RoomDetails