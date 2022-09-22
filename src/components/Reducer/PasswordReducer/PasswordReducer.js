const initialPasswordState = {
  value: '',
  isValid: null,
}

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    }
  }
  if (action.type === 'PASSWORD_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    }
  }

  return state;
};

module.exports = {
  initialPasswordState,
  passwordReducer,
}