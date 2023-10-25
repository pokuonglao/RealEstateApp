import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Welcome from './Welcome.jsx';
import Listing from './Listing.jsx';
import Contact from './Contact.jsx';
import Pokuong from './Pokuong.jsx';
import MLSsearch from './MLSsearch.jsx';
import Communities from './Communities.jsx';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Welcome />} />
                    <Route path="pokuong" element={<Pokuong />} />
                    <Route path="listing" element={<Listing />} />
                    <Route path="listing/mls" element={<MLSsearch />} />
                    <Route path="communities" element={<Communities />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<App />);