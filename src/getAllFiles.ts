import fs from "fs";
import path from "path";
/**
 * Retrieves all files within a given folder path recursively.
 * @param folderPath - The path of the folder to retrieve files from.
 * @returns An array of strings representing the full file paths.
 */
export const getAllFiles = (folderPath: string) => {
  let response: string[] = [];
  //
  const allFilesAndFolders = fs.readdirSync(folderPath);
  allFilesAndFolders.forEach((file) => {
    const fullFilePath = path.join(folderPath, file);
    // if the filepath is for folder
    if (fs.statSync(fullFilePath).isDirectory()) {
      response = response.concat(getAllFiles(fullFilePath));
    } else {
      response.push(fullFilePath);
    }
  });
  return response;
};
