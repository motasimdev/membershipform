
  document.getElementById("membershipForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwao9Fo_ygTQ7YXkUtXztEM58AhqxNaNK6FDYeWp1MsNFK7yAZyYZo6jgCRlnbldcM5xQ/exec", {
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

