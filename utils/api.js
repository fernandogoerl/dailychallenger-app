import { AsyncStorage } from 'react-native'
import * as defaultData from './_DATA'

export const USER_STORAGE_KEY = 'DC:user'
export const CHALLENGES_STORAGE_KEY = 'DC:challenges'

hasData = async(data) => {
	if (data !== null) {
        console.log('has data')
		return JSON.parse(data)
	}
    await AsyncStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(defaultData.allChallenges))
    console.log('using default data')
	return defaultData.allChallenges
}

export const getAllChallenges = async() => (
    await AsyncStorage.getItem(CHALLENGES_STORAGE_KEY)
        .then((allChallenges) => {
            console.log('fetched challenges')
            return hasData(allChallenges)
        })
)

export const getChallenge = (id) => (
    AsyncStorage.getItem(CHALLENGES_STORAGE_KEY)
        .then(hasData)
        .then(allChallenges => allChallenges.find((challenge) => (challenge.id === id)))
)

export const deleteChallenge = (id) => {
    const filteredChallenges = AsyncStorage.getItem(CHALLENGES_STORAGE_KEY)
        .then(hasData)
        .then(allChallenges => allChallenges.map((challenge) => (challenge.id !== id)))
    AsyncStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(filteredChallenges))
    return filteredChallenges
}

export const deleteAllChallenges = () => {
    console.log('deleting all challenges')
    AsyncStorage.removeItem(CHALLENGES_STORAGE_KEY)
}

export const updateAllChallenges = (allChallenges) => {
    AsyncStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(allChallenges))
    return filteredChallenges
}

export const resetChallenge = (id) => {
    const allChallenges = AsyncStorage.getItem(CHALLENGES_STORAGE_KEY)
        .then(hasData)
        .then(allChallenges => allChallenges.map((challenge) => {
            if(challenge.id === id) {
                
            }
        }))
    AsyncStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(allChallenges))
    return filteredChallenges
}


