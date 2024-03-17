import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FiAlertCircle, FiBox, FiPackage } from 'react-icons/fi'
import InspectionDetails from './InspectionDetails'

const Reports = () => {
    const inspections = [
        { VolunteerId: 1, inspectionDate: '2024-03-01', VolunteerName: 'John Doe', ItemNumber: '101', Status: 'Delivered', timeTaken: '60' },
        { VolunteerId: 2, inspectionDate: '2024-03-02', VolunteerName: 'Jane Smith', ItemNumber: '102', Status: 'Not Delivered', timeTaken: '45' },
        { VolunteerId: 3, inspectionDate: '2024-03-03', VolunteerName: 'Mike Johnson', ItemNumber: '103', Status: 'Delivered', timeTaken: '90' },
        { VolunteerId: 4, inspectionDate: '2024-03-04', VolunteerName: 'Emily Brown', ItemNumber: '104', Status: 'Not Delivered', timeTaken: '60' },
        { VolunteerId: 5, inspectionDate: '2024-03-05', VolunteerName: 'Alex Clark', ItemNumber: '105', Status: 'Delivered', timeTaken: '120' },
      ];
  return (
    <Layout>
        <Heading>Report</Heading>
        <Text>Date Range</Text>
        <Flex justifyContent="space-between">
          {/* Total FOODITEM DELIVERED */}
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Flex alignItems="center">
              <FiBox size={24} color="blue" />
              <Text ml={2}>Total FOOD ITEM DELIVERED: 100</Text>
            </Flex>
          </Box>
          {/* Total FOOD ITEM NOT DELIVERED */}
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Flex alignItems="center">
              <FiAlertCircle size={24} color="red" />
              <Text ml={2}>Total FOOD ITEM NOT DELIVERED: 5</Text>
            </Flex>
          </Box>
          {/* Total FOOD ITEM PENDING */}
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Flex alignItems="center">
              <FiPackage size={24} color="orange" />
              <Text ml={2}>Total FOOD ITEM PENDING: 10</Text>
            </Flex>
          </Box>
        </Flex>
        <br></br>
        <InspectionDetails inspections={inspections} />
    </Layout>
  )
}

export default Reports