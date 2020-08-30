import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

import styles from "./styles";

export interface IPercentageInfo {
    title: string;
    percentage: number;
}

export const getPercentageString = (
    input: number,
    digits: number = 2,
): string =>
    Number.isInteger(input) ? input.toString() : input.toFixed(digits);

export default function PercentageInfo({ title, percentage }: IPercentageInfo) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.info}>
                {title}: {getPercentageString(percentage * 100)}%
            </Text>
            <Progress.Bar
                progress={percentage}
                color="#fff"
                borderRadius={0}
                height={20}
                indeterminate={loading}
            />
        </View>
    );
}
