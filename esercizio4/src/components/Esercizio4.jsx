export default function Esercizio4() {
    const companies = [
      {
        name: "Google",
        url: "https://google.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png",
      },
    ];

    return (
        <>
          <h3 className="d-flex justify-content-center pt-5">Esercizio 3-4</h3>
    <div className="d-flex justify-content-center pt-5 ">
    
        
    
            <div className="card mx-5" style={{ width: "18rem" }}>
              <a href="https://google.com" target="_blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                  className="card-img-top"
                  alt="Google"
                />
              </a>
              <div className="card-body text-center">
    <p className="card-text">Google</p>
              </div>
            </div>
          </div>
        </>
      );
    }