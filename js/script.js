document
  .getElementById("membershipForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJ6XLYtBpxQk_g-QxfA4NlV1vIqhe5uJlGoGKg_KiptXLCQeL-PIhqDvrWX35ZzOv1mw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ সফলভাবে সাবমিট হয়েছে!");
        window.open(result.pdfUrl || result.photoUrl, "_blank");
      } else {
        alert("⚠️ সমস্যা হয়েছে: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ ফর্ম পাঠাতে সমস্যা হয়েছে।");
    }
  });


  // ============= pic drive e jay na bt data sheet e jay

// let photoUrl = "";
// let nidUrl = "";

// if (e.files && e.files.photo) {
//   let photoFile = folder.createFile(e.files.photo);
//   photoFile.setName("Photo_" + Date.now());
//   photoUrl = photoFile.getUrl();
// }

// if (e.files && e.files.nid) {
//   let nidFile = folder.createFile(e.files.nid);
//   nidFile.setName("NID_" + Date.now());
//   nidUrl = nidFile.getUrl();
// }
