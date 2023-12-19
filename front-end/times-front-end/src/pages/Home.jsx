import React, { useEffect, useState } from 'react';

function Home() {
  const [times, setTimes] = useState([]);

  const getTimes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTimes(data)
    console.log(JSON.stringify(data))
  }

  useEffect(() => {
    console.log('Teste de console.log');
    getTimes("https://fullstack-time-de-futebol-production.up.railway.app/")
  }, []);

  return (
    <div>
      {times.map(time => (
        <div key={time.id}>
          <h2>{time.nome}</h2>
          <p>Número de jogadores: {time.n_jogadores}</p>
          <p>Valor do clube: {time.valor_clube}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
