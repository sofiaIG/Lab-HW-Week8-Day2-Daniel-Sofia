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

