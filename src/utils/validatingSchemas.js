import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Your message')
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=(.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32})$/,
      'Password must contian ...'
    )
    .min(8)
    .max(32)
    .required(),
});

export const SIGNIN_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(1)
    .max(30)
    .required(),
  lastName: yup
    .string()
    .min(1)
    .max(30)
    .required(),
  displayName: yup
    .string()
    .min(3)
    .max(15)
    .required(),
  emailAdress: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .matches(/^(?=(.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32})$/)
    .min(8)
    .max(32)
    .required(),
  passwordConfirmation: yup
    .string()
    .matches(/^(?=(.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32})$/)
    .min(8)
    .max(32)
    .required(),
});

// const validatedObject = {
//   email: "qwerty@qwerty.com",
//   password: "123456",
// };

// const isValid = LOGIN_SCHEME.isValidSync(validatedObject);

// const NAME_SCHEME = yup
//   .string()
//   .matches(/^[A-Z][a-z]{1,18}$/)
//   .required();
// const USER_SCHEME = yup.object({
//   firstName: NAME_SCHEME,
//   lastName: NAME_SCHEME,
//   age: yup.number().positive().integer().max(3),
// });

// const validatedObject2 = {
//   firstName: "Lana",
//   lastName: "Turner",
//   age: "60",
// }

// const isValid2 =USER_SCHEME.isValidSync(validatedObject2);
// console.log(isValid2);
