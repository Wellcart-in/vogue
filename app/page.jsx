// Home page with parallax hero and product showcase
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Home() {
    return (
        <div>
            <Hero />
            <div className="product-showcase">
                {/* Sample product cards here */}
                <ProductCard />
            </div>
        </div>
    );
}