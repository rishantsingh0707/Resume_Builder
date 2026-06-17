import PDFDocument from "pdfkit";

export const buildPDF = (
  data,
  res
) => {

  const doc =
    new PDFDocument({
      margin: 40
    });

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=resume.pdf"
  );

  doc.pipe(res);

  doc
    .fontSize(26)
    .text(data.name, {
      align: "center"
    });

  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .text(data.email, {
      align: "center"
    });

  doc.text(data.phone, {
    align: "center"
  });

  doc.moveDown();

  doc
    .fontSize(18)
    .text("Education");

  doc.moveDown(0.5);

  data.education.forEach(
    (edu) => {
      doc
        .fontSize(12)
        .text(
          `${edu.degree}`
        );

      doc.text(
        `${edu.college}`
      );

      doc.moveDown(0.3);
    }
  );

  doc.moveDown();

  doc
    .fontSize(18)
    .text("Experience");

  doc.moveDown(0.5);

  data.experience.forEach(
    (exp) => {
      doc
        .fontSize(12)
        .text(exp.role);

      doc.text(
        exp.company
      );

      doc.moveDown(0.3);
    }
  );

  doc.moveDown();

  doc
    .fontSize(18)
    .text("Skills");

  doc.moveDown(0.5);

  doc.text(
    data.skills.join(" • ")
  );

  doc.end();
};