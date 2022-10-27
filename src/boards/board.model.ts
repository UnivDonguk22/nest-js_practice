/*
    게시글 생성 API를 위한 게시글 모델구성
*/
export interface Board{
    id: string;
    title: string;
    description: string;
    status: BoardStatus;

}
 
// enumeration을 이용해 공개, 비공개 게시글 설정
export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}