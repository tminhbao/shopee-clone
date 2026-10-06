import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer/Footer'
import RegisterHeader from 'src/components/RegisterHeader/RegisterHeader'

const RegisterLayout = () => {
    return (
        <div>
            <RegisterHeader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RegisterLayout