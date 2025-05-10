import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from '../screens/EscudoScreen';
import JogadorScreen from '../screens/JogadorScreen';
import TitulosScreen from '../screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen
        name='EscudoScreen'
        component={EscudoScreen}
        options={{
          title: "Escudos",
          drawerIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
        }}
      />

      <Drawer.Screen
        name='JogadorScreen'
        component={JogadorScreen}
        options={{
          title: "Jogadores",
          drawerIcon: ({ color, size }) => <Ionicons name='football' color={color} size={size} />
        }}
      />

      <Drawer.Screen
        name='TitulosScreen'
        component={TitulosScreen}
        options={{
          title: "Títulos",
          drawerIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
        }}
      />

    </Drawer.Navigator>
  );
}
