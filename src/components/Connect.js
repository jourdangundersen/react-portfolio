import React from 'react'

function Connect() {
    return (

        <div className="col-md-6 col-sm-12">
            <h2 className="p-4">Connect </h2>

            <p>
                <img src="assets/images/email.png" alt="Email Icon" width="30px" className="m-2" /> 
            Email: <a href="mailto:jourdancgundersen@gmail.com"> jourdancgundersen@gmail.com</a>
            </p>
            <p>
                <img src="assets/images/gh.png" alt="GitHub Icon" width="30px" className="m-2" />  Git Hub: <a
                    href="https://github.com/jourdangundersen" target="_blank" rel="noreferrer"> jourdangundersen</a>
            </p>
            <p>
                <img src="assets/images/li.png" alt="Linked In Icon" width="30px" className="m-2" /> 
            LinkedIn: <a href="https://www.linkedin.com/in/jourdan-gundersen-633487104/" target="_blank" rel="noreferrer"> linkedin.com/in/jourdangundersen</a>
            </p>
        </div>


    )
};

export default Connect;
