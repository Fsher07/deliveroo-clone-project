/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const FeaturedRow = ({ id, title, description, search }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'featured' && _id== $id] {
      ...,
      restaurants[]->{
        ...,
        dished[]->,
        type-> {
          name
        }
        },
      }[0]`,
    { id }).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, []);

  return (
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
        {/* if search is empty, show all restaurants, else show filtered restaurants */}
        {search === '' ? restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dished}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        )) : restaurants.filter((restaurant) => (
          restaurant.name.toLowerCase().includes(search.toLowerCase())
        )).map((restaurant, index) => (
          <RestaurantCard
            key={index}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dished}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
