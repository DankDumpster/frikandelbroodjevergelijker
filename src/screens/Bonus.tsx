import React from "react";
import WinkelCard from "../components/WinkelCard";
import {ScrollView, Image, Text, View} from "react-native";

export default class Bonus extends React.Component<any, any> {
    render() {
        return (
            <View>
                <ScrollView>
                    <WinkelCard
                        text="Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Vivamus gravida, metus eleifend
                        vulputate fringilla, ligula odio vehicula tortor,
                        ut iaculis nulla eros id turpis."
                        winkel="ah"
                    />
                </ScrollView>
            </View>
        )
    }
}
