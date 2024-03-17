import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Layout from '../../components/Layout/Layout';
import { useEffect } from 'react';

const AdminDashboard = () => {
  const Feeding_America = [
    { date: '2024-03-09', itemName: 'Rice', quantity: '90%' },
    { date: '2024-03-08', itemName: 'Chapati', quantity: '75%' },
    { date: '2024-03-10', itemName: 'Burger', quantity: '85%' },
    // Add more data as needed
  ];

  const World_Food_Programme = [
    { date: '2024-03-09', itemName: 'Rice', quantity: '90%' },
    { date: '2024-03-08', itemName: 'Chapati', quantity: '75%' },
    { date: '2024-03-10', itemName: 'Burger', quantity: '85%' },
    // Add more data as needed
  ];

  const Food_for_the_Hungry = [
    { date: '2024-03-09', itemName: 'Rice', quantity: '90%' },
    { date: '2024-03-08', itemName: 'Chapati', quantity: '75%' },
    { date: '2024-03-10', itemName: 'Burger', quantity: '85%' },
    // Add more data as needed
  ];

  useEffect(() => {
    const tableRows = document.querySelectorAll('.custom-table tbody tr');
    tableRows.forEach((row, index) => {
      row.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <Layout>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .custom-table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
          }

          .custom-table th,
          .custom-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e1e1e1;
          }

          .custom-table th {
            background-color: #f5f5f5;
            color: #333;
            font-weight: bold;
            text-transform: uppercase;
          }

          .custom-table tbody tr {
            animation: fadeIn 0.5s ease forwards;
          }

          .custom-table tbody tr:hover {
            background-color: #f9f9f9;
            cursor: pointer;
          }

          .dashboard-heading {
            margin-bottom: 24px;
            text-align: center;
            color: #333;
            font-size: 24px;
          }

          .section-heading {
            margin-bottom: 16px;
            color: #333;
            font-size: 18px;
          }
        `}
      </style>
      <Box p={8}>
        <Heading className="dashboard-heading" as="h1">Admin Dashboard</Heading>

        {/* Feeding_America Section */}
        <Box mb={8}>
          <Heading className="section-heading" as="h2">Feeding America</Heading>
          <Table variant="simple" className="custom-table">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Item Name</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Feeding_America.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.date}</Td>
                  <Td>{item.itemName}</Td>
                  <Td>{item.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* World Food Programme Section */}
        <Box mb={8}>
          <Heading className="section-heading" as="h2">World Food Programme</Heading>
          <Table variant="simple" className="custom-table">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Item Name</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {World_Food_Programme.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.date}</Td>
                  <Td>{item.itemName}</Td>
                  <Td>{item.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Food for the Hungry Section */}
        <Box>
          <Heading className="section-heading" as="h2">Food for the Hungry</Heading>
          <Table variant="simple" className="custom-table">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Item Name</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Food_for_the_Hungry.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.date}</Td>
                  <Td>{item.itemName}</Td>
                  <Td>{item.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Layout>
  );
};

export default AdminDashboard;
