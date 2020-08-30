import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export interface ITitle {
    title: string;
}

export default function Title({ title }: ITitle) {
    return <Text style={styles.title}>{title}</Text>;
}
