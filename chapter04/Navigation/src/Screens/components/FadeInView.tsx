import React, { FunctionComponent, useState, useEffect } from 'react';
import { Animated, StyleProp } from 'react-native';

interface Props {
  children: React.ReactNode;
  style: StyleProp<any>;
}

const FadeInView: FunctionComponent<Props> = ({ children, style }) => {
  const [fadeAnim, setFaceAnim] = useState<any>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
