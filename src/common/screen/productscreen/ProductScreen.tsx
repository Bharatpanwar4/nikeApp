import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import React from 'react';
import { product } from '@/utils/data/product';

const ProductScreen = () => {
  return (
    <FlatList
      style={{
        // paddingTop:8,
        // paddingBottom:16
      }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={{ width: 40, height: 20 }}></View>
      )}
      data={product}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <View
            key={item.name}
            style={{
              marginHorizontal: 8,
              shadowColor: '#707070',
              backgroundColor: '#fff',
              shadowOffset: 0,
              elevation: 10,
              borderWidth: 1,
              borderRadius: 12,
            }}
            className="   border-[#70707010] p-1  "
          >
            <View className="w-[100%] " style={{ width: '100%' }}>
              <Image
                source={{ uri: item.image }}
                className=" rounded-md"
                style={{
                  width: Dimensions.get('screen').width * 0.4,
                  height: 170,
                }}
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

export default ProductScreen;
