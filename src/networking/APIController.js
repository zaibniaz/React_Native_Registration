import HTTPMethods from './HTTPMethods';
import Constants from '../utils/Constants';
import ApiStatus from '../models/ApiStatus';
import Hero from '../models/Hero';
import {useState, useEffect} from 'react';
import axios from 'axios';

export const getAllHeroes = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let apiStatus = new ApiStatus();
  apiStatus.result = [];
  let url = Constants.API_URL;
  let header = HTTPMethods.getHeader(Constants.GET);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, header)
      .then(responseData => {
        setIsLoading(false);
        var data = HTTPMethods.returnResponse(responseData);
        setFetchedData(data);
      })
      .catch(error => {
        setIsLoading(false);
        apiStatus.result = [];
        apiStatus.isError = true;
        apiStatus.message = `${error.message}`;
        setFetchedData(apiStatus);
      });
  }, []);

  return [isLoading, fetchedData];
};
