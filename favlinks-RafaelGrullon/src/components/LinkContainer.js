import { useState } from 'react'
import Form from './Form'
import Table from './Table'
// import Table from './Table';
// import Form from './Form';

const LinkContainer = (props) => {
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            //copying the array
            const settingTheState = [...userTask]

            //removing at the index
            settingTheState.splice(index)
            
            //copying the array back

            userTask(settingTheState)
            
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
  
      //as long as they are not empty
      while (userName != "" && userLink != "") {
      const addNewFavLink = {userName: userName, userLink: userLink}
      setName = ("")
      setLink = ("")

      //adding the new favlinks to the array
      settingTheTask([...userTask,addNewFavLink])
    }
    
}
  // removeIt = props.handleRemove
  // addNew = props.handleSubmit

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {
      
      /*TODO - Add Table Component */

      <Table addNew = {props.handleSubmit} dataToAdd = {props.tasks}/>
      
      }

      <br />

      <h3>Add New</h3>
      {
      
      /*TODO - Add Form Component */

      <Form newForm = {props.handleSubmit}
            settingTheName = {setName}  
            settingTheLink = {setLink} 
            userName = {userName} 
            userLink = {userLink} 
            
            />
      }

    </div>
  )
}

const [userName, setingTheName] = useState("")
const [userTask, settingTheTask] = useState([])
const [userLink, setingTheLink] = useState("")

export default LinkContainer
