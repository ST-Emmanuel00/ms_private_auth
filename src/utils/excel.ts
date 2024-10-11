import XlsxPopulate from "xlsx-populate";

export const getExcelFile = async (sheetName: string, data: any) => {


    try {
        const workbook = await XlsxPopulate.fromBlankAsync();
        if (data && data.length > 0) {
            const sheet = workbook.addSheet(sheetName);

            const columnHeaders = Object.keys(data[0]);

            columnHeaders.forEach((header, index) => {
                sheet.cell(1, index + 1).value(header);
            });

            data.forEach((row: any, rowIndex: any) => {
                Object.values(row).forEach((value, colIndex) => {
                    sheet.cell(rowIndex + 2, colIndex + 1).value(value as any);
                });
            });

            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');

            const fileName = `${year}-${month}-${day}.xlsx`;
            await workbook.toFileAsync(fileName);

            return fileName

        }
    } catch (error) {
        console.error("No data found for sheet", error);
        throw new Error("No data found for sheet");
    }


}

