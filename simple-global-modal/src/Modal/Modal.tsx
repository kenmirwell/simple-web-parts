import React from "react"

const Modal = () => {
    return (
        <div className="absolute flex justify-center w-[100%] top-[50%] mx-auto">
            <div className="rounded p-[20px] border border-4 w-[50%] flex flex-col gap-[20px]">
                <input type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                <input type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                <input type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
                <input type="text" className="w-[100%] border border-2 px-[20px] py-[10px]" placeholder="type something"/>
            </div>
        </div>
    )
}

export default Modal