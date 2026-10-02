import { useState } from 'react'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div>
      {/* Navbar de Sonido Vivo */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Sonido Vivo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
            <button className="btn btn-outline-light ms-3">
              Carrito ({cartCount})
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="container my-5">
        <div className="jumbotron p-5 mb-4 bg-light rounded-3 text-center">
          <h1 className="display-4 fw-bold">Bienvenido a Sonido Vivo</h1>
          <p className="lead">Tu tienda especializada en equipos de audio profesional.</p>
        </div>

        {/* Aquí irán tus tarjetas de productos */}
        <section className="my-5">
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Micrófono Condensador</h5>
                  <p className="card-text">$45.000</p>
                  <button className="btn btn-primary" onClick={() => setCartCount(cartCount + 1)}>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App