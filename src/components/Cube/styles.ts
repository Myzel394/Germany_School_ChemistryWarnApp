import { StyleSheet } from "react-native";

export default StyleSheet.create({
    outer: {
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 40,
    },
    shadow: {
        shadowColor: "#aaa",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
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
