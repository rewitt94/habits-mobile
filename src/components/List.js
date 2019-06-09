import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Habit } from './Habit';

export const List = ({
    loaded,
    habits,
    completeHabit
  }) => {

    if (loaded) {

        let content = [];
        for (let i = 0; i < habits.length; i++) {
            content.push(<Habit key={i} habit={habits[i]} completeHabit={completeHabit} />)
        }

        return (
            <View>
                <Text>Outstanding Habits</Text>
                {content}
            </View>
          );

    } else {

        return (
            <View>
                <Text>Loading</Text>
            </View>
          );
    }

}