import { WebSocketServer } from 'ws'
import readline from 'readline'

import dotenv from 'dotenv'
dotenv.config()

const server = new WebSocketServer({ port: process.env.FIRST_LAPTOP_WS_PORT })

// Create a readline interface to allow sending messages interactively
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

server.on('connection', (socket) => {
    console.log('Client connected')

    // Send a message to the client right after connection
    socket.send('Hello from the server!')

    // Function to prompt the user for a message and send it to the client
    const sendMessageToClient = () => {
        rl.question('Enter a message to send to the client: ', (message) => {
            socket.send(message)  // Send the message to the client
            sendMessageToClient()  // Prompt again to send another message
        })
    }

    sendMessageToClient()  // Start prompting for messages

    // When the server receives a message from the client
    socket.on('message', (message) => {
        console.log('Received from client:', message.toString())
    })

    socket.on('close', () => console.log('Client disconnected'))
})

console.log('WebSocket server running on port 8080')
