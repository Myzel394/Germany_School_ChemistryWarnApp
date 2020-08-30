import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export interface IAdvice {
    advice: string;
}

export default function Advice({ advice }: IAdvice) {
    return <Text style={styles.advice}>{advice}</Text>;
}
