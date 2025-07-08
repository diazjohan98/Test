import "./App.css";
import imglogo from "./assets/Logo.svg";

function App() {
  return (
    <div role="container" className="container-principal">
      <header className="header">
        <div className="image-logo" alt="Logo">
          <img src={imglogo} alt="logo" />
        </div>
        <h1 className="text-title">Interested in our business pricing?</h1>
        <h2 className="text-subtitle">
          Fill out the form to view details and we'll contact you as soon as
          possible.
        </h2>
      </header>
      <main className="main">
  <div className="form-container">
    <form className="form-grid">
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Full Name" />
      </div>
      <div className="form-group">
        <label>Company Email</label>
        <input type="email" placeholder="company@gmail.com" />
      </div>
      <div className="form-group">
        <label>Company Size</label>
        <select>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <select>
          <option>Building Landing pages</option>
        </select>
      </div>
      <div className="form-group full-width">
        <label>Message</label>
        <textarea rows="5">50-100 employees</textarea>
      </div>
      <div className="form-group full-width">
        <button type="submit">Contact Sales</button>
      </div>
    </form>
  </div>
</main>
      <footer className="footer">
        <div></div>
      </footer>
    </div>
  );
}

export default App;
