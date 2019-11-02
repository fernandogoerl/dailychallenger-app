import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getAllChallenges, deleteAllChallenges, updateAllChallenges } from '../utils/api'
import Challenge from '../components/Challenge'

import { ScrollView } from 'react-native-gesture-handler';
import { allChallenges } from '../utils/_DATA';

class HomeScreen extends React.Component {
    static navigationOptions = {}

    state = {
        user: {
            name: 'Fernando',
            lastname: 'Goerl',
            username: 'nandogoerl',
            loggedIn: true,
        },
        allChallenges: [],
    }

    hasChallenges = () => (
        (this.state.allChallenges.length > 0)
        ? true
        : false
    )

    componentDidMount() {
        this.fetchChallenges()
    }

    fetchChallenges = async () => {        
        const allChallenges = await getAllChallenges()
        this.setState({allChallenges})
    }

    deleteChallenges = () => {
        deleteAllChallenges()
        this.setState({allChallenges: []})
    }

    shouldResetChallenge = (challenge) => {
        let today = new Date()
        today.setHours(0,0,0,0)
        let yesterday = today.getTime() - 86400000
        const updatedChallenges = this.state.allChallenges.map((challenge) => {
            if(yesterday > lastDay){
                challenge.dayCounter = 0
                challenge.lastDay = new Date().getTime()
            }
        })
    }

    checkChallenge = (id) => {
        const updatedChallenges = this.state.allChallenges.map((challenge) => {
            if(challenge.id === id){
                challenge.dayCounter = challenge.dayCounter+1
                challenge.lastDay = new Date().getTime()
            }
        })
        this.setState({allChallenges: updatedChallenges})
        updateAllChallenges(updatedChallenges)
    }

    render() {
        const { user, allChallenges } = this.state
        const hasChallenges = this.hasChallenges()

        return (
            <View style={styles.container}>
                <Text style={[styles.welcome,(!hasChallenges && styles.welcomeNC)]}>Welcome {user.name}</Text>
                {hasChallenges && (
                    <View style={styles.challengesContainer}>
                        <Text style={styles.challengesTitle}>Your Challenges</Text>
                        <ScrollView style={styles.challengesScroller}>
                            {allChallenges.map(challenge => (
                                <View style={styles.challenge} key={challenge.name}>
                                    <Challenge challenge={challenge} navigation={this.props.navigation}/>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                )}
                {!hasChallenges && <Text style={styles.CTA}>Start challenging yourself</Text>}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={[styles.button,(!hasChallenges && styles.buttonNC)]}
                        onPress={() => this.props.navigation.navigate('CreateChallenge')}
                    >
                        <Text style={styles.buttonText}>Create a Challenge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.deleteChallenges()}
                    >
                        <Text style={styles.buttonText}>Delete All Challenges</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.fetchChallenges()}
                    >
                        <Text style={styles.buttonText}>Fetch All Challenges</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('printing all challenges |',allChallenges)}
                    >
                        <Text style={styles.buttonText}>Print All Challenges</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    welcome: {
        color: '#2699FB',
        fontSize: 18,
        marginBottom: 50,
    },
    welcomeNC: {
        marginTop: 200,
    },
    CTA: {
        color: '#2699FB',
        marginBottom: 10,
    },
    challengesContainer: {
        width: '100%',
        flex: 1,
    },
    challengesTitle: {
        fontSize: 18,
        color: '#2699FB',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#BCE0FD',
        marginBottom: 30,
        paddingBottom: 10

    },
    challengesScroller: {},
    challenge: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    buttonsContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 50,
        backgroundColor: '#2699FB',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default HomeScreen