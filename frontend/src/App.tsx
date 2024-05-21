import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>Becha Kena</header>
      <main>
        {
          sampleProducts.map((product) => {
            return (
              <li key={product.slug}>
                <img
                 src={product.image} 
                 alt={product.name} 
                 className='product-image'
                 />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </li>
            )

          })
        }
      </main>
    </div>
  )
}

export default App
