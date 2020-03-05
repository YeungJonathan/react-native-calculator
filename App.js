import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import AppStyle from './src/styles/AppStyle';
class App extends React.Component {
    constructor() {
        super();
      }
    render() {
        return (
            <SafeAreaView style={AppStyle.container}>
                <View style={AppStyle.topContainer}>
                </View>
                <View style={AppStyle.bottomContainer}>
                    <View style={AppStyle.bottomNumberContainer}>
                        <Text>
                            1
                        </Text>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <Text>
                            1
                        </Text>
                        <Text>
                            1
                        </Text>
                        
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <Text>
                            1
                        </Text>
                        
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <Text>
                            1
                        </Text>
                        
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <Text>
                            1
                        </Text>
                        
                    </View>
                    
                </View>
            </SafeAreaView>
        );
    }
}

export default App;
