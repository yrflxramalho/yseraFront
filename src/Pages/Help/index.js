import React from 'react';

import './styles.css'

function Help() {
  return (
    <div className="container-help">
      <div className="boxhelp">
      <h1><b>Ysera: A web server for interatomic and interatomic interactions prediction in protein structures</b></h1>

      <h2><b>Introduction</b></h2>

      <p style={{fontSize: '12pt'}}>
        Ysera is a server which predictics interactions between atoms of molecules of interest, 
        in macromolecular structures. These molecules include proteins, nucleic acids, carbohydrates 
        as well as small molecules.; such as disulphide bonds, saline bridges, hydrogens bridges, aromatic- aromatic interactions,
        aromatic-sulphur interactions anion and cation - π interactions within a protein or between proteins in a complex thought a pdb file. 
        Observation: For NMR structure only the first model is considered.
      </p>

      <h2><b>Interaction Type definition</b></h2>

      <table>
        <thead style={{backgroundColor:'#DDD'}}>
          <tr>
            <th>Interaction Type</th>
            <th>Residues</th>
            <th>Distance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Saline Bridge</th>
            <th>GLU, ASP, ARG, LYS</th>
            <th>Up to 4 Å</th>
          </tr>
          <tr>
            <th>Hydrogen Bonding</th>
            <th>ALL</th>
            <th>2,7 a 3,1 Å</th>
          </tr>
          <tr>
            <th>π-Stacking</th>
            <th>TYR, TRP, PHE</th>
            <th>
              Up to 7,2 Å(T-shaped: 50 ° to 70 ° angle; Intermediate conformation: 30 ° angles; 50 °; Parallel conformations: angles less than 30 °)
            </th>
          </tr>
          <tr>
            <th>Cation-Aryl Interactions</th>
            <th>HIS, TYR, TRP, PHE, ARG, LYS</th>
            <th>
              Up to 6 Å
            </th>
          </tr>
          <tr>
            <th>Anion-Aryl Interactions</th>
            <th>HIS, TYR, TRP, PHE, GLU, ASP</th>
            <th>
              Up to 3,5 Å
            </th>
          </tr>
          <tr>
            <th>Van Der Waals Interactions</th>
            <th>TODOS</th>
            <th>
              Up to 3,2 Å
            </th>
          </tr>
          <tr>
            <th>Disulfide bonds</th>
            <th>CYS</th>
            <th>
              Up to 2,2 Å
            </th>
          </tr>
        </tbody>
      </table>

      <h2><b>Program Output</b></h2>
      <p style={{fontSize: '12pt'}}>
        The results are displayed as a counters for which interaction type predicted, as well, a full relatory of all interaction predict can be downloaded as text file, in the relatory the first column consists of the type of interaction, the second in the type of atom according to the PDB nomenclature, the third in the amino acid residue, fourth in the amino acid chain, the fifth in the chain identifier, the others the same information for the second atom that is promoting the bond and the last one the distance.
      </p>

      <h2><b>Contact Us</b></h2>
      <ul style={{fontSize: '12pt'}}>
        <li>
          Profa. Dra. Thaís Gaudencio do Rêgo Coordinator of ARIA (Laboratório de Aplicações de Inteligência Artificial - UFPB)<br/>
          E-mail: gaudenciothais@gmail.com
        </li>
        <li>
          Annie Elisabeth Beltrão de Andrade, Master Student of Informatics Postgraduate Program at UFPB<br/>
          E-email: annieebeltrao@gmail.com
        </li>
        <li>
        Flávio Eduardo Souto Maior Serrano, undergraduate Student of Computer Science at UFPB
          <br/>
          E-mail: flaviosms@gmail.com
        </li>
        <li>
          Alielson Ferreira Pequeno, undergraduate Student of Computer Science at UFPB
          <br/>
          E-mail: alielson_pequeno@hotmail.com
        </li>
        <li>
          Yuri Félix Ramaho de Oliveira, undergraduate Student of Computer Science at UFPB
          <br/>
          E-mail: yurifelix.yf@gmail.com
        </li>
      </ul>



      </div>
    </div>
  );
}

export default Help;