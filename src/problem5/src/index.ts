import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import resourceRoutes from './routes/resourceRoutes';  

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Route for resources
app.use('/api/resources', resourceRoutes);

// Simple health check route
app.get('/', (req: Request, res: Response) => {
  res.send('API is working!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
