import { Request, Response } from 'express';  
import Resource from '../models/resourceModel';

// Create 
export const createResource = async (req: Request, res: Response) => {
  try {
    const resource = new Resource(req.body);  // Create a new Resource instance with the data from the request body
    await resource.save();  
    res.status(201).json(resource);  // 201 status code (Created)
  } catch (error) {
    res.status(500).json({ message: 'Error creating resource', error });  // Internal Server Error
  }
};

// Read
export const getResources = async (req: Request, res: Response) => {
  try {
    const resources = await Resource.find();  // Fetch all resources from the database
    res.json(resources);  
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
};

// Get a specific resource by ID
export const getResourceById = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findById(req.params.id);  // Find a resource by unique ID
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });  // If not found, return Not Found status
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resource', error });
  }
};

// Update
export const updateResource = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Update with new data
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json(resource);  // Respond with the updated resource
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource', error });
  }
};

// Delete
export const deleteResource = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);  
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json({ message: 'Resource deleted successfully' }); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error });
  }
};
