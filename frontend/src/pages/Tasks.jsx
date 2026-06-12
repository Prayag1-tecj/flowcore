import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

import {
    getTasks,
    createTask,
    deleteTask,
} from "../api/tasks";

function Tasks() {

    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "PENDING",
        due_date: "",
    });

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask(formData);

        setFormData({
            title: "",
            description: "",
            status: "PENDING",
            due_date: "",
        });

        fetchTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <DashboardLayout>

            <div className="space-y-6">

                <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-bold">
                        Tasks
                    </h1>

                    <button
                        onClick={() => navigate("/")}
                        className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-xl"
                    >
                        Dashboard
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-slate-900 p-6 rounded-2xl space-y-4"
                >

                    <input
                        placeholder="Title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value,
                            })
                        }
                        className="w-full p-3 rounded-xl bg-slate-800"
                    />

                    <textarea
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        className="w-full p-3 rounded-xl bg-slate-800"
                    />

                    <input
                        type="date"
                        value={formData.due_date}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                due_date: e.target.value,
                            })
                        }
                        className="w-full p-3 rounded-xl bg-slate-800"
                    />

                    <button
                        className="bg-indigo-600 px-6 py-3 rounded-xl"
                    >
                        Create Task
                    </button>

                </form>

                <div className="grid gap-4">

                    {tasks.map((task) => (

                        <div
                            key={task.id}
                            className="bg-slate-900 p-5 rounded-2xl"
                        >

                            <h3 className="font-bold text-xl">
                                {task.title}
                            </h3>

                            <p className="text-slate-400 mt-2">
                                {task.description}
                            </p>

                            <span
                                className={`inline-block px-3 py-1 rounded-full text-sm ${task.status === "COMPLETED"
                                        ? "bg-green-600"
                                        : task.status === "IN_PROGRESS"
                                            ? "bg-blue-600"
                                            : "bg-yellow-600"
                                    }`}
                            >
                                {task.status}
                            </span>

                            <button
                                onClick={() =>
                                    handleDelete(task.id)
                                }
                                className="mt-4 bg-red-600 px-4 py-2 rounded-xl"
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Tasks;