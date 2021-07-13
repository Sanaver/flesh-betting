import { FLASH_BETTING_API_URI, FLASH_BETTING_WINDOWS_FILE_NAME, FLASH_BETTING_MAC_FILE_NAME } from '../constants';

export const handleWindowsDownload = async () => {
  const response = await fetch(`${FLASH_BETTING_API_URI}download?type=exe`);
  downloadFile(response, FLASH_BETTING_WINDOWS_FILE_NAME);
};

export const handleMacDownload = async () => {
  const response = await fetch(`${FLASH_BETTING_API_URI}download?type=dmg`);
  downloadFile(response, FLASH_BETTING_MAC_FILE_NAME);
};

export const downloadFile = async (response, filename) => {
  if (response.status !== 404) {
    const blob = await response.blob();

    // 2. Create blob link to download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);
  }
};
