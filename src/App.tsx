// ** Router
import { Route, Routes } from 'react-router-dom'

// ** layout
import RootLayout from './page/layout'
import AuthLayout from './page/(auth)/layout'
import DashboardLayout from './page/(dashboard)/layout'

// ** config
import { courseRoute } from './router/course.route'
import { authRoute } from './router/auth.route'
import { dashboardRoute } from './router/dashboard.route'
import { commonRoutes } from './router/common.route'

// ** pages
import RegisterPage from './page/(auth)/register'
import LoginPage from './page/(auth)/login'
import ForgotPasswordPage from './page/(auth)/reset-password'
import BecomeInstructorPage from './page/(instructor)/become-instrucror'
import DashboardPage from './page/(dashboard)/dashboard'
import ListCoursePage from './page/(course)/list-courses'
import DetailCoursePage from './page/(course)/course-detail'
import CreateCoursePage from './page/(course)/create-course'
import PaymentSuccessPage from './page/(payment)/payment-success'
import PaymentErrorPage from './page/(payment)/payment-error'
import PlayList from './page/(course)/play-list'

// ** components
import PrivateRoute from './components/common/private-router'

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={courseRoute.listCourse.path} element={<ListCoursePage />} />
          <Route path={courseRoute.becomeInstructor.path} element={<BecomeInstructorPage />} />
          <Route path={courseRoute.detailCourse.path} element={<DetailCoursePage />} />
          <Route path={courseRoute.coursePlay.path} element={<PlayList />} />
          <Route path={commonRoutes.paymentSuccess.path} element={<PaymentSuccessPage />} />
          <Route path={commonRoutes.paymentError.path} element={<PaymentErrorPage />} />
        </Route>
        <Route
          element={
            <PrivateRoute>
              <AuthLayout />
            </PrivateRoute>
          }
        >
          <Route path={authRoute.register.path} element={<RegisterPage />} />
          <Route path={authRoute.login.path} element={<LoginPage />} />
          <Route path={authRoute.resetPassword.path} element={<ForgotPasswordPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path={dashboardRoute.dashboard.path} element={<DashboardPage />} />
          <Route path={dashboardRoute.createCourse.path} element={<CreateCoursePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
