import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import treatValidations from '../utils/treatValidations';

Yup.setLocale(ptForm);

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

async function UserValidation(data) {
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

export default UserValidation;
