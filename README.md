# WebSocket Chat Between Laptops Over WiFi

I created a small project where I connected two laptops using **Node.js WebSocket** over a **WiFi IP address**. This allows real-time messaging between the two devices.

## How It Works

1. **Laptop 1** runs a WebSocket **server**.
2. **Laptop 2** connects as a **client** using the **WiFi IP address** of Laptop 1.
3. Messages can be sent and received **in real-time**.

## Technologies Used

- **Node.js**
- **WebSocket (`ws` package)**
- **dotenv** (to hide the WiFi IP address)

## Steps to Run

1. **Install dependencies**:
   ```sh
   pnpm install
2. **Create a .env file and add the WiFi IP address**:
   ```sh
   WIFIADDRESS=ws://192.168.X.X:8080
   Replace 192.168.X.X with your actual WiFi IP address.
3. **Start the WebSocket Server (Laptop 1): On Laptop 1, run the following command**:
   ```sh
   pnpm start
4. **Start the WebSocket Client (Laptop 2): On Laptop 2, run the following command**:
   ```sh
   pnpm start
5.**Send and Receive Messages**:
  - Once connected, you can send messages from Laptop 2 to Laptop 1.
  - Laptop 1 will respond back to Laptop 2 with confirmation messages. 
## Future Improvements:
  - Extend the project to allow communication between laptops using PC IP addresses.
  - Implement additional features such as broadcasting messages to multiple devices or adding user authentication.
