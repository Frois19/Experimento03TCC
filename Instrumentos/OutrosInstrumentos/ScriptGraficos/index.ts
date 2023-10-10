import * as XLSX from 'xlsx';
import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import * as dateFns from 'date-fns'
import dotenv from "dotenv";
import * as R from 'ramda'

dotenv.config();

const areAllNullOrEmpty = (values: string[]) => {
    return values.every((value) => R.isNil(value) || R.isEmpty(value));
}

export const convertDateObjectToBRDateString = (data: Date): string => {
    return dateFns.format(data, "dd/MM/yyyy HH:mm:ss")
}

export const convertDateCelltToBRDateString = (date: any) => {
    const dateParsed = typeof date === "number" ? date : XLSX.SSF.parse_date_code(date);
    const dateFormatted = new Date((dateParsed - (25567 + 1)) * 86400 * 1000);
    const dateAdjusted = dateFns.addHours(dateFormatted, 3);
    return convertDateObjectToBRDateString(dateAdjusted)
}

export const convertWork = (input: string): string => {
    switch (input) {
        case 'Nunca atuei na área':
            return 'Nunca';
        case 'Atuei/atuo como Desenvolvedor (Fullstack)':
            return 'Fullstack';
        case 'Atuei/atuo como Desenvolvedor (Back-end)':
            return 'Back-end';
        case 'Atuei/atuo como Desenvolvedor (Front-end)':
            return 'Front-end';
        case 'Atuei/atuo como Suporte de TI':
            return 'Suporte';
        case 'Atuei/atuo como DevOps':
            return 'DevOps';
        default:
            return 'Outra';
    }
};


function convertXlsxToCsv(inputXlsxFileName: string, outputJsonFileName: string, outputCsvFileName: string, columnsToInclude: string[]) {

    const workbook = XLSX.readFile(inputXlsxFileName);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data: any[] = XLSX.utils.sheet_to_json(sheet, { header: 'A' }).map((row: any, index: number) => {
        const filteredRow: any = {
            Id: row['A'],
            HoraInicio: index == 0 ? row['B'] : convertDateCelltToBRDateString(row['B']),
            HoraFinal: index == 0 ? row['C'] : convertDateCelltToBRDateString(row['C']),
            Total: row['F'],
            Nome: row['L'],
            Periodo: row['U'],
            PossuiExperiencia: convertWork(row['X']),
            TempoExperiencia: row['AA'],
            PossuiConhecimentoIaC: row['AD'],
            NivelConhecimento: row['AG'],
            PontuacaoQuestoesFaceis: row['AL'] + row['AO'] + row['AR'],
            PontuacaoQuestoesMedias: columnsToInclude.includes('AW') ? row['AU'] + row['AW'] + row['AZ'] : row['AU'] + row['AX'] + row['BA'],
            PontuacaoQuestoesDificies: columnsToInclude.includes('AW') ? row['BC'] + row['BF'] + row['BI'] : row['BD'] + row['BG'] + row['BJ'],
        };


        for (let i = 1; i <= 10; i++) {
            const columnKey = String(i);
            filteredRow[columnKey] = row[columnsToInclude[i + 9]];
        }

        return filteredRow;

    });

    data.shift();

    fs.writeFileSync(outputJsonFileName, JSON.stringify(data, null, 2));

    const csvWriter = createObjectCsvWriter({
        path: outputCsvFileName,
        header: [
            { id: 'Id', title: 'Id' },
            { id: 'PossuiConhecimentoIaC', title: 'PossuiConhecimentoIaC' },
            { id: 'HoraFinal', title: 'HoraFinal' },
            { id: 'HoraInicio', title: 'HoraInicio' },
            { id: 'Total', title: 'Total' },
            { id: 'Nome', title: 'Nome' },
            { id: 'Periodo', title: 'Periodo' },
            { id: 'PossuiExperiencia', title: 'PossuiExperiencia' },
            { id: 'TempoExperiencia', title: 'TempoExperiencia' },
            { id: 'NivelConhecimento', title: 'NivelConhecimento' },
            { id: 'PontuacaoQuestoesFaceis', title: 'PontuacaoQuestoesFaceis' },
            { id: 'PontuacaoQuestoesMedias', title: 'PontuacaoQuestoesMedias' },
            { id: 'PontuacaoQuestoesDificies', title: 'PontuacaoQuestoesDificies' },
            { id: '1', title: '1' },
            { id: '2', title: '2' },
            { id: '3', title: '3' },
            { id: '4', title: '4' },
            { id: '5', title: '5' },
            { id: '6', title: '6' },
            { id: '7', title: '7' },
            { id: '8', title: '8' },
            { id: '9', title: '9' },
            { id: '10', title: '10' },
        ],
    });

    csvWriter.writeRecords(data)
        .then(() => console.log('Formatted data converted and saved as', outputCsvFileName))
        .catch((error) => console.error('Error writing CSV file:', error));
}



const columnsToIncludeCdk = [
    'A', 'B', 'C', 'F', 'L', 'U', 'X', 'AA', 'AD', 'AG',
    'AL', 'AO', 'AR', 'AU', 'AX', 'BA', 'BD', 'BG', 'BJ',
    'BM',
];

const columnsToIncludeTerraform = [
    'A', 'B', 'C', 'F', 'L', 'U', 'X', 'AA', 'AD', 'AG',
    'AL', 'AO', 'AR', 'AU', 'AW', 'AZ', 'BC', 'BF', 'BI',
    'BL',
];


const main = () => {

    const pathDataCDK = process.env.PATH_DATA_CDK_TO_INDEX as string;
    const pathDataTerraform = process.env.PATH_DATA_TERRAFORM_TO_INDEX as string;

    const outputJsonCDK = process.env.PATH_OUTPUT_JSON_FILE_CDK_TO_INDEX as string;
    const outputJsonTerraform = process.env.PATH_OUTPUT_JSON_FILE_TERRAFORM_TO_INDEX as string;

    const outputCSV_CDK = process.env.PATH_OUTPUT_CSV__FILE_CDK_TO_INDEX as string;
    const outputCSV_Terraform = process.env.PATH_OUTPUT_CSV_FILE_TERRAFORM_TO_INDEX as string;


    if (areAllNullOrEmpty([pathDataCDK, pathDataTerraform, outputJsonCDK, outputJsonTerraform, outputCSV_CDK, outputCSV_Terraform])) {
        console.log("Variaveis de ambientes nao definidas")
        return
    } else {
        convertXlsxToCsv(pathDataCDK, outputJsonCDK, outputCSV_CDK, columnsToIncludeCdk);
        convertXlsxToCsv(pathDataTerraform, outputJsonTerraform, outputCSV_Terraform, columnsToIncludeTerraform);
    }

}

main();



