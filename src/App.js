import React, {useState} from 'react';
import moment from 'moment';

function App() {
  const [start, setStart] = useState(moment().startOf('week'));
  const [weekState, setWeekState] = useState([]);

  const getWeek = (dir) => {
    const week = [];
    let i = 0;


    while (week.length < 7) {
      if (dir === 1) {
        week.push(moment(start).add(i++, 'day'));
      }
      else {
        week.push(moment(start).subtract(i++, 'day'));
      }
    }
    if (dir === 1) {
      setStart(moment(start).add(i++, 'day'));
    }
    else {
      setStart(moment(start).subtract(i++, 'day'));
    }
    setWeekState([...week])
  }


  return (
    <div className="App">
      <ul>
        {weekState.map((item, idx) => {
          return (
            <li key={idx}>{item.format('MMM Do YYYY')}</li>
          )
        })}
      </ul>
      <button onClick={() => getWeek(0)}>Get Week</button>
      <button onClick={() => getWeek(1)}>Get Week</button>
    </div>
  );
}

export default App;
