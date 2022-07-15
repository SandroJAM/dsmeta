import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date()

  const [minDate, setMinDate] = useState(min); {/* const [minDate, setMinDate] = useState(new Date()); */ }
  const [maxDate, setMaxDate] = useState(max); {/* const [maxDate, setMixDate] = useState(new Date()); */ }

  const [sales, setSales] = useState<Sale[]>([]); // O nome dos daods e da função que altera dos dados

  // requisição no backend com Axios e useEffect 

  useEffect(() => {

    // Passar argumentos de data que estiverem nos botões das datas

    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    console.log(dmin); // console.log(minDate);

    // console.log("Teste");
    // Fazer uma requisição
    // axios.get("http://localhost:8080/sales")
    // axios.get(`${BASE_URL}/sales`)

    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then(response => {
        // console.log(response.data); <-- Mostrar na TELA
        setSales(response.data.content);
      });

  }, [minDate, maxDate])

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="dsmeta-form-control-container">
        {/*<input className="dsmeta-form-control" type="text" /> */}
        <DatePicker
          // selected={new Date()}
          selected={minDate}
          // onChange={(date: Date) => { }}
          onChange={(date: Date) => setMinDate(date)}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="dsmeta-form-control-container">
        {/*<input className="dsmeta-form-control" type="text" /> */}
        <DatePicker
          // selected={new Date()}
          selected={maxDate}
          // onChange={(date: Date) => { }}
          onChange={(date: Date) => setMaxDate(date)}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
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
            {sales.map(item_sale => {
              return (
                <tr key={item_sale.id}>
                  <td className="responsive992">{item_sale.id}</td>
                  <td className="responsive576">{new Date(item_sale.date).toLocaleDateString()}</td>
                  <td>{item_sale.sellerName}</td>
                  <td className="responsive992">{item_sale.visited}</td>
                  <td className="responsive992">{item_sale.deals}</td>
                  <td>R$ {item_sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      {/*<div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                  </div> */}
                      <NotificationButton />
                    </div>
                  </td>
                </tr>
              )
            })}

            {/* Dados Estáticos
            <tr>
              <td className="responsive992">#341</td>
              <td className="responsive576">08/07/2022</td>
              <td>Enzo Barbosa</td>
              <td className="responsive992">15</td>
              <td className="responsive992">11</td>
              <td>R$553000.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                  </div> 
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
                  <div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                  </div>
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
                  <div className="dsmeta-red-btn">
                    <img src="notification-icon.svg" alt="Notificar" />
                   </div>
                  <NotificationButton />
                </div>
              </td>
            </tr>
          */}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard