import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

import Modal from './Modal/Modal'

function App() {
  const [page, setPage] = useState(1)

  const [data, setData] = useState()

  const onClick = (props) => {
    setPage(props)
  }
  return (
    <div>
      <div className="py-[10px] bg-neutral-600">
        <div className="flex mx-[auto] text-neutral-300 justify-between px-[20px] w-[80%]">
          <div className="text-[16px]">This is a simple global modal, with props drilling</div>
          <div className="flex gap-[20px]">
              <div className="cursor-pointer" onClick={() => onClick(1)}>First</div>
              <div className="cursor-pointer" onClick={() => onClick(2)}>Second</div>
              <div className="cursor-pointer" onClick={() => onClick(3)}>Third</div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] py-[10px] w-[30%] mx-auto border border-4 border-neutral-300 text-neutral-600">
          {
            page === 1 ? <FirstPage/> :
            page === 2 ? <SecondPage/> :
            <ThirdPage/>
          }
      </div>
      <Modal/>
    </div>
  )
}

export default App
