import React from 'react';

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",
})=>{
    return(
    <div className='flex flex-col gap-1'>
        <label htmlFor={title} className='text-gray-900 font-sans'>{title}</label>
        <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='rounded-md h-10 p-2'>
            {currencies?.map((currency)=>{
                return(
                    <option value={currency} key={currency}>
                    {currency}
                </option>
                )
            })};
        </select>
    </div>
    )
}

export default CurrencyDropdown;