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
                <h3>Wiser Educação</h3>
                <p className="info">Analista de Sistemas / Programador Web <span>•</span> <em className="date">Jul 2017 - Presente</em></p>
                <p>
                 Desenvolvimento e manutenção de sistema acadêmico. <br />
                 <strong>CRM Salesforce </strong> (Apex, Visualforce, Process builder, workflow, regra de validação, SOQL). <br />
                 <strong> Plataforma Online </strong> (PHP, Laravel, Yii2, HTML, CSS,
                  JavaScript, Ajax, React, Pub/Sub, Docker, Docker Compose, Cloud
                  functions(GCP), MySQL, REST e SOAP)..
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>SHL Logística</h3>
                <p className="info">Estágio de Analista de Sistemas <span>•</span> <em className="date">Jul 2016 - Jun 2017</em></p>
                <p>
                  Desenvolvimento e manutenção de sistema <b>WMS</b> (PHP, HTML, CSS e JavaScript), Integração com sistemas terceiros utilizando REST e SOAP, Configuração de servidor Linux.
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
            <p>Dentre as principais habilidades adquiridas.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>PHP</em></li>
                <li><span className="bar-expand illustrator" /><em>APEX</em></li>
                <li><span className="bar-expand wordpress" /><em>NODEJS</em></li>
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