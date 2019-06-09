import { setHabits } from '../redux/actions'; 
import { internalIp } from './hidden';

export const getRemainingHabits = async (dispatch) => {

    let res = await fetch(`http://${internalIp}:8080/remaining`)
    let habits = await res.json()
    dispatch(setHabits(habits))

}

export const postCompleteHabit = async (habitId, dispatch) => {

    let res = await fetch(`http://${internalIp}:8080/complete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ habit_id: habitId })
    })
    let habits = await res.json()
    dispatch(setHabits(habits))

}