import { Router } from 'express';
import { 
  createResource, 
  getResources, 
  getResourceById, 
  updateResource, 
  deleteResource 
} from '../controllers/resourceController';

const router = Router();

// Each route handles a different CRUD operation:
router.post('/', createResource);         // Create a new resource
router.get('/', getResources);            // Get all resources
router.get('/:id', getResourceById);      // Get a specific resource by ID
router.put('/:id', updateResource);       // Update a resource by ID
router.delete('/:id', deleteResource);    // Delete a resource by ID

export default router;
