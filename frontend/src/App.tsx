
import './index.css'
import { sampleProducts } from './data'
import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap'

function App() {
  return (
    <div className='d-flex flex-column vh-100' >
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <NavbarBrand>
              Becha Kena
            </NavbarBrand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>
              Cart
            </a>
            <a href="/signin" className='nav-link'>
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row>
            {
              sampleProducts.map((product) => {
                return (
                  <Col key={product.slug} sm={6} md={4} lg={3}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='product-image'
                    />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                  </Col>
                )

              })
            }
          </Row>

        </Container>
      </main>
      <footer>
        <div className='text-center'>All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default App
