import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Alert} from 'react-native';
import AppStyle from './src/styles/AppStyle';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputString: ''
        }
    }

    addToString = (char) => {
        const {inputString} = this.state; 
        this.setState({inputString: inputString+char});
    }

    resetString = () => {
        this.setState({inputString: ''});
    }

    calculate = () => {
        const {inputString} = this.state;
        if (inputString.length !== 0){
            try{
                const answer = eval(inputString).toString();
                this.setState({inputString: answer});
            }catch{
                Alert.alert('Try Again', "Wrong expression detected.");
                this.resetString();
            }
        }
    }

    removeLastChar = () => {
        const {inputString} = this.state;
        if (inputString.length !== 0){
            const newString = inputString.slice(0, -1);
            this.setState({inputString: newString})
        }
    }

    render() {
        const {inputString} = this.state;
        return (
            <SafeAreaView style={AppStyle.container}>
                <View style={AppStyle.topContainer}>
                    <Text style={{color:'white', fontSize:30}}>
                        {inputString}
                    </Text>
                </View>
                <View style={AppStyle.bottomContainer}>
                    <View style={AppStyle.bottomNumberContainer}>
                        <TouchableOpacity 
                            style={AppStyle.buttonContainer}
                            onPress={this.resetString}
                        >
                            <Text style={AppStyle.buttonText}>
                                AC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={AppStyle.buttonContainer}
                            onPress={() => this.addToString('(')}
                        >
                            <Text style={AppStyle.buttonText}>
                                (
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={AppStyle.buttonContainer}
                            onPress={() => this.addToString(')')}
                        >
                            <Text style={AppStyle.buttonText}>
                                )
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('/')}>
                            <Text style={AppStyle.buttonText}>
                                /
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('7')}>
                            <Text style={AppStyle.buttonText}>
                                7
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('8')}>
                            <Text style={AppStyle.buttonText}>
                                8
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('9')}>
                            <Text style={AppStyle.buttonText}>
                                9
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('*')}>
                            <Text style={AppStyle.buttonText}>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                    <TouchableOpacity style={AppStyle.buttonContainer}  onPress={() => this.addToString('4')}>
                            <Text style={AppStyle.buttonText}>
                                4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('5')}>
                            <Text style={AppStyle.buttonText}>
                                5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('6')}>
                            <Text style={AppStyle.buttonText}>
                                6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('-')}>
                            <Text style={AppStyle.buttonText}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                    <TouchableOpacity style={AppStyle.buttonContainer}>
                            <Text style={AppStyle.buttonText} onPress={() => this.addToString('1')}>
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('2')}>
                            <Text style={AppStyle.buttonText}>
                                2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('3')}>
                            <Text style={AppStyle.buttonText}>
                                3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('+')}>
                            <Text style={AppStyle.buttonText}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.bottomNumberContainer}>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={this.removeLastChar}>
                            <Text style={AppStyle.buttonText}>
                                DEL
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('0')}>
                            <Text style={AppStyle.buttonText}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={() => this.addToString('.')}>
                            <Text style={AppStyle.buttonText}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.buttonContainer} onPress={this.calculate}>
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
