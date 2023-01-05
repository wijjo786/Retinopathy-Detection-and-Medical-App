import React, { useState } from 'react';
import { Text, View, StyleSheet,Image, Button, TouchableOpacity, ImageBackground,TextInput, ScrollView, FlatList,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Searchbar } from 'react-native-paper';

import Icon from 'react-native-ionicons';

function HomeScreen({navigation}){
  return (
    <View>
    <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', height:720  }}>
    <Image source={require('./log.png')} style={{marginTop:180}}/>
    <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 150, padding:5, marginTop:250,  alignItems:'center', borderRadius:5}}
        onPress={() => navigation.navigate('Second' )} ><Text style={{color:'white', fontSize:18, fontWeight:'bolder', }}> Get Started</Text>

    </TouchableOpacity>
    
    </ImageBackground>

  </View>

 );
}
function SecondScreen({navigation}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [valuee, setValue] = useState(['']);
  
  const saveValue = () =>{
    if(name){
      AsyncStorage.setItem('any key here', name);
      
      alert('Data Saved');
      console.log(name)

    }else{
      alert('please fill data');
    }
  }
  const getValue = () =>{
    AsyncStorage.getItem('any_key_here')
    .then((value) =>
      setValue(value),
      console.log(value)
      
    )
  }

 
  return(
    <View>
    <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={require('./Images/log.png')} style={{marginTop:40}}/>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:60}}> 
        <Text style={{ fontSize:24, fontWeight:'bolder', }}>Join us to start ! </Text>
        <Text style={{marginTop:3, fontSize:12, fontFamily:'Rubik', color: '#677294', alignSelf:'center', alignContent:'center', }}>You can search doctor, book appointment and find a</Text>
        <Text style={{marginTop:6, fontSize:12, fontFamily:'Rubik', color: '#677294', alignSelf:'center', alignContent:'center', }} >better health solution </Text>

      </View>
      <View style={{justifyContent:'center', marginTop:50}}>
      <TextInput placeholder="Name" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', }} placeholderTextColor="#677294"  value={name} onChangeText={(data) => setName(data)}/>
        <TextInput placeholder="Email" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" />
        <TextInput placeholder="Password" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294"  />
        

      </View>

      <View  style={{marginTop:60, justifyContent:'center', marginTop:40}}>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8}} onPressIn={saveValue} onPress={ ()=> navigation.navigate('Forget')  } >
        <Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Sign Up</Text>
        
      </TouchableOpacity>
      
      
      </View>
      <View style={{height:190}}>
        <TouchableOpacity style={{marginTop:50, color:'#0EBE7F', alignItems:"center"}} onPress={getValue}>
          <Text style={{color:'#0EBE7F'}}>Have an account? Log in</Text>
        </TouchableOpacity>
        
     </View>
    </ImageBackground>
    
    </View>
  );
}
function SigninScreen({navigation}){

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return(
    <View>
    <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={require('./Images/log.png')} style={{marginTop:40}}/>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:60}}> 
        <Text style={{ fontSize:24, fontWeight:'bolder', }}>Welcome Back</Text>
        <Text style={{marginTop:3, fontSize:12,  color: '#677294', alignSelf:'center', alignContent:'center', }}>You can search doctor, book appointment and find a</Text>
        <Text style={{marginTop:6, fontSize:12,  color: '#677294', alignSelf:'center', alignContent:'center', }}>better health solution</Text>

      </View>
      <View style={{justifyContent:'center', marginTop:50}}>
      
        <TextInput placeholder="Email" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', }} placeholderTextColor="#677294" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294"  value={pass} onChangeText={setPass}/>

      </View>

      <View  style={{marginTop:60, justifyContent:'center', marginTop:40}}>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8}} >
        <Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:30,color:'#0EBE7F', alignItems:"center"}} onPress={()=>navigation.navigate('Forget')}><Text>Forget Password</Text></TouchableOpacity>
      </View>

      <View style={{height:190}}>
        <TouchableOpacity style={{marginTop:50, color:'#0EBE7F', alignItems:"center"}}>
          <Text style={{color:'#0EBE7F'}}>Don't have an account? Join Us</Text>
        </TouchableOpacity>
     </View>
    </ImageBackground>
    
    </View>
  );
}


function ForgetScreen({navigation}){
  return(
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={require('./Images/log.png')} style={{marginTop:40}}/>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:60}}> 
      <Text style={{fontFamily:'Rubik', fontSize:24, fontWeight:'bolder', marginTop:40}}>Forget Your Password</Text>
    <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:12}}>You can search doctor, book appointment and find</Text>
    <Text style={{ justifyContent:'center',  fontSize:12}}>a better health solution</Text>

      </View>
      <View style={{justifyContent:'center', marginTop:50}}>

      </View>

      <View  style={{marginTop:60, justifyContent:'center', marginTop:50}}>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8}} >
        <Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:30,color:'#0EBE7F', alignItems:"center"}} onPress={()=>navigation.navigate('Forget')}><Text>Forget Password</Text></TouchableOpacity>
      </View>


    </ImageBackground>
      <View style={{marginTop:-150}}>
        <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', height:360, borderTopRightRadius:25, borderTopLeftRadius:25 }}>
        <View style={{fontWeight:'bolder',backgroundColor:'#C4C4C4', width:130, height:4, marginTop:10, borderRadius:6}} />
        <Text style={{fontFamily:'Rubik', fontSize:24, fontWeight:'bolder', marginTop:15}}> Forget Password</Text>
        <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:12, fontFamily:'Rubik', color: '#677294'}}>Enter your email for the verification proccesss, we will send 4 digits code to  your email.</Text>
        <TextInput placeholder="Email" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
        <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8, marginTop:25}}
onPress={()=>navigation.navigate('Reset')} ><Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Continue</Text></TouchableOpacity>
        </View>

        </View>
    </View>
 

  );
}
function ResetScreen({navigation}){
  return(
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
    <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={require('./Images/log.png')} style={{marginTop:40}}/>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:60}}> 
      <Text style={{fontFamily:'Rubik', fontSize:24, fontWeight:'bolder', marginTop:40}}>Forget Your Password</Text>
    <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:12}}>You can search doctor, book appointment and find</Text>
    <Text style={{ justifyContent:'center',  fontSize:12}}>a better health solution</Text>

      </View>
      <View style={{justifyContent:'center', marginTop:50}}>

      </View>
      <View  style={{marginTop:60, justifyContent:'center', marginTop:50}}>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8}} >
        <Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:30,color:'#0EBE7F', alignItems:"center"}} onPress={()=>navigation.navigate('Forget')}><Text>Forget Password</Text></TouchableOpacity>
      </View>

   


    </ImageBackground>
    <View style={{marginTop:-150}}>
      <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', height:360, borderTopRightRadius:25, borderTopLeftRadius:25 }}>
      <View style={{fontWeight:'bolder',backgroundColor:'#C4C4C4', width:130, height:4, marginTop:10, borderRadius:6}} />
      <Text style={{fontFamily:'Rubik', fontSize:24, fontWeight:'bolder', marginTop:15}}> Enter 4 Digits Code</Text>
    <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:14, fontFamily:'Rubik', color: '#677294'}}>Enter the 4 digits code that you received on
your email.</Text>
      

    <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
    <TextInput  style={{borderWidth:1, borderRadius:7, width:45, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    <TextInput  style={{borderWidth:1, borderRadius:7, width:45, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    <TextInput  style={{borderWidth:1, borderRadius:7, width:45, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    <TextInput  style={{borderWidth:1, borderRadius:7, width:45, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    </View>

      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8, marginTop:25}}
onPress={()=>navigation.navigate('Newpass')} ><Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Continue</Text></TouchableOpacity>
      </View>

      </View>
    </View>
    
  );
}

function NewpassScreen({navigation}){
  return(
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
    <ImageBackground source={require('./Images/bg.png')} resizeMode='stretch' style={{ alignItems: 'center', justifyContent: 'center',   }}>
      <Image source={require('./Images/log.png')} style={{marginTop:40}}/>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:45}}> 
      <Text style={{fontFamily:'Rubik', fontSize:24, fontWeight:'bolder', marginTop:40}}>Forget Your Password</Text>
    <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:12}}>You can search doctor, book appointment and find</Text>
    <Text style={{ justifyContent:'center',  fontSize:12}}>a better health solution</Text>

      </View>
      <View style={{justifyContent:'center', marginTop:50}}>

      </View>
      <View  style={{marginTop:60, justifyContent:'center', marginTop:50}}>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8}} >
        <Text style={{color:'white', fontSize:14, fontWeight:'bolder'}} >Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:30,color:'#0EBE7F', alignItems:"center"}} onPress={()=>navigation.navigate('Forget')}><Text>Forget Password</Text></TouchableOpacity>
      </View>

   


    </ImageBackground>
  <View style={{marginTop:-145}}>
      <View style={{backgroundColor: '#FFFFFF', alignItems: 'center',marginTop:-30, height:400, borderTopRightRadius:25, borderTopLeftRadius:25 }}>
      <View style={{backgroundColor:'#C4C4C4', width:110, height:4, marginTop:10, borderRadius:6}} />
      <Text style={{ fontSize:24, fontWeight:'bolder', marginTop:15}}> Reset Password</Text>
      <Text style={{marginTop:3, justifyContent:'center', padding:20, fontSize:14,  color: '#677294'}}>Set the new password for your account so you can login and access all the features.</Text>
  <TextInput placeholder="New Password" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
  <TextInput placeholder="Re-enter Password" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:30}} placeholderTextColor="#677294" fontFamily="Rubik"/>
      <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8, marginTop:25}}
  onPress={()=>navigation.navigate('Profile')} ><Text style={{color:'white', fontSize:14, fontWeight:'bolder'}}>Update Password</Text></TouchableOpacity>

      </View>
    </View>
  </View>
  );
}

function ProfileScreen({navigation}){
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [Birth, setBirth] = useState('');
  const [Address, setAddress] = useState('');
  return(
    <View>
    <ImageBackground source={require('./Images/bg.png')} resizeMode= "stretch" style={{ alignItems: 'center', justifyContent: 'center', height:720 }}>
    
    <View style={{backgroundColor: '#0EBE7F', width:'100%', height:310, borderBottomStartRadius:25, borderBottomEndRadius:25, marginTop:-60}}>
    <View style={{ alignItems: 'center',  width:'100%' }}>
    <Text style={{fontWeight:'bold', color: '#FFFFFF', marginTop:65, fontSize:16}}>Set up your profile</Text>
    <Text style={{ color: '#FFFFFF', alignItems:'center', fontSize:14, marginTop:10}}>Update your profile to your connect doctor  </Text>
    <Text style={{ color: '#FFFFFF', alignItems:'center', fontSize:14, marginTop:3}}>with better impression</Text>
    <Image source={require('./Images/smilime.png')}  style={{borderRadius:100, width:150, height:150, marginTop:10}}/>

    
    </View>
    </View>
    
    <View style={{marginTop:20, alignItems:'center'}}>
    <Text style={{marginLeft:-100, fontWeight:'bolder', fontSize:16}}>Personal Information</Text>
    
    <TextInput  placeholder="Name" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" fontFamily="Rubik" value={name} onChangeText={setName} />
    <TextInput  placeholder="Contact" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    <TextInput  placeholder="Birthday" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" fontFamily="Rubik"/>
    <TextInput  placeholder="Address" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" fontFamily="Rubik"/>

    <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8, marginTop:15}}
onPress={()=>navigation.navigate('Appk', {Params: name})} ><Text style={{color:'white', fontSize:14, fontWeight:'bolder'}}>Continue</Text></TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
}

function HomiScreen({navigation, route}){
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('./Images/bg.png')} resizeMode= "stretch" style={{marginTop:-20 , height:740}}>
      <View style={{backgroundColor: '#0EBE7F', width:'100%', height:220, borderBottomStartRadius:25, borderBottomEndRadius:25}}>
         <Text style={{color: '#FFFFFF', fontSize:17, marginTop:80, marginLeft:30 }}> Hi Wajahat! </Text>
         <Text style={{fontWeight:'bold', color: '#FFFFFF',  fontSize:20, marginLeft:30}}>Find Your Doctor</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:-19}}>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:40}}>
        <Text style={{color:'#333333', fontWeight:'bolder', fontSize:18, marginLeft:-70}}>Popular Doctor</Text>
        <TouchableOpacity  style={{color:'#677294', fontWeight:'bolder', fontSize:12, marginRight:-70}} onPress={() => navigation.navigate('Doctor')}><Text>See all</Text></TouchableOpacity>
        </View>

        <ScrollView  horizontal={true} contentContainerStyle={{margin:15,
      justifyContent:'space-between',
      marginTop:20}}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{backgroundColor:'white', borderRadius:15}} onPress={() => navigation.navigate('Doctor')}>
          <Image source={require('./Images/Rectangle508.png')} style={{height:150, width:150,borderRadius:15}}/>
          <Text style={styles.text1}>Dr. Ketherine</Text>
          <Text style={{alignSelf:'center', color:'#677294'}}> Specialist</Text>
          </TouchableOpacity>

          <View style={{width:15}}></View>
  
          <TouchableOpacity style={{backgroundColor:'white', borderRadius:15}} onPress={() => navigation.navigate('Doctor')}>
            <Image source={require('./Images/51159c3691b3da420c7ca94308434939.png')} style={{height:150, width:150,borderRadius:15}}/>
            <Text style={styles.text1}>Dr. Tayyab</Text>
            <Text style={{alignSelf:'center', color:'#677294'}}> Specialist</Text>
            
          </TouchableOpacity>
          <View style={{width:15}}></View>
  
          <TouchableOpacity style={{backgroundColor:'white', borderRadius:15}} onPress={() => navigation.navigate('Doctor')}>
             <Image source={require('./Images/image.png')} style={{height:150, width:150,borderRadius:15}}/>
             <Text style={styles.text1}>Dr. Ayesha</Text>
             <Text style={{alignSelf:'center', color:'#677294'}}> Specialist</Text>
          </TouchableOpacity>

        </ScrollView>
        <View style={{ flexDirection:'row', justifyContent:'space-evenly', marginTop:50}}>
            <TouchableOpacity style={{backgroundColor:'rgba(39, 83, 243, 1.0)', borderRadius:5}} onPress={() => navigation.navigate('Appointment')}>
            <Image source={require('./Images/Appointment.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'rgba(39, 83, 243, 1.0)', borderRadius:5}} onPress={() => navigation.navigate('Doctor')}>
            <Image source={require('./Images/HealthRecords.png')}  />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'rgba(257,127, 69, 1.0)', borderRadius:5, justifyContent:'center', width:65}}>
            <Image source={require('./Images/Group(2).png')} style={{alignSelf:'center'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'rgba(255, 72, 76, 1.0)', borderRadius:5, justifyContent:'center', width:65}}>
            <Image source={require('./Images/Group(3).png')}  style={{alignSelf:'center'}} />
            </TouchableOpacity>
        </View>
        

      </ScrollView>

      
      </ImageBackground>
    </ScrollView>
  );
}

function DoctorScreen({navigation, route}){
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const onChangeSearch = query => setSearchQuery(query);

  const [dname, setDname]= useState([
    {name:'Dr. Aliya', available:'12:00 PM Friday', Image:require('./Images/image.png') ,key:1},
    {name:'Dr. Ketherine', available:'13:00 PM Monday',Image:require('./Images/Rectangle508.png'), key:2},
    {name:'Dr. Chris', available:'14:00 PM Tuesday',Image:require('./Images/51159c3691b3da420c7ca94308434939.png'), key:3},
    {name:'Dr. Richard', available:'18:00 PM Sunday',Image:require('./Images/smilime.png'), key:4},
  ]);
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('./Images/bg.png')} resizeMode= "cover" style={{marginTop:-20, height:730 }}>
      <View style={{height:50}}></View>
      
      <FlatList   showsVerticalScrollIndicator={false} data={dname} keyExtractor={(item) => `${item.key}`} renderItem={({item}) =>(
        <ScrollView style={{ margin:15, marginTop:5 }} >
        <View style={{backgroundColor:'white', padding:15, borderRadius:10, flexDirection:'row'}} >
        <View >
        <Image source={item.Image} style={{height:80, width:80, borderRadius:5}}/>
        <Text style={{color:'#0EBE7F', fontSize:13, fontWeight:'bold', marginTop:8 }}>Next Available</Text>
        <Text style={{color:'#677294'}}>{item.available}</Text>
        </View>
  
        <View style={{marginLeft:-5}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.name}</Text>
        <Text style={{color:'#0EBE7F', fontSize:13, fontWeight:"500"}}>Eye Surgon</Text>
        <Text style={{color:'#677294', fontSize:12}}>7 Year Experience</Text>
        
        <TouchableOpacity  style={{width:111, height:35, backgroundColor:'#0EBE7F', borderRadius:5, justifyContent:'center',   marginLeft:50, marginTop:27}}  onPress={() => navigation.navigate('Detail', item)}>
          <Text style={{color:'white',alignSelf:'center'}}>Book Now</Text>
        </TouchableOpacity>
        </View>
        </View>

        </ScrollView>
        
        )}/>
      </ImageBackground>

    </ScrollView>
  ); 
}

function DetailScreen({navigation, route}){
  const sdi = route.params.Image;
  const sdn = route.params.name;
  const sdk = route.params.key; 
  return(
    <View style={{ }}>
      <ImageBackground source={require('./Images/bg.png')} resizeMode= "stretch" style={{height:720}}>
      <View style={{backgroundColor:'white', padding:15, borderRadius:8, flexDirection:'row', margin:15}} >
        <View >
        <Image source={route.params.Image} style={{height:80, width:80, borderRadius:5}}/>
    
        </View>
        <View style={{ marginLeft:15}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>{route.params.name}</Text>
          <Text style={{color:'#0EBE7F', fontSize:13, fontWeight:"500"}}>Eye Surgon</Text>
          <Text style={{color:'#677294', fontSize:12}}>7 Year Experience</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'#0EBE7F'}}>$</Text>
          <Text style={{color:'#677294'}}>28.00</Text>
        </View>
        <TouchableOpacity  style={{width:150, height:35, backgroundColor:'#0EBE7F', borderRadius:5, justifyContent:'center', color:'white', marginLeft:-1, marginTop:10, }}  onPress={() => navigation.navigate('Book', {sdn, sdi, sdk})} ><Text style={{alignSelf:'center', color:'white', fontWeight:'bold'}} >Book Now</Text></TouchableOpacity>

      </View>
      </View>
       
      <View style={{margin:15, marginTop:50, justifyContent:'space-evenly'}}>
        <Text style={{fontWeight:'bold', fontSize:16, color:'#677294'}}>Services</Text>
        <Text style={{fontSize:12, color:'#677294', marginTop:5}}><Text style={{color:'green', fontWeight:'bold', fontSize:12}}>1.</Text>   Patient care should be the number one priority.</Text>
        <Text style={{fontSize:12, color:'#677294', marginTop:5}}><Text style={{color:'green', fontWeight:'bold'}}>2.</Text>   If you run your practiceyou know how frustrating.</Text>
        <Text style={{fontSize:12, color:'#677294', marginTop:5}}><Text style={{color:'green', fontWeight:'bold',fontSize:12}}>3.</Text>   That’s why some of appointment reminder system. </Text>
      </View>

      </ImageBackground>

    </View>
  );
}



function BookScreen({navigation, route}){

  const ww1 = route.params.sdi;
  const ww2 = route.params.sdn;
  const ww3 = route.params.sdk; 

  const [date, setDate]= useState([
    {date1: 'Tuesday, 23 Feb', slot: Math.floor(Math.random() * 20) + 1,  id:1},
    {date1: 'Tuesday, 24 Feb', slot: Math.floor(Math.random() * 20) + 1, id:2},
    {date1: 'Tuesday, 25 Feb', slot: Math.floor(Math.random() * 20) + 1, id:3},
    {date1: 'Tuesday, 26 Feb', slot: Math.floor(Math.random() * 20) + 1, id:4}
  ])
  const [timee, setTimee]=useState("")
  const [datee, setDatee] = useState("")

  return(
    <View>
      <ImageBackground source={require('./Images/bg.png')} resizeMode= "stretch" style={{height:720}}>
      <View style={{backgroundColor:'white', padding:10, borderRadius:8, flexDirection:'row', margin:15}} >
      <View >
        <Image source={route.params.sdi} style={{height:70, width:70, borderRadius:5}}/>
  
        </View>
        <View style={{ marginLeft:15, marginTop:10}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{route.params.sdn}</Text>
        <Text style={{color:'#0EBE7F', fontSize:13, fontWeight:"500"}}>Eye Surgon</Text>
        </View>
        </View>

        <View>
        <FlatList horizontal data={date} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyExtractor={(item) => `${item.id}`}  
        renderItem={({item}) =>(
  
        <TouchableOpacity  style={{width:150, height:54, backgroundColor:'Transparent', borderRadius:5, justifyContent:'center', padding:19, color:'white', marginLeft:50, marginTop:27}}  onPress={() => setDatee(item.date1) } >
        <Text style={{fontSize:15, fontWeight:'bold'}}>{item.date1}</Text>
        <Text style={{alignSelf:'center', marginTop:4, fontSize:10, color:'#677294'}}>{item.slot} slots Available</Text>
        </TouchableOpacity>
        )}/>

        <View style={{alignSelf:'center', marginTop:10}}><Text style={{fontSize:18, fontWeight:'bold', color:'#222222'}}>Today, 23 Feb</Text>
        
        <View style={{marginTop:20}}>
        <Text style={{color:'#333333', fontSize:16, fontWeight:'bold'}}>Afternoon slots</Text>
        
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:15}}>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center', borderRadius:6  }} onPress={() => setTimee('1:00 PM')  } >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>1:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center',borderRadius:6 }} onPress={() => setTimee('2:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>2:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center', borderRadius:6 }} onPress={() => setTimee('3:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>3:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)', justifyContent:'center', borderRadius:6}} onPress={() => setTimee('4:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>4:00 PM</Text> 
        </TouchableOpacity>
        </View>

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:5}}>
          <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center', borderRadius:6 }} onPress={() => setTimee('5:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>5:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center', borderRadius:6}} onPress={() => setTimee('6:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>6:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'rgba(14,190, 127, 0.08)',  justifyContent:'center', borderRadius:6 }} onPress={() => setTimee('7:00 PM')} >
        <Text style={{ alignSelf:'center', color:'#0EBE7F', fontWeight:'bold'}}>7:00 PM</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{width:76, height:40, backgroundColor:'Transparent',  justifyContent:'center', borderRadius:6 }} >
        </TouchableOpacity>
        </View>
        <TouchableOpacity  style={{width:111, height:35, backgroundColor:'#0EBE7F', borderRadius:5, justifyContent:'center',   marginLeft:50, marginTop:27, alignSelf:'center'}}  onPress={() => navigation.navigate('Confirm', {ww1,ww2,ww3, timee,})}>
          <Text style={{color:'white', alignSelf:'center'}}>Book Now</Text></TouchableOpacity>

        
        </View>
      </View>
      </ImageBackground>

    </View>

  );
}
function ConfirmScreen({navigation, route}){
  const ss1 = route.params.ww2;
  const dd1 = route.params.timee;
  const dd2 = route.params.date1;
  const dd3 = route.params.slot;
  return(
    <ScrollView  contentContainerStyle={{margin:15}} showsVerticalScrollIndicator={false} >
      <View style={{backgroundColor:'white', padding:15, borderRadius:8, flexDirection:'row'}} >
      <View >
        <Image source={route.params.ww1} style={{height:80, width:80, borderRadius:5}}/>
        </View>
        <View style={{ marginLeft:15}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{route.params.ww2}</Text>
        <Text style={{color:'#0EBE7F', fontSize:13, fontWeight:"500"}}>Eye Surgon</Text>
        <Text style={{color:'#677294', fontSize:12}}>7 Year Experience</Text>
        <View style={{flexDirection:'row'}}><Text style={{color:'#0EBE7F'}}>$</Text><Text style={{color:'#677294'}}>28.00</Text></View>
        
        </View>
        
      </View>
      <View style={{marginleft:25}}>
        <Text style={{color:'#333333', fontSize:16, fontWeight:'bold', marginTop:20}}>Appointment For</Text>
  
        <TextInput placeholder="Patient Name" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:20, }} placeholderTextColor="#677294" />
        <TextInput placeholder="Contact Number" style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}} placeholderTextColor="#677294" />
      </View>

      <View style={{marginleft:15}}>
        <Text style={{color:'#333333', fontSize:16, fontWeight:'bold', marginTop:20}}>Who is this Patient</Text>
  
        <ScrollView style={{  marginTop:10, }} contentContainerStyle={{justifyContent:'space-between',}} showsVerticalScrollIndicator={false} horizontal>
        <View style={{ flexDirection:'row', padding:10}}>
        
        <TouchableOpacity >
        <Image source={require('./Images/yself.png')}/>
        <Text style={{alignSelf:'center', color:"#677294", marginTop:5}}>My Self</Text>
        </TouchableOpacity>
        <View style={{width:8}}></View>
        <TouchableOpacity >
        <Image source={require('./Images/Rectan.png')} />
        <Text style={{alignSelf:'center', color:"#677294", marginTop:5}}>Child</Text>
        </TouchableOpacity>
        <View style={{width:8}}></View>
        <TouchableOpacity >
        <Image source={require('./Images/Recta5.png')}/>
        <Text style={{alignSelf:'center', color:"#677294", marginTop:5}}>Other</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>

        <TouchableOpacity  style={{width:180, height:40, backgroundColor:'#0EBE7F', borderRadius:5, justifyContent:'center', color:'white', marginTop:10, alignSelf:'center'}}  onPress={() => navigation.navigate('Thank', {ss1, dd1, dd2, dd3})} ><Text style={{alignSelf:'center', color:'white', fontWeight:'bold'}} >Confirm</Text></TouchableOpacity>
      </View>

    </ScrollView>
  );
}

function ThankScreen({navigation, route}){
  return(
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <ImageBackground source={require('./Images/bg.png')} resizeMode= 'stretch' style={{ alignItems: 'center', justifyContent: 'center', height:720}}>
      <View style={{backgroundColor:'white', height:380, width:280, marginTop:-80, borderRadius:15, alignItems:'center', padding:25}}>
      <Image  source={require('./Images/Group(4).png')} style={{width:130, height:130, marginTop:5}}/>
      <Text style={{color:'#333333', fontSize:30, alignSelf:'center', fontWeight:'bolder'}}>Thank You</Text>
      <Text style={{color:'#677294', fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Your Appointment Successful!</Text>
      <Text style={{color:'#677294', fontSize:10, alignSelf:'center'}}>You booked an appointment with {route.params.ss1} on ,
  at 02:00 PM</Text>
        <TouchableOpacity  style={{width:180, height:40, backgroundColor:'#0EBE7F', borderRadius:5, justifyContent:'center', color:'white', marginTop:20, alignSelf:'center'}}  onPress={() => navigation.navigate('Order',)} ><Text style={{alignSelf:'center', color:'white', fontWeight:'bold'}} >Done</Text></TouchableOpacity>
      </View>
      </ImageBackground>

    </View>
  );
}
function OrderScreen(){
  return(
    <ScrollView>
      <ImageBackground source={require('./Images/bg.png')}>
      <Image source={require('./Images/illustration.png')} style={{opacity:0.2, alignSelf:'center', marginTop:120}}/>
      <View>
      </View>
  
      </ImageBackground>

    </ScrollView>
  );
}

function SettingScreen({navigation, route}){
  return(
    <View>
    <ImageBackground source={require('./Images/bg.png')} resizeMode= "stretch" style={{ alignItems: 'center', justifyContent: 'center', height:720 }}>
    
    <View style={{backgroundColor: '#0EBE7F', width:'100%', height:310, borderBottomStartRadius:25, borderBottomEndRadius:25, marginTop:-90}}>
    <View style={{ alignItems: 'center',  width:'100%' }}>
    <Text style={{fontWeight:'bold', color: '#FFFFFF', marginTop:65, fontSize:16}}>Set up your profile</Text>
    <Text style={{ color: '#FFFFFF', alignItems:'center', fontSize:14, marginTop:10}}>Update your profile to your connect doctor  </Text>
    <Text style={{ color: '#FFFFFF', alignItems:'center', fontSize:14, marginTop:3}}>with better impression</Text>
    <Image source={require('./Images/smilime.png')}  style={{borderRadius:100, width:150, height:150, marginTop:10}}/>

    
    </View>
    </View>
    
    <View style={{marginTop:20, alignItems:'center'}}>
    <Text style={{marginLeft:-100, fontWeight:'bolder', fontSize:16}}>Personal Information</Text>
    
    <View style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}}>
      <Text>Tayyab</Text>
    </View>
    <View style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}}>
      <Text>Contact</Text>
    </View>
    <View style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}}>
      <Text>BirthDay</Text>
    </View>
    <View style={{borderWidth:1, borderRadius:7, width:250, padding:10, borderColor:'#D2D2D4', marginTop:15}}>
      <Text>Address</Text>
    </View>

    <TouchableOpacity style={{backgroundColor: '#0EBE7F', width: 220,height:40, padding:8,alignItems:'center', borderRadius:8, marginTop:15}}
onPress={()=>navigation.navigate()} ><Text style={{color:'white', fontSize:14, fontWeight:'bolder'}}>Continue</Text></TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
}



const DocStack = createNativeStackNavigator();

function DocStackScreen() {
  return (
    <DocStack.Navigator screenOptions={{headerShown:false}} initialRouteName="Doctori">
      <DocStack.Screen name="Doctori" component={DoctorScreen} screenOptions={{}}/>
      <DocStack.Screen name="Detail" component={DetailScreen} screenOptions={{}}  />
      <DocStack.Screen name="Book"  component={BookScreen} />
      <DocStack.Screen name="Confirm" component={ConfirmScreen} />
      <DocStack.Screen name="Thank" component={ThankScreen} />
      <DocStack.Screen name="Order" component={OrderScreen} />
      
    </DocStack.Navigator>
  );
}
const AppStack = createNativeStackNavigator();
function AppStackScreen(){
  return(
    <AppStack.Navigator >
      <AppStack.Screen name='Order' component={OrderScreen} />
    </AppStack.Navigator>
  );

}
const Tab = createBottomTabNavigator();
 function Appi() {
  return (
  
      <Tab.Navigator   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Homi') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }
            else if (route.name === 'Doctor') {
              iconName = focused ? 'medkit' : 'medkit';
            }
            else if (route.name === 'Appointment') {
              iconName = focused ? 'calendar' : 'calendar';
            }
            else if (route.name === 'Setting') {
              iconName = focused ? 'list' : 'list';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: [
          {
            borderTopLeftRadius:25,
            borderTopEndRadius:25,
            
            
            
            
          },
          null
        ],
          
          
        }) }>

        <Tab.Screen name="Homi" component={HomiScreen} />
        <Tab.Screen name="Doctor" component={DocStackScreen} options={{headerShown:false,
        headerTransparent: true,
        title:'Find Doctor',
        headerStyle: {
            backgroundColor: 'transparent',
            color:"null",
            
            
          }, }}/>
        <Tab.Screen name="Appointment" component={OrderScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
        
      </Tab.Navigator>

  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name='Signin' component={SigninScreen} />
        <Stack.Screen name='Forget' component={ForgetScreen} />
        <Stack.Screen name='Reset' component={ResetScreen} />
        <Stack.Screen name='Newpass' component={NewpassScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen  name='Appk' component={Appi} />
      </Stack.Navigator>
    </NavigationContainer>

      
    
  );
}



const styles = StyleSheet.create({  
  container:{  
    margin:15,
    justifyContent:'space-between',
    marginTop:20
  }, 
  text1:{
    alignSelf:'center',
     fontSize:15,  
     fontWeight:'bolder',
      marginTop:7},
/*    buttonStyle:{ 
      height: 50, 
      width: 70, 
  }*/  
})