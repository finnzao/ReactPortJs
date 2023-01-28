import TitleHome from './TitleHome/home';
import Portfolio from './Portfolio/portfolio';
import DivisionGrey from '../../components/divisionPage/DivsionPageGrey/Division';
import About from './About/About';
import AboutMe from './AboutMe/AboutMe';



function Home() {

    return (
        <>
            <TitleHome />
            <Portfolio></Portfolio>
            <About></About>
            <DivisionGrey></DivisionGrey>
            <AboutMe></AboutMe>

        </>
    )
}

export default Home;