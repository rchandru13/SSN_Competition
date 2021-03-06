import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Signin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            name: '',
            email: '',
            pass: '',
            repass:'',
        }
    }

    getAsu(){
        this.props.navigation.navigate('Feed')
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TextInput style={styles.questionInput} textAlign='center' placeholder="Name"
                    onChangeText={(text) => this.setState({ name: text })} />
                <TextInput style={styles.questionInput} textAlign='center' placeholder="Email"
                    onChangeText={(text) => this.setState({ email: text })} />
                <TextInput style={styles.questionInput} textAlign='center' placeholder="Password"
                    onChangeText={(text) => this.setState({ pass: text })} />
                <TextInput style={styles.questionInput} textAlign='center' placeholder="Re-enter Password"
                    onChangeText={(text) => this.setState({ repass: text })} />
                <TouchableOpacity style={styles.buttonBack} onPress={() => this.getAsu}>
                    <Text style={styles.button}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionInput: {

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        width: windowWidth - 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 20
    },
    buttonBack: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EF820D',
        marginTop: 20,
        borderRadius: 15,
        height: 50,
        width: 200
    },
    button: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'BebasNeue-Regular'
    },
})