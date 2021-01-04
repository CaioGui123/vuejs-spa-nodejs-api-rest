import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import treatValidations from '../utils/treatValidations';

Yup.setLocale(ptForm);

const schema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().email().required(),
  age: Yup.number().positive().integer().required(),
  weight: Yup.number().positive().required(),
  height: Yup.number().positive().required(),
});

async function StudentValidation(data) {
  try {
    await schema.validate(data, {
      abortEarly: false,
    });

    return Promise.resolve();
  } catch (error) {
    const errors = treatValidations(error);

    return Promise.reject(errors);
  }
}

export default StudentValidation;
