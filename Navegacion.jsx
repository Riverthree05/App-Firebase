import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// importar screens principales
import ScreenLogin from "./src/screen/ScreenLogin";
import ScreenRegistro from "./src/screen/ScreenRegistro";
import ScreenHome from "./src/screen/home/ScreenHome";
import ScreenSetting from "./src/screen/ScreenSetting";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function Mystack() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='login' component={ScreenLogin}/>
        <Tab.Screen name='registro' component={ScreenRegistro}/>

    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="Home" 
      component={ScreenHome} 
      options={{title:"Dashboard",
      tabBarIcon: ({size, color}) => 
      <FontAwesome name="home" size={size} color={color} />
      }} />

    <Tab.Screen name="Settings" component={ScreenSetting} 
      options={{title:"Configuración",
      tabBarIcon: ({size, color}) => 
      <FontAwesome name="cog" size={size} color={color} />
      }}
    /> 
    </Tab.Navigator>
  );
}

export default function Navegacion(){
    return (
         <NavigationContainer>
            <MyTabs/>
         </NavigationContainer>   
    );
};