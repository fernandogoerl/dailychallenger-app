import React from 'react';
import { View, Text, Button } from 'react-native';


class CreateChallengeScreen extends React.Component {
    static navigationOptions = {};
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            {/* <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
            /> */}
            <Button
            title="Save"
            onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Cancel"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
      );
    }
}

export default CreateChallengeScreen