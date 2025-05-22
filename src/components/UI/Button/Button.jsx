import React from 'react'
import { Link } from 'react-router-dom'
import bt from './Button.module.css'

const Button = ({ text, to, ...props }) => {
    return (
        <Link to={to} {...props} className={bt.btn}>
            {text}
        </Link>
    )
}

export default Button
