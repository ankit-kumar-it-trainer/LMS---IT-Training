import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // In a real application, you would make an API call here
        // For demo purposes, we'll simulate a successful registration
        const mockResponse = {
          user: {
            id: 1,
            name: values.name,
            email: values.email,
            role: 'student',
          },
          token: 'mock-jwt-token',
        };

        login(mockResponse.user, mockResponse.token);
        navigate('/student-dashboard');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  className="input-field"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="mt-2 text-sm text-red-600">{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="input-field"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 text-sm text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  className="input-field"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="mt-2 text-sm text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  {...formik.getFieldProps('confirmPassword')}
                  className="input-field"
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="mt-2 text-sm text-red-600">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
