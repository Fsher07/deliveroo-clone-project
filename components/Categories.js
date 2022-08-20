import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/aperitivo-do-camar%C3%A3o-salm%C3%A3o-sushi-roll-futomaki-e-abacado-numa-placa-de-pedra-preta-206585049.jpg" title="testing" />
    </ScrollView>
  )
}

export default Categories;