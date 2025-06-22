const form = document.getElementById("membershipForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxZm9orCtd6YITb9tcdBsV5sv3mGAsQf_YA6nSWb1mH0la3U9TR0oBqw7nKMU7fimEI3A/exec", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("✅ ফর্ম সফলভাবে সাবমিট হয়েছে! PDF তৈরি হয়েছে।");
      window.open(result.pdfUrl, "_blank");
    } else {
      alert("⚠️ সমস্যা হয়েছে! আবার চেষ্টা করুন।");
    }
  } catch (error) {
    console.error("❌ Error:", error);
    alert("❌ সাবমিট ব্যর্থ হয়েছে।");
  }
});


