import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TitleText from './component/TitleText';

export default function App() {

  interface user {
    Username: string;
    Phone: string;
    Mail: string;
    Age: number;
    isLogged: boolean;
    isAdmin: boolean | unknown;
  }
  let myArray: Array<user> = [
    {
      Username: 'john',
      Phone: '0606060606',
      Mail: 'john@mail.com',
      Age: 54564,
      isLogged: true,
      isAdmin: true,
    },
    {
      Username: 'mare',
      Phone: '666666666',
      Mail: 'mare@mial.com',
      Age: 89,
      isLogged: false,
      isAdmin: true,
    },
    {
      Username: 'plinkett',
      Phone: '0201040305',
      Mail: 'idontcareaboutyouropinion@gmail.com',
      Age: 118,
      isLogged: true,
      isAdmin: false,
    }
  ];
  return (
    <View style={styles.container}>
      <ScrollView>

        <TitleText title='titre' text=' texte' />

        <Text>
          {
            myArray.map((item, i) => (
              <>
                <Text>Nom : {item.Username}{"\n\n"}</Text>
                <Text>Téléphone : {item.Phone}{"\n\n"}</Text>
                <Text>Mail : {item.Mail}{"\n\n"}</Text>
                <Text>Age : {item.Age}{"\n\n"}</Text>
                <Text>Téléphone : {item.Phone}{"\n\n"}</Text>
                <Text>isLogged : {item.isLogged === true ? 'oui' : 'non'}{"\n\n"}</Text>
                <Text>isAdmin : {item.isAdmin === true ? 'oui' : 'non'}{"\n\n"}</Text>
                <Text>{"\n\n"}</Text>
              </>
            ))
          }
        </Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
