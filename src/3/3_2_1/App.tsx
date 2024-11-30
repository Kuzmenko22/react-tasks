// 3_2_1 Fix a component that’s not updating 
/*
    Компонент Clock получает два пропса: color и time. Когда вы выбираете другой цвет в поле выбора, компонент Clock получает другой пропс color от своего родительского компонента. Однако по какой-то причине отображаемый цвет не обновляется. Почему? Устраните проблему.
*/


import { useState, useEffect } from 'react';
import Clock from './Clock';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
