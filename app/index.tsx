import Header from '../components/Header';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-bold">Welcome to the Homepage!</h1>
                {/* Add more content here */}
            </main>
        </div>
    );
};

export default HomePage;
