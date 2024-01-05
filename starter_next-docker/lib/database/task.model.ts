import { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: String,
});

const Task = models.Task || model('Task', TaskSchema);

export default Task;