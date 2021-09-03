import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email('This must be a valid email')
    .required('This field is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Password must contian at least one capital letter and one special symbol'
    )
    .min(8, 'Password must not contain less then 8 symbols')
    .max(32, 'Password must not contain more then 32 symbols')
    .required('This field is required'),
});

export const SIGNIN_SCHEMA = yup.object({
  userFirstName: yup
    .string()
    .min(1, 'Your name must not contain less then 1 letter')
    .max(30, 'Your name must not contain more then 30 letters')
    .required('This field is required'),
  userLastName: yup
    .string()
    .min(1, 'Your surname must not contain less then 1 letter')
    .max(30, 'Your surname must not contain more then 30 letters')
    .required('This field is required'),
  userDisplayName: yup
    .string()
    .min(3, 'Your display name must not contain less then 3 letters')
    .max(20, 'Your display name must not contain more then 20 letters')
    .required('This field is required'),
  userEmailAddress: yup
    .string()
    .email('This must be a valid email')
    .required('This field is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Password must contian at least one capital letter and one special symbol'
    )
    .min(8)
    .max(32)
    .required('This field is required'),
  passwordConfirmation: yup
    .string()
    .min(8)
    .max(32)
    .required('This field is required')
    .oneOf(
      [yup.ref('password')],
      'Confirmation password must match your password'
    ),
});

export const TODO_FORM_SCHEMA = yup.object({
  body: yup
    .string('The string is required')
    .min(2, 'Minimum 2 letters are required')
    .max(200, 'The task should not contain more than 200 letters')
    .ensure(),
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
