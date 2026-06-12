import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import {
    getNotes,
    createNote,
    deleteNote,
} from "../api/notes";

function Notes() {

    const [notes, setNotes] = useState([]);

    const [formData, setFormData] = useState({
        task: "",
        content: "",
    });

    const fetchNotes = async () => {
        const data = await getNotes();
        setNotes(data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createNote(formData);

        setFormData({
            task: "",
            content: "",
        });

        fetchNotes();
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        fetchNotes();
    };

    return (
        <DashboardLayout>

            <div className="space-y-6">

                <h1 className="text-3xl font-bold">
                    Notes
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-slate-900 p-6 rounded-2xl space-y-4"
                >

                    <input
                        type="number"
                        placeholder="Task ID"
                        value={formData.task}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                task: e.target.value,
                            })
                        }
                        className="w-full p-3 rounded-xl bg-slate-800"
                    />

                    <textarea
                        placeholder="Note Content"
                        value={formData.content}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                content: e.target.value,
                            })
                        }
                        className="w-full p-3 rounded-xl bg-slate-800"
                    />

                    <button
                        className="bg-indigo-600 px-6 py-3 rounded-xl"
                    >
                        Create Note
                    </button>

                </form>

                <div className="grid gap-4">

                    {notes.map((note) => (

                        <div
                            key={note.id}
                            className="bg-slate-900 p-5 rounded-2xl"
                        >

                            <p className="text-slate-400">
                                Task ID: {note.task}
                            </p>

                            <p className="mt-3">
                                {note.content}
                            </p>

                            <p className="text-sm text-slate-500 mt-3">
                                {note.created_by}
                            </p>

                            <button
                                onClick={() =>
                                    handleDelete(note.id)
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

export default Notes;