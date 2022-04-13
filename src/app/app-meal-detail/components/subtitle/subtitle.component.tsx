import { View, Text } from 'react-native';
import React from 'react';
import {styles} from './subtitle.style';

function Subtitle({children}:any) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;
