import AsyncStorage from '@react-native-async-storage/async-storage';

let cache = {};

cache.storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

cache.getData = async () => {
  try {
    let keys = [];
    let pessoas = [];

    keys = await AsyncStorage.getAllKeys();

    for (let i = 0; i < keys.length; i++) {}
    const value = await AsyncStorage.getItem(keys[i]);
    if (value !== null) {
      // value previously stored
      pessoas.push(JSON.parse(value));
    }

    return pessoas;
  } catch (e) {
    // error reading value
  }
};

export default cache;
