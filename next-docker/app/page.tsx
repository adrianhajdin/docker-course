import Link from "next/link";
import { getTasks } from "@/lib/action";

async function Home() {
  const allTasks = await getTasks();

  if (!allTasks) {
    return (
      <main className="p-8 bg-gray-100 min-h-screen">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Registred Tasks</h1>
          <div className="text-gray-600 text-left w-full">
            <p>No tasks found.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">Registred Tasks</h1>
          <Link href="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Task
          </Link>
        </div>
      
        <div className="grid grid-cols-1 gap-6 mt-5">
          {allTasks?.length > 0 &&
            allTasks.map((task) => (
              <div
                key={task._id}
                className="border text-card-foreground bg-white shadow-lg rounded-lg p-2"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {task.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                </div>
                <div className="items-center flex justify-end px-6 pb-6">
                  <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
