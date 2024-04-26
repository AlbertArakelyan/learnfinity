const getImageBase64 = (image: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (e.target) {
        resolve(e.target.result as string);
      }
    };

    fileReader.onerror = (e) => {
      reject(e);
    };

    fileReader.readAsDataURL(image);
  });

export default getImageBase64;
