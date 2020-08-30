import { StyleSheet } from "react-native";

export default StyleSheet.create({
    outer: {
        flex: 1,
        height: "100%",
    },
    wrapper: {
        paddingHorizontal: 10,
    },
    gradientOuter: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
    },
    gradient: {
        flex: 1,
    },
});
