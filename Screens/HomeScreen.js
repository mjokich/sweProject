import React,{useState} from 'react';
import { Flatlist, StyleSheet, View, Text, TextInput, Image, ScrollView, StatusBar,RefreshControl, FlatList } from 'react-native';
import SettingsScreen from './SettingsScreen';
import { Chip } from '@rneui/themed';


    

function HomeScreen({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [list, setList] = React.useState([
        {key: 0,label:'peanuts'},{key: 1,label:'banana'},{key: 2,label:'bread'}
    ]);

    const [searchItem,setSearchItem ] = React.useState("");

    const handleDelete = (chippToDelete) => {
        setList((chips) => chips.filter((chip)=> chip.key!==chippToDelete.key));
    }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleSearch = () => {
    setList(oldList => [...oldList, {key: list.length,label: searchItem}]);
    console.log("test");
    console.log(list);
    setSearchItem("");


  }
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            <View style={styles.settingsBubble}>
                <Text numberOfLines={1} onPress={() => navigation.navigate('Settings')}>Settings</Text>
            </View>

            <Text style={styles.titleText}>Search Recipes</Text>

            <View style={styles.searchView}>
                <TextInput style={styles.searchInput} onChangeText={(text)=>setSearchItem(text)}></TextInput>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.columnsView}>
                    <View style={styles.searchButton}>
                        <Text numberOfLines={2} onPress={() => handleSearch()}>Find Recipes</Text>
                    </View>
                </View>

                <View style={styles.columnsView}>
                    <FlatList data={list} renderItem={(item)=> {
                        return(
                            <Chip title={item.item.label} containerStyle={{ marginVertical: 10 }} onPress={() => handleDelete(item.item)}/>
                        )
                    }}/>

                    
                </View>
            </View>

            <View > 
                <Text style={styles.smallText}>View Recipes</Text>

                <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginBottom: 10}}>Recipe Title</Text>

                <View>
                    <Text style={styles.mediumText}>UserProfile</Text>

                    <Text style={styles.smallText} >As a part of green food green city, we like to specialize in recipes that use organically grown fruits and vegetables.</Text>
                </View>

                <View >
                    <Image style={styles.recipeImage} source={require('/Users/michaeljokich/Documents/sweProj/assets/peanutButterSandwich.jpeg')}></Image>
                </View>

                <View>
                    <Text style={styles.mediumText}>Recipe Description</Text>
                    <View  style={styles.descriptionView}>
                        <View style={styles.tagBubbleView}>
                            <Text numberOfLines={1}>bananas</Text>
                        </View>

                        <View style={styles.tagBubbleView}>
                            <Text numberOfLines={1}>peanuts</Text>
                        </View>

                        <View style={styles.tagBubbleView}>
                            <Text numberOfLines={1}>bread</Text>
                        </View>

                        <View style={styles.tagBubbleView}>
                            <Text numberOfLines={1}>olive oil</Text>
                        </View>
                        
                    </View>
                </View>

                <View>
                    <Text style={styles.mediumText}>Calorie Approximation</Text>

                    <View style={styles.calBubble}><Text>90</Text></View>
                </View>

                <View>
                    <Text style={styles.mediumText}>Recipe Instructions</Text>
                    <Text style={{marginLeft: 40,marginBottom: 20}}>First we'll need, {"\n"} 1. bananas {"\n"} 2. peanuts {"\n"} 3. bread {"\n"} {"\n"}Step 1. cut the bananas and mash the peanuts {"\n"}Step 2. Spread butter over the face of the bread. {"\n"}Step 3. push both sides of the sandwhich together with intention.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    titleText: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 50,
    },
    searchView: {
        alignItems: 'center',
    },
    searchButton: {
        width: 150,
        height: 70,
        backgroundColor: '#4ecdc4',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 30,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 290,
    },
    recipeImage: {
        borderRadius: 80,
        alignSelf: 'center',
        marginBottom: 10,
    },
    smallText: {
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    mediumText: {
        textAlign: 'left',
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    calBubble: {
        width: 70,
        height: 50,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    tagBubbleView: {
        width: 70,
        height: 30,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    descriptionView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    settingsBubble: {
        width: 70,
        height: 25,
        backgroundColor: '#fc5c65',
        justifyContent: 'right',
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 300,
        alignItems: 'center',
    },
    columnsView: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    recipeFeedbackView: {
        backgroundColor: 'dodgerblue',
        borderRadius: 100,
    },
})
export default HomeScreen;