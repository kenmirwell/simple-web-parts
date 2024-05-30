import React from 'react'
import Modal from '../Modal/Modal'
import { useState } from "react"

const ThirdPage = () => {
    const [status, setStatus] = useState(false)

    const onClick = () => {
        setStatus(!status)
    }
    return (
        <>
            <div onClick={onClick}>
                <div className="cursor-pointer">Third</div>
            </div>
            <Modal 
                status={status}
                onClick={onClick}
            />
        </>
    )
}

export default ThirdPage