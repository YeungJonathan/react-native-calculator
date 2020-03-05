import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
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
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                AC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                +/-
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[AppStyle.buttonContainer, {borderColor:'black'}]} disabled>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                /
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                7
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                8
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                9
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                    <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                    <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <TouchableOpacity style={[AppStyle.buttonContainer, {borderColor:'black'}]} disabled>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText}>
                                =
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </SafeAreaView>
        );
    }
}

export default App;
