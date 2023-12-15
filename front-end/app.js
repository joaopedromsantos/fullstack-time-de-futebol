document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Faz a requisição para a API Fastify
      const response = await fetch('http://localhost:3000/times');
      
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }
  
      // Converte a resposta para JSON
      const times = await response.json();
  
      // Exibe os resultados na tela
      const timesList = document.getElementById('times-list');
      times.forEach(time => {
        const listItem = document.createElement('li');
        listItem.textContent = `${time.nome} - Jogadores: ${time.n_jogadores} - Valor: ${time.valor_clube}`;
        timesList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Erro ao consumir a API:', error.message);
    }
  });
  