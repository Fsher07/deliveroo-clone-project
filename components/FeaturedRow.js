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
        imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg"
        title="Restaurant 1"
        rating="4.5"
        genre="Chinese"
        address="123 Main St, New York"
        short_description="This is a short description of the restaurant"
        dishes="Chinese, American, Italian, Japanese"
        long="-73.988, 40.741"
        lat="40.741"
      />

      <RestaurantCard
        id={1}
        imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg"
        title="Restaurant 1"
        rating="4.5"
        genre="Chinese"
        address="123 Main St, New York"
        short_description="This is a short description of the restaurant"
        dishes="Chinese, American, Italian, Japanese"
        long="-73.988, 40.741"
        lat="40.741"
      />

      <RestaurantCard
        id={1}
        imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg"
        title="Restaurant 1"
        rating="4.5"
        genre="Chinese"
        address="123 Main St, New York"
        short_description="This is a short description of the restaurant"
        dishes="Chinese, American, Italian, Japanese"
        long="-73.988, 40.741"
        lat="40.741"
      />

      <RestaurantCard
        id={1}
        imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg"
        title="Restaurant 1"
        rating="4.5"
        genre="Chinese"
        address="123 Main St, New York"
        short_description="This is a short description of the restaurant"
        dishes="Chinese, American, Italian, Japanese"
        long="-73.988, 40.741"
        lat="40.741"
      />

    </ScrollView>
  </View>
);

export default FeaturedRow;
