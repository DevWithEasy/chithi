import React from 'react'
import { ImSpinner2 } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

export default function CheckName({status}) {
 if(status === 'yes'){
    return <FaCheckCircle className="absolute right-2 bottom-3 text-green-500" />
 }else if(status === 'no'){
    return <MdError className="absolute right-2 bottom-3 text-red-500" />
 }else if(status === 'loading'){
    return <ImSpinner2 className="absolute right-2 bottom-3 animate-spin text-purple-600" />
 }else{
    return null
 }
}
