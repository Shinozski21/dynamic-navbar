import "./TabButton.css";

export default function TabButton({ children, onSelect }) {
    return(
        <nav>
            <li>
                <button onClick={onSelect}>{children}</button>
            </li>
        </nav>
    );
}

{/* <li onSelect={handleSelect}>Store</li>
<li onSelect={handleSelect}>Mac</li>
<li onSelect={handleSelect}>iPad</li>
<li onSelect={handleSelect}>iPhone</li>
<li onSelect={handleSelect}>Watch</li>
<li onSelect={handleSelect}>Vision</li>
<li onSelect={handleSelect}>AirpPods</li>
<li onSelect={handleSelect}>TV & Home</li>
<li onSelect={handleSelect}>Entertainment</li>
<li onSelect={handleSelect}>Accessories</li>
<li onSelect={handleSelect}>Support</li> */}
