import { View, Text, ViewBase} from 'react-native';
import React from 'react';
const Info: React.FC<Props> = (props) => {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Text style={{alignSelf:'center',fontSize:20,justifyContent:'center',alignItems:'center'}}>
      DEMO REACT NATIVE APPLICATION
      </Text>
    </View>
  )
};
export default Info;
