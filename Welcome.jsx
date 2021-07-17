import React, {Component} from 'react'
import './style.css'



class Welcome extends Component{


  render(){

    const name = ['Ahsan', 'Huq', 'Nul', 'Shibu', 'abu']
    const items = name.map((item, ind) =>{

      return <li key={ind}>{ind} = {item}</li>
    })

    return(

      <div>   

         <strong >Student's Name  </strong><br></br><br></br>
  
        {items}
      
             
      </div>
    )
  }

}

export default Welcome;

