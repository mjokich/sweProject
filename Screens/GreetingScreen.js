import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import HomeScreen from './HomeScreen';

export const GreetingScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('place first name');
    const [lastName, setLastName] = useState('place last name');
    const [profileName, setProfileName] = useState('place userName');
    const [password, setPassword] = useState('place password');

    return (
        <View >
            
              <Text style={styles.titleText}>RecipeCooks</Text>

              <Text style={styles.allText}>Create a profile with us today {"\n"}to taste with other home cooks around the globe.</Text>

              <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.columnsView}>
                    <Text style={{fontWeight: 'bold'}}>Create a Profile</Text>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter First Name'
                     onChangeText={(val) => setFirstName(val)}></TextInput>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter Last Name'
                     onChangeText={(val) => setLastName(val)}></TextInput>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter UserName'
                     onChangeText={(val) => setProfileName(val)}></TextInput>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter Password'
                     onChangeText={(val) => setPassword(val)}></TextInput>
                </View>

                <View style={styles.columnsView}>
                    <Text style={{fontWeight: 'bold'}}>Sign in as Guest</Text>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter First Name'
                     onChangeText={(val) => setFirstName(val)}></TextInput>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter Last Name'
                     onChangeText={(val) => setLastName(val)}></TextInput>

<Text style={styles.allText}>By signing in as{"\n"}guest, access to{"\n"}the apps features {"\n"}is limited.</Text>
                </View>
              </View>

            <View style={styles.buttonsView}>
            <><View style={styles.loginButton}>
                <Text numberOfLines={1} onPress={() => console.log('user pressed Create Profile')}>Create Profile</Text>
            </View>
            <View style={styles.registerButton}>
                <Text numberOfLines={1} onPress={() => navigation.navigate('Home')}>Guest sign up</Text>
            </View></>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonsView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 220,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    allText: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 37,
    },
    columnsView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 50,
    },
    loginButton: {
        width: 150,
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    registerButton: {
        width: 150,
        height: 70,
        backgroundColor: '#4ecdc4',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    profileInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 150,
    },
});

export default GreetingScreen;