import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, Text, SafeAreaView, Image,
} from 'react-native';
import GlobalStyles from '../global-styles/GlobalStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Text>
        <View className="flex-row items-center pb-3 mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="text-bold text-xl">Current Location</Text>
          </View>
        </View>

      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
