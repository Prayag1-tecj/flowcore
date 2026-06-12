import api from "./axios";

export const getNotes = async () => {
    const response = await api.get("/tasks/notes/");
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await api.post(
        "/tasks/notes/",
        noteData
    );
    return response.data;
};

export const deleteNote = async (id) => {
    await api.delete(`/tasks/notes/${id}/`);
};