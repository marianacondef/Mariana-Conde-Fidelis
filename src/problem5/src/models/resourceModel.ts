import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
  name: string;
  description: string;
  status: string;
}

const ResourceSchema: Schema = new Schema({
  name: { type: String, required: true },        // Name of the resource, required field
  description: { type: String, required: true }, // Description of the resource, required field
  status: { type: String, required: true }       // Status of the resource, required field
});

export default mongoose.model<IResource>('Resource', ResourceSchema);
