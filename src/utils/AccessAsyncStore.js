import AsyncStorage from '@react-native-community/async-storage';

const AccessAsyncStore = {
  storeItem: async (key, item) => {
    try {
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  },

  getItem: async key => {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = retrievedItem;
      return item;
    } catch (erro) {
      console.log(error.message);
    }
  },

  clearAsyncStorage: async () => {
    try {
      AsyncStorage.clear();
    } catch (erro) {
      console.log(error.message);
    }
  },
};
export default AccessAsyncStore;
