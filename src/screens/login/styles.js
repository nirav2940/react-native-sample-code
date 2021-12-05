import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#181a20',
    padding: 30,
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#585a60',
    textAlign: 'center',
  },
  middleContent: {flex: 1, width: '100%', justifyContent: 'center'},
  bottomContent: {flex: 1, width: '100%', justifyContent: 'center'},
  forgotPassLink: {
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    color: '#585a60',
  },
});

export default styles