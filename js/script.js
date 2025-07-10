
  document.getElementById("membershipForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyKw_7Pz_QNPRScto3IIFXPlvqv6xIpplyh8qk-HqDPfymgAi_7_OeRigOQs9q0t5M/exec", {
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

