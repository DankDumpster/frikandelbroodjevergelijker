import React from "react";
import Animated from "react-native-reanimated";
import Svg, { Path, PathProps } from "react-native-svg";
import {SVGProps} from "../types/SVGTypes";

const AnimatedPath = (Animated.createAnimatedComponent(
    Path
) as any) as React.ComponentClass<
    Animated.AnimateProps<{}, PathProps & {style?: any}>
>;

Animated.addWhitelistedNativeProps({
    stroke: true
})

const HomeSVG = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 640 512" fill={''}>
            <AnimatedPath
                d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"
                stroke={color}
                strokeWidth={2}
                fill={color}
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HomeSVG
