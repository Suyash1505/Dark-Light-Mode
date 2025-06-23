import reactlogo from "./assets/react.svg";

export default function Header({darkMode, toggleMode}) {
    
  return (

    <header className="header">
        <div className="logo">
            <img src={reactlogo} alt="React logo" className="logo-img" />
            <h3 className="logo_name">ReactFacts</h3>
        </div>

        <div className="toggle">
            <p className="label">Light</p>
            <label className="switch">
                <input 
                    type="checkbox"
                    checked={darkMode} 
                    onChange={toggleMode}
                />
                <span className="slider"></span>
            </label>
            <p className="label">Dark</p>
        </div>

    </header>

  );
}
