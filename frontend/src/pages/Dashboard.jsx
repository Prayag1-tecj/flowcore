import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import DashboardLayout from "../layouts/DashboardLayout";

import {
    getTasks,
    getNotes,
} from "../api/tasks";

function Dashboard() {

    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalTasks: 0,
        completedTasks: 0,
        totalNotes: 0,
    });
    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                const taskData = await getTasks();
                setTasks(taskData);

                const notes = await getNotes();

                const completedTasks = taskData.filter(
                    (task) => task.status === "COMPLETED"
                ).length;

                setStats({
                    totalTasks: taskData.length,
                    completedTasks,
                    totalNotes: notes.length,
                });

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchDashboardData();

    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <h2 className="text-xl">
                    Loading Dashboard...
                </h2>
            </DashboardLayout>
        );
    }
    return (
        <DashboardLayout>

            <div className="grid gap-6">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold mb-2">
                            Welcome Back 👋
                        </h1>

                        <p className="text-slate-400">
                            Manage your tasks and notes efficiently.
                        </p>

                    </div>

                    <button
                        onClick={() => navigate("/tasks")}
                        className="bg-indigo-600 px-5 py-3 rounded-xl"
                    >
                        + New Task
                    </button>

                </div>

                <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-slate-400">
                            Total Tasks
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.totalTasks}
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-slate-400">
                            Completed Tasks
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.completedTasks}
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-slate-400">
                            Notes
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.totalNotes}
                        </p>
                    </div>

                </div>

            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h2 className="text-xl font-bold mb-4">
                    Recent Tasks
                </h2>

                {tasks.length === 0 ? (

                    <p className="text-slate-400">
                        No tasks created yet.
                    </p>

                ) : (

                    <div className="space-y-3">

                        {tasks.slice(0, 5).map((task) => (

                            <div
                                key={task.id}
                                onClick={() => navigate("/tasks")}
                                className="flex justify-between items-center border-b border-slate-800 pb-3 cursor-pointer hover:bg-slate-800 rounded-lg p-2 transition"
                            >

                                <div>

                                    <h3 className="font-semibold hover:text-indigo-400">
                                        {task.title}
                                    </h3>

                                    <p className="text-sm text-slate-400">
                                        {task.description}
                                    </p>

                                </div>

                                <span className="text-sm text-slate-400">
                                    {task.status}
                                </span>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;