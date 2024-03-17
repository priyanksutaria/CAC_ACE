import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Select } from '@chakra-ui/react';

const TicketTable = ({ tickets }) => {
  const [urgencyFilter, setUrgencyFilter] = useState('All');

  const filteredTickets = tickets.filter((ticket) => {
    if (urgencyFilter === 'All') {
      return true;
    } else {
      return ticket.urgency === parseInt(urgencyFilter);
    }
  });

  return (
    <div>
      <Select
        value={urgencyFilter}
        onChange={(e) => setUrgencyFilter(e.target.value)}
      >
        <option value='All'>All</option>
        <option value='1'>Low</option>
        <option value='2'>Medium</option>
        <option value='3'>High</option>
      </Select>
      <Table variant='striped' colorScheme='gray' borderWidth='1px'>
        <Thead>
          <Tr>
            <Th>Volunteer ID</Th>
            <Th>Item No</Th>
            <Th>Urgency</Th>
            <Th>Date of Delivery</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTickets.map((ticket) => (
            <Tr key={ticket.Volunteerid}>
              <Td>{ticket.Volunteerid}</Td>
              <Td>{ticket.Item_no}</Td>
              <Td>{ticket.urgency}</Td>
              <Td>{ticket.date_of_Delivery}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TicketTable;
