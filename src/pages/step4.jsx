import {Link} from 'react-router-dom'

const step4 = () => {
  return (
    <div className='container'>
       <h2>Finishing up</h2>
       <p>Double-check everything looks OK before confirming</p>
       <div className='adds-content1'>
          <div className='adds-archade'>
            <div>
              <p>Archade(Montly)</p>
              <a href="#">Change</a>
            </div> 
            <p>+$9/mo</p>
          </div>
          <div className='adds-archade'>
            <div>
              <p>Online service</p>
              
            </div> 
            <p>+$2/mo</p>
          </div>
          <div className='adds-archade'>
            <div>
              
              <p>Large storage</p>
            </div> 
            <p>+$1/mo</p>
          </div>
          <div className='adds-archade'>
            <div>
              
              <p>Total (per month)</p>
            </div> 
            <p>+$12/mo</p>
          </div>
          </div>
        <div className='buttons'>
            <Link to='/step3' className='back'> Go Back</Link>
            <Link to='/step5' className='btn'>Confirm</Link>
        
        </div>
    
  </div>)
}

export default step4