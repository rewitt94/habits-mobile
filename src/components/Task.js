import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export const Habit = ({
    habit,
    completeHabit
  }) => {

    return (
        <View>
            <Text>{habit.Habit}</Text>
            <Button onPress={() => completeHabit(habit.Id)} title="complete"></Button>
        </View>
        );

}