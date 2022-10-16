import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTasks} from '../state/task-list/taskListSlice';
import TaskItem from '../Components/TaskItem';

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={task => task.id.toString()}
        renderItem={({item: task}) => <TaskItem task={task} />}
      />
    </View>
  );
};

export default TaskList;
