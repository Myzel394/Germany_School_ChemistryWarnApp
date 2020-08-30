import React from "react";
import { Text } from "react-native";
import createStyles from "react-native-style-helper";

import styles from "./styles";

interface ITextButton {
    [key: string]: any;
}

export default function TextButton({ children, style, ...other }: ITextButton) {
    return (
        <Text style={createStyles(styles.text, style)} {...other}>
            {children}
        </Text>
    );
}

TextButton.defaultProps = {
    style: {},
};
