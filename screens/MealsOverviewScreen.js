import { useLayoutEffect } from "react";
import { View,Text, FlatList, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({route, navigation}){
//   const route = useRoute();
  const catId = route.params.categoryId;

  const displyedMeals = MEALS.filter((mealItem)=> {
    return  mealItem.categoryIds.indexOf(catId) >=0;
   
  });

  useLayoutEffect(()=> {

  const categoryTitle = CATEGORIES.find((category)=> 
    category.id === catId).title;

    navigation.setOptions({
      title:categoryTitle,
    });

  },[catId,navigation]);
 

function renderMealItem(itemData){
     const item =itemData.item
    const mealItemProps ={
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,

    }
    return <MealItem {...mealItemProps}/>
}

   return (
    <View style={styles.container}>
      <FlatList data={displyedMeals} keyExtractor={(item)=> item.id}  renderItem={renderMealItem}/>
    </View>
   )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        fles: 1,
        padding: 16,


    }
})