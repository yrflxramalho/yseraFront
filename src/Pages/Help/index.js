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

      <ul>
        <li>
        Hydrogen bond prediction considers a donor/aceptor atom pair with the distance between A and D is less or equal to 3.1 Å. Donors: main chain NH; Arg NE, NH1, NH2; Asn ND2; His NE2, ND1; Ser OG; Tyr OH; Cys SG; Thr OG1; Gln NE2; Lys NZ; Trp NE1; Acceptors: main chain C; Asn OD1; Gln OE1; Met SD; Asp OD1, OD2; Glu OE1, OE2; Ser OG; Thr OG1; His ND1; Tyr OH
        </li>
        <li>
        Van der Waals interactions are predicted by simply measuring the distance between the surface of two atoms. The distance threshold is 0.5 Å. Only Carbon-Carbon (C-C) or Carbon-Sulfur (C-S) atom pairs are considered for a valid VDW interaction and their distance is calculated ******.
        </li>
        <li>
        Disulfide bridges (SBOND) since are covalent bonds, are found with a very constant distance. RING-2.0 identifies disulfide bridges when the distance between SG atoms of cysteine pairs is lower or equal to 2.5 (or 3.0 relaxed) Å.
        </li>
        <li>
        Salt bridges (IONIC) occur between residues with opposite charges. A ionic interaction is possible if the distance between the mass centers of the charged groups are less or equal to 4.0 (or 5.0 relaxed) Å.
        </li>
        <li>
        π-π stacking (PIPISTACK) interactions are evaluated between aromatic residues (His, Tyr, Trp, Phe). After choosing one ring as reference plane, we consider the right-angled triangle with one cathetus, p, lying in the defined plane and the hypotenuse corresponding to the distance vector connecting the barycenter of the two rings. The p side, the other cathetus, n, and the angle ϑ between the two ring planes define 4 different types of orientation. Parallel (P), Lateral (L), Normal (N), Tilted Edge to Face (T-EF), Tilted Face to Edge (T-FE). An interaction is returned only of the distance of the two ring barycenters is 6.5 (or 7.0 relaxed) Å.  
        </li>
        <li>
        π-cation (PICATION) interactions are possible between positively charged amino acids (Arg, Lys) and an aromatic side chain. Histidine is not considered because it can act both as cation and as a π-system, depending on its protonation state. The conditions necessary to define this interaction are two: i) the distance between the mass center of the charged group and any atom of the π-system must be lower than 5.0 (or 7.0 relaxed) Å and ii) the angle between the distance vector and the ring plane has to guarantee that the mass center of the cation lies above (or below) the ring area. By this, if the approximated average ring radius is 1.8 Å, than the angle is calculated with the inverse sine of the distance vector divided by the ring radius. Moreover, RING-2.0 calculates Arginine orientation according to the dihedral angle defined between the plane of the aromatic ring and the cationic guanidine group. Only parallel (P), oblique (L), orthogonal (N) orientations are allowed.
        </li>
      </ul>

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