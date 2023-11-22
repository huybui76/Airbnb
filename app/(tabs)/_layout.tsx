import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ScreenStack } from 'react-native-screens'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: { fontFamily: 'mon-sb' }
    }}>
      <Tabs.Screen name='index' options={
        {
          tabBarLabel: 'Explose',
          tabBarIcon: ({ color, size }) =>
            <AntDesign name="search1" size={size} color={color} />

          ,
        }} />
      <Tabs.Screen name='wishlists' options={
        {
          tabBarLabel: 'Wishlists',
          tabBarIcon: ({ color, size }) =>
            <AntDesign name="hearto" size={size} color={color} />

          ,
        }} />
      <Tabs.Screen name='trips' options={
        {
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome5 name="airbnb" size={size} color={color} />

          ,
        }} />
      <Tabs.Screen name='inbox' options={
        {
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) =>
            <MaterialIcons name="messenger-outline" size={size} color={color} />

          ,
        }} />
      <Tabs.Screen name='profile' options={
        {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) =>
            <Ionicons name="ios-person-outline" size={size} color={color} />

          ,
        }} />


    </Tabs>

  )
}

export default _layout