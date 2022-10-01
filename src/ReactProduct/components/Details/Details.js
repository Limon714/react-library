import './Details.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const Details = props => {
  const { time } = props
  let total = 0
  for (const plan of time) {
    total = total + parseInt(plan)
  }
  const [timing, setTiming] = useState([])

  const notify = () => toast('Amazing, you did it!')

  return (
    <div className='deatils-container'>
      <div className='profile-container'>
        <img
          className='profile-image'
          src='https://i.postimg.cc/YCMFhzFK/271045300-733772971346315-1581853044690597953-n-modified-2.png'
          alt=''
        />
        <p>
          Mainul Hasan <br />
          📍 Dhaka, Bangladesh
        </p>
      </div>

      <div className='body-details'>
        <p>
          <b>
            58 <small>kg</small>
          </b>
        </p>
        <p>
          <b>
            5.6 <small>feet</small>
          </b>
        </p>
        <p>
          <b>
            22 <small>years</small>
          </b>
        </p>
      </div>

      <p className='take-break-text'>Take a break.</p>
      <div className='take-break-container'>
        <button onClick={e => setTiming(e.target.innerText)}>10</button>
        <button onClick={e => setTiming(e.target.innerText)}>20</button>
        <button onClick={e => setTiming(e.target.innerText)}>30</button>
        <button onClick={e => setTiming(e.target.innerText)}>45</button>
      </div>

      <p className='take-break-text'>Exercise details</p>
      <div className='exercise-container'>
        <p>
          <b>Exercise Time</b>
        </p>
        <p>{total} Seconds</p>
      </div>
      <div className='exercise-container'>
        <p>
          <b>Break Time: </b>
        </p>
        <p> {timing} Seconds</p>
      </div>
      <button onClick={notify} className='success-btn'>
        <p>Successfully Completed</p>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Details
