import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { type Task } from "./types";

type ToggleId = {
    id: string;
};

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function Component() {
    const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

    const addTask = (task: Task): void => {
        setTasks([...tasks, task]);
    };

    const toggleTask = ({ id }: ToggleId) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        );
    };

    useEffect(() => {
        updateStorage(tasks);
    }, [tasks]);

    return (
        <section>
            <Form addTask={addTask} />
            <List tasks={tasks} toggleTask={toggleTask} />
        </section>
    );
}
export default Component;
