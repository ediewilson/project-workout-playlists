import React, { Component } from 'react';
import {
  StyleSheet, View, Button,
  Text, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class NewUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 1,
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    };
  }

  componentDidMount() {
    console.log('in newUserFlow');
  }

  handleClick = (event) => {
    console.log(event);
    if (this.state.currentQ <= 5) {
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
      console.log(questionNum);
      // this.state.currentQ += 1;
    } else {
      this.props.navigation.navigate('Main');
    }
  }

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 1) {
      return (
        <View>
          <Text>
            Acousticness
          </Text>
          {/* <Button
            title="walk"
            value="walk"
            onPress={() => this.setState({ question1: 'walk' })}
          /> */}
          <TouchableOpacity style={styles.button}>
            <Text>1- dababy</Text>
          </TouchableOpacity>
          <TouchableOpacity key="idk" style={styles.button}>
            <Text>10-john mayer</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity key="bike" style={styles.button}>
            <Text>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity key="dance" style={styles.button}>
            <Text>Dance</Text>
          </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 2) {
      return (
        console.log(this.state.question1),
          <View>
            <Text>
              Instrumentalness
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text>1-only instruments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>10 -voices please!</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button}>
              <Text>Having Fun</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Developing a Habit</Text>
            </TouchableOpacity> */}
          </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            Liveness
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>1-chillin in the studio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>10-concert in my head please</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Pop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Rap</Text>
          </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>
          <Text>
            Loudness
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>1-quiet background music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>10- loud music gives me power</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Funky</Text>
          </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>
          <Text>
            Popular music
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>1-chart toppers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>10-new music </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Positivity
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>1-meh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>10-upbeat</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Favorite genres while working out?
          </Text>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Genres" value={this.state.email} />
          {/* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
        </View>
      );
    } else {
      return (
        <Text>
          Thank You
          {/* Send all the responses!! and redirect to main page */}
        </Text>
      );
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.currentQ);
    console.log(this.renderQuestion());
    return (
      <View style={styles.container}>
        <Text>On a scale of 1-10, rate your preferences to the following questions:</Text>
        {this.renderQuestion()}
        <TouchableOpacity
          onPress={this.handleClick} // how to make this a different functionality when at the end of questions?
          style={{
            display: 'flex',
            justifyContent: 'center', // this wont center the text?? :(
            backgroundColor: 'orange',
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
        {/* onclick, update call state incrementer */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  button:
  {
    display: 'flex',
    justifyContent: 'center', // this wont center the text?? :(
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'orange',
  },
});
export default NewUserFlow;


//   const displayedQuestion = (
//   <View style={styles.container}>
//     <Text>
//       Initial Preferences
//     </Text>
//     <button type="button"> Option 1</button>
//     <button type="button"> Option 2</button>
//     <button type="button"> Option 3</button>
//     <button type="button"> Option 4</button>
//     <button type="button">Submit</button>
//     {/* onclick, update call state incrementer */}
//   </View>;
//   );
//   return displayedQuestion;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   image: {
//     width: 400,
//     height: 300,
//   },
// });
