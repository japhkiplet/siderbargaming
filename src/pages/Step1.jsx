import{Link} from 'react-router-dom'

const Step1 = () => {
  return (
    <div className='subject'>
    <h2>Personal Infor</h2>
    <p>please provide your name, email address and phone number</p> <br />
    <form>
      <section>
        <label>Name:</label> <br />
        <input type="text" placeholder="enter your name" required/><br />
        <label>Email:</label><br />
        <input type="email" placeholder="enter your email" required /><br />
        <label>Phone no:</label><br />
        <input type="tel" placeholder="enter phoneNo"  required/>
      </section>
    </form> <br />
    <div className='btns'>
      <Link to='/step2' className='btn'>NEXT</Link>
    </div>
  </div>
  )
}

export default Step1