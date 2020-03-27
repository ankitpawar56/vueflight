import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import BookFlight from './components/Book/BookFlight';
import Card from './components/Card/Card';
import MyBooking from './components/Book/MyBooking';
import Booking from './components/Book/Booking'
export const routes = [
        { path: '/', component: SignIn},
        { path: '/signin', component: SignIn},
        { path: '/signup', component: SignUp },
        { path:'/bookflight',component:BookFlight },
        { path:'/card',component:Card },
        { path:'/mybooking',component:MyBooking },
        { path:'/booking',component:Booking },
    ] 
  