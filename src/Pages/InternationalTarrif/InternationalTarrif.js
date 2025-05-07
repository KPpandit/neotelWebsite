import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import axios from 'axios';

export default function InternationalTarrif() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchTariffData();
  }, []);

  const fetchTariffData = async () => {
    try {
      const res = await axios.get('https://bssproxy01.neotel.nr/abmf-idd/idd/api/v1/tariff/zones');
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch tariff data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ 
      paddingTop: { xs: 15, sm: 15, md: 20 }, 
      paddingX: { xs: 1, sm: 2, md: 3 },
      width: '100%',
      overflow: 'hidden'
    }}>
      <Typography variant="h5" sx={{ 
        fontWeight: 'bold', 
        color: '#253A7D', 
        mb: 2,
        fontSize: { xs: '1.2rem', sm: '1.5rem' }
      }}>
        International Tariff Table
      </Typography>

      {loading ? (
        <Box textAlign="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Table sx={{ minWidth: isSmallScreen ? 600 : '100%' }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#253A7D' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Country</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ISO Codes</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Country Code</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Zone</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Rate (AUD)</TableCell>
                  {/* <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>SMS Price (AUD)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.country2Letter} / {row.country3Letter}</TableCell>
                    <TableCell>{row.countryCode}</TableCell>
                    <TableCell>{row.zone}</TableCell>
                    <TableCell>${row.priceAud.toFixed(2)}</TableCell>
                    {/* <TableCell>${row.smsPriceAud.toFixed(2)}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
            sx={{
                color: '#253A7D',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '& .MuiTablePagination-toolbar': {
                  flexWrap: 'wrap',
                  minHeight: 'auto',
                  padding: 1,
                  [theme.breakpoints.up('sm')]: {
                    padding: '0 2px',
                  },
                },
                '& .MuiTablePagination-selectLabel': {
                  margin: 0,
                  fontSize: '0.875rem',
                  ml: 2, // ✅ Add left margin here
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '0.875rem',
                  },
                },
                '& .MuiTablePagination-displayedRows': {
                  margin: 0,
                  fontSize: '0.875rem',
                  [theme.breakpoints.up('sm')]: {
                    fontSize: '0.875rem',
                  },
                },
                '& .MuiTablePagination-actions': {
                  marginLeft: 'auto',
                },
              }}
              
            labelRowsPerPage="Rows:"
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
          />
        </Paper>
      )}
    </Box>
  );
}