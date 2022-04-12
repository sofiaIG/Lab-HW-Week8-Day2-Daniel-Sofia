import React, {useState} from "react";

export const useModal =()=>{
    const [isModalOpen, setIsModalOpen] = useState(true);

    const getCurrentStatus =()=>{
        return isModalOpen
    }

    const changeCurrentStatus =() =>{
        setIsModalOpen(!isModalOpen);
        }
    return{getCurrentStatus, changeCurrentStatus}
}

export const useDarkMode =()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const getCurrentStatus =()=>{
        return isDarkMode;
    }

    const changeCurrentStatus =() =>{
        setIsDarkMode(!isDarkMode);
        }
    return{getCurrentStatus, changeCurrentStatus}
}

