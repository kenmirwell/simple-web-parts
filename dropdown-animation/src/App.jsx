import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)

  const onClick1 = () => {
    setStatus1(!status1)
  }

  const onClick2 = () => {
    setStatus2(!status2)
  }

  return (
    <div className="flex">
      <div className='relative'>
        <div onClick={onClick1} className="z-[9] border border-4 bg-[#0E6BB8] text-[#ffffff] py-[10px] px-[80px] text-[16px]">Dropdown downward</div>
        <div className={`absolute w-[100%] border border-1 overflow-hidden ${status1 ? "opacity-100 visible translate-y-[0px]": "opacity-0 invisible translate-y-[-20px]"} transition-all duration-500 ease`}>
          <div className="py-[10px]">item 1</div>
          <div className="py-[10px]">item 2</div>
          <div className="py-[10px]">item 3</div>
          <div className="py-[10px]">item 4</div>
          <div className="py-[10px]">item 5</div>
          <div className="py-[10px]">item 6</div>
        </div>
      </div>
      <div className='relative'>
        <div onClick={onClick2} className="z-[9] border border-4 bg-[#0E6BB8] text-[#ffffff] py-[10px] px-[80px] text-[16px]">Dropdown upward</div>
        <div className={`absolute w-[100%] border border-1 overflow-hidden ${status2 ? "opacity-100 visible translate-y-[0px]": "opacity-0 invisible translate-y-[20px]"} transition-all duration-500 ease`}>
          <div className="py-[10px]">item 1</div>
          <div className="py-[10px]">item 2</div>
          <div className="py-[10px]">item 3</div>
          <div className="py-[10px]">item 4</div>
          <div className="py-[10px]">item 5</div>
          <div className="py-[10px]">item 6</div>
        </div>
      </div>
    </div>
  )
}

export default App
