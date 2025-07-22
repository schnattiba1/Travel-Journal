import Image from '../imgs/globe.png';

function Header() {
    return (
        <>
            <header>
                <img src={Image} alt="globe" />
                <span>my travel journal.</span>
            </header>
        </>
    )
}

export default Header;