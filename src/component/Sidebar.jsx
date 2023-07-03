import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


const Sidebar = ({children}) => {
  const menuItem=[
    {
      path:"/",
      number:1,
      name:"step1",
      infor:"YOUR INFO"
    },
    {
      path:"/step2",
      number:2,
      name:" step2",
      infor:"SELECT PLAN"
    },
    {
      path:"/step3",
      number:3,
      name:"step3",
      infor:"ADD-ONS"
    },{
      path:"/step4",
      number:4,
      name:"step4",
      infor:"SUMMARY"
    }
  ]
  
  return (
    <div className="sidebar-container">
      <div className='sidebar'>
        <div className='top-section'>
          <h1 className='logo'>Japh</h1>
          <div className='bars'><FaBars/></div>

        </div>
        {
          menuItem.map((item,index)=>(
            <Link to={item.path} key={index} className='link' activeclassName='active'>
              <div className="link-number">{item.number}</div>
              <div>
              <div className="name">{item.name}</div>
              <div className="link-text">{item.infor}</div>
            
              </div>
             
            </Link>
          ))
        }



      </div>
      <main>{children}</main>
      
      
    </div>
  )
}

export default Sidebar