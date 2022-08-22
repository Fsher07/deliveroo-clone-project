/* eslint-disable no-underscore-dangle */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, Text, SafeAreaView, Image, TextInput, ScrollView,
} from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import GlobalStyles from '../global-styles/GlobalStyles';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client.fetch(`
    *[_type == 'featured'] {
      ...,
             restaurants[]->{
               ...,
               dished[]->
              }
             }`).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea} className="pt-5 bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-5 mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="text-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        {/* Search */}
        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={30} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-200">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}

        {featuredCategories.length > 0 ? (featuredCategories.map((featuredCategory) => (
          <FeaturedRow
            key={featuredCategory._id}
            id={featuredCategory._id}
            title={featuredCategory.name}
            description={featuredCategory.short_description}
          />
        ))) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
