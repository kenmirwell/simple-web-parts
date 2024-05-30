import React, { useState } from "react"

const Modal = (props: any) => {
    const status = props.status
    
    return (
        <>
            {status && <div onClick={props.onClick} className="absolute w-full h-screen bg-[#000000] top-0 opacity-[20%] left-0"/>}
            <div className={`absolute flex justify-center w-[100%] top-[50%] mx-auto left-0 ${status ? "opacity-100 visible translate-y-[0px]": "opacity-0 invisible translate-y-[-20px]"} transition-all ease`}>
                <div className="rounded p-[20px] border border-4 w-[50%] flex flex-col gap-[20px] bg-[#ffffff]">
                    <input onChange={props.onChange} id="text-field-A" type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                    <input onChange={props.onChange} id="text-field-B" type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                    <input onChange={props.onChange} id="text-field-C" type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                    <input onChange={props.onChange} id="text-field-D" type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                </div>
            </div>
        </>
    )
}

export default Modal