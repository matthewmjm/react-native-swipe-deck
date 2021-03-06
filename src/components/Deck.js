import React, { Component } from 'react';
import {  
    View, 
    Text, 
    StyleSheet, 
    Animated, 
    PanResponder 
} from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);

        const PanResponder = PanResponder.create({

        });
    }

    renderCards() {
        return this.props.data.map(item => {
            return this.props.renderCard(item)
        });
    }



    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }

};

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
    }
});

export default Deck;