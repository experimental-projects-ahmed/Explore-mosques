
document.addEventListener("DOMContentLoaded", function () {

    // تحديد التاريخ تلقائيًا

    const dateField = document.getElementById("date");

    const today = new Date();

    dateField.value = today.toLocaleDateString("ar-EG", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    // توليد التقرير وتحويله إلى صورة أو نص

    document.getElementById("generate-report").addEventListener("click", function () {

        const reportContainer = document.getElementById("report-container");

        const reportContent = document.getElementById("report-content");

        

        // إنشاء التقرير النصي بتنسيق جميل

        const reportText = `

📌 *تقرير تقييم المسجد* 🕌

📅 *التاريخ:* ${dateField.value}

🏛 *اسم المسجد:* ${document.getElementById("mosque-name").value}

🏛 *نوع المصلى:* ${document.getElementById("mosque-type").value}

📍 *العنوان:* ${document.getElementById("mosque-address").value}

👤 *اسم المُقيِّم:* ${document.getElementById("evaluator").value}

📋 *حالة المسجد:*

🔹 *السجاد:* ${document.getElementById("carpet").value}

🔹 *المراوح والتكييفات:* ${document.getElementById("fans").value}

🔹 *السقف:* ${document.getElementById("ceiling").value}

🔹 *الحوائط:* ${document.getElementById("walls").value}

🔹 *الحمامات:* ${document.getElementById("toilets").value}

🔹 *الميضة:* ${document.getElementById("ablution").value}

🔹 *الشبابيك:* ${document.getElementById("windows").value}

🔹 *المصاحف:* ${document.getElementById("qurans").value}

🔹 *الجزامات:* ${document.getElementById("shoe-racks").value}

🛠 *المرافق المتاحة:*

${document.getElementById("vacuum").checked ? "✅ مكنسة كهربائية" : "❌ مكنسة كهربائية"}

${document.getElementById("ladder").checked ? "✅ سلم" : "❌ سلم"}

${document.getElementById("blower").checked ? "✅ بلور" : "❌ بلور"}

📌 *تم إنشاء التقرير تلقائيًا بواسطة نظام تقييم المساجد*.

        `;

        // عرض التقرير بشكل أنيق في الصفحة

        reportContent.innerHTML = reportText.replace(/\n/g, "<br>");  

        reportContainer.style.display = "block";

        // تفعيل زر النسخ

        document.getElementById("copy-text").addEventListener("click", function () {

            navigator.clipboard.writeText(reportText).then(() => {

                alert("✅ تم نسخ التقرير إلى الحافظة!");

            });

        });

        // توليد صورة بجودة عالية

        html2canvas(reportContainer, { scale: 3, useCORS: true }).then(canvas => {

            let link = document.createElement("a");

            link.download = "تقرير_المسجد.png";

            link.href = canvas.toDataURL("image/png");

            link.click();

        });

    });

});
                  
