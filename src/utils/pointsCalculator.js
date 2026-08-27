export const CONDITION_MULTIPLIER = {
  Excellent: 1,
  Good: 0.8,
  Damaged: 0.6,
  Scrap: 0.3,
};

export function calculatePoints({
  basePoints,
  condition,
  firstRecycle = false,
  streak = 0,
  weekend = false,
}) {
  let points = Math.round(
    basePoints * (CONDITION_MULTIPLIER[condition] || 1)
  );

  const bonuses = [];

  if (firstRecycle) {
    points += 20;
    bonuses.push("+20 First Recycle");
  }

  if (streak >= 7) {
    points += 15;
    bonuses.push("+15 Streak");
  }

  if (weekend) {
    points += 10;
    bonuses.push("+10 Weekend");
  }

  return {
    total: points,
    bonuses,
  };
}