import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenCadastar, ScreenListar } from "../screens"
import { Entypo } from "@expo/vector-icons"
import { colors } from "../styles/colors"

type TabList = {
    Listar: undefined
    Cadastrar: undefined
}

type TabNavProp = BottomTabNavigationProp<TabList>
export type TabTypes = {
    navigation: TabNavProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabList>()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveBackgroundColor: colors.primary,
                tabBarActiveBackgroundColor: colors.primary,
                tabBarInactiveTintColor: colors.white,
                tabBarActiveTintColor: colors.white
            }}
        >
            <Tab.Screen name="Listar" component={ScreenListar}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="book" size={24} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Cadastrar" component={ScreenCadastar}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="bookmarks" size={24} color={colors.white} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


