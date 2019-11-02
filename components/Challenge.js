import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import CheckBox from 'react-native-check-box'

import checkedImage from '../assets/checkedCheckbox.png'
import uncheckedImage from '../assets/uncheckedCheckbox.png'

class Challenge extends Component {

    state = {
        isChecked: false,
    }

    setChecked = () => {
        this.setState({isChecked: !this.state.isChecked})
    }

    handleMaxDays = (maxDays) => (
        maxDays > 0 ? maxDays : '\u221E'
    )

    render() {
        const { isChecked } = this.state
        const { challenge, navigation } = this.props
        return (
            <TouchableOpacity                                
                style={styles.challenge}
                onPress={() => this.setChecked()}
                onLongPress={() => navigation.navigate('CreateChallenge')}
            >
                <CheckBox
                    style={styles.checkbox}
                    onClick={() => this.setChecked()}
                    isChecked={isChecked}
                    checkedImage={<Image source={checkedImage} style={styles.checkboxImage}/>}
                    unCheckedImage={<Image source={uncheckedImage} style={styles.checkboxImage}/>}
                />
                <Text style={styles.challengeText}>{challenge.name}</Text>
                <Text style={styles.challengeNumber}>
                    {challenge.dayCounter} / {this.handleMaxDays(challenge.maxDays)}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    challenge: {
        borderStyle: 'solid',
        borderColor: '#2699FB',
        borderWidth: 2,
        borderRadius: 20,
        padding: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    checkbox: {
        flex: 1,
    },
    checkboxImage: {
        height: 25,
        width: 25,
    },
    challengeText: {
        flex: 4,
    },
    challengeNumber: {
        flex: 2,
        textAlign: 'right',
    }
})

export default Challenge
