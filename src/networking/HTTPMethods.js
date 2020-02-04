import Constants from '../utils/Constants';
import ApiStatus from '../models/ApiStatus';

const HTTPMethods = {
  getHeader(method: String, body) {
    let httpHeader = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      default:
      case Constants.GET:
        httpHeader.method = Constants.GET;
        break;
      case Constants.POST:
        httpHeader.method = Constants.POST;
        httpHeader.body = body;
        break;
      case Constants.PUT:
        httpHeader.method = Constants.PUT;
        httpHeader.body = body;
        break;
      case Constants.DELETE:
        httpHeader.method = Constants.DELETE;
        break;
    }

    return httpHeader;
  },

  returnResponse(response: Response) {
    let apiStatus = new ApiStatus();

    switch (response.status) {
      case 200:
        apiStatus.result = response.json();
        apiStatus.message = 'Get all heroes successfully!';
        apiStatus.isError = false;
        break;
      case 400:
        apiStatus.result = [];
        apiStatus.message = 'Invalid Request';
        apiStatus.isError = true;
        break;
      case 401:
      case 404:
        apiStatus.result = [];
        apiStatus.message = 'Not Found:';
        apiStatus.isError = true;
        break;
      case 403:
        apiStatus.result = [];
        apiStatus.message = 'Unauthorised:';
        apiStatus.isError = true;
        break;
      case 500:
        break;
    }

    return apiStatus;
  },
};

export default HTTPMethods;
