import { db } from "../../config";
import { getExcelFile } from "../../utils/excel";
import fs from 'fs'
export const getDataFile = async () => {

    try{

        const users = await db.users.findMany();
        const excelFile = await getExcelFile('excelUserFile', users);
    
        if(!excelFile) {
    
            throw new Error('something went wrong')
    
        } 
       
    
        return {
            excelFile,  
            deleteFile: () => {
                if (excelFile && excelFile) {
                    fs.unlinkSync(excelFile);  
                }
            }
        };
    }catch(error){
        console.error("Error:", error);
        throw new Error("Error");
    }

    
};
