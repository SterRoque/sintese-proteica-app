import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
export default function TabLayout() {
   return (
      <Tabs screenOptions={{ tabBarActiveTintColor: 'rgb(249 115 22)' }}>
         <Tabs.Screen
            name='index'
            options={{
               title: 'Inicio',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
               tabBarIcon: ({ color }) => (
                  <FontAwesome
                     size={28}
                     name='home'
                     color={color}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name='history'
            options={{
               title: 'Historico',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
               tabBarIcon: ({ color }) => (
                  <FontAwesome
                     name='history'
                     size={28}
                     color={color}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name='config'
            options={{
               title: 'Configuração',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
               tabBarIcon: ({ color }) => (
                  <FontAwesome
                     size={28}
                     name='cog'
                     color={color}
                  />
               ),
            }}
         />
      </Tabs>
   );
}
