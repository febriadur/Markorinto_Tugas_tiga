import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://store-images.s-microsoft.com/image/apps.1719.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.abf46174-2d32-4f53-a6cd-644d5b2be452",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>Linkedin</Text>
          <Text style={styles.text2}>Masukan Email</Text>
          <TextInput style={styles.inputtext1} placeholder="" />
          <Text style={styles.text3}>Kata Sandi</Text>
          <TextInput style={styles.inputtext2} placeholder="" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('Kata Sandi Salah')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button2}onPress={()=>alert()}>
            <Text style={styles.text4}>Lupa Kata Sandi</Text>
    
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "blue",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
 color:"blue",
},
text1:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},
text3:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:110,
},
text2:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:61,
},
inputtext1:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
 },
 inputtext2:{
   color: "black",
   borderRadius:5,
   borderWidth:1,
   fontSize:20,
   width:300,
   height:30,
   marginTop:10
  },


})