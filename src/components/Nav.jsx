// import style from '../styles/style.module.css';

const Nav = () => {

    const styleTabs = {
        listStyle: 'none',
        display: 'flex',
        padding: '0',
    };

    const styleTitle = {
        marginRight: 'auto',
        color: '#fff',
    };

    const styleLinks = {
        textDecoration: 'none',
        height: '100%',
        display: styleTabs.display,
        justifyContent: 'center',
        alignItems: 'center',
        color: styleTitle.color,
        marginLeft: '50px',
        fontSize: '1.1rem',
    };

    const styleNav = {
        padding: "var(--padding)",
        height: "70px",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        zIndex: "100",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }

    return(
        <>
            <nav style={styleNav}>
                <h2 style={styleTitle}>VibeChecks</h2>
                <ul style={styleTabs}>
                    <a href="#home" style={styleLinks}>
                        <li>Home</li>
                    </a>
                    <a href="#about" style={styleLinks}>
                        <li>About</li>
                    </a>
                    <a href="#contact" style={styleLinks}>
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>

        </>

    );
}

export default Nav 