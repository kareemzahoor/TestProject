import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

function Signup() {
  const navigation= useNavigation();
  return (
    <View style={style.container}>
      <View style={style.imageView}>
        <ImageBackground
          source={require('../images/bg.jpg')}
          resizeMode="cover"
          style={style.bgImage}>
          <Text style={style.text}>Welcome</Text>
        </ImageBackground>
      </View>
      <View style={style.textView}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'grey'}
          style={style.inputs}></TextInput>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          style={style.inputs}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'grey'}
          style={style.inputs}></TextInput>
        <View>
          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.btnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={style.logView}>
          <Text style={style.logText}>OR SIGN UP BY</Text>
        </View>
        <View style={style.iconView}>
        <TouchableOpacity>
          <Image style={style.icon} source={require('../images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.icon} source={require('../images/fb.png')} />
        </TouchableOpacity>
        </View>
        <View style={style.bottomView}>
          <Text>Already Signup? </Text>
          <TouchableOpacity style={style.signupBtn}
          onPress={() => navigation.navigate('Login')}>
            <Text style={style.forgetbtnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a60059',
  },
  imageView: {
    flex: 0.5,
  },
  bgImage: {
    height: '100%',
    justifyContent: 'center',
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
  textView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 20,
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    fontSize: 18,
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#F3F5F7',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#888BF4',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
  },
  forgetBtn: {
    width: '80%',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  forgetbtnText: {
    color: '#5252C7',
    fontSize: 16,
    fontWeight: 400,
  },
  logView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logText: {
    textAlign: 'center',
    fontWeight: 400,
  },
  iconView: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  icon: {
    width: 25,
    height: 25,
    margin:10,
    backgroundColor:"#E3E4FC",
    borderRadius:50,
  },
  bottomView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  },
});

export default Signup;
