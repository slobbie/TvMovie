export const makeImgePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;
};
// format 이 있으면 포맷을 쓰고 없으면 오리지널을 표기
// id 는 이미지 아이디
