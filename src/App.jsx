import React, { useState } from 'react'

export default function App() {
  const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState("")

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    if (lowerInput === "salom") {
      return "Salom! Qanday yordam bera olaman?"
    }
    else if (lowerInput === "qalay") {
      return "Yaxshi, rahmat! Sizda-chi?";
    } else {
      return "Kechirasiz, bu savolga javob bera olmayman.";
    }
  }

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: "user" }
    const botMessage = { text: getBotResponse(userInput), sender: "bot" }
    setMessages(prev => [...prev, userMessage, botMessage])
    setUserInput("")
  }


  return (
    <div className='chatBot-container'>
      <div className='chatBot'>
        <h1>Chat bot</h1>
        <div className='chatBot-messages'>
          {
            messages.map((message, index) => {
              return (
                <div className='message' key={index}>
                  <p style={{
                    backgroundColor: message.sender === "user" ? "#cef" : "#fee",
                    padding: "10px",
                    borderRadius: "10px"
                  }}>{message.text}</p>
                </div>
              )
            })
          }
        </div>
        <div className='chatBot-form'>
          <input type="text" onChange={(event) => setUserInput(event.target.value)} />
          <button onClick={handleSend}>Send !</button>
        </div>
      </div>
    </div>
  )
}
