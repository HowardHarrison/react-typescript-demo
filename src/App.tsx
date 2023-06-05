import './App.css'
import {Status} from './components/Status'
import {Container} from './components/Container'
import {Button} from './components/Button'
import {Input} from './components/Input'
import { ThemeContextProvider } from './context/ThemeContext'
import { Box } from './context/Box'
import { UserContextProvider } from './context/UserContext'
import { User } from './context/User'
import { Counter } from './class/Counter'
import { Private } from './auth/Private'
import { List } from './Generics/List'
import { RandomNumber } from './restriction/RandomNumber'
import { Toast } from './templateliterals/Toast'
import { CustomButton } from './html/Button'

export default function App() {
  return ( 
    <main>
     <Status status='loading' />
     <Button handleClick={() => {console.log('button clicked', id)}}/> 
     <Input value='' handleChange={(event) => console.log(event)}/>
     <Container styles={{border: '1px solid black', padding: '1rem'}} />
     <ThemeContextProvider>
      <Box/>
     </ThemeContextProvider> 

     <UserContextProvider>
      <User />
     </UserContextProvider> 

     <Counter message='The count value is'/> 
     <Private isLoggedIn={true} component={Profile} /> 
     <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} /> 
     <RandomNumber value={10} isPositive/> 
     <Toast position='left-corner' /> 
     <CustomButton variant='primary' /> 
    </main>
  )
}