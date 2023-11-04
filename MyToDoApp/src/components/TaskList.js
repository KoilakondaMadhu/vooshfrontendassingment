import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TaskList;
