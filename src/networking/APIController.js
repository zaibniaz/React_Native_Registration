import HTTPMethods from './HTTPMethods';
import Constants from '../utils/Constants';
import ApiStatus from '../models/ApiStatus';
import Hero from '../models/Hero';
import {useState, useEffect} from 'react';

export const getAllHeroes = () => {
  const [fetchedData, setFetchedData] = useState(null);

  let apiStatus = new ApiStatus();
  apiStatus.result = [];
  let url = Constants.API_URL;
  let header = HTTPMethods.getHeader(Constants.GET);

  useEffect(() => {
    fetch(url, header)
      .then(responseData => {
        var data = HTTPMethods.returnResponse(responseData);
        setFetchedData(data);
      })
      .catch(error => {
        apiStatus.result = [];
        apiStatus.isError = true;
        apiStatus.message = `${error.message}`;
        setFetchedData(apiStatus);
      });
  }, []);

  return [fetchedData];
};
