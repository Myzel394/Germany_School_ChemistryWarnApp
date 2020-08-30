import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export interface IDescription {
    description: string;
}

export default function Description({ description }: IDescription) {
    return <Text style={styles.description}>{description}</Text>;
}
