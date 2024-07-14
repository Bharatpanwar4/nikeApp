import ProductScreen from "@/src/common/screen/productscreen/ProductScreen";
import { product } from "@/utils/data/product";
import { Dimensions, FlatList, Image, StatusBar, Text, View } from "react-native";

export default function Index() {
  
  return (
    <View className="flex-1 items-center justify-center border " style={{margin:4 ,padding:0}}>
<View>
<ProductScreen/>

</View>

  
    <StatusBar  />
  </View>
  );
}
