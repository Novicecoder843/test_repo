import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { KafkaClient, Producer } from 'kafka-node';

const app = express();
const server = createServer(app);
const io = new Server(server);

const kafkaClient = new KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(kafkaClient);

// import express from 'express';
import { PrismaClient } from '@prisma/client';

// const app = express();
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to the database!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
app.get('/', (req, res) => {
  res.send('Hello World!!');
});

io.on('connection', (socket) => {
  console.log('New socket connection:', socket.id);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

producer.on('ready', () => {
  console.log('Kafka producer is ready');
});
