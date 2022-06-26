import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, Text, View, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { UIHeader } from '../../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskID, setTasks } from '../../../redux/action'

const TaskComponent = (props) => {

    const { navigate, goBack } = props.navigation
    const { tasks, taskID } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch()
    console.log('hehe')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const isValidtionOk = () => title.length > 0

    useEffect(() => {
        getTask()
    }, [])

    const getTask = () => {
        const Task = tasks.find(task => task.ID === taskID)
        if (Task) {
            setTitle(Task.Title)
            setDesc(Task.Desc)
        }
    }
    const setTask = () => {
        try {
            var Task = {
                ID: taskID,
                Title: title,
                Desc: desc
            }
            let newTasks = []
            //update
            const index = tasks.findIndex(task => task.ID === taskID)
            if (index > -1) {
                newTasks = [...tasks]
                newTasks[index] = Task
            } else {
                newTasks = [...tasks, Task]
            }
            //end
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks))
                    Alert.alert('Success!', 'Task saved successfully.')
                    goBack()
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <UIHeader
                isCheck={isValidtionOk()}
                title={'Task'}
                leftIconName={'arrow-left'}
                textUIHeader={'Lưu'}
                rightIconName={undefined}
                onPressLeftIcon={() => {
                    goBack()
                }}
                onPressRightIcon={() => {
                    setTask()
                }} />
            <View style={styles.viewInput}>
                <TextInput
                    value={title}
                    style={styles.input}
                    placeholder='Title'
                    onChangeText={(value) => setTitle(value)}
                />
                <TextInput
                    value={desc}
                    style={styles.input}
                    placeholder='Description'
                    multiline
                    onChangeText={(value) => setDesc(value)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    viewInput: {
        padding: 10
    },
    input: {
        alignSelf: 'center',
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#555555',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: 17,
        margin: 10,
        paddingHorizontal: 10,
    }
})

export default TaskComponent