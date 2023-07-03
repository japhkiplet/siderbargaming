import { Link } from 'react-router-dom'

const step3 = () => {
  return (
    <div className='container'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <div className='adds-content'>
        <div className='adds-archade'>
          <input type="checkbox" />
          <div>
            <h3>online services</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className='adds-archade'>
          <input type="checkbox" />
          <div>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className='adds-archade'>
            <input type="checkbox" />
            <div>
              <h3>Customazable Profile</h3>
              <p>Custom theme on your prrofile</p>
            </div>
            <p>+$2/mo</p>
          </div>
       
      </div>
      <div className='buttons'>
          <Link to='/step2' className='back'>back</Link>
          <Link to='/step4' className='btn'>NEXT</Link>

        </div>

      </div>)
}

      export default step3