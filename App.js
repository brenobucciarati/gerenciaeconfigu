import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground,
   TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import { StatusBar } from 'expo-status-bar';

const {width: screenWitdh, height: screenHeight} = Dimensions.get('window');

export default function App() {
const carouselReferencia = useRef (null);

  const [lista, setLista] = useState([ 
    
{
    title:"Luther - O Cair da Noite",
    text: "Assombrado por um assassinato que não foi resolvido, o brilhante policial John Luther foge da prisão em busca de um serial killer.",
    release: 2023,
    img: 'https://image.tmdb.org/t/p/w500//dX7vIS0HfCIJ4l1VEBoSLs9DnLe.jpg'
},
{
    title:"Super Mario Bros. O Filme",
    text: "Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.",
    release: 2023,
    img: 'https://br.web.img2.acsta.net/pictures/23/04/03/19/45/2854005.jpg'
},
{
    title:"Homem-Formiga e a Vespa: \n        Quantumania",
  
    text: "O Homem-Formiga e a Vespa lutam contra Kang, o Conquistador, no reino quântico.",
    release: 2023,
    img: 'https://s2.glbimg.com/gNNOTGzTHY83VKSsoZubqAT-dEM=/0x0:720x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/B/B/r6KVDMRPeSB9p1plIr3w/homem-formiga.jpg'
},
{
    title:"CREED III",
    text: "Depois de dominar os ringues, Adonis Creed tem prosperado com sua carreira e família. Quando um amigo de infância e ex-prodígio do boxe, Damian, ressurge após uma longa sentença na prisão, o campeão fica ansioso para provar que merece sua chance. O confronto entre ex-amigos é mais do que apenas uma luta. Para acertar as contas, Adonis deve colocar seu futuro em risco para enfrentar Damian, um lutador que não tem nada a perder.",
    release: 2023,
    img: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/10651/filme_10651.jpg'
},
{
    title:"Guardiões da Galáxia.Vol3",
    text: "O nosso amado grupo de desajustados está bastante diferente nos dias de hoje. Peter Quill, que ainda está a recuperar da perda de Gamora, tem que reunir a sua equipa para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos. Um filme de James Gunn. ",
    release: 2023,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzgySgTZJvQl4d7SmLrRVhY3PN-8B8r_2LpWBZe4W5VZySjjxq'
},
{
    title:"        Homem-Aranha:\nAtravés do Aranhaverso\n              parte 1",
    text: "Depois de se reunir com Gwen Stacy, Homem-Aranha é pego através do Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregada de proteger sua própria existência.",
    release: 2023,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM664hVq3bfITQhFjv7mRZG4Sf6dtq72DeJBr5Gl5M5KAEht1'
},
]);

const [background, setBackground] = useState (lista[0].img)
const [activeIndex,setActiveIndex] = useState(0)
const _renderItem = ({item, index}) => {
return(
  <View>
<Text>
  <TouchableOpacity>
    <Image
    source={{uri: item.img}}  
    style={styles.CarouselImg}
    />
    <Text style={styles.CarouselText}>
      {item.title}
    </Text>
    <Icon name="play-circle-outline"
     size={30} 
     color="red" 
     style={styles.carouselIcon}/>
  </TouchableOpacity>
</Text>
  </View>
)
}

  return (
    <ScrollView style={styles.container}>
   <View style={{flex:1, height: screenHeight}}>
    <View style={{...StyleSheet.absoluteFill, backgroundColor:'black'}}>
      <ImageBackground
      source={{uri: background }}
      style={styles.imgBg}
      blurRadius={3}
      >
      <StatusBar style='light' backgroundColor='black'translucent={false}></StatusBar>
      <View style= {styles.viewSearch}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"/>
      <TouchableOpacity style={styles.icon}>
      <Icon name="search" color="black" size={25}/>
      </TouchableOpacity>
      </View>

<Text style={{color: 'red', fontSize: 25,fontWeight: 'bold', marginLeft: 10, marginVertical: 10,}}>
  Últimos Adicionados
</Text>

<View style={styles.slideView}>
<Carousel
style={styles.Carousel}
ref={carouselReferencia}
data={lista}
renderItem={_renderItem}
sliderWidth={screenWitdh}
itemWidth={200}
inactiveSlideOpacity={0.5}
onSnapToItem={(index) =>{
setBackground(lista[index].img);
setActiveIndex(index);
}}
/>

</View>

<View style={styles.moreInfo}>
  <View style={{marginTop: 10}}>
    <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
    <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
  </View>
  
    <TouchableOpacity style={{marginRight: 15, marginTop: 15}} onPress={() => alert ('VOCÊ ADICIONOU')}>
    <Icon name="queue"
   color="black"
    size={30}/>
      </TouchableOpacity>
</View>

      </ImageBackground>
    </View>
   </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

imgBg:{
  flex:1,
  width: null,
  height:null,
  opacity:1,
  justifyContent: "flex-start",
  backgroundColor: 'black'
},
viewSearch:{
  marginTop:20,
  backgroundColor:'red',
  elevation: 10,
  borderRadius: 5,
  marginVertical: 10,
  width: '95%',
  flexDirection: 'row',
  alignSelf: 'center'
},

input:{
  width: '90%',
  padding: 12,
  paddingLeft: 20,
  fontSize: 17
},
icon:{
position:'absolute',
right:20,
top: 15,
},
slideView:{
  width: '100%',
  height: 350,
  justifyContent: 'center',
  alignItems: 'center'

},
carousel:{
  flex: 1,
  overflow: 'visible'
},
CarouselImg:{
  alignSelf: 'center',
  width: 200,
  height: 300,
  borderRadius: 12,
  backgroundColor:'rgba(0,0,0,0.5)'
},
CarouselText:{
  padding: 15,
  color: 'white',
  position: 'absolute',
  bottom: 10,
  left: 2,
  fontWeight: 'bold'

},
carouselIcon:{
  position: 'absolute',
  top: 15,
  right: 15
},
moreInfo:{
backgroundColor: 'red',
width: screenWitdh,
height: screenHeight,
borderTopRightRadius: 20,
borderTopLeftRadius: 20,
flexDirection: 'row',
justifyContent: 'space-around',
},
movieTitle:{
  paddingLeft: 15,
  fontSize: 22,
  fontWeight: 'bold',
  color: 'grey',
  marginBottom: 10
}, 
movieDesc:{
  paddingLeft: 12,
  color: 'black',
  fontSize: 17,
  fontWeight: 'bold'
}
});
