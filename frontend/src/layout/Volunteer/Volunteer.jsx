import Layout from '../../components/Layout/Layout'
import api from '../../services/api';
import TicketTable from './TicketTable'
import { useEffect, useState } from 'react'

const Volunteer = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {

    const fetchData = async () => {
    try {
        const response = await api.get('/hotelmanagement/roomservicingdetails/');
        setTickets(response.data);
    } catch (error) {
        console.error(error)
    }
    };

    fetchData();
}, []);
  

  return (
    <Layout>
        <TicketTable tickets={tickets}/>
    </Layout>
  )
}

export default Volunteer