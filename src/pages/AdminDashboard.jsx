import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js',
      videoId: 'w7ejDZ8SWv8',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into JavaScript',
      videoId: 'Mus_vwhTCq0',
    }
  ]);

  const [students] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', progress: '60%' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', progress: '85%' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', progress: '35%' },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      videoId: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      videoId: Yup.string().required('YouTube Video ID is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      if (editingCourse) {
        setCourses(courses.map(course => 
          course.id === editingCourse.id 
            ? { ...course, ...values }
            : course
        ));
        setEditingCourse(null);
      } else {
        setCourses([...courses, { id: Date.now(), ...values }]);
      }
      resetForm();
    },
  });

  const handleEdit = (course) => {
    setEditingCourse(course);
    formik.setValues(course);
  };

  const handleDelete = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  const handleCancel = () => {
    setEditingCourse(null);
    formik.resetForm();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {editingCourse ? 'Edit Course' : 'Add New Course'}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Add or edit course details here. Make sure to use the correct YouTube video ID.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label htmlFor="title" className="form-label">
                    Course Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...formik.getFieldProps('title')}
                    className="input-field"
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="mt-1 text-sm text-red-600">{formik.errors.title}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    {...formik.getFieldProps('description')}
                    className="input-field"
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="mt-1 text-sm text-red-600">{formik.errors.description}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="videoId" className="form-label">
                    YouTube Video ID
                  </label>
                  <input
                    type="text"
                    id="videoId"
                    {...formik.getFieldProps('videoId')}
                    className="input-field"
                  />
                  {formik.touched.videoId && formik.errors.videoId && (
                    <div className="mt-1 text-sm text-red-600">{formik.errors.videoId}</div>
                  )}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3">
                {editingCourse && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingCourse ? 'Update Course' : 'Add Course'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Course List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Manage Courses</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Video ID
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courses.map((course) => (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {course.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.videoId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(course)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(course.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Progress</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-1 w-48 bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: student.progress }}
                              ></div>
                            </div>
                            <span className="ml-4 text-sm text-gray-500">
                              {student.progress}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
