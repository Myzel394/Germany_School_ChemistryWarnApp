import React from "react";
import { View, Text, Linking, Dimensions, Button } from "react-native";

import styles from "./styles";

export interface IWelcomePage {
    onRemovePage: () => void;
}

export default function WelcomePage({ onRemovePage }: IWelcomePage) {
    const deviceHeight = Dimensions.get("window").height;

    return (
        <View
            style={[
                styles.wrapper,
                {
                    height: deviceHeight,
                },
            ]}
        >
            <View
                style={[
                    styles.container,
                    {
                        marginTop: deviceHeight / 6,
                    },
                ]}
            >
                <Text style={styles.header}>Chemie Warnungen</Text>
                <Text style={styles.paragraph}>
                    Eine weitere App von{" "}
                    <Text
                        style={styles.link}
                        onPress={() =>
                            Linking.openURL("https://github.com/Myzel394")
                        }
                    >
                        ***REMOVED***
                    </Text>
                    .
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Startseite entfernen"
                        onPress={() => onRemovePage()}
                    />
                </View>
            </View>
        </View>
    );
}
