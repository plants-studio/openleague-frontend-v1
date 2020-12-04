export const getDeadline = (applicationDeadline: number) => {
  var diffDate_1 = new Date(applicationDeadline);
  var diffDate_2 = new Date();

  diffDate_1 = new Date(
    diffDate_1.getFullYear(),
    diffDate_1.getMonth() + 1,
    diffDate_1.getDate(),
  );
  diffDate_2 = new Date(
    diffDate_2.getFullYear(),
    diffDate_2.getMonth() + 1,
    diffDate_2.getDate(),
  );

  var diff = diffDate_1.getTime() - diffDate_2.getTime();
  diff = Math.ceil(diff / (1000 * 3600 * 24));
  return diff;
};

// TODO 달이나 일 앞에 붙은 0 제거하기
export const getLeagueSchedule = (
  leagueStartDay: string,
  leagueEndDay: string,
) => {
  const startDayArray = leagueStartDay.split('-');
  const endDayArray = leagueEndDay.split('-');
  if (leagueStartDay === leagueEndDay) {
    const schedule = startDayArray[1] + '월' + startDayArray[2] + '일';
    return schedule;
  } else {
    const schedule = `${startDayArray[1]}월 ${startDayArray[2]}일 ~ ${endDayArray[1]}월 ${endDayArray[2]}일`;
    return schedule;
  }
};

export const getPercentage = (
  applicant: number,
  teamReqMemCnt: number,
  teamMin: number,
) => {
  return (applicant / (teamReqMemCnt * teamMin)) * 100;
};

export const getPlaceType = (placeType: string) => {
  if (placeType === 'online') return '온라인';
  else return '오프라인';
};
