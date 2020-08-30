import React, { ReactElement } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);

export interface IFadeIn {
    children: ReactElement;

    [key: string]: any;
}

export default function FadeIn({ children, ...other }: IFadeIn) {
    return (
        <AnimatedView
            animation="fadeIn"
            duration={1000}
            useNativeDriver={true}
            {...other}
        >
            {children}
        </AnimatedView>
    );
}
