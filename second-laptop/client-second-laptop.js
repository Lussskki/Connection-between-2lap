import WebSocket from 'ws'
import readline from 'readline'

import dotenv from 'dotenv'
dotenv.config()

// Connect to Laptop 1 (server) using its IP address
const socket = new WebSocket(process.env.FIRSTWIFI_IP_ADDRESS)  // Replace with Laptop 1's IP

// Create a readline interface to allow sending messages interactively
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// When the connection is successfully established
socket.on('open', () => {
    console.log('Connected to server')

    // Function to prompt the user for a message and send it to the server
    const sendMessage = () => {
        rl.question('Enter a message to send to the server: ', (message) => {
            socket.send(message)  // Send the message to the server
            sendMessage()  // Prompt again to send another message
        })
    }

    sendMessage()  // Start prompting for messages
})

// When the client receives a message from the server
socket.on('message', (message) => {
    console.log('Server says:', message.toString())  // Log the server's response
})

// When the connection is closed
socket.on('close', () => console.log('Disconnected from server'))

// If there's an error in the WebSocket connection
socket.on('error', (error) => console.error('WebSocket error:', error))
