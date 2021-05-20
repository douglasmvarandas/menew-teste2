import React, { useContext } from 'react'
import {View, Text, FlatList, Alert} from 'react-native'
import { ListItem, Avatar, Icon, Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext.js'
import users from '../data/users.js'

export default props => {

 // tá passando obj vazio, conferir dps
 const  ctx  = useContext(UsersContext)
 //console.warn(Object.keys(ctx))

function getUserItem({item: user}){
 return (
   <ListItem 
    key ={user.id}  
    onPress = {() => props.navigation.navigate('UserForm', user)}  
    bottomDivider>
    <Avatar source ={ {uri: user.avatarUrl} } />
   <ListItem.Content>
     <ListItem.Title>{user.name}</ListItem.Title>
     <ListItem.Subtitle>{user.descricao}</ListItem.Subtitle>
    </ListItem.Content>

       <Button
       onPress={() => props.navigation.navigate("UserForm", user)}
       type="clear"
       icon={<Icon name="edit" size={25} color="blue"/> }
     />
     <Button
       onPress={() => confirmDelet(user)}
       type="clear"
       icon={<Icon name="delete" size={25} color="red"/> }
     />
   </ListItem>
 )
}

function confirmDelet(user){
  Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
    {
      text:'Sim', 
      onPress(){
        console.warn('deletado')
      }
    },
    {
      text:'Não'
    }
    ]
    ) 
  }
  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}
