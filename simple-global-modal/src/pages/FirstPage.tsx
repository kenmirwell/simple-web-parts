import React from 'react'
import Modal from '../Modal/Modal'
import { useState } from "react"

const FirstPage = () => {
    const [status, setStatus] = useState(false)
    const [fields, setFields] = useState({})

    const onClick = (props: any) => {
        setStatus(!status)
    }

    const onChange = (data: any) => {
        setFields({
            ...fields,
            [data.target.id]: data.target.value
        })
    }

    console.log("fields", fields)

    return (
        <>
            <div onClick={onClick}>
                <div className="cursor-pointer">First</div>
            </div>
            <Modal 
                status={status}
                onClick={onClick}
                onChange={(e: any) => {onChange(e)}}
            />
        </>
    )
}

export default FirstPage