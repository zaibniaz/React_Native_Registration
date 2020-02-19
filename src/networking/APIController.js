import HTTPMethods from './HTTPMethods';

import ApiStatus from '../models/ApiStatus';
import Hero from '../models/Hero';
import {useState, useEffect} from 'react';
import axios from 'axios';

export const getAllHeroes = (url, dependecies) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(url);

  let apiStatus = new ApiStatus();
  apiStatus.result = [];

  let header = HTTPMethods.getHeader(Constants.GET);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, header)
      .then(responseData => {
        setIsLoading(false);
        // var data = HTTPMethods.returnResponse(responseData);

        apiStatus.result = responseData.data;
        apiStatus.isError = false;
        apiStatus.message = `Get all heroes successfully!`;
        setFetchedData(apiStatus);
      })
      .catch(error => {
        setIsLoading(false);
        apiStatus.result = [];
        apiStatus.isError = true;
        apiStatus.message = `${error.message}`;
        //var data = HTTPMethods.returnResponse(responseData);
        setFetchedData(apiStatus);
      });
  }, dependecies);

  return [isLoading, fetchedData];
};
