import api from "./axios";

export const getTasks = async () => {
    const response = await api.get("/tasks/");
    return response.data;
};

export const getNotes = async () => {
    const response = await api.get("/tasks/notes/");
    return response.data;
};