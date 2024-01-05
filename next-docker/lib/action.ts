"use server";

import dbConnect from "./database/connect";
import Task from "./database/task.model";

export async function getTasks() {
  await dbConnect();

  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (err) {
    console.log(err);
  }
}

export async function createTask(params: {
  task: string;
  description: string;
  status: string;
}) {
  await dbConnect();

  const { task, description, status } = params;

  try {
    const newTask = await Task.create({ task, description, status });
    return newTask;
  } catch (err) {
    console.log(err);
  }
}
