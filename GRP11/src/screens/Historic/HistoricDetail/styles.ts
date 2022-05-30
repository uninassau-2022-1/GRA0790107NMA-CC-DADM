import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0'
  },
  headerText: {
    fontSize: 20,
    color: '#3A362D',
  },
  content: {
    fontSize: 16,
    color: '#3A362D',
    paddingHorizontal: 20,
    marginBottom: 5
  },
  selectedContent: {
    fontSize: 16,
    color: '#3A362D',
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F0',
    marginBottom: 5
  },
  contentTxt: {
    fontSize: 20,
    color: '#3A362D',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  historicBg: {
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    marginBottom: 5
  },
  historicHeader: {
    fontSize: 24,
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  txtHeader: {
    color: '#3A362D',
    fontSize: 28,
  },
  line: {
    marginTop: 5,
    height: 1,
    width: '100%',
    backgroundColor: '#c4c4c4',
  },
});
