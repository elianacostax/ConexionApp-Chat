import { ChatEngine } from 'react-chat-engine';
import './App.css'
import {ChatFeed, LoginForm} from './components'

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
  <ChatEngine
  height="100vh"
  projectID="bdb30ced-ceea-436e-bdba-872a97124968"
  userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />} 

  />
  );
}

export default App;