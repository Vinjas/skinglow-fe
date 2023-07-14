import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'tamagui';

export function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: backgroundColor,
      height: '100%',
      display: 'flex',
    },
    flex: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    flex1: {
      flex: 1,
      height: '100%',
    },
  });

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.flex}>
          <Text style={styles.flex1}>Test App</Text>
          <Button>Tamagui</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
