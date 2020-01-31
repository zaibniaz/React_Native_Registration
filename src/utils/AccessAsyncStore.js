import {AsyncStorage} from 'react-native';

const AccessAsyncStore = {
  storeItem: async (key, item) => {
    try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value

    //   if (item !== 'String') item == JSON.stringify(item);

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
    } catch (erro) {}
  },
};
export default AccessAsyncStore;
