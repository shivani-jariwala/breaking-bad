import React,{useState} from 'react'

const Search = ({ getQuery }) => {

    const [text,setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                    type='text' 
                    className='form-control'
                    placeholder='Search characters'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                    />  
            </form> 
        </section>
    )
}

export default Search
//onChange basically sets the text state to whatever the user types in the search bar
