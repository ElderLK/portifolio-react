import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Universidade Tecnológica Federal do Paraná</h3>
                <p className="info"><a href="http://www.utfpr.edu.br/estrutura-universitaria/pro-reitorias/prograd/catalogo-de-cursos-da-utfpr/ponta-grossa/ciencia-da-computacao" target="_black">
                  Bacharelado em Ciência da Computação </a><span>•</span> <em className="date">Junho 2017</em></p>
                <p>
                  O curso oferece uma boa base matemática e raciocínio lógico. Tem enfoque para desenvolver programas e sistemas de informática, desde o planejamento do projeto até a implantação e gerenciamento do software.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Universidade Tecnológica Federal do Paraná</h3>
                <p className="info"><a href="http://www.utfpr.edu.br/estrutura-universitaria/pro-reitorias/prograd/catalogo-de-cursos-da-utfpr/curitiba/tecnologia-em-automacao-industrial" target="_black">
                  Tecnologia em Automação Industrial </a><span>•</span> <em className="date">Previsão ~ Junho 2021</em></p>
                <p>
                  Conta com disciplinas de Matemática, Física, Eletroeletrônica e Informática. Capacita o estudante a desenvolver, implementar e manter sistemas de controle e automação industrial com o objetivo de otimizar os processos.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>SENAI PR</h3>
                <p className="info"><a href="http://www.senaipr.org.br/" target="_black">
                  Técnico Mecânico Industrial </a><span>•</span> <em className="date">Junho 2010</em></p>
                <p>
                  O profissional tem uma base de conhecimento dos componentes, processos e dinâmicas que envolvem o funcionamento das máquinas.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Awesome Design Studio</h3>
                <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Super Cool Studio</h3>
                <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}