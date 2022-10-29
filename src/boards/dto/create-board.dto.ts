import {IsNotEmpty } from "class-validator";

// 클라이언트 request 객체
// Validation Pipe 사용
export class CreateBoardDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}