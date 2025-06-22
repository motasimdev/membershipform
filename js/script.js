
  document.getElementById("membershipForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxZm9orCtd6YITb9tcdBsV5sv3mGAsQf_YA6nSWb1mH0la3U9TR0oBqw7nKMU7fimEI3A/exec", {
        method: "POST",
        body: formData
      });

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

