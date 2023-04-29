import React,{useState} from 'react';
import { StyleSheet, View, Text, TextInput,Switch } from 'react-native';


function SettingsScreen(props) {
    const [profileName, setProfileName] = useState('place userName');
    const [password, setPassword] = useState('place password');
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View>
            <Text style={styles.titleText}>Settings</Text>

            <View style={styles.signUpView}>
                <Text style={styles.sectionTitles}>Sign Up with a Profile</Text>
                <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter UserName'
                     onChangeText={(val) => setProfileName(val)}></TextInput>
                    <TextInput 
                     style={styles.profileInput}
                     placeholder='Enter Password'
                     onChangeText={(val) => setPassword(val)}></TextInput>
                <View style={styles.firstButton}>
                  <Text numberOfLines={1} onPress={() => console.log("profile sign up pressed")}>Create Profile</Text>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitles}>Change Color Scheme</Text>
                  <View style={styles.buttonsView}>
                   <View style={styles.firstButton}>
                     <Text numberOfLines={1} onPress={() => console.log("Dark Theme pressed")}>Dark</Text>
                   </View>
                   <View style={styles.secondButton}>
                     <Text numberOfLines={1} onPress={() => console.log("Light Theme pressed")}>Light</Text>
                   </View>
                  </View>
            </View>

            <View>
                <Text style={styles.sectionTitles}>Push Notifications</Text>

                <View style={styles.buttonsView}>
                   <Switch 
                   trackColor={{false: '#fc5c65',true: '#4ecdc4',}}
                   thumbColor={isEnabled ? '#4ecdc4' : '#4ecdc4'}
                   value={isEnabled}
                   onValueChange={toggleSwitch}
                   />
                </View>

                <View style={styles.buttonsView}>
                   <View style={styles.firstButton}>
                     <Text numberOfLines={1} onPress={() => console.log("Daily pressed")}>Daily</Text>
                   </View>
                   <View style={styles.secondButton}>
                     <Text numberOfLines={1} onPress={() => console.log("Weekly pressed")}>Weekly</Text>
                   </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    sectionTitles: {
        marginLeft: 10,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
    },
    profileInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 150,
        alignContent: 'center',
    },
    signUpView: {
        alignItems: 'center',
    },
    buttonsView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
    },
    firstButton: {
        width: 150,
        height: 50,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    secondButton: {
        width: 150,
        height: 50,
        backgroundColor: '#4ecdc4',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
})

export default SettingsScreen;