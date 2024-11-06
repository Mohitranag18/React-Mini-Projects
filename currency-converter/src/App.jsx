import { useEffect, useState } from 'react'
import CurrencyDropdown from './components/CurrencyDropdown'

function App() {
  const [currencies, setCurrenncies] = useState()
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState()
  const [converting, setConverting] = useState(false)
  
  //currencies: https://api.frankfurter.app/currencies
  const fetchCurrencies = async ()=>{
    try{
      const res = await fetch('https://api.frankfurter.app/currencies');
      const data = await res.json();

      setCurrenncies(Object.keys(data));
    } catch(error){
      console.error('fetching error', error);
    }
  };

  useEffect(()=>{
  fetchCurrencies();
  },[]);

  const convertCurrency = async ()=>{
    if(!amount) return;
    setConverting(true);
    try{
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();

      setConvertedAmount(data.rates[toCurrency]+ ' ' + toCurrency)
    } catch(error){
      console.error('fetching error', error);
    } finally{
      setConverting(false);
    }
  }
  //conversion: https://api.frankfurter.app/latest?amount=1&from=USD&to=INR


  return (
    <div className='bg-gray-900 flex justify-center items-center h-[100vh] w-[100vw]'>
      <div className="container bg-slate-400 w-96 h-auto rounded-lg flex flex-col p-5">
        <h1 className='mb-4 text-center font-semibold'>Currency Converter</h1>
        <label htmlFor="amount">Amount</label>
        <input type="number" className='rounded-md h-10 p-2' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <div className="dropdown flex flex-col gap-1 mt-4 mb-6">
          
          <CurrencyDropdown currencies = {currencies} currency = {fromCurrency} setCurrency = {setFromCurrency} title = "From:"/>

          <CurrencyDropdown currencies = {currencies} currency = {toCurrency} setCurrency = {setToCurrency} title = "To:"/>

        </div>
        <button onClick={convertCurrency} className={`bg-blue-700 p-2 rounded-md hover:bg-blue-600 ${converting?'animate-ping': ''}`}>Convert</button>

        {convertedAmount && <h1 className='mt-4 text-center'>Converted amount is ${convertedAmount}</h1>}
      </div>
    </div>
  )
}

export default App
