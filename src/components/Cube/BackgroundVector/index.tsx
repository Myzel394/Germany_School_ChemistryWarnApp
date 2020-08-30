import React from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import styles from "./styles";

export interface IBackgroundVector {
    icon: IconDefinition;
    size: number;
}

export default function BackgroundVector({ icon, size }: IBackgroundVector) {
    return (
        <View style={styles.content}>
            <FontAwesomeIcon icon={icon} style={styles.icon} size={size} />
        </View>
    );
}

BackgroundVector.defaultProps = {
    size: 100,
};
