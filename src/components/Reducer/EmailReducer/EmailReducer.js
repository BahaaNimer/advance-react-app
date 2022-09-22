const initialEmailState = {
  value: '',
  isValid: null,
}

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    }
  }
  if (action.type === 'EMAIL_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    }
  }

  return state;
};

module.exports = {
  initialEmailState,
  emailReducer,
}