import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/components/Deck';
import { Card, Button } from 'react-native-elements';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://cdn.pixabay.com/photo/2020/11/23/18/31/child-5770618__340.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/2_faces_of_Delphine_%28II%29_%281120748250%29.jpg' },
  { id: 3, text: 'Card #3', uri: 'https://live.staticflickr.com/3573/3332827241_e5c6f72d81_b.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://live.staticflickr.com/5287/5261687639_441c23d3cd_b.jpg' },
  { id: 5, text: 'Card #5', uri: 'https://live.staticflickr.com/3074/2595474016_483aedc162_b.jpg' },
  { id: 6, text: 'Card #6', uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Faces_from_Tarfaya_1.jpg' },
  { id: 7, text: 'Card #7', uri: 'https://cdn.pixabay.com/photo/2013/11/02/03/15/girl-204326__340.jpg' },
  { id: 8, text: 'Card #8', uri: 'https://snappygoat.com/b/4324584d0b9a2671de2f59cddef82faa10d4c677' },
];


class App extends React.Component {

  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image
          source={{ uri: item.uri }}
        />
        <Text style={ { marginBottom: 10 }}>
          I can customize the Card further
        </Text>
        <Button 
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  };



  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
        />    
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
});

export default App;