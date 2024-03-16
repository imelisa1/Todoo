import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskCard = ({todo, handleDelete}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.todo}> {todo} </Text>
            <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.delete}> X </Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskCard;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        justifyContent: 'space-between',
        margin: 8,
        marginVertical: 12,
    },
    todo: {
        fontSize: 20,
    },
    delete: {
        fontSize: 22,
        color: '#40679E',
        marginRight: 12,
    }
})