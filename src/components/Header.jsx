import chefClaudeLogo from "../assets/images/logo-img.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude Logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}