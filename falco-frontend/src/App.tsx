import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Profile from "./components/Profile.tsx";
import { useEffect, useState } from 'react';

function App() {

    const [message, setMessage] = useState('');

    useEffect(() => {

        fetch('http://localhost:3000/api/hello')
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <>
            <div>
                <h1>Welcome to Falco Football Club</h1>

                <h2>Backend Response:</h2>

                <p>{message}</p>
            </div>
            <Header />
            <Profile />
            <Footer />
        </>
    );
}

export default App;