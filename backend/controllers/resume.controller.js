import { buildPDF } from "../services/pdf.service.js";
import { getATSScore } from "../services/ats.service.js";

export const generateResume = async (
  req,
  res
) => {
  buildPDF(req.body, res);
};

export const calculateATS = (
  req,
  res
) => {
  const score = getATSScore(req.body);

  res.json({
    success: true,
    score
  });
};