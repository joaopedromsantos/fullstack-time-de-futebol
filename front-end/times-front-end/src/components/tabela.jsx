import { useEffect, useState } from 'react';
import './Tabela.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress'; // Importe o componente CircularProgress

function Tabela() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true); // Adicione um estado para rastrear o carregamento

  const getTimes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTimes(data);
    setLoading(false); // Defina o carregamento como falso após os dados serem carregados
    console.log(JSON.stringify(data));
  }

  useEffect(() => {
    getTimes("https://fullstack-time-de-futebol-production.up.railway.app/")
  }, []);

  return (
    <div id='card'>
      <div id='table_config'>
        <div id='text_table'>
          <p>Times Cadastrados:</p>
        </div>
        <div id='container_table'>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress />
        </div>
         ) : (
            <TableContainer sx={{ borderRadius: 2,  color: 'primary.main' }}>
              <Table>
                <TableHead className="customTableHead" >
                  <TableRow>
                    <TableCell sx={{color:'#f9f9f9' }}>Id</TableCell>
                    <TableCell sx={{color:'#f9f9f9' }}>Nome</TableCell>
                    <TableCell sx={{color:'#f9f9f9' }}>Número de Jogadores</TableCell>
                    <TableCell sx={{color:'#f9f9f9' }}>Valor do Clube</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {times.map(time => (
                    <TableRow key={time.id}>
                      <TableCell>{time.id}</TableCell>
                      <TableCell>{time.nome}</TableCell>
                      <TableCell>{time.n_jogadores}</TableCell>
                      <TableCell>{time.valor_clube}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabela;
