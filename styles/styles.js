// green to remember: #8b51ff
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#8b51ff', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 15,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  list: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#8b51ff',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8b51ff',
    alignItems: 'center',
  },
  productContentContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  categoryButton: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#8b51ff', 
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#8b51ff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#8b51ff',  
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: '#8b51ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  price: {
    color: '#8b51ff',
    fontSize: 14,
    marginTop: 4,
  },
  availability: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white', 
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#8b51ff',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#28353d'
  },
  productDetailsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  productDetailsImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  productDetailsInfo: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  productDetailsLabel: {
    fontWeight: 'bold',
  },
  productAvailable: {
    color: 'green',
  },
  productUnavailable: {
    color: 'red',
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},

searchResultImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
},

searchResultDetails: {
},

searchResultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
},

searchResultLink: {
    fontSize: 12,
    color: '#007AFF',
},

searchResultPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
},
paginationContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
},
arrow: {
  fontSize: 18,
  paddingHorizontal: 10,
  color: '#8b51ff', 
},
pageNumber: {
  padding: 10,
  marginHorizontal: 5,
  borderWidth: 1,
  borderColor: '#8b51ff', 
  borderRadius: 5,
  color: 'black', 
},
activePageNumber: {
  backgroundColor: '#8b51ff', 
  color: 'white',
  borderColor: 'black',
  fontWeight: 'bold', 
},
similarityButton: {
  padding: 5,
  marginTop: 5,
  borderRadius: 5,
  alignSelf: 'flex-start',
},
similarityText: {
  color: 'white',
},
profitButton: {
  marginTop: 5,
  padding: 5,
  borderRadius: 5,
  alignSelf: 'flex-start'
},
profitText: {
  fontSize: 14,
},
popup: {
    position: 'absolute',
    bottom: 48, // Adjust to position above the tab bar
    right: '.5', // Center it to match the tab width
    width: '33%', // Make it same width as tabs
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8b51ff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },

  popupText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6A33CC',
  },  

  competitionCard: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8b51ff',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  competitionImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  competitionContent: {
    flex: 1,
  },
  competitionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  competitionNiche: {
    fontSize: 14,
    color: '#666',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  brandLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  brandName: {
    fontSize: 14,
    color: '#8b51ff',
    fontWeight: 'bold',
  },
  prizeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6A33CC',
    marginTop: 5,
  },
  competitionDetailsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  competitionDetailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  competitionDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  competitionDetailsNiche: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  competitionDetailsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  competitionActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  competitionInactive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#8b51ff',
    borderRadius: 5,
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  sectionContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
},
sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
sectionText: {
    fontSize: 16,
    lineHeight: 24,
},
submitButton: {
  backgroundColor: '#8b51ff',
  padding: 15,
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
},
submitButtonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
accountButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
accountImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 15,
},
accountUsername: {
  fontSize: 16,
},
accountList: {
  paddingVertical: 10,
},
submitCompTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
},
authContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: 'white',
},
authTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 30,
  color: '#8b51ff',
},
authInput: {
  width: '100%',
  height: 50,
  borderColor: '#8b51ff',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 15,
  paddingHorizontal: 15,
  fontSize: 16,
},
authButton: {
  width: '100%',
  height: 50,
  backgroundColor: '#8b51ff',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
},
authButtonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
authLink: {
  color: '#8b51ff',
  fontSize: 16,
  marginTop: 20,
},

});

export default styles;
