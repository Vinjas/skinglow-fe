import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProductCategoriesScreen } from './products-categories-screen';
import { IngredientsScreen } from './ingredients-screen';
import { BrandsScreen } from './brands-screen';

const Tab = createMaterialTopTabNavigator();

export function SearchStack() {
  return (
    <Tab.Navigator
      initialRouteName={'Products'}
      screenOptions={{
        tabBarStyle: {
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          textTransform: 'capitalize',
          fontFamily: 'Kanit-Regular'
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#000'
        }
      }}
    >
      <Tab.Screen
        name='ProductsCategories'
        component={ProductCategoriesScreen}
        options={{ tabBarLabel: 'Products' }}
      />
      <Tab.Screen
        name='Ingredients'
        component={IngredientsScreen}
      />
      <Tab.Screen
        name='Brands'
        component={BrandsScreen}
      />
    </Tab.Navigator>
  );
}
