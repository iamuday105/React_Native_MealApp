import {useLayoutEffect} from 'react';
import { View , Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from '../components/IconButton';


function MealDetailScreen({ route, navigation }){
   const mealId = route.params.mealId;
  

   const selectedMeals = MEALS.find((meal) => meal.id === mealId);


function headerButtonPressHandler(){
   console.log('pressed!');
}
   useLayoutEffect(() => {
       navigation.setOptions({
         headerRight: () =>{
            return <IconButton 
            onPress={headerButtonPressHandler}
            icon="star"  color="white"  
            />
         }
       })
   },[navigation, headerButtonPressHandler]);
 return(
 <ScrollView style={
   styles.rootContaier
 }>
   <Image style={styles.image} source ={{uri: selectedMeals.imageUrl}}/>
   <Text style={styles.title}>{selectedMeals.title}</Text>
   <View>
    <MealDetails
    duration={selectedMeals.duration}
    complexity={selectedMeals.complexity}
    affordability={selectedMeals.affordability}
    textStyle={styles.detailtext}

    />
    <View style={styles.listOuterContainer}>

   <View style={styles.listContainer}>
   <Subtitle>Ingredient</Subtitle>
    <List data={selectedMeals.ingredients}/>
    <Subtitle>Steps</Subtitle>
    <List data={selectedMeals.steps}/>
   </View>
   </View>
    </View>
 </ScrollView>
 );
}

export default MealDetailScreen; 

const styles = StyleSheet.create({
   rootContaier: {
      marginBottom: 32,
   },
   image: {
      width: '100%',
      height: 350,

   },
   title:{
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white',
   },
   detailtext:{
      color: 'white',
   },
   listOuterContainer:{
      alignItems: 'center'
   },
   listContainer:{
      width: '80%',
   }
  
})