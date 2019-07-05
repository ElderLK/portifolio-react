import React, { Component } from 'react';
export default class About extends Component {

  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    return age_now;
  }


  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>A meu respeito</h2>
              <p>Tenho {this.calculate_age('02-29-1992')} anos de idade. Graduado em Ciência da Computação, técnico mecânico e estudante de automação.
              Aficionado em tecnologia Serveless, Futebol e Rock in Roll. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contato</h2>
                  <p className="address">
                    {/* <span>Jonathan Doe</span><br /> */}
                    <span>Capão Raso<br />
                      Curitiba, Paraná
                    </span><br />
                    {/* <span>(123)456-7890</span><br /> */}
                    <span>ediluik@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}