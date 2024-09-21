import { Tabs } from "expo-router";
import { Stack } from "expo-router";


const StackLayout = () => {
    return (
        <Stack >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default StackLayout;
