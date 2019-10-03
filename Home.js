import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AboutComponent from './About';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };

        
    }   


    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 100, height: 50, backgroundColor: 'powderblue' }}>
                        <Button
                            title="Fetch Data"
                            // onPress={() => navigate("About")}
                            onPress={() => navigate('About', { title: 'I am Ahsan Khan' })}
                        />
                    </View>
                    <View style={{ width: 100, height: 50, backgroundColor: 'powderblue' }}>
                        <Button
                            title="Test"
                            // onPress={() => navigate("About")}
                            onPress={() => navigate('Test', { title: 'I am Ahsan Khan' })}
                        />
                    </View>
                    
                </View>

                
            </View>
        );

    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Shipment Status',
            headerStyle: {
                backgroundColor: '#232323',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    },
    About: {
        screen: AboutComponent,
        navigationOptions: () => ({
            title: 'Fetch Result',
            headerStyle: {
                backgroundColor: '#232323',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })
    },
});

export default createAppContainer(AppNavigator);