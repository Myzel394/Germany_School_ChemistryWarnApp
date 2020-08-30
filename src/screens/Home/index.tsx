import React, { useState } from "react";
import { Animated, FlatList, View } from "react-native";
import {
    faPizzaSlice,
    faFire,
    faHorseHead,
    faTrashAlt,
    faGlasses,
    faBook,
    faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

import Content from "../../components/Content";
import Cube from "../../components/Cube";
import styles from "./styles";
import WelcomePage from "./components/WelcomePage";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const information = [
    {
        title: "Iss nicht in Chemie",
        description: "Beim Essen könntest du dich im Chemieraum vergiften",
        extendedDescription:
            "Im Chemieraum werden viele Experimente von vielen Schülern/innen durchgeführt. " +
            "Da die Tische nicht zu 100% rein sind, könnten chemikalische Reste übrig sein, " +
            "die du beim Essen dann zu dir nehmen würdest.",
        color: "#6edd2e",
        secondColor: "#669224",
        icon: faPizzaSlice,
        id: "dont_eat",
        importance: 0.9,
        frequency: 0.5,
    },
    {
        title: "Mach deine Haare zusammen",
        description:
            "Wir haben genug Brennmaterial, wir brauchen dein Haar nicht",
        extendedDescription:
            "Haare sind sehr leicht brennbar. " +
            "Daher ist es ratsam, lange Haare zusammen zu machen, vor allem wenn mit Feuer experimentiert wird.",
        color: "#855E38",
        secondColor: "#4A2C25",
        icon: faHorseHead,
        id: "no_fire",
        importance: 0.8,
        frequency: 0.5,
    },
    {
        title: "Entferne deine Reste",
        description: "Auch Reste sind Müll und müssen entfernt werden",
        extendedDescription:
            "Chemikalische Reste müssen entfernt werden." +
            " Bringe sie entweder zurück zum Lehrer oder wirf sie in den Müll, wenn aufgefordert.",
        color: "#ffe500",
        secondColor: "#ca8f1a",
        icon: faTrashAlt,
        id: "remove_trash",
        importance: 0.4,
        frequency: 0.4,
    },
    {
        title: "Trag eine Schutzbrille",
        description: "Brillen schützen deine Augen vor Gefahren",
        extendedDescription:
            "Eine Brille kann dich vor dem Verlieren deines Augenlichts retten. " +
            "Selbst winzig kleine Chemikalien können dir einiges antun, daher solltest du immer eine Schutzbrille tragen." +
            "Falls keine Schutzbrille vorhanden ist, frag deinen Lehrer.",
        color: "#20cfee",
        secondColor: "#1791c1",
        icon: faGlasses,
        id: "wear_glasses",
        importance: 0.8,
        frequency: 0.4,
    },
    {
        title: "Führe Vorschriften aus",
        description: "Vorschriften sind vorallem in der Chemie sehr wichtig.",
        extendedDescription:
            "Da es in chemikalischen Experimente schnell zu ungewollten Folgen kommen kann, " +
            "musst du dich immer stets an die Vorschriften und Regeln des Lehrers halten.",
        color: "#7e7e7e",
        secondColor: "#2f2f2f",
        icon: faBook,
        id: "follow_rules",
        importance: 1,
        frequency: 1,
    },
    {
        title: "Halte deinen Platz sauber & sicher",
        description: "Ein sauberer Platz ist wie ein ganzes Handy",
        extendedDescription:
            "Nicht nur sollte der Platz sauber gehalten sein, sondern auch sicher. " +
            "Baue daher deine Experimente in einem sicheren Abstand auf.",
        color: "#7c19ee",
        secondColor: "#a0159d",
        icon: faHandSparkles,
        id: "keep_safe_and_clean",
        importance: 0.6,
        frequency: 0.9,
    },
    {
        title: "Spiel nicht mit Feuer",
        description: "Feuer ist gefährlich und kann dich schnell töten",
        color: "#ff8b00",
        secondColor: "#d42111",
        icon: faFire,
        id: "dont_play_with_fire",
        importance: 1,
        frequency: 0.5,
    },
];

export default function HomeScreen() {
    const [showWelcome, setShowWelcome] = useState<boolean>(true);

    return (
        <Content>
            <View style={styles.wrapper}>
                <AnimatedFlatList
                    ListHeaderComponent={
                        showWelcome && (
                            <WelcomePage
                                onRemovePage={() => setShowWelcome(false)}
                            />
                        )
                    }
                    data={information}
                    contentContainerStyle={styles.list}
                    renderItem={({ item }: any) => {
                        return (
                            <View style={styles.container}>
                                <Cube
                                    title={item.title}
                                    description={item.description}
                                    extendedDescription={
                                        item.extendedDescription
                                    }
                                    color={item.color}
                                    secondColor={item.secondColor}
                                    icon={item.icon}
                                    id={item.id}
                                    importance={item.importance}
                                    frequency={item.frequency}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </Content>
    );
}
