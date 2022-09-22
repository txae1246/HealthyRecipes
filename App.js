import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const recipeImage = require('./images/bruschetta.png')

function HomeScreen({ navigation }) {

  const [numberOfServings, setNumberOfServings] = useState(null);

  function clearNumServings () {
    setNumberOfServings('');
  }
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Bruschetta Recipe</Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source= {recipeImage}
        />
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter the Number of Servings"
          placeholderTextColor='#808080'
          onChangeText={setNumberOfServings}
          value={numberOfServings}
          keyboardType="numeric"
          />
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate('Recipes', {numberOfServings}); clearNumServings();}}
          >
          <Text style={styles.buttonText}>View Recipe</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RecipeScreen({route}) {
  /* 2. Get the param */
  const { numberOfServings } = route.params;
  const tomatoes = numberOfServings * 4;
  const basil = numberOfServings * 6;
  const garlic = numberOfServings * 3;
  const oliveOil = numberOfServings * 3;

  return (
    <View style={styles.recipeContainer}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Bruschetta</Text>
    </View>
      <View style={styles.ingredientsSection}>
        <Text style={styles.subHeading}>Ingredients</Text>
        <Text style={styles.paragraph}>{tomatoes} plum tomatoes</Text>
        <Text style={styles.paragraph}>{basil} basil leaves</Text>
        <Text style={styles.paragraph}>{garlic} garlic cloves, chopped</Text>
        <Text style={styles.paragraph}>{oliveOil} TB olive oil</Text>
      </View>
      <View style={styles.directionsSection}>
        <Text style={styles.subHeading}>Directions</Text>
        <Text style={styles.paragraph}>Combine the ingredients add salt to taste.  Top French bread slices with mixture.</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerStyle:  {
            backgroundColor:  '#FF0000'
          },
          headerTintColor:  '#ffffff'
        }}
      >
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={RecipeScreen} options={{headerTitle:  '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    flex:  4,
    backgroundColor:  '#ffffff'
  },
  recipeContainer:  {
    flex:  3,
    backgroundColor:  '#ffffff'
  },
  titleSection:  {
    flexGrow:  1,
    justifyContent:  'flex-end',
    padding:  10
  },
  title:  {
    fontSize:  36,
    textAlign:  'center'
  },
  imageSection:  {
    flexGrow:  1,
    padding:  10
  },
  inputSection:  {
    flexGrow:  1,
    padding:  10,
    justifyContent:  'flex-end'
  },
  textInput:  {
    outline:  'none',
    height:  50,
    width:  250,
    alignSelf:  'center',
    textAlign:  'center',
    margin:  5,
    padding:  5,
    fontSize:  18,
    color:  '#000000'
  },
  buttonSection:  {
    flexGrow:  1,
    alignItems:  'center',
    padding:  10
  },
  button:  {
    backgroundColor:  '#696969',
    paddubg:  20,
    borderRadius:  5,
    height:  40,
    width:  150
  },
  buttonText:  {
    fontSize:  24,
    textAlign:  'center',
    color:  '#ffffff'
  },
  ingredientsSection:  {
    flexGrow:  1,
    padding:  10
  },
  directionsSection:  {
    flexGrow:  1,
    padding:  10
  },
  subHeading:  {
    fontSize:  28,
    marginLeft:  10
  },
  paragraph:  {
    fontSize:  20,
    marginLeft:  20
  }
})

