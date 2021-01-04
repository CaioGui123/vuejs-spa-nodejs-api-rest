function treatValidations(error) {
  const errors = {};

  error.inner.forEach((err) => {
    errors[err.path] = err.errors;
  });

  return errors;
}

export default treatValidations;
