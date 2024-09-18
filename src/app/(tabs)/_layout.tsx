import { Tabs } from 'expo-router';
export default function TabLayout() {
   return (
      <Tabs>
         <Tabs.Screen
            name='index'
            options={{
               title: 'Inicio',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
            }}
         />
         <Tabs.Screen
            name='history'
            options={{
               title: 'Historico',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
            }}
         />
         <Tabs.Screen
            name='config'
            options={{
               title: 'Configuração',
               headerStyle: { backgroundColor: 'rgb(249 115 22)' },
               headerTintColor: 'white',
            }}
         />
      </Tabs>
   );
}
