import { Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown: false}} />
            <Tabs.Screen name="pesquisa"/>
            <Tabs.Screen name="pedido"/>
            <Tabs.Screen name="perfil"/>
            <Tabs.Screen name="list"/>
        </Tabs>
    )
}