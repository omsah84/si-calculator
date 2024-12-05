import { useState } from 'react';
import './App.css';

function App() {
  let [result, setResult] = useState(0);
  let [amount, setAmount] = useState('');
  let [rate, setRate] = useState('');
  let [time, setTime] = useState('');

  const onChangeAmount = (event) => {
    let amount = event.target.value;
    setAmount(amount);
  }
  const onChangeRate = (event) => {
    let rate = event.target.value;
    setRate(rate);
  }
  const onChangeTime = (event) => {
    let time = event.target.value;
    setTime(time);
  }

  const onClickResult = () => {
    let ans = amount * rate * time / 100;
    setResult(Math.round(ans));
  }
  const onClickReset = () => {
    setAmount('');
    setRate('');
    setTime('');
  }
  return (
    <div className="App">
      <div className='title'>
        <h2>Simple Calculator</h2>
        <p>Calculate your simple interest Easily.</p>
      </div>

      <div className='result'>
        <span className="material-symbols-outlined result_icon">
          currency_rupee
        </span><spam className='result_icon'>{result}</spam>
        <p>Total Simple Interest</p>
      </div>

      <div className='input'>
        <label><span className="material-symbols-outlined icon">
          currency_rupee
        </span>Principal amount</label><br />
        <input type='number' className='input_input' value={amount} onChange={onChangeAmount}></input>
      </div>

      <div className='input'>
        <label>Rate of interest (p.a) %</label><br />
        <input type='number' className='input_input' value={rate} onChange={onChangeRate}></input>
      </div>

      <div className='input'>
        <label className='label'>Time period(Yr)</label><br />
        <input type='number' className='input_input' value={time} onChange={onChangeTime}></input>
      </div>

      <div className='btn_group'>
        <button type='submit' onClick={onClickResult} className='btn'>Calculate</button>
        <button className='btn' onClick={onClickReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
