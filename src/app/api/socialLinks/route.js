import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import socialLinks from "../constant/socialLinks";


export async function POST(NextRequest,NextResponse){

try {
    


console.log(NextRequest.json())

 return NextResponse.json({"page":"sociallink","data":NextRequest.json()})

} catch (error) {
    console.log(error)
    
}




}