import { View, Text} from 'react-native';
import React from 'react';
const Contribute: React.FC<Props> = (props) => {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Text style={{alignSelf:'center',fontSize:20,justifyContent:'center',alignItems:'center'}}>
        Feel free to contribute by pushing pull requests
      </Text>
    </View>
  )
}
export default Contribute;


