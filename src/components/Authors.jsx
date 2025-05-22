import React from 'react'
import Button from './UI/Button/Button';

const Authors = () => {
    return (
        <div className='window'>
            Кулик Руслан Арифович, ПМ-11.<br />
            <br />
            2023
            <br /><br />
            <Button to='/' text='Принять' />
        </div>
    )
}

export default Authors
