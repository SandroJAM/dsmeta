import NotificationButton from '../NotificationButton'

import './styles.css'

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="dsmeta-form-control-container">
        <input className="dsmeta-form-control" type="text" />
      </div>
      <div className="dsmeta-form-control-container">
        <input className="dsmeta-form-control" type="text" />
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="responsive992">ID</th>
              <th className="responsive576">Data</th>
              <th>Vendedor</th>
              <th className="responsive992">Visitas</th>
              <th className="responsive992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="responsive992">#341</td>
              <td className="responsive576">08/07/2022</td>
              <td>Enzo Barbosa</td>
              <td className="responsive992">15</td>
              <td className="responsive992">11</td>
              <td>R$553000.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  {/*<div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                  </div> */}
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="responsive992">#342</td>
              <td className="responsive576">08/07/2022</td>
              <td>Barbara Maria</td>
              <td className="responsive992">29</td>
              <td className="responsive992">27</td>
              <td>R$953000.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  {/*<div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                  </div>*/}
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="responsive992">#343</td>
              <td className="responsive576">08/07/2022</td>
              <td>Sandro Muniz</td>
              <td className="responsive992">12</td>
              <td className="responsive992">09</td>
              <td>R$453000.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  {/*<div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                   </div>*/}
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SalesCard