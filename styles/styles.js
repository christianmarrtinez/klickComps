// green to remember: #91D9B1
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
    borderColor: '#91D9B1', 
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
    color: '#91D9B1',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#91D9B1',
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
    borderColor: '#91D9B1', 
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#91D9B1',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#91D9B1',  
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: '#91D9B1',
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
    color: '#91D9B1',
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
    borderBottomColor: '#91D9B1',
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
  color: '#91D9B1', 
},
pageNumber: {
  padding: 10,
  marginHorizontal: 5,
  borderWidth: 1,
  borderColor: '#91D9B1', 
  borderRadius: 5,
  color: 'black', 
},
activePageNumber: {
  backgroundColor: '#91D9B1', 
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
    borderColor: '#91D9B1',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },

  popupText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e6d54',
  },  


});

export default styles;
