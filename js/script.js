
  // document.getElementById("membershipForm").addEventListener("submit", async function (e) {
  //   e.preventDefault();

  //   const form = e.target;
  //   const formData = new FormData(form);

  //   try {
  //     const response = await fetch("https://script.google.com/macros/s/AKfycbxZm9orCtd6YITb9tcdBsV5sv3mGAsQf_YA6nSWb1mH0la3U9TR0oBqw7nKMU7fimEI3A/exec", {
  //       method: "POST",
  //       body: formData
  //     });

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       alert("✅ সফলভাবে সাবমিট হয়েছে!");
  //       window.open(result.pdfUrl || result.photoUrl, "_blank");
  //     } else {
  //       alert("⚠️ সমস্যা হয়েছে: " + result.message);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("❌ ফর্ম পাঠাতে সমস্যা হয়েছে।");
  //   }
  // });

  function doPost(e) {
  try {
    const folder = DriveApp.getFolderById("YOUR_FOLDER_ID");

    const formDataBlob = e.postData.contents;
    const boundary = e.postData.type.match(/boundary=([^;]+)/)[1];

    const rawData = Utilities.parseMultipart(formDataBlob, boundary);

    const photoBlob = rawData.photo;
    const nidBlob = rawData.nid;

    if (!photoBlob || !nidBlob) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "ছবি অথবা NID পাওয়া যায়নি।"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const photoFile = folder.createFile(photoBlob).setName("Photo_" + Date.now());
    const nidFile = folder.createFile(nidBlob).setName("NID_" + Date.now());

    const photoUrl = photoFile.getUrl();
    const nidUrl = nidFile.getUrl();

    // Sheet এবং PDF creation আগের মতোই...

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      photoUrl: photoUrl,
      nidUrl: nidUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}


