import {  IoMusicalNote } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi"
import { MdCastForEducation } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { MdSlowMotionVideo } from "react-icons/md";

export const categories = [
  { id: 1, name: "Gamou", iconSrc: <FaMosque fontSize={30} /> },
  { id: 2, name: "Enseignement", iconSrc: <MdCastForEducation fontSize={30} /> },
  { id: 3, name: "Colisee de l'Eveil", iconSrc: <GiBookCover fontSize={30} /> },
  { id: 4, name: "Universite du Ramadan", iconSrc: <FaUniversity fontSize={30} /> },
  { id: 5, name: "Unicite de Dieu", iconSrc: <GiAngelOutfit fontSize={30} /> },
  { id: 6, name: "Conferences et Ziar", iconSrc: <IoMusicalNote fontSize={30} /> },
  { id: 7, name: "Reecoutes", iconSrc: <MdSlowMotionVideo fontSize={30} /> },
];
