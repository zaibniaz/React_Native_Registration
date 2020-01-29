const Helper = {
  isPasswordValid: function(text) {
    try {
      if (!Helper.isEmpty(text)) {
        if (text.length < 8) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (error) {
      alert(error);
      return false;
    }
  },
  isEmailValid: function(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try {
      if (!Helper.isEmpty(text)) {
        if (!reg.test(text)) {
          return true;
        } else if (reg.test(text)) {
          return false;
        }
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  },
  isNameValid: function(text) {
    let reg = /^[a-zA-Z ]+$/;
    try {
      if (!Helper.isEmpty(text)) {
        if (text.length < 4 || !reg.test(text)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch (error) {
      alert(error);
      return false;
    }
  },

  isEmpty: function(str) {
    return !str || /^\s*$/.test(str);
  },
};

export default Helper;
