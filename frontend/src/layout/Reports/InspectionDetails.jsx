import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Select } from '@chakra-ui/react';

const InspectionDetails = ({ inspections }) => {
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortField(value);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedInspections = inspections.sort((a, b) => {
    if (sortField === '') return 0;
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });


  return (
    <div>
      <Select value={sortField} onChange={handleSortChange} mb={4}>
        <option value="">Sort By</option>
        <option value="VolunteerId">Volunteer ID</option>
        <option value="inspectionDate">Inspection Date</option>
        <option value="VolunteerName">Volunteer Name</option>
        <option value="ItemNumber">Item Number</option>
        <option value="Status"> Status </option>
        <option value="timeTaken">Time Taken (in minutes)</option>
      </Select>

      <Table variant="striped" colorScheme="gray" borderWidth="1px" borderRadius="md">
        <Thead>
          <Tr>
            <Th>Volunteer ID</Th>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Item Number</Th>
            <Th>Status</Th>
            <Th>Time Taken <br></br>(in minutes)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedInspections.map((inspection) => (
            <Tr key={inspection.VolunteerId}>
              <Td>{inspection.VolunteerId}</Td>
              <Td>{inspection.inspectionDate}</Td>
              <Td>{inspection.VolunteerName}</Td>
              <Td>{inspection.ItemNumber}</Td>
              <Td>{inspection.Status}</Td>
              <Td>{inspection.timeTaken}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default InspectionDetails;
