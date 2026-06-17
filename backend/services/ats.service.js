export const getATSScore = (
  data
) => {
  let score = 0;

  if (
    data.name &&
    data.name.length > 2
  )
    score += 10;

  if (data.email)
    score += 10;

  if (data.phone)
    score += 10;

  if (
    data.skills?.length >= 5
  )
    score += 20;

  if (
    data.education?.length
  )
    score += 20;

  if (
    data.experience?.length
  )
    score += 20;

  if (
    data.skills?.length >= 10
  )
    score += 10;

  return Math.min(
    score,
    100
  );
};