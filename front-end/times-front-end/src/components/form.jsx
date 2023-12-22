import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import "../components/Form.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#036564', // substitua '#corPrimaria' pela cor que você deseja
    },
    secondary: {
      main: '#f9f9f9', // substitua '#corSecundaria' pela cor que você deseja
    },
  },
});

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch('https://fullstack-time-de-futebol-production.up.railway.app/criar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div id='card2'>
      <div id='text_table_create'>
          <p id='create_p'>Cadastro de Time:</p>
      </div>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom={2} marginTop={2}>
            <TextField {...register('nome')} label="Nome" fullWidth  variant="filled"/>
          </Box>
          <Box marginBottom={2}>
            <TextField {...register('n_jogadores')} label="Número de Jogadores" fullWidth  variant="filled"/>
          </Box>
          <Box marginBottom={2}>
            <TextField {...register('valor_clube')} label="Valor do Clube" fullWidth  variant="filled"/>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button type="submit" style={{ backgroundColor: '#036564', color: 'white', width: '20%', height:'40px', marginTop: '15px'}}>Enviar</Button>
          </Box>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default Form;
