import {
  View, Text, ScrollView, Image, TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ArrowLeftIcon, StarIcon, LocationMarkerIcon, ChevronRightIcon,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import DishRow from '../components/DishRow';

const RestraurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-fit h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-12 left-3 p-1 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1 items-center">
            <StarIcon color="green" opacity={0.4} size={22} />
            <Text>{rating}</Text>
            <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-gray-500 text-xs">
              Nearby ·
              {address}
            </Text>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-400">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" opacity={0.6} size={22} />
        </TouchableOpacity>
      </View>
      <Text className="px-4 pt-6 mb-3 font-bold text-xl">
        Menu
      </Text>
      {/* Dish Rows */}
      {dishes.map((dish) => (
        <DishRow
          key={dish.id}
          id={dish.id}
          name={dish.name}
          description={dish.short_description}
          price={dish.price}
          image={dish.image}
        />
      ))}
    </ScrollView>
  );
};

export default RestraurantScreen;
