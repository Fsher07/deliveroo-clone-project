import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => (
  <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="text-bold text-lg">{title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="font-bold text-gray-500 text-xs px-4">{description}</Text>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      className="pt-4"
    >
      {/* Restaurant Cards... */}
      <RestaurantCard
         id={1}
         imgUrl="https://links.papareact.com/wru"
         title="Restaurant 1"
         rating="4.5"
         genre="Chinese"
         address="123 Main St, New York, NY 10001"
         short_description="This is a short description of the restaurant"
         dishes="Chinese, American, Italian, Japanese"
         long="-73.988, 40.741"
         lat="40.741"
      />
    </ScrollView>
  </View>
);

export default FeaturedRow;
