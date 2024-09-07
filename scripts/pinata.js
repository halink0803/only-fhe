const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhY2NkZjc0YS02M2RmLTQyZWQtOTA1Ny1kZTRmOGU0OGUzNzciLCJlbWFpbCI6ImhhbGluazA4MDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRlNGRjMjgyMGY3ZWJhYWUxZDdlIiwic2NvcGVkS2V5U2VjcmV0IjoiODY5N2Y1NjNmYzk4NmFiMmNiMTJjN2RhZjZiNjA5OTQyZTNjYTk0MzNlOGI4YTA2YWUxMGMzN2I4ZGUwMThiMCIsImlhdCI6MTcyNTUyOTk5Nn0.Z2gKgxfpZtGoOMvlz1HkSwCk5BjCX3SHrrsnPQKP-vA

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "";

    const file = fs.createReadStream(src)
    formData.append('file', file)

    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
pinFileToIPFS()
