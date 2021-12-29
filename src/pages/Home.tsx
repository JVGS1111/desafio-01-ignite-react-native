import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: Math.random(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(lastTask => [...lastTask, task]);
  }

  function handleToggleTaskDone(id: number) {
    console.log(id);

    setTasks((lastTask) => lastTask.map(task => {
      if (task.id == id) {
        task.done = !task.done;
      }
      return task
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks((lastTask) => lastTask.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})