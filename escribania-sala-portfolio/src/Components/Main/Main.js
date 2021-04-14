import './Main.css';

function Main(props) {
    return (
        <>
            <main>
                { props.header }
                { props.aboutUs }
                { props.specialties }
                { props.customers }
                { props.contactInfo }
            </main>
        </>
    );
}

export default Main;