import React from 'react';
import {View} from 'react-native';
import {Text} from '@react-native-material/core';
import {
  extractDateFromDateField,
  extractTimeFromDateField,
} from '../utils/DateUtils';
import {Task} from '../state/task-list/taskListSlice';
import {Card} from './Material/Card';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({task}: TaskItemProps) => {
  return (
    <View>
      <Card>
        <Text variant="h6">Task n°{task.id}</Text>
        <Text>{task.content}</Text>
        <Text>
          Created the {extractDateFromDateField(task.creationDate)} at{' '}
          {extractTimeFromDateField(task.creationDate)}
        </Text>
      </Card>
    </View>
  );
};

export default TaskItem;
