import React, { useState } from 'react'

function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
        search(valueInput)
    }

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

  return (
    <div className='searchDiv'>
        <form onSubmit={handleFormSubmit}>
            <label>Ne Ariyorsunuz?</label>
            <input value={valueInput}  onChange={handleChange} />
        </form>
    </div>
  )
}

export default SearchHeader