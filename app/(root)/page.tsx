import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName:'Alex',
    lastName:'Kapone',
    email:'kapone@gmail.com'
  }


  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          {/* Seperate component reused on multiple pages */}
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage your account'
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:777.77}]}
      />
    </section>
  )
}

export default Home