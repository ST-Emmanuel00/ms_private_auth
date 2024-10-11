import { db } from "../../config";
import { getExcelFile } from "../../utils/excel";
import fs from 'fs'
export const getDataFile = async () => {

    try{

        const roles = await db.roles.findMany();
        const excelFile = await getExcelFile('excelRoleFile', roles);
    
        console.log(excelFile);
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
