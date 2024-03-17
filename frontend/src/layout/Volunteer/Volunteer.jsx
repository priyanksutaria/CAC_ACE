import Layout from '../../components/Layout/Layout';

import { useEffect, useState } from 'react';
import Json from '../../timepass';

const Volunteer = () => {
  const [tickets, setTickets] = useState([]);

  return (
    <Layout>
      <Json />
    </Layout>
  );
};

export default Volunteer;
