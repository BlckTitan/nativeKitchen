import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function Layout() {

  
  return (
    <section className='bg-indigo-400 flex'>

      <section className='main !bg-red-300'>

        <Row className='h-screen'>
         <p>sidebar navigation</p>
        </Row>
        
      </section>

        <main className='h-screen'>
          <nav className='topNav'>
            <p>top navigation </p>
          </nav>

          <p>main page</p>
          <Outlet/>
        </main>
      
    </section>
  )
}