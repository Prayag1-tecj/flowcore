import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
    getTasks,
    getNotes,
} from "../api/tasks";

function Dashboard() {

    const [stats, setStats] = useState({
        totalTasks: 0,
        completedTasks: 0,
        totalNotes: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                const tasks = await getTasks();

                const notes = await getNotes();

                const completedTasks = tasks.filter(
                    (task) => task.status === "COMPLETED"
                ).length;

                setStats({
                    totalTasks: tasks.length,
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

                <div>

                    <h1 className="text-4xl font-bold mb-2">
                        Welcome Back 👋
                    </h1>

                    <p className="text-slate-400">
                        Manage your tasks and notes efficiently.
                    </p>

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

        </DashboardLayout>
    );
}

export default Dashboard;