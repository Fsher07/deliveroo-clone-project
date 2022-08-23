/* eslint-disable react/prop-types */
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import Currency from 'react-currency-formatter';
import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const DishRow = ({
  id, name, description, price, image,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-400/75 flex-row ${isPressed && 'border-b-0'} `}>
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>
        <View className="border border-blue-600/50">
          <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20  bg-gray-300 p-4" />
        </View>
      </TouchableOpacity>

      {isPressed && (
      <View className="bg-white px-4 pb-3">
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <MinusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>

          <Text>0</Text>

          <TouchableOpacity>
            <PlusCircleIcon color="#00CCBB" size={40} />
          </TouchableOpacity>

        </View>
      </View>
      )}
    </>
  );
};

export default DishRow;
