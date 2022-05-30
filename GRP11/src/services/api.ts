import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.107:3333',
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@thapfit:token')
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});