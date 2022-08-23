import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../global-styles/GlobalStyles'

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea} className="bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require('../assets/orderLoadScreen.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-center text-lg font-bold my-10"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={80} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;