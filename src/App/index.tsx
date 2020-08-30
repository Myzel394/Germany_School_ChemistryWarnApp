import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppContainer from "../screens";

export default function App() {
    return (
        <NavigationContainer>
            <AppContainer />
        </NavigationContainer>
    );
}
